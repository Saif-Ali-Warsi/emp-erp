import { useState, useEffect } from "react";
import { getEmployees } from "@/features/dashboard/services/dashboardService";
import type { Employee } from "../types/types";

function Dashboard() {

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
      <h1>Dashboard Page</h1>

      {employees.map((employee: Employee) => (
        <p key={employee.id}>{employee.firstName}</p>
      ))}
     
    </>
   
  );
}

export default Dashboard;
