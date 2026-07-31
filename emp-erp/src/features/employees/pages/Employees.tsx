import { useState, useEffect } from "react";
import { getEmployees } from "@/features/dashboard/services/dashboardService";
import type { Employee } from "../types/employee";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    loadEmployees();
  });

  async function loadEmployees() {
    try {
      const response = await getEmployees();

      setEmployees(response.users);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Employees</h1>

      {employees.map((employee: Employee) => (
        <p key={employee.id}>{employee.firstName}</p>
      ))}
    </>
  );
}

export default Employees;
