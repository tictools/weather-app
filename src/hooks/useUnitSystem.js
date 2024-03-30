import { useState } from "react";

export function useUnitSystem(defaultSystem) {
  const [unitSystem, setUnitSystem] = useState(defaultSystem);

  const handleUnitSystemUpdate = (systemId) => {
    setUnitSystem(systemId);
  };

  return {
    unitSystem,
    handleUnitSystemUpdate,
  };
}
