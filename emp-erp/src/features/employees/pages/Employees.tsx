import { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types/employee";

import Input from "@/components/common/Input/Input";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

    return fullName.includes(search.toLowerCase());
  });

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

      <Input
        label="Search Employee"
        name="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Input>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>

              <td>
                <img
                  src={employee.image}
                  alt={employee.firstName}
                  width={40}
                  height={40}
                />
              </td>

              <td>
                {employee.firstName} {employee.lastName}
              </td>

              <td>{employee.email}</td>

              <td>{employee.phone}</td>

              <td>{employee.company.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Employees;
