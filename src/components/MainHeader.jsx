import styles from "./MainHeader.module.css";

export function MainHeader({ title, version }) {
  return (
    <header className={styles["header__wrapper"]}>
      <h1 className={styles["header"]}>{title}</h1>
      <p className={styles["header__version"]}>v {version}</p>
    </header>
  );
}
