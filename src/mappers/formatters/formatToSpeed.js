import { UNIT_SYSTEM } from "../constants";

export function formatToSpeed({ unitSystem = UNIT_SYSTEM.METRIC, value }) {
  const isMetricSystem = unitSystem === UNIT_SYSTEM.METRIC;

  const formattedUnit = isMetricSystem ? "kph" : "mph";
  const formattedValue = `${value}/${formattedUnit}`;

  return formattedValue;
}
