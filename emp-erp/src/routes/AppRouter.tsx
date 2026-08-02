import { Routes, Route } from "react-router-dom";

import Login from "@/features/auth/pages/Login";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import Employees from "@/features/employees/pages/Employees";
import EmployeeAdd from "@/features/employees/forms/EmployeeAdd";
import NotFound from "@/pages/NotFound";
import Mainlayout from "@/layouts/MainLayout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import EmployeeDetails from "@/features/employees/pages/EmployeeDetails";
import EmployeeEdit from "@/features/employees/forms/EmployeeEdit";

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
        <Route path="/employees/add" element={<EmployeeAdd />} />
        <Route path="/employees/:id" element={<EmployeeDetails />}></Route>
        <Route path="/employees/:id/edit" element={<EmployeeEdit />}></Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
