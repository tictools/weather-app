import styles from "./ForecastSection.module.css";
import { ForecastSummary } from "./ForecastSummary";
import { ForecastWeekday } from "./ForecastWeekday";

export function ForecastSection({ forecast, settings, shouldRender }) {
  const { temperatureScale, unitSystem } = settings;

  if (!shouldRender) return null;

  return (
    <section className={styles["forecast__wrapper"]}>
      {forecast.map((dailyForecast) => {
        const {
          condition,
          date,
          humidity,
          id,
          maxPrecipitation,
          maxTemperature,
          maxWind,
          minTemperature,
          uv,
        } = dailyForecast;

        return (
          <div key={id} className={styles["forecast__item"]}>
            <ForecastWeekday date={date} condition={condition} />
            <ForecastSummary
              uv={uv.rawValue}
              humidity={humidity.formattedValue}
              maxWind={maxWind[unitSystem].formattedValue}
              maxPrecipitation={maxPrecipitation[unitSystem].formattedValue}
            />
            <div className={styles["forecast__range"]}>
              <span>{minTemperature[temperatureScale].formattedValue}</span>
              <span>{maxTemperature[temperatureScale].formattedValue}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
