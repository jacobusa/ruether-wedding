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
import { FC, useEffect, useState } from "react";
import { Id } from "@/convex/_generated/dataModel";
import { Switch } from "@headlessui/react";

type UserFormInputs = z.infer<typeof UserDataSchema>;

interface UserFormProps {
  user?: UserInputsEdit | null;
}
export const UserForm: FC<UserFormProps> = ({ user }) => {
  const [isCouple, setIsCouple] = useState(false);
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const userId = params.id;

  useEffect(() => {
    if (!user) return;
    setIsCouple(user?.isCouple);
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormInputs>({
    // defaultValues: { favorite_color: "" },
    resolver: zodResolver(UserDataSchema),
    ...(user && { values: { ...user } }),
  });

  const createUser = useMutation(api.users.createUser);
  const updateUser = useMutation(api.users.updateUser);
  const processForm: SubmitHandler<UserFormInputs> = async (data) => {
    if (!data) return;
    const formData = { ...data, isCouple };
    const cleanedFormData = {
      ...formData,
      email: formData.email.toLocaleLowerCase(),
      coupleEmail: formData?.coupleEmail?.toLocaleLowerCase(),
    };
    try {
      if (userId) {
        await updateUser({
          id: userId as Id<"users">,
          data: cleanedFormData,
        });
        toast.success("User Edited!");
      } else {
        await createUser(cleanedFormData);
        toast.success("User Created!");
      }
      router.push("/users");
    } catch (error: any) {
      if (error?.message?.includes("exists")) {
        toast.error("Email already exists");
        return;
      }
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

      <div className="flex  content-center space-x-3">
        <label className="text-sm my-auto leading-6 text-gray-400">
          Is a couple
        </label>
        <Switch
          checked={isCouple}
          onChange={() => setIsCouple(!isCouple)}
          className="group relative  inline-flex h-6 w-11  flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[checked]:bg-primary "
        >
          <span className="sr-only">I have a plus one</span>
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
          />
        </Switch>
        {errors.isCouple?.message && (
          <p className="text-sm text-opacity-80 tracking-wide text-red-400">
            {errors.isCouple.message}
          </p>
        )}
      </div>

      {isCouple && (
        <div className="space-y-4">
          <div>
            <label
              htmlFor="coupleFirstName"
              className="hidden text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="coupleFirstName"
              placeholder="Couple First Name"
              className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              {...register("coupleFirstName")}
            />
            {errors.coupleFirstName?.message && (
              <p className="text-sm text-opacity-80 tracking-wide text-red-400">
                {errors.coupleFirstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="coupleLastName"
              className="hidden text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="coupleLastName"
              placeholder="Couple Last Name"
              className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              {...register("coupleLastName")}
            />
            {errors.coupleLastName?.message && (
              <p className="text-sm text-opacity-80 tracking-wide text-red-400">
                {errors.coupleLastName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="coupleEmail"
              className="hidden text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="email"
              id="coupleEmail"
              placeholder="Couple Email"
              className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              {...register("coupleEmail")}
            />
            {errors.coupleEmail?.message && (
              <p className="text-sm text-opacity-80 tracking-wide text-red-400">
                {errors.coupleEmail.message}
              </p>
            )}
          </div>
        </div>
      )}

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
