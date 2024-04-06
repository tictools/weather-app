import {
  formatToSunriseHourCycle,
  formatToSunsetHourCycle,
} from "./formatters";

function toDomain({ apiAstroResponse }) {
  return {
    sunrise: formatToSunriseHourCycle(apiAstroResponse.sunrise),
    sunset: formatToSunsetHourCycle(apiAstroResponse.sunset),
  };
}

export const astroMapper = {
  toDomain,
};
