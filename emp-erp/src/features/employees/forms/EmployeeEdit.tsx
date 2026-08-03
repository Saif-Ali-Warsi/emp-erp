import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Employee } from "../types/employee";
import { getEmployee } from "../services/employeeService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../validation/employeeSchema";

import type { EmployeeFormData } from "../types/employeeForm";

import { updateEmployee } from "../services/employeeService";

import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button/Button";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function EmployeeEdit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: yupResolver(employeeSchema),
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState<Employee | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      loadEmployee();
    }
  }, [id]);

  async function onSubmit(data: EmployeeFormData) {
    if (!id) return;

    try {
      setLoading(true);
      await updateEmployee(id, data);

      toast.success("Employee update successfully.");

      navigate("/employees");
    } catch (err) {
      console.error(err);

      toast.error("Failed to update employee");
    } finally {
      setLoading(false);
    }
  }

  async function loadEmployee() {
    if (!id) return;

    try {
      setLoading(true);
      setError("");

      const response = await getEmployee(id);

      setEmployee(response);
      reset(response);
    } catch (error) {
      setError("Failed to load employee");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
      <h1>Edit Employee Details</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="firstname"
          placeholder="Enter firstname"
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <Input
          label="lastname"
          placeholder="Enter last name"
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Updating.." : "Update"}
        </Button>
      </form>
    </>
  );
}

export default EmployeeEdit;
