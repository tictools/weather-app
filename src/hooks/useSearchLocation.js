import { useState } from "react";

export function useSearchLocation() {
  const [searchLocation, setSearchLocation] = useState(null);

  function updateSearchLocation(location) {
    setSearchLocation(location);
  }

  return {
    searchLocation,
    updateSearchLocation,
  };
}
