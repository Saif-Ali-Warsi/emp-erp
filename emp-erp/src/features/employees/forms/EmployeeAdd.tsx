import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";

import { createEmployee } from "../services/employeeService";

import { yupResolver } from "@hookform/resolvers/yup";

import { employeeSchema } from "../validation/employeeSchema";

import type { EmployeeFormData } from "../types/employeeForm";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import type { Employee } from "../types/employee";

function EmployeeAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: yupResolver(employeeSchema),
  });

  const [employee, setEmployee] = useState<Employee | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  async function onSubmit(data: EmployeeFormData) {
    console.log("Submitted", data);
    try {
      setLoading(true);

      await createEmployee(data);

      toast.success("Employee created successfully.");

      navigate("/employees");
    } catch (err) {
      console.error(err);

      toast.error("Failed to create employee.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="firstname"
          placeholder="Enter firstname"
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <Input
          label="Last Name"
          placeholder="Enter last name"
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Creating.." : "CREATE"}
        </Button>
      </form>
    </>
  );
}

export default EmployeeAdd;
