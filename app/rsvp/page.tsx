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
      <RSVPForm rsvp={rsvp} />
    </>
  );
}
