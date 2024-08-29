import { auth } from "@/auth";
import { ConvexClientProvider } from "../ConvexClientProvider";

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
