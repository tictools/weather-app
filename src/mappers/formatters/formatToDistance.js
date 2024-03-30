import { UNIT_SYSTEM } from "../constants";

export function formatToDistance({ unitSystem = UNIT_SYSTEM.METRIC, value }) {
  const isMetricSystem = unitSystem === UNIT_SYSTEM.METRIC;

  const formattedUnit = isMetricSystem ? "km" : "miles";
  const formattedValue = `${value}${formattedUnit}`;

  return formattedValue;
}
