import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "../mappers/constants";
import { ButtonSet } from "./ButtonSet";
import { ButtonToggle } from "./ButtonToggle";

import styles from "./ButtonSetContainer.module.css";

export function ButtonSetContainer({
  toggleTemperatureScale,
  toggleUnitSystem,
  unitSystem,
  temperatureScale,
}) {
  const isTemperatureActive = (scale) => {
    return scale === temperatureScale;
  };

  const isUnitSystemActive = (scale) => {
    return scale === unitSystem;
  };

  const { CELSIUS, FAHRENHEIT } = TEMPERATURE_SCALE;
  const { METRIC, IMPERIAL } = UNIT_SYSTEM;

  return (
    <div className={styles["button-set__container"]}>
      <ButtonSet label="Scale">
        <ButtonToggle
          isActive={isTemperatureActive(CELSIUS)}
          label="°C"
          dataId={CELSIUS}
          handleToggle={toggleTemperatureScale}
        />
        <ButtonToggle
          isActive={isTemperatureActive(FAHRENHEIT)}
          label="°F"
          dataId={FAHRENHEIT}
          handleToggle={toggleTemperatureScale}
        />
      </ButtonSet>
      <ButtonSet label="Unit">
        <ButtonToggle
          isActive={isUnitSystemActive(METRIC)}
          label="MTR"
          dataId={METRIC}
          handleToggle={toggleUnitSystem}
        />
        <ButtonToggle
          isActive={isUnitSystemActive(IMPERIAL)}
          label="IMP"
          dataId={IMPERIAL}
          handleToggle={toggleUnitSystem}
        />
      </ButtonSet>
    </div>
  );
}
