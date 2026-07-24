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
const stringOrNull = (value) => typeof value === "string" && value.trim() ? value.trim() : null;
const booleanOrNull = (value) => typeof value === "boolean" ? value : null;
const withoutLeadingBrand = (name, brand) => name.replace(new RegExp(`^${brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+`, "i"), "").trim();

const records = rawVehicles
  .map((vehicle, sourceIndex) => {
    const batteryKwh = vehicle?.battery?.useable_capacity_kwh;
    const maxAcKw = vehicle?.charging?.ac?.power_kw;
    if (!vehicle?.brand || !vehicle?.model || !validNumber(batteryKwh) || !validNumber(maxAcKw)) return null;

    return {
      sourceIndex,
      brand: String(vehicle.brand).trim(),
      model: String(vehicle.model).trim(),
      variant: stringOrNull(vehicle.variant),
      referenceVariant: String(vehicle.full_name || vehicle.variant || vehicle.model).trim(),
      batteryKwh: rounded(batteryKwh),
      maxAcKw: rounded(maxAcKw),
      maxDcKw: validNumber(vehicle?.charging?.dc?.max_power_kw) ? rounded(vehicle.charging.dc.max_power_kw) : null,
      dcPower10To80Kw: validNumber(vehicle?.charging?.dc?.power_10_80_kw) ? rounded(vehicle.charging.dc.power_10_80_kw) : null,
      rangeKm: validNumber(vehicle?.performance?.electric_range_km) ? Math.round(vehicle.performance.electric_range_km) : null,
      consumptionWhPerKm: validNumber(vehicle?.consumption?.evdb_real?.vehicle_consumption_wh_km)
        ? Math.round(vehicle.consumption.evdb_real.vehicle_consumption_wh_km)
        : null,
      acPort: stringOrNull(vehicle?.charging?.ac?.port),
      dcPort: stringOrNull(vehicle?.charging?.dc?.port),
      acChargeTime: stringOrNull(vehicle?.charging?.ac?.charge_time),
      dcChargeTime: stringOrNull(vehicle?.charging?.dc?.charge_time),
      acChargeSpeedKmh: validNumber(vehicle?.charging?.ac?.charge_speed_kmh) ? Math.round(vehicle.charging.ac.charge_speed_kmh) : null,
      dcChargeSpeedKmh: validNumber(vehicle?.charging?.dc?.charge_speed_kmh) ? Math.round(vehicle.charging.dc.charge_speed_kmh) : null,
      plugAndChargeSupported: booleanOrNull(vehicle?.charging?.plug_and_charge?.supported),
      plugAndChargeProtocol: stringOrNull(vehicle?.charging?.plug_and_charge?.protocol),
      preconditioningAvailable: booleanOrNull(vehicle?.charging?.battery_preconditioning?.possible),
      preconditioningUsingNavigation: booleanOrNull(vehicle?.charging?.battery_preconditioning?.automatic_using_navigation),
      batteryChemistry: stringOrNull(vehicle?.battery?.cathode_material),
      batteryArchitectureV: validNumber(vehicle?.battery?.architecture_v) ? Math.round(vehicle.battery.architecture_v) : null,
      v2lSupported: booleanOrNull(vehicle?.v2x?.v2l_supported),
      v2hAcSupported: booleanOrNull(vehicle?.v2x?.v2h_ac_supported),
      v2hDcSupported: booleanOrNull(vehicle?.v2x?.v2h_dc_supported),
      v2gAcSupported: booleanOrNull(vehicle?.v2x?.v2g_ac_supported),
      v2gDcSupported: booleanOrNull(vehicle?.v2x?.v2g_dc_supported),
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
  const uniqueVehicles = new Map();
  for (const record of groupedByBrand.get(brandName)) {
    // The source can repeat an identical trim. Keep exactly one record per complete
    // vehicle identity; never collapse distinct variants simply because their battery
    // or AC input happen to match.
    const key = record.referenceVariant;
    const existing = uniqueVehicles.get(key);
    const richness = (candidate) => Object.values(candidate).filter((value) => value !== null && value !== false && value !== "").length;
    if (!existing || richness(record) > richness(existing)) uniqueVehicles.set(key, record);
  }

  const idOrdinals = new Map();
  const models = [...uniqueVehicles.values()]
    .sort((left, right) => collator.compare(left.referenceVariant, right.referenceVariant))
    .map((record) => {
      const baseId = `${slug(brandName)}-${slug(record.referenceVariant)}`;
      const ordinal = (idOrdinals.get(baseId) || 0) + 1;
      idOrdinals.set(baseId, ordinal);
      return {
        id: `${baseId}-${ordinal}`,
        model: record.model,
        displayModel: withoutLeadingBrand(record.referenceVariant, brandName),
        variant: record.variant,
        referenceVariant: record.referenceVariant,
        batteryKwh: record.batteryKwh,
        maxAcKw: record.maxAcKw,
        maxDcKw: record.maxDcKw,
        dcPower10To80Kw: record.dcPower10To80Kw,
        rangeKm: record.rangeKm,
        consumptionWhPerKm: record.consumptionWhPerKm,
        acPort: record.acPort,
        dcPort: record.dcPort,
        acChargeTime: record.acChargeTime,
        dcChargeTime: record.dcChargeTime,
        acChargeSpeedKmh: record.acChargeSpeedKmh,
        dcChargeSpeedKmh: record.dcChargeSpeedKmh,
        plugAndChargeSupported: record.plugAndChargeSupported,
        plugAndChargeProtocol: record.plugAndChargeProtocol,
        preconditioningAvailable: record.preconditioningAvailable,
        preconditioningUsingNavigation: record.preconditioningUsingNavigation,
        batteryChemistry: record.batteryChemistry,
        batteryArchitectureV: record.batteryArchitectureV,
        v2lSupported: record.v2lSupported,
        v2hAcSupported: record.v2hAcSupported,
        v2hDcSupported: record.v2hDcSupported,
        v2gAcSupported: record.v2gAcSupported,
        v2gDcSupported: record.v2gDcSupported,
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
 * Every unique vehicle trim is retained; only duplicate source rows are removed.
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
  variant: string | null;
  referenceVariant: string;
  batteryKwh: number;
  maxAcKw: number;
  maxDcKw: number | null;
  dcPower10To80Kw: number | null;
  rangeKm: number | null;
  consumptionWhPerKm: number | null;
  acPort: string | null;
  dcPort: string | null;
  acChargeTime: string | null;
  dcChargeTime: string | null;
  acChargeSpeedKmh: number | null;
  dcChargeSpeedKmh: number | null;
  plugAndChargeSupported: boolean | null;
  plugAndChargeProtocol: string | null;
  preconditioningAvailable: boolean | null;
  preconditioningUsingNavigation: boolean | null;
  batteryChemistry: string | null;
  batteryArchitectureV: number | null;
  v2lSupported: boolean | null;
  v2hAcSupported: boolean | null;
  v2hDcSupported: boolean | null;
  v2gAcSupported: boolean | null;
  v2gDcSupported: boolean | null;
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
