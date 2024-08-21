"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ErrorPage() {
  return (
    <>
      <section id="our-story" className="bg-gray-200 p-4 h-screen pb-44">
        <div className="w-full pt-28 flex justify-center flex-col">
          <h4 className="text-primary text-2xl md:text-4xl font-light text-center">
            RSVP Link Expired. Try again
          </h4>
        </div>
        <Link href="/" className="flex my-8">
          <Button
            className="bg-transparent max-w-[400px] mx-auto "
            label="Back to Home"
            variant="primary"
          />
        </Link>
      </section>
    </>
  );
}
