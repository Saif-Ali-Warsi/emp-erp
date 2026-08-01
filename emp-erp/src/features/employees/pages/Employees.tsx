import { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types/employee";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      setLoading(true);
      setError("");

      const response = await getEmployees();

      setEmployees(response.users);

    } catch (error) {
      setError("Failed to load employees");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1>Employees</h1>

      {employees.map((employee) => (
        <p key={employee.id}>{employee.firstName}</p>
      ))}
    </>
  );
}

export default Employees;
