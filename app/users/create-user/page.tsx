"use client";
import { Navbar } from "@/components/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from "next/link";
import { UserForm } from "@/components/UserForm";

export default function CreateUserHome() {
  return (
    <>
      <Navbar />
      <section className="w-full max-w-7xlmx-auto inset-0 min-h-max flex flex-col justify-between md:p-24">
        <Link href={"/users"}>
          <div className="flex mb-5 justify-center mr-auto text-gray-600 content-center space-x-3">
            <div className="my-auto">
              <FaLongArrowAltLeft />
            </div>
            <span>Back to users</span>
          </div>
        </Link>
        <h1 className="tracking-widest self-center mb-10 font-bold text-secondary text-[10vw] lg:text-5xl font-brush">
          Create User
        </h1>
        <div className="mx-auto">
          <UserForm />
        </div>
      </section>
    </>
  );
}
