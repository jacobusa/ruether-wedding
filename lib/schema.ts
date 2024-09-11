import { z } from "zod";

export const ContactFormDataSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required").email(),
  favorite_color: z.literal(""),
  message: z
    .string()
    .min(1, "Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
});

export type RSVPInputs = z.infer<typeof RSVPFormDataSchema>;
export type RSVPInputsEdit = z.infer<typeof RSVPFormDataSchema> & {
  _id: string;
};
export const RSVPFormDataSchema = z.object({
  // id: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z.string().optional(),
  hasPlusOne: z.boolean().default(false),
  plusOneFirstName: z.string().optional(),
  plusOneLastName: z.string().optional(),
  plusOneEmail: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  province: z.string().min(1, "Province is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(1, "Zip is required"),
  mealSelection: z.enum(["Chicken", "Salmon", "Vegetarian"]),
  plusOneMealSelection: z.enum(["Chicken", "Salmon", "Vegetarian"]).optional(),
  accomodation: z.string().optional(),
  accessabilityNeeds: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  transport: z.string().optional(),
  songRequest: z.string().optional(), // what song will get you on the dance floor
  marriageAdvice: z.string().optional(), // What is your best piece of marriage advice?
  cocktailSuggestion: z.string().optional(), // What signature cocktail should we serve on the day? (Provide 2 or 3 options for guests to cast their vote!)
});

export type UserInputsEdit = z.infer<typeof UserDataSchema>;
export const UserDataSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().min(1, "Email is required").email(),
});
