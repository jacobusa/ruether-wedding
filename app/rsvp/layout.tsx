import { auth } from "@/auth";
import { ConvexClientProvider } from "../ConvexClientProvider";

export default async function RSVPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <main className=" flex bg-gray-100 min-h-screen w-screen flex-col gap-8">
        <ConvexClientProvider session={session}>
          {children}
        </ConvexClientProvider>
      </main>
    </>
  );
}
