import { Routes, Route } from "react-router-dom";

import Login from "@/features/auth/pages/Login";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import Employees from "@/features/employees/pages/Employees";
import EmployeeForm from "@/features/employees/pages/EmployeeForm";
import NotFound from "@/pages/NotFound";
import Mainlayout from "@/layouts/MainLayout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <Mainlayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/add" element={<EmployeeForm />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
