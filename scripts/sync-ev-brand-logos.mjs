import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const [inputPath, outputPath = "data/ev-brand-logos.ts", outputDirectory = "public/images/simulator/brands"] = process.argv.slice(2);

if (!inputPath) {
  throw new Error("Usage: node scripts/sync-ev-brand-logos.mjs <ev-brands-logos.json> [output.ts] [output-directory]");
}

const logoDatabase = JSON.parse(await (await import("node:fs/promises")).readFile(inputPath, "utf8"));
if (!Array.isArray(logoDatabase.brands)) throw new Error("The supplied logo database must contain a brands array.");

const vehicleNameAliases = {
  "Alfa Romeo": "Alfa",
  "DS Automobiles": "DS",
  MINI: "Mini",
  smart: "Smart",
};

const vehicleVisualBrands = new Set([
  "Tesla", "Dacia", "Renault", "BYD", "Peugeot", "Hyundai", "BMW", "Mercedes-Benz", "Audi", "Kia", "Volkswagen",
]);

// Simple Icons is used only for verified marks available from its public catalogue.
// Every other brand still receives a local 3D monogram in the UI, rather than an
// incorrect third-party logo or a runtime dependency on Logo.dev.
const simpleIconSlugs = {
  Cadillac: "cadillac",
  Citroën: "citroen",
  "DS Automobiles": "dsautomobiles",
  Fiat: "fiat",
  Ford: "ford",
  Honda: "honda",
  Jeep: "jeep",
  Lucid: "lucid",
  Maserati: "maserati",
  Mazda: "mazda",
  MG: "mg",
  MINI: "mini",
  Mitsubishi: "mitsubishi",
  Nissan: "nissan",
  Opel: "opel",
  Polestar: "polestar",
  Porsche: "porsche",
  "Rolls-Royce": "rollsroyce",
  SEAT: "seat",
  Škoda: "skoda",
  smart: "smart",
  Subaru: "subaru",
  Suzuki: "suzuki",
  Toyota: "toyota",
  Volvo: "volvo",
};

const normalizeInitials = (name) => name
  .replace(/&/g, " ")
  .replace(/[.]/g, " ")
  .split(/[\s-]+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

const slug = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const outputRoot = resolve(outputDirectory);
mkdirSync(outputRoot, { recursive: true });

const entries = [];
for (const brand of logoDatabase.brands) {
  const vehicleBrand = vehicleNameAliases[brand.name] || brand.name;
  if (vehicleVisualBrands.has(vehicleBrand)) continue;

  const simpleIcon = simpleIconSlugs[brand.name];
  const filename = `${slug(vehicleBrand)}.svg`;
  let src = null;

  if (simpleIcon) {
    const response = await fetch(`https://cdn.simpleicons.org/${simpleIcon}/315b42`);
    const svg = await response.text();
    if (response.ok && svg.startsWith("<svg")) {
      writeFileSync(resolve(outputRoot, filename), svg);
      src = `/images/simulator/brands/${filename}`;
    }
  }

  entries.push({
    name: vehicleBrand,
    domain: brand.domain,
    src,
    initials: normalizeInitials(vehicleBrand),
  });
}

const output = `/*\n * Generated from the EV brand-logo database supplied to EVAtlas.\n * The source Logo.dev URLs require a private publishable key, so verified local\n * vector marks are stored when available and every remaining brand has a 3D\n * monogram fallback in the simulator.\n */\n\nexport type EvBrandLogo = {\n  name: string;\n  domain: string;\n  src: string | null;\n  initials: string;\n};\n\nexport const evBrandLogos: EvBrandLogo[] = ${JSON.stringify(entries, null, 2)};\n\nexport const evBrandLogoByName = new Map(evBrandLogos.map((brand) => [brand.name, brand]));\n`;

mkdirSync(dirname(resolve(outputPath)), { recursive: true });
writeFileSync(resolve(outputPath), output);

console.log(`Stored ${entries.filter((entry) => entry.src).length} verified vector marks and ${entries.filter((entry) => !entry.src).length} 3D-monogram fallbacks.`);
