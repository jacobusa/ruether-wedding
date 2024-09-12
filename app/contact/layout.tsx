import { auth } from "@/auth";
import { ConvexClientProvider } from "../ConvexClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kurt and Cecile if you have any questions about the wedding, need help RSVP'ing, or just want to send them a happy message.",
};

export default async function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <ConvexClientProvider session={session}>{children}</ConvexClientProvider>
    </>
  );
}
