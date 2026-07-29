import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../validation/loginSchema";

import { login } from "../services/authService";

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

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await login(data);

      console.log(user);
    } catch (error) {
      console.log(error);
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

      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
