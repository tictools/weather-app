import styles from "./ButtonSetContainer.module.css";

export function ButtonSet({ label, children }) {
  return (
    <div className={styles["button-set"]}>
      <span>{label}</span>
      <div>{children}</div>
    </div>
  );
}
