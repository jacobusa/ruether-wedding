"use server";
import { signIn, signOut } from "@/auth";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import { z } from "zod";
import { ContactFormDataSchema } from "@/lib/schema";
import ContactFormEmail from "@/emails/contact-form-email";
import { resend } from "@/lib/resend";

export async function sendRSVPLink(formData: FormData) {
  const sendRSVPLinkSchema = z.object({
    id: z.string(),
  });
  const form = Object.fromEntries(formData);
  const data = sendRSVPLinkSchema.parse(form);
  const user = await fetchQuery(api.users.getUserByIdPublic, {
    id: data.id as Id<"users">,
  });
  if (!user?.email) return;
  await signIn("resend", {
    email: user.email,
    redirect: false,
    redirectTo: "/rsvp",
  });
}

type ContactFormInputs = z.infer<typeof ContactFormDataSchema>;
export async function addEntry(data: ContactFormInputs) {
  const result = ContactFormDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export const sendEmail = async (data: ContactFormInputs) => {
  if ((data as any)?.favorite_color !== "") return;
  const result = ContactFormDataSchema.safeParse(data);
  if (result?.success) {
    const { email, message, name } = result.data;
    try {
      const data = await resend.emails.send({
        from: "Ruether Wedding <contact-form@ruetherwedding.com>",
        to: ["jacobusbad@gmail.com"],
        subject: "Contact Form Submission",
        // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
