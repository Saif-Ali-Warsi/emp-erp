import { Routes, Route } from "react-router-dom";

import Login from "@/features/auth/pages/Login";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import Employees from "@/features/employees/pages/Employees";
import EmployeeForm from "@/features/employees/pages/EmployeeForm";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employees/add" element={<EmployeeForm />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
