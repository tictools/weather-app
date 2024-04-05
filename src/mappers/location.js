function toDomain({ apiLocationResponse }) {
  return {
    name: apiLocationResponse?.name,
    region: apiLocationResponse?.region,
    country: apiLocationResponse?.country,
    latitude: apiLocationResponse?.lat,
    longitude: apiLocationResponse?.lon,
    timeZone: apiLocationResponse?.tz_id,
    localTime: apiLocationResponse?.localtime,
  };
}

export const locationMapper = {
  toDomain,
};
