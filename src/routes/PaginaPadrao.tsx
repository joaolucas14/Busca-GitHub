import { Outlet } from "react-router-dom";
import styles from "../App.module.css";

export default function PaginaPadrao() {
  return (
    <div className={styles.paginaPadrao}>
      <h1>GitHub Profiler</h1>
      <Outlet />
    </div>
  );
}
