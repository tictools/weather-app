import styles from "./WeatherSection.module.css";

export function WeatherSection({ astro, weather, settings, error }) {
  const { temperatureScale, unitSystem } = settings;

  return (
    <section className={styles["weather__wrapper"]}>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={styles["weather__current"]}>
          <div className={styles["weather__current-condition"]}>
            <img
              alt={weather.condition.text}
              src={weather.condition.icon}
              loading="lazy"
            />
            <div className={styles["weather__current-astro"]}>
              <p
                className={`${styles["weather__current-sun"]} ${styles["weather__current-sunrise"]}`}
              >
                {astro.sunrise}
              </p>
              <p
                className={`${styles["weather__current-sun"]} ${styles["weather__current-sunset"]}`}
              >
                {astro.sunset}
              </p>
            </div>
          </div>
          <div className={styles["weather__current-data"]}>
            <div className={styles["weather__current-wind"]}>
              <span className={styles["weather__current-speed"]}>
                {weather.wind[unitSystem].speed.formattedValue}
              </span>
              <span className={styles["weather__current-direction"]}>
                {weather.wind.direction}
              </span>
            </div>
            <div className={styles["weather__current-temperature"]}>
              <span>
                {`${weather.temperature[temperatureScale].formattedValue}`}
              </span>
              <span className={styles["weather__feels-like"]}>
                {weather.feelsLike[temperatureScale].formattedValue}
              </span>
            </div>
            <div className={styles["weather__current-summary"]}>
              <span
                className={`${styles["weather__summary-item"]} ${styles["weather__summary-item--pressure"]}`}
              >
                {weather.pressure[unitSystem].formattedValue}
              </span>
              <span
                className={`${styles["weather__summary-item"]} ${styles["weather__summary-item--humidity"]}`}
              >
                {weather.humidity.formattedValue}
              </span>
              <span
                className={`${styles["weather__summary-item"]} ${styles["weather__summary-item--rain"]}`}
              >
                {weather.precipitation[unitSystem].formattedValue}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
