"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "@/server/actions";
import { Button } from "./ui/Button";
import { ContactFormDataSchema } from "@/lib/schema";
import { toast } from "sonner";

type ContactFormInputs = z.infer<typeof ContactFormDataSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    defaultValues: { favorite_color: "" },
    resolver: zodResolver(ContactFormDataSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    if ((data as any)?.favorite_color !== "") return;
    const emailResult = await sendEmail(data);
    if (emailResult?.success) {
      toast.success("Email sent!");
      reset();
      return;
    }
    console.error(emailResult?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex flex-1 flex-col gap-4 sm:w-1/2"
    >
      <input type="hidden" name="favorite_color" value="" />
      <div>
        <label
          htmlFor="name"
          className="hidden text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="text-sm text-opacity-80 tracking-wide text-red-400">
            {errors.name.message}
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
          placeholder="Enter your email"
          className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-sm text-opacity-80 tracking-wide text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="hidden text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <textarea
          id="name"
          placeholder="Message"
          className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 min-h-[150px] focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="text-sm text-red-400 text-opacity-80 tracking-wide">
            {errors.message.message}
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
