import { UNIT_SYSTEM } from "../constants";
import { roundInCase } from "../helpers";

export function formatToPrecipitation({
  unitSystem = UNIT_SYSTEM.METRIC,
  value,
  isRounded,
}) {
  const isMetricSystem = unitSystem === UNIT_SYSTEM.METRIC;

  const formattedUnit = isMetricSystem ? "mm" : "in";

  const roundedValue = roundInCase({ flag: isRounded, value });

  const formattedValue = `${roundedValue}${formattedUnit}`;

  return formattedValue;
}
