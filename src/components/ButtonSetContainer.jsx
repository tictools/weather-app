import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "../mappers/constants";
import { ButtonSet } from "./ButtonSet";
import { ButtonToggle } from "./ButtonToggle";

export function ButtonSetContainer({
  toggleTemperatureScale,
  toggleUnitSystem,
}) {
  const { CELSIUS, FAHRENHEIT } = TEMPERATURE_SCALE;
  const { METRIC, IMPERIAL } = UNIT_SYSTEM;

  return (
    <div>
      <ButtonSet label="Temperature Scale">
        <ButtonToggle
          label="°C"
          dataId={CELSIUS}
          handleToggle={toggleTemperatureScale}
        />
        <ButtonToggle
          label="°F"
          dataId={FAHRENHEIT}
          handleToggle={toggleTemperatureScale}
        />
      </ButtonSet>
      <ButtonSet label="Unit System">
        <ButtonToggle
          label="Metric"
          dataId={METRIC}
          handleToggle={toggleUnitSystem}
        />
        <ButtonToggle
          label="Imperial"
          dataId={IMPERIAL}
          handleToggle={toggleUnitSystem}
        />
      </ButtonSet>
    </div>
  );
}
