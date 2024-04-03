import { useEffect, useState } from "react";
import { Navigator } from "../services/Navigator";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function onSuccess(position) {
    setLoading(true);

    const lang = Navigator.getLanguage();

    globalThis
      .fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=${lang}`
      )
      .then((response) => response.json())
      .then(({ city }) => setLocation(city))
      .catch((error) => setError(error.name))
      .finally(() => {
        setLoading(false);
      });
  }

  function onError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
    }
  }

  useEffect(() => {
    if (Navigator.isGeolocationSupported()) {
      Navigator.getCurrentPosition(onSuccess, onError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return {
    loading,
    currentLocation: location,
    error,
  };
}
