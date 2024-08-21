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

export const RSVPFormDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
});
