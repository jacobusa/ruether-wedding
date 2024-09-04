"use client";
import { Navbar } from "@/components/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { UserForm } from "@/components/UserForm";

export default function EditUserHome() {
  const params = useParams<{ id: string }>();
  const user = useQuery(api.users.getUserById, {
    id: params?.id as Id<"users"> | undefined,
  });
  return (
    <>
      <Navbar />
      <section className="w-full max-w-7xlmx-auto inset-0 min-h-max flex flex-col justify-between p-24">
        <Link href={"/users"}>
          <div className="flex mb-5 justify-center mr-auto text-gray-600 content-center space-x-3">
            <div className="my-auto">
              <FaLongArrowAltLeft />
            </div>
            <span>Back to users</span>
          </div>
        </Link>
        <h1 className="tracking-widest self-center mb-10 font-bold text-secondary text-[10vw] lg:text-5xl font-brush">
          Update User
        </h1>
        <div className="mx-auto">
          <UserForm user={user} />
        </div>
      </section>
    </>
  );
}
