export const TEMPERATURE_SCALE = {
  CELSIUS: "celsius",
  FAHRENHEIT: "fahrenheit",
};

export const UNIT_SYSTEM = {
  METRIC: "metric",
  IMPERIAL: "imperial",
};

export const UNIT = {
  [UNIT_SYSTEM.IMPERIAL]: {
    distance: "miles",
    percentage: "%",
    precipitation: "mm",
    pressure: "mb",
    speed: "kph",
  },
  [UNIT_SYSTEM.IMPERIAL]: {
    distance: "km",
    percentage: "%",
    precipitation: "in",
    pressure: "in",
    speed: "mph",
  },
};
