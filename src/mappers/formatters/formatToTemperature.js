import { TEMPERATURE_SCALE } from "../constants";

export function formatToTemperature({
  scale = TEMPERATURE_SCALE.CELSIUS,
  value,
}) {
  const isExact = (value) => value % 10 === 0;

  const unitScale = scale === TEMPERATURE_SCALE.CELSIUS ? "C" : "F";
  const formattedUnit = `°${unitScale}`;
  const formattedValue = isExact(value) ? Math.floor(value) : value;

  return `${formattedValue}${formattedUnit}`;
}
