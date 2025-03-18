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
import { register as registerUser } from "../services/auth-api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const methods = useForm<User>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      bio: "",
      firstName: "",
      lastName: "",
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
      const response = await registerUser(data);
      console.log(response);
      setTimeout(() => {
        navigate(routes.home);
      }, 1000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center space-y-8 max-w-md mx-auto my-auto rounded-sm border border-solid border-black p-8 mb-0 mt-2"
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

            <FormField
              control={control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Biography</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="bio"
                      type="text"
                      {...field}
                      {...register("bio", {
                        required: false,
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.bio && <span>{errors.bio.message}</span>}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="firstName"
                      type="text"
                      {...field}
                      {...register("firstName", {
                        required: false,
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.firstName && (
                      <span>{errors.firstName.message}</span>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="lastName"
                      type="text"
                      {...field}
                      {...register("lastName", {
                        required: false,
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit">Register</Button>
            <Link to={routes.notFound} className="text-xs text-blue-800">
              Sign in with other account
            </Link>
          </form>
        </FormProvider>
        <div className="flex flex-col justify-center items-center space-y-8 max-w-md mx-auto my-auto rounded-sm border border-solid border-black p-8 mt-3">
          <Link to={routes.login} className="text-xs">
            Already have an account?
            <span className=" text-blue-800">Log in</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
