import { auth } from "@/auth";
import { ConvexClientProvider } from "../ConvexClientProvider";
import { SignOut } from "@/components/SignOut";

export default async function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <main className="container max-w-2xl flex flex-col gap-8">
        <ConvexClientProvider session={session}>
          {children}
        </ConvexClientProvider>
        <SignOut />
      </main>
    </>
  );
}
