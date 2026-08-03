import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../validation/employeeSchema";

import useEmployee from "@/hooks/useEmployee";

import type { EmployeeFormData } from "../types/employeeForm";

import { updateEmployee } from "../services/employeeService";

import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button/Button";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function EmployeeEdit() {
  const { id } = useParams();
  const { employee, loading, error } = useEmployee(id);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: yupResolver(employeeSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
  if (employee) {
    reset({
      firstName: employee.firstName,
      lastName: employee.lastName,
    });
  }
}, [employee, reset]);

  async function onSubmit(data: EmployeeFormData) {
    if (!id) return;

    try {
      setIsSubmitting(true);
      await updateEmployee(id, data);

      toast.success("Employee update successfully.");

      navigate("/employees");
    } catch (err) {
      console.error(err);

      toast.error("Failed to update employee");
    } finally {
      setIsSubmitting(false);
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Updating.." : "Update"}
        </Button>
      </form>
    </>
  );
}

export default EmployeeEdit;
