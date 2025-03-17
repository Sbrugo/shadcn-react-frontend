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
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";

const Login = () => {
  const methods = useForm<User>();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = methods;

  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-8 max-w-md mx-auto my-auto rounded-sm border border-solid border-black p-8"
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
                  {errors.email && <span>This field is required</span>}
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
                  {errors.username && <span>This field is required</span>}
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
                  {errors.password && <span>This field is required</span>}
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
    </div>
  );
};

export default Login;
