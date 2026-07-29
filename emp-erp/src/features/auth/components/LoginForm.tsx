import { useState } from "react";
import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../validation/loginSchema";

import { login } from "../services/authService";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

interface LoginFormData {
  username: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);

      const user = await login(data);

      localStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("token", user.accessToken);
      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
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
        label="Username"
        placeholder="Enter username"
        error={errors.username?.message}
        {...register("username")}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        error={errors.password?.message}
        {...register("password")}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Logging in.." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
