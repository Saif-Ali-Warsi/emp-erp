import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../validation/loginSchema";

interface LoginFormData {
  email: string;
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
        error={errors.email?.message}
        {...register("email")}
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
