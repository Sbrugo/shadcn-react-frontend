import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { User } from "@/dto/users-dto";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes";
import { login } from "../services/auth-api";

const Login = () => {
  const methods = useForm<User>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = methods;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const user = await login(data);
      console.log("User:", user);
      setTimeout(() => {
        navigate(routes.home);
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center space-y-8 max-w-md mx-auto my-auto rounded-sm border border-solid border-black p-8 mb-0"
          >
            <Link to={routes.home} className="text-xl">
              Title
            </Link>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      type="email"
                      {...field}
                      {...register("email", { required: "Email is required" })}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.email && <span>{errors.email.message}</span>}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
                      type="text"
                      {...field}
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.username && <span>{errors.username.message}</span>}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      type="password"
                      {...field}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.password && <span>{errors.password.message}</span>}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit">Log in</Button>
            <Link to={routes.notFound} className="text-xs text-blue-800">
              ¿Forgot your password?
            </Link>
          </form>
        </FormProvider>
        <div className="flex flex-col justify-center items-center space-y-8 max-w-md mx-auto my-auto rounded-sm border border-solid border-black p-8 mt-3">
          <Link to={routes.register} className="text-xs">
            Don´t have an account?{" "}
            <span className=" text-blue-800">Register</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
