import { UNIT_SYSTEM } from "../constants";

export function formatToPressure({ unitSystem = UNIT_SYSTEM.METRIC, value }) {
  const isMetricSystem = unitSystem === UNIT_SYSTEM.METRIC;

  const formattedUnit = isMetricSystem ? "mb" : "in";
  const formattedValue = `${value}${formattedUnit}`;

  return formattedValue;
}
