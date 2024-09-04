export default async function CreateUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className=" flex bg-gray-100 min-h-screen w-screen flex-col gap-8">
        {children}
      </main>
    </>
  );
}
