"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RSVPFormDataSchema, RSVPInputs, RSVPInputsEdit } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Switch } from "@headlessui/react";
import { Button } from "./ui/Button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";

const steps = [
  {
    id: "Step 1",
    name: "Personal Info",
    fields: [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "plusOneFirstName",
      "plusOneLastName",
      "plusOneEmail",
      "country",
      "province",
      "street",
      "city",
      "zip",
    ],
  },
  {
    id: "Step 2",
    name: "Wedding Day",
    fields: [
      "accomodation",
      "accessabilityNeeds",
      "dietaryRestrictions",
      "mealSelection",
      "transport",
    ],
  },
  {
    id: "Step 3",
    name: "🤌",
    fields: ["songRequest", "marriageAdvice", "cocktailSuggestion"],
  },
  { id: "Step 4", name: "Complete" },
];

interface RSVPFormProps {
  rsvp?: RSVPInputsEdit | null;
}
export const RSVPForm: FC<RSVPFormProps> = ({ rsvp }) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const delta = currentStep - previousStep;

  useEffect(() => {
    if (!rsvp) return;
    setHasPlusOne(rsvp.hasPlusOne);
  }, [rsvp]);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<RSVPInputs>({
    resolver: zodResolver(RSVPFormDataSchema),
    ...(rsvp && { values: { ...rsvp } }),
  });

  const addRSVP = useMutation(api.rsvp.addRSVP);
  const updateRSVP = useMutation(api.rsvp.updateRSVP);
  const processForm: SubmitHandler<RSVPInputs> = async (data) => {
    try {
      if (rsvp?._id) {
        await updateRSVP({
          id: rsvp._id as Id<"rsvp">,
          data: { ...data, hasPlusOne },
        });
      } else {
        await addRSVP({ data: { ...data, hasPlusOne } });
      }
      toast.success("RSVP Saved!");
    } catch (error) {
      toast.error(
        "Something went wrong. Please use the contact form to manually enter RSVP"
      );
    }
  };

  type FieldName = keyof RSVPInputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const getRSVPButtonLabel = () => {
    if (isSubmitting) {
      return "Submitting...";
    }
    if (isSubmitted) {
      return "RSVP Saved!";
    }
    return "Save RSVP";
  };

  return (
    <section className="w-full max-w-4xl mx-auto inset-0 min-h-max flex flex-col justify-between p-4 md:p-24">
      <h1 className="tracking-widest self-center mb-10 font-bold text-secondary text-[10vw] lg:text-5xl font-brush">
        RSVP
      </h1>
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-primary transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {step.name}
                  </span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-primary">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {step.name}
                  </span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {step.name}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide your personal details.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.firstName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.lastName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phoneNumber"
                    type="number"
                    {...register("phoneNumber")}
                    autoComplete="phoneNumber"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.phoneNumber?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex  space-x-3 sm:col-span-6">
                <Switch
                  checked={hasPlusOne}
                  onChange={() => setHasPlusOne(!hasPlusOne)}
                  className="group relative inline-flex h-6 w-11  flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[checked]:bg-primary "
                >
                  <span className="sr-only">I have a plus one</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                  />
                </Switch>
                <span className="whitespace-nowrap text-sm font-medium leading-6 text-gray-900">
                  I have a plus one
                </span>
              </div>
              {hasPlusOne && (
                <>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="plusOneFirstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Plus One First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="plusOneFirstName"
                        {...register("plusOneFirstName")}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {errors.plusOneFirstName?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.plusOneFirstName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="plusOneLastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Plus One Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="plusOneLastName"
                        {...register("plusOneLastName")}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {errors.plusOneLastName?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.plusOneLastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="plusOneEmail"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Plus One Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="plusOneEmail"
                        type="email"
                        {...register("plusOneEmail")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {errors.plusOneEmail?.message && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.plusOneEmail.message}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            <h2 className="text-base mt-16 font-semibold leading-7 text-gray-900">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("country")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Canada</option>
                    <option>United States</option>
                    <option>Mexico</option>
                    <option>South Africa</option>
                    <option>UK</option>
                  </select>
                  {errors.country?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street"
                    {...register("street")}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.street?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.street.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.city?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="province"
                    {...register("province")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.province?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.province.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="zip"
                    {...register("zip")}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.zip?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Wedding Day
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Some extra details about the wedding day.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="mealSelection"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Meal Selection
                </label>
                <div className="mt-2">
                  <select
                    id="mealSelection"
                    {...register("mealSelection")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Chicken</option>
                    <option>Salmon</option>
                    <option>Vegetarian</option>
                  </select>
                  {errors.mealSelection?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.mealSelection.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="accomodation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Where will you be staying?
                </label>
                <div className="mt-2">
                  <textarea
                    id="accomodation"
                    {...register("accomodation")}
                    className="block w-full rounded-md border-0 min-h-[100px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.accomodation?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.accomodation.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="accessabilityNeeds"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Do you have any accessability needs?
                </label>
                <div className="mt-2">
                  <textarea
                    id="accessabilityNeeds"
                    {...register("accessabilityNeeds")}
                    className="block w-full rounded-md border-0 min-h-[100px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.accessabilityNeeds?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.accessabilityNeeds.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="dietaryRestrictions"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Any dietary restrictions?
                </label>
                <div className="mt-2">
                  <textarea
                    id="dietaryRestrictions"
                    {...register("dietaryRestrictions")}
                    className="block w-full rounded-md border-0 min-h-[100px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.dietaryRestrictions?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.dietaryRestrictions.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="transport"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  How are you getting to the venue?
                </label>
                <div className="mt-2">
                  <textarea
                    id="transport"
                    {...register("transport")}
                    className="block w-full rounded-md border-0 min-h-[100px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.transport?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.transport.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="songRequest"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  What song will get you on the dance floor?
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="songRequest"
                    {...register("songRequest")}
                    className="block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.songRequest?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.songRequest.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-full">
                <label
                  htmlFor="cocktailSuggestion"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  What signature cocktail should we serve on the day?
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="cocktailSuggestion"
                    {...register("cocktailSuggestion")}
                    className="block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.cocktailSuggestion?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.cocktailSuggestion.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="marriageAdvice"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  What is your best piece of marriage advice?
                </label>
                <div className="mt-2">
                  <textarea
                    id="marriageAdvice"
                    {...register("marriageAdvice")}
                    className="block w-full rounded-md border-0 min-h-[100px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.marriageAdvice?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.marriageAdvice.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 3 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Click the button below to save your RSVP!
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              So excited to see you there!
            </p>
            <Button
              variant="primary"
              className="my-10 bg-white"
              type="submit"
              label={getRSVPButtonLabel()}
              aria-disabled={isSubmitting || isSubmitted}
              disabled={isSubmitting || isSubmitted}
              loading={isSubmitting}
            />
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-primary hover:bg-opacity-25 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-primary hover:bg-opacity-25 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
