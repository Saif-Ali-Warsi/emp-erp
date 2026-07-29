import { useState } from "react";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "400px",
        margin: "80px auto",
      }}
    >
      <h1>Login</h1>

      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        {...register("email")}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        {...register("password")}
      />

      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
