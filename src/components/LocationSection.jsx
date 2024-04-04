import styles from "./LocationSection.module.css";
import { MapMarker } from "./icons/MapMarker";

export function LocationSection({ location, shouldRender }) {
  if (!shouldRender) return null;

  return (
    <section className={styles["location__wrapper"]}>
      <div className={styles["location__name"]}>
        <h2>{location.name}</h2>
        <h3>({location.region})</h3>
      </div>
      <div className={styles["location__coordinates"]}>
        <div>
          <span> {location.latitude}° latitude</span> ||
          <span> {location.longitude}° longitude</span>
        </div>
        <a
          href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`}
          target="_blank"
        >
          <MapMarker color="#000" />
        </a>
      </div>
    </section>
  );
}
