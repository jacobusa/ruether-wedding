"use client";

import { Navbar } from "@/components/Navbar";
import { RSVPForm } from "@/components/RSVPForm";
import { Skeleton } from "@/components/ui/Skeleton";
// import { SignOut } from "@/components/SignOut";
// import { Skeleton } from "@/components/ui/Skeleton";
// import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";

export default function RSVPHome() {
  // const { viewer } = useQuery(api.users.getViewerInfo) ?? {};
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

  return (
    <>
      <Navbar />
      <RSVPForm />
    </>
  );
}
