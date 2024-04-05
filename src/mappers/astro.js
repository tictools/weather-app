function toDomain({ apiAstroResponse }) {
  return {
    sunrise: apiAstroResponse.sunrise,
    sunset: apiAstroResponse.sunset,
  };
}

export const astroMapper = {
  toDomain,
};
