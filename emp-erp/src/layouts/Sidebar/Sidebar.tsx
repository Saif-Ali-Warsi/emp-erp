import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        borderRight: "1px solid #ddd",
        padding: "20px",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/employees">Employees</NavLink>

        <NavLink to="/employees/add">Add Employee</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
