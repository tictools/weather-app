import { TEMPERATURE_SCALE } from "../constants";
import { roundInCase } from "../helpers";

export function formatToTemperature({
  isRounded,
  scale = TEMPERATURE_SCALE.CELSIUS,
  value,
}) {
  const isExact = (value) => value % 10 === 0;

  const formattedValue = isExact(value)
    ? Math.floor(value)
    : roundInCase({ flag: isRounded, value });

  const unitScale = scale === TEMPERATURE_SCALE.CELSIUS ? "C" : "F";

  const formattedUnit = `°${unitScale}`;

  return `${formattedValue}${formattedUnit}`;
}
