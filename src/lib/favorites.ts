export type CalculatorId =
  | "basic"
  | "scientific"
  | "graphing"
  | "financial"
  | "printing"
  | "programmable"
  // converters & math
  | "unit-length"
  | "unit-weight"
  | "unit-temperature"
  | "unit-area"
  | "unit-volume"
  | "unit-speed"
  | "fraction-percent"
  | "matrix"
  // finance & business
  | "loan-emi"
  | "compound-interest"
  | "mortgage-payoff"
  | "currency"
  | "tip-split"
  | "discount"
  | "tax-vat"
  // life & utility
  | "age"
  | "date-diff"
  | "time-duration"
  | "fuel-cost"
  | "recipe-scaler"
  // health
  | "bmi"
  | "bmr"
  | "heart-rate"
  | "water-intake"
  // school
  | "gpa"
  | "grade-needed"
  | "marks-percent"
  // dev / tech
  | "base-converter"
  | "ip-subnet"
  | "unix-time";

const KEY = "calc:favorites";

export function loadFavorites(): CalculatorId[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    if (!Array.isArray(parsed)) return [];
    const allowed: CalculatorId[] = [
      "basic",
      "scientific",
      "graphing",
      "financial",
      "printing",
      "programmable",
      "unit-length",
      "unit-weight",
      "unit-temperature",
      "unit-area",
      "unit-volume",
      "unit-speed",
      "fraction-percent",
      "matrix",
      "loan-emi",
      "compound-interest",
      "mortgage-payoff",
      "currency",
      "tip-split",
      "discount",
      "tax-vat",
      "age",
      "date-diff",
      "time-duration",
      "fuel-cost",
      "recipe-scaler",
      "bmi",
      "bmr",
      "heart-rate",
      "water-intake",
      "gpa",
      "grade-needed",
      "marks-percent",
      "base-converter",
      "ip-subnet",
      "unix-time",
    ];
    return parsed.filter((x): x is CalculatorId => allowed.includes(x as CalculatorId));
  } catch {
    return [];
  }
}

export function saveFavorites(favs: CalculatorId[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...new Set(favs)]));
  } catch {
    // ignore
  }
}

export function toggleFavorite(id: CalculatorId, current: CalculatorId[]): CalculatorId[] {
  const set = new Set(current);
  if (set.has(id)) set.delete(id);
  else set.add(id);
  return Array.from(set);
}
