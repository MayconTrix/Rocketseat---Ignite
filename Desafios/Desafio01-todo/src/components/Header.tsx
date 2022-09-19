import styles from "./Header.module.css";
import todoLogo from "../assets/todoLogo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo todo" />
      <span className={styles.fontTo}>to</span>
      <span className={styles.fontDo}>do</span>
    </header>
  );
}
