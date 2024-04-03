import styles from "./MainHeader.module.css";

export function MainHeader({ title }) {
  return <h1 className={styles["header"]}>{title}</h1>;
}
