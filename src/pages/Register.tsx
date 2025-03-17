import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { User } from "@/dto/users-dto";

const Register = () => {
  const methods = useForm<User>();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = methods;

  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center p-4 h-screen">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 max-w-md mx-auto my-auto"
        >
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
          ></FormField>
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Register;
