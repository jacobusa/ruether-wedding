"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/Button";
import { toast } from "sonner";
import { UserDataSchema, UserInputsEdit } from "@/lib/schema";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { Id } from "@/convex/_generated/dataModel";

type UserFormInputs = z.infer<typeof UserDataSchema>;

interface UserFormProps {
  user?: UserInputsEdit | null;
}
export const UserForm: FC<UserFormProps> = ({ user }) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const userId = params.id;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormInputs>({
    // defaultValues: { favorite_color: "" },
    resolver: zodResolver(UserDataSchema),

    ...(user && { values: { ...user } }),
  });

  const addUser = useMutation(api.users.createUser);
  const updateUser = useMutation(api.users.updateUser);
  const processForm: SubmitHandler<UserFormInputs> = async (data) => {
    if (!data) return;
    try {
      if (userId) {
        await updateUser({
          id: userId as Id<"users">,
          data,
        });
        toast.success("User Edited!");
      } else {
        await addUser(data);
        toast.success("User Created!");
      }
      router.push("/users");
    } catch (error) {
      toast.error("Something went wrong. Call Kobe");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex flex-1 flex-col gap-4 w-[500px]"
    >
      <div>
        <label
          htmlFor="firstName"
          className="hidden text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
          {...register("firstName")}
        />
        {errors.firstName?.message && (
          <p className="text-sm text-opacity-80 tracking-wide text-red-400">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="hidden text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
          {...register("lastName")}
        />
        {errors.lastName?.message && (
          <p className="text-sm text-opacity-80 tracking-wide text-red-400">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="hidden text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-sm text-opacity-80 tracking-wide text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        label={isSubmitting ? "Submitting..." : "Submit"}
        variant="primary"
        className="!bg-primary !text-white  mt-10"
        aria-disabled={isSubmitting}
        disabled={isSubmitting}
        loading={isSubmitting}
      />
    </form>
  );
};
