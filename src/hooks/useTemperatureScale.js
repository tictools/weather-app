import { useState } from "react";

export function useTemperatureScale(defaultScale) {
  const [temperatureScale, setTemperatureScale] = useState(defaultScale);

  const handleTemperatureScaleUpdate = (scaleId) => {
    setTemperatureScale(scaleId);
  };

  return {
    temperatureScale,
    handleTemperatureScaleUpdate,
  };
}
