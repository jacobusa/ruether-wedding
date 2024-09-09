"use client";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { UsersList } from "@/components/UsersList";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UsersHome() {
  const router = useRouter();
  const { viewer } = useQuery(api.users.getViewerInfo) ?? {};
  useEffect(() => {
    if (!viewer) return;
    if (!viewer.admin) {
      router.push("/");
    }
  }, [viewer]);

  return (
    <>
      <Navbar />
      <section className="w-full max-w-7xl mx-auto inset-0 min-h-max flex flex-col justify-between p-4 md:p-24">
        <h1 className="tracking-widest self-center mb-10 font-bold text-secondary text-[10vw] lg:text-5xl font-brush">
          Users
        </h1>
        {viewer && viewer.admin && (
          <>
            <Link href={"/users/create-user"} className="w-56 ml-auto my-4">
              <Button label="Add User" variant="primary" />
            </Link>
            <UsersList />
          </>
        )}
      </section>
    </>
  );
}
