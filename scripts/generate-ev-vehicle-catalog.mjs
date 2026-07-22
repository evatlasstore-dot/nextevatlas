import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { mkdirSync } from "node:fs";

const [inputPath, outputPath = "data/ev-vehicles.ts"] = process.argv.slice(2);

if (!inputPath) {
  throw new Error("Usage: node scripts/generate-ev-vehicle-catalog.mjs <ev-database.json> [output.ts]");
}

const rawVehicles = JSON.parse(readFileSync(inputPath, "utf8"));
if (!Array.isArray(rawVehicles)) throw new Error("The supplied EV database must be a JSON array.");

const featuredVisuals = {
  Tesla: { src: "/images/simulator/vehicles/tesla-model-y.png", model: "Model Y" },
  Dacia: { src: "/images/simulator/vehicles/dacia-spring.png", model: "Spring" },
  Renault: { src: "/images/simulator/vehicles/renault-megane-e-tech.png", model: "Mégane E-Tech" },
  BYD: { src: "/images/simulator/vehicles/byd-atto-3.png", model: "ATTO 3" },
  Peugeot: { src: "/images/simulator/vehicles/peugeot-e-208.png", model: "e-208" },
  Hyundai: { src: "/images/simulator/vehicles/hyundai-kona-electric.png", model: "KONA Electric" },
  BMW: { src: "/images/simulator/vehicles/bmw-ix1.png", model: "iX1" },
  "Mercedes-Benz": { src: "/images/simulator/vehicles/mercedes-eqa.png", model: "EQA" },
  Audi: { src: "/images/simulator/vehicles/audi-q4-e-tron.png", model: "Q4 e-tron" },
  Kia: { src: "/images/simulator/vehicles/kia-ev3.png", model: "EV3" },
  Volkswagen: { src: "/images/simulator/vehicles/volkswagen-id4.png", model: "ID.4" },
};

const featuredPalette = {
  Tesla: ["#1d394a", "#a7d879"],
  Dacia: ["#355c45", "#d6e9a8"],
  Renault: ["#344d63", "#b9d5b7"],
  BYD: ["#465448", "#d2ea9e"],
  Peugeot: ["#554d6a", "#c9d4f0"],
  Hyundai: ["#4c5f66", "#c8df9c"],
  BMW: ["#2c4159", "#b8d7ef"],
  "Mercedes-Benz": ["#3b4b53", "#c9d8d7"],
  Audi: ["#51444a", "#e2c4c8"],
  Kia: ["#3c5568", "#b7d9df"],
  Volkswagen: ["#35566d", "#b7d7ec"],
};

const fallbackPalettes = [
  ["#39584e", "#d5e6a8"],
  ["#48576d", "#bfd6ef"],
  ["#5d4d66", "#dfc6ea"],
  ["#5b5741", "#e8dca8"],
  ["#3e5b64", "#b7dfe0"],
  ["#594b43", "#e8c6aa"],
];

const popularBrandOrder = [
  "Tesla",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Kia",
  "Volkswagen",
  "BYD",
  "Hyundai",
  "Renault",
  "Peugeot",
  "Dacia",
];

const collator = new Intl.Collator("fr", { numeric: true, sensitivity: "base" });
const validNumber = (value) => typeof value === "number" && Number.isFinite(value) && value > 0;
const rounded = (value) => Math.round(value * 10) / 10;
const slug = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "") || "vehicle";
const formatNumber = (value) => Number.isInteger(value) ? String(value) : String(value).replace(".", ",");

const records = rawVehicles
  .map((vehicle, sourceIndex) => {
    const batteryKwh = vehicle?.battery?.useable_capacity_kwh;
    const maxAcKw = vehicle?.charging?.ac?.power_kw;
    if (!vehicle?.brand || !vehicle?.model || !validNumber(batteryKwh) || !validNumber(maxAcKw)) return null;

    return {
      sourceIndex,
      brand: String(vehicle.brand).trim(),
      model: String(vehicle.model).trim(),
      referenceVariant: String(vehicle.full_name || vehicle.variant || vehicle.model).trim(),
      batteryKwh: rounded(batteryKwh),
      maxAcKw: rounded(maxAcKw),
      maxDcKw: validNumber(vehicle?.charging?.dc?.max_power_kw) ? rounded(vehicle.charging.dc.max_power_kw) : null,
      rangeKm: validNumber(vehicle?.performance?.electric_range_km) ? Math.round(vehicle.performance.electric_range_km) : null,
      consumptionWhPerKm: validNumber(vehicle?.consumption?.evdb_real?.vehicle_consumption_wh_km)
        ? Math.round(vehicle.consumption.evdb_real.vehicle_consumption_wh_km)
        : null,
      acPort: typeof vehicle?.charging?.ac?.port === "string" ? vehicle.charging.ac.port : null,
      dcPort: typeof vehicle?.charging?.dc?.port === "string" ? vehicle.charging.dc.port : null,
    };
  })
  .filter(Boolean);

const groupedByBrand = new Map();
for (const record of records) {
  const brandModels = groupedByBrand.get(record.brand) || [];
  brandModels.push(record);
  groupedByBrand.set(record.brand, brandModels);
}

const brandNames = [...groupedByBrand.keys()].sort((left, right) => {
  const leftIndex = popularBrandOrder.indexOf(left);
  const rightIndex = popularBrandOrder.indexOf(right);
  if (leftIndex !== -1 || rightIndex !== -1) return (leftIndex === -1 ? 999 : leftIndex) - (rightIndex === -1 ? 999 : rightIndex);
  return collator.compare(left, right);
});

const catalog = brandNames.map((brandName, brandIndex) => {
  const configGroups = new Map();
  for (const record of groupedByBrand.get(brandName)) {
    const key = [record.model, record.batteryKwh, record.maxAcKw].join("|");
    const existing = configGroups.get(key);
    // Keep the first reference for stable data. The fields driving the AC calculation
    // are already identical within this group.
    if (!existing || (record.maxDcKw ?? -1) > (existing.maxDcKw ?? -1)) configGroups.set(key, record);
  }

  const modelConfigurationCounts = new Map();
  for (const record of configGroups.values()) {
    modelConfigurationCounts.set(record.model, (modelConfigurationCounts.get(record.model) || 0) + 1);
  }

  const modelOrdinal = new Map();
  const models = [...configGroups.values()]
    .sort((left, right) => {
      const nameDifference = collator.compare(left.model, right.model);
      if (nameDifference !== 0) return nameDifference;
      if (left.batteryKwh !== right.batteryKwh) return right.batteryKwh - left.batteryKwh;
      return right.maxAcKw - left.maxAcKw;
    })
    .map((record) => {
      const ordinal = (modelOrdinal.get(record.model) || 0) + 1;
      modelOrdinal.set(record.model, ordinal);
      const modelIsAmbiguous = modelConfigurationCounts.get(record.model) > 1;
      return {
        id: `${slug(brandName)}-${slug(record.model)}-${String(record.batteryKwh).replace(".", "-")}-${String(record.maxAcKw).replace(".", "-")}-${ordinal}`,
        model: record.model,
        displayModel: modelIsAmbiguous
          ? `${record.model} · ${formatNumber(record.batteryKwh)} kWh · ${formatNumber(record.maxAcKw)} kW AC`
          : record.model,
        referenceVariant: record.referenceVariant,
        batteryKwh: record.batteryKwh,
        maxAcKw: record.maxAcKw,
        maxDcKw: record.maxDcKw,
        rangeKm: record.rangeKm,
        consumptionWhPerKm: record.consumptionWhPerKm,
        acPort: record.acPort,
        dcPort: record.dcPort,
      };
    });

  const [colour, highlight] = featuredPalette[brandName] || fallbackPalettes[brandIndex % fallbackPalettes.length];
  const visual = featuredVisuals[brandName]
    ? {
        src: featuredVisuals[brandName].src,
        model: featuredVisuals[brandName].model,
        alt: `Visuel 3D indicatif de la gamme ${brandName} — ${featuredVisuals[brandName].model}`,
      }
    : null;

  return {
    id: slug(brandName),
    name: brandName,
    colour,
    highlight,
    visual,
    models,
  };
});

const output = `/*
 * Generated from the EV vehicle database supplied to EVAtlas.
 * Run: node scripts/generate-ev-vehicle-catalog.mjs <source.json>
 * The client catalogue intentionally keeps only vehicle identity and charging data.
 */

export type EvVehicleVisual = {
  src: string;
  model: string;
  alt: string;
};

export type EvVehicleModel = {
  id: string;
  model: string;
  displayModel: string;
  referenceVariant: string;
  batteryKwh: number;
  maxAcKw: number;
  maxDcKw: number | null;
  rangeKm: number | null;
  consumptionWhPerKm: number | null;
  acPort: string | null;
  dcPort: string | null;
};

export type EvVehicleBrand = {
  id: string;
  name: string;
  colour: string;
  highlight: string;
  visual: EvVehicleVisual | null;
  models: EvVehicleModel[];
};

export const evVehicleBrands: EvVehicleBrand[] = ${JSON.stringify(catalog, null, 2)};

export const evVehicleById = new Map(
  evVehicleBrands.flatMap((brand) => brand.models.map((model) => [model.id, { ...model, brand }] as const)),
);

export const evVehicleBrandByName = new Map(evVehicleBrands.map((brand) => [brand.name, brand]));
`;

const resolvedOutputPath = resolve(outputPath);
mkdirSync(dirname(resolvedOutputPath), { recursive: true });
writeFileSync(resolvedOutputPath, output);
console.log(`Generated ${catalog.length} brands and ${catalog.reduce((total, brand) => total + brand.models.length, 0)} charging configurations → ${resolvedOutputPath}`);
