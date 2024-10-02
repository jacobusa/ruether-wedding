"use client";

import { Navbar } from "@/components/Navbar";
import { RSVPForm } from "@/components/RSVPForm";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
export default function RSVPHome() {
  const { viewer } = useQuery(api.users.getViewerInfo) ?? {};
  // if (true) {
  //   return (
  //     <>
  //       <div className="h-screen w-screen bg-slate-600">
  //         <Skeleton className="h-5 w-full" />
  //         <Skeleton className="h-5 w-full" />
  //         <Skeleton className="h-5 w-full" />
  //       </div>
  //     </>
  //   );
  // }
  const rsvp = useQuery(api.rsvp.getRSVP, {
    userId: viewer?._id,
  });

  return (
    <>
      <Navbar />
      <section className="w-full max-w-4xl mx-auto inset-0 min-h-max flex flex-col justify-between p-4 md:p-24">
        <h1 className="tracking-widest self-center mb-10 font-bold text-secondary text-[10vw] lg:text-5xl font-brush">
          RSVP
        </h1>
        <RSVPForm rsvp={rsvp} />
      </section>
    </>
  );
}
