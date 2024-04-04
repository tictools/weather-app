const BASE_URL = "https://api.bigdatacloud.net/data";
const RESOURCE_PATH = "reverse-geocode-client";

function getLocalityFrom({ lat, lon, lang }) {
  const queryParams = `latitude=${lat}&longitude=${lon}&localityLanguage=${lang}`;
  const url = `${BASE_URL}/${RESOURCE_PATH}?${queryParams}`;

  return globalThis.fetch(url).then((response) => response.json());
}

export const ReverseGeocodeService = {
  getLocalityFrom,
};
