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
            <div>
              <span className={styles["weather__current-speed"]}>
                {weather.wind[unitSystem].speed.formattedValue}
              </span>
              <span className={styles["weather__current-direction"]}>
                {weather.wind.direction}
              </span>
            </div>
            <p
              className={styles["weather__temperature"]}
            >{`${weather.temperature[temperatureScale].formattedValue}`}</p>
            <p className={styles["weather__feels-like"]}>
              {`feels like ${weather.feelsLike[temperatureScale].formattedValue}`}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
