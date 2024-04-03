import { useEffect, useState } from "react";
import { locationMapper, weatherMapper } from "../mappers";
import weatherService from "../services/weather";
import { useCurrentLocation } from "./useCurrentLocation";

export function useForecastFor({ searchLocation } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const { currentLocation, error: errorCurrentLocation } = useCurrentLocation();

  function handleLoadingStatus(status) {
    setIsLoading(status);
  }

  function handleLocationUpdate(location) {
    setLocation(location);
  }

  function handleWeatherUpdate(weather) {
    setWeather(weather);
  }

  useEffect(() => {
    const locationToFetch = searchLocation || currentLocation;

    if (locationToFetch) {
      weatherService
        .forecast({ locationToFetch })
        .then(({ location, current: weather }) => {
          handleLocationUpdate(locationMapper.toDomain(location));
          handleWeatherUpdate(weatherMapper.toDomain(weather));
        })
        .catch(({ message }) => setError(message))
        .finally(() => handleLoadingStatus(false));
    }
  }, [searchLocation, currentLocation]);

  return {
    isLoading,
    location,
    weather,
    error: error || errorCurrentLocation,
  };
}
