import { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeService";
import { deleteEmployee } from "../services/employeeService";
import type { Employee } from "../types/employee";

import { toast } from "react-toastify";

import Input from "@/components/common/Input/Input";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;

  const firstIndex = lastIndex - itemsPerPage;

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

    return fullName.includes(search.toLowerCase());
  });

  const paginatedEmployees = filteredEmployees.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  async function handleDelete(id: number) {
    const confirm = window.confirm("are you sure?");

    if (!confirm) return;

    try {
      await deleteEmployee(id);

      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id),
      );

      toast.success("Employee Deleted Successfully");
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete employee");
    }
  }

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
            <th>VIEW</th>
            <th>EDIT</th>
            <th>DELETE</th>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {paginatedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <button>VIEW</button>
                <button>EDIT</button>
                <button onClick={() => handleDelete(employee.id)}>
                  DELETE
                </button>
              </td>

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

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Employees;
