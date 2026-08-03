import { useParams } from "react-router-dom";
import useEmployee from "@/hooks/useEmployee";
useEmployee

function EmployeeDetails() {
  const { id } = useParams();
const {
    employee,
    loading,
    error
} = useEmployee(id);


if (loading) {
  return <h2>Loading...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}

if (!employee) {
  return <h2>Employee not found</h2>;
}

return (
  <>
    <h1>Employee Details</h1>

    <img
      src={employee.image}
      alt={employee.firstName}
      width={100}
    />

    <h2>
      {employee.firstName} {employee.lastName}
    </h2>

    <p>{employee.email}</p>

    <p>{employee.phone}</p>

    <p>{employee.company.department}</p>
  </>
);
}

export default EmployeeDetails;
