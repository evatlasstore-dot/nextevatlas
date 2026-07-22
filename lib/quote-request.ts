export type QuoteCustomerType = "particulier" | "professionnel";
export type QuoteProduct = "autel-maxicharger" | "a-definir";
export type QuoteInstallationType = "maison" | "residence" | "entreprise" | "hotel" | "parking";
export type QuoteMounting = "murale" | "sur-pied" | "a-definir";
export type QuoteElectricalSupply = "monophase" | "triphase" | "inconnue";

export type QuoteSimulation = {
  capacity: number;
  start: number;
  target: number;
  power: number;
};

export type QuoteSubmission = {
  customerType: QuoteCustomerType;
  organization: string;
  product: QuoteProduct;
  vehicle: string;
  installationType: QuoteInstallationType;
  mounting: QuoteMounting;
  electricalSupply: QuoteElectricalSupply;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  consent: true;
  simulation: QuoteSimulation | null;
};

export type QuoteFieldErrors = Partial<Record<keyof QuoteSubmission | "simulation", string>>;

const customerTypes = new Set<QuoteCustomerType>(["particulier", "professionnel"]);
const products = new Set<QuoteProduct>(["autel-maxicharger", "a-definir"]);
const installationTypes = new Set<QuoteInstallationType>(["maison", "residence", "entreprise", "hotel", "parking"]);
const mountings = new Set<QuoteMounting>(["murale", "sur-pied", "a-definir"]);
const electricalSupplies = new Set<QuoteElectricalSupply>(["monophase", "triphase", "inconnue"]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getString(source: Record<string, unknown>, key: string): string {
  const value = source[key];
  return typeof value === "string" ? value.trim().replace(/[\r\n]+/gu, " ") : "";
}

function hasValidLength(value: string, minimum: number, maximum: number): boolean {
  return value.length >= minimum && value.length <= maximum;
}

function getEnum<T extends string>(
  source: Record<string, unknown>,
  key: string,
  values: Set<T>,
  fallback: T,
): T {
  const value = getString(source, key);
  return values.has(value as T) ? (value as T) : fallback;
}

function getFiniteNumber(source: Record<string, unknown>, key: string): number | null {
  const value = source[key];
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function parseSimulation(value: unknown): QuoteSimulation | null | "invalid" {
  if (value === null || value === undefined) return null;
  if (!isRecord(value)) return "invalid";

  const capacity = getFiniteNumber(value, "capacity");
  const start = getFiniteNumber(value, "start");
  const target = getFiniteNumber(value, "target");
  const power = getFiniteNumber(value, "power");

  if (
    capacity === null || capacity <= 0 || capacity > 200 ||
    start === null || start < 0 || start >= 100 ||
    target === null || target <= start || target > 100 ||
    power === null || power <= 0 || power > 100
  ) {
    return "invalid";
  }

  return { capacity, start, target, power };
}

export function parseQuoteSubmission(input: unknown):
  | { success: true; data: QuoteSubmission }
  | { success: false; errors: QuoteFieldErrors } {
  if (!isRecord(input)) {
    return { success: false, errors: { vehicle: "Le format de la demande est invalide." } };
  }

  const errors: QuoteFieldErrors = {};
  const customerType = getEnum(input, "customerType", customerTypes, "particulier");
  const organization = getString(input, "organization");
  const product = getEnum(input, "product", products, "a-definir");
  const vehicle = getString(input, "vehicle");
  const installationType = getEnum(input, "installationType", installationTypes, "maison");
  const mounting = getEnum(input, "mounting", mountings, "a-definir");
  const electricalSupply = getEnum(input, "electricalSupply", electricalSupplies, "inconnue");
  const firstName = getString(input, "firstName");
  const lastName = getString(input, "lastName");
  const phone = getString(input, "phone");
  const email = getString(input, "email").toLowerCase();
  const city = getString(input, "city");
  const simulation = parseSimulation(input.simulation);

  if (!hasValidLength(vehicle, 2, 120)) errors.vehicle = "Indiquez un véhicule valide.";
  if (customerType === "professionnel" && !hasValidLength(organization, 2, 120)) {
    errors.organization = "Indiquez le nom de votre organisation.";
  }
  if (!hasValidLength(firstName, 2, 80)) errors.firstName = "Indiquez votre prénom.";
  if (lastName.length > 80) errors.lastName = "Le nom est trop long.";
  if (phone.length > 32 || phone.replace(/\D/gu, "").length < 9) {
    errors.phone = "Saisissez un numéro de téléphone valide.";
  }
  if (!email || !emailPattern.test(email) || email.length > 160) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (!hasValidLength(city, 2, 100)) errors.city = "Indiquez la ville du projet.";
  if (input.consent !== true) errors.consent = "Votre accord est nécessaire pour envoyer la demande.";
  if (simulation === "invalid") errors.simulation = "Les données de simulation sont invalides.";

  if (Object.keys(errors).length > 0) return { success: false, errors };

  const validSimulation = simulation === "invalid" ? null : simulation;

  return {
    success: true,
    data: {
      customerType,
      organization,
      product,
      vehicle,
      installationType,
      mounting,
      electricalSupply,
      firstName,
      lastName,
      phone,
      email,
      city,
      consent: true,
      simulation: validSimulation,
    },
  };
}
