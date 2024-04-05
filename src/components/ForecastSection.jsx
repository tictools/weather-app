import styles from "./ForecastSection.module.css";

export function ForecastSection({ forecast, settings }) {
  const { temperatureScale } = settings;

  return (
    <section className={styles["forecast__wrapper"]}>
      {forecast.map((dailyForecast) => {
        return (
          <div key={dailyForecast.id} className={styles["forecast__item"]}>
            <div className={styles["forecast__weekday"]}>
              <span>{dailyForecast.date}</span>
            </div>
            <div className={styles["forecast__condition"]}>
              <img
                loading="lazy"
                src={dailyForecast.condition.icon}
                alt={dailyForecast.condition.text}
                width={32}
              />
            </div>
            <div className={styles["forecast__range"]}>
              <span>
                {
                  dailyForecast.rangeTemperature[temperatureScale]
                    .formattedValue
                }
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
