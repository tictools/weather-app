function getCurrentPosition(onSuccess, onError) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  globalThis.navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
    options
  );
}

function isGeolocationSupported() {
  return globalThis.navigator.geolocation;
}

function getLanguage() {
  return globalThis.navigator.language;
}

export const Navigator = {
  getCurrentPosition,
  getLanguage,
  isGeolocationSupported,
};
