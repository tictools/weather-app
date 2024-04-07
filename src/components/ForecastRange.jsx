import styles from "./ForecastSection.module.css";

export function ForecastWeekday({ date, condition }) {
  const { icon, text } = condition;

  return (
    <div className={styles["forecast__weekday"]}>
      <span>{date}</span>
      <img loading="lazy" src={icon} alt={text} width={32} />
    </div>
  );
}
