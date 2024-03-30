import { UNIT_SYSTEM } from "../constants";

export function formatToPrecipitation({
  unitSystem = UNIT_SYSTEM.METRIC,
  value,
}) {
  const isMetricSystem = unitSystem === UNIT_SYSTEM.METRIC;

  const formattedUnit = isMetricSystem ? "mm" : "in";
  const formattedValue = `${value}${formattedUnit}`;

  return formattedValue;
}
