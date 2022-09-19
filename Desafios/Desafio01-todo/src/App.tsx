import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./App.module.css";
import "./index.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}></div>
      <Task />
    </div>
  );
}
