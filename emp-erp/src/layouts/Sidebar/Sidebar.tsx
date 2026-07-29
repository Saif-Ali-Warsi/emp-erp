import { NavLink } from "react-router-dom";
import styles from "@/layouts/Sidebar/Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Employees
        </NavLink>

        <NavLink
          to="/employees/add"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Add Employee
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
