"use client";

import { FaLongArrowAltLeft } from "react-icons/fa";

import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section id="our-story" className="bg-gray-200 p-4 h-screen pb-44">
        <div className="text-gray-400 flex  justify-center gap-2 items-center absolute top-5 left-16">
          <FaLongArrowAltLeft className="text-primary" />
          <Link href="/" className="text-primary">
            Back to Home
          </Link>
        </div>
        <div className="w-full pt-28 flex justify-center flex-col">
          <h4 className="text-primary text-2xl md:text-4xl font-light text-center">
            Contact Kurt and Cecile
          </h4>
          <p className="max-w-[500px] text-gray-500 text-center  font-light py-4 self-center text-sm md:text-base tracking-wide">
            If you are having issues RSVPing, please send us a message and we
            will get back to you as soon as possible. Thanks!
          </p>
        </div>
        <div className="w-full mt-5 flex gap-6 max-w-[500px] mx-auto justify-evenly">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
