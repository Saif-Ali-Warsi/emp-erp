import React from "react";
import { Link } from "react-router-dom";
import type { Employee } from "../types/employee";

interface EmployeeTableProps {
  employees: Employee[];
  onDelete: (id: number) => void;
}

function EmployeeTable({ employees, onDelete }: EmployeeTableProps) {
  
  return (
      <>
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <Link to={`/employees/${employee.id}`}>
                  <button>VIEW</button>
                </Link>

                <Link to={`/employees/${employee.id}/edit`}>
                  <button>EDIT</button>
                </Link>

                <button onClick={() => onDelete(employee.id)}>
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
    </>
  );
}

export default React.memo(EmployeeTable);
