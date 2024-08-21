"use client";
import * as React from "react";
import { HeroImage } from "./HeroImage";

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed  w-full h-screen -z-10 flex justify-center">
        <HeroImage />
      </div>
      <header className="flex h-screen flex-col z-10 content-center justify-center">
        <h2 className="uppercase text-xs  tracking-widest text-gray-300 self-center">
          we are getting married!
        </h2>
        <h1 className="tracking-tight self-center text-gray-200 my-10 text-[14vw] lg:text-9xl font-brush">
          Kurt <strong className="font-medium mx-2">&</strong> Cecile
        </h1>
        <div className="flex justify-center content-center">
          <div className="bg-orange-200/40 w-full h-[1px] self-center" />
          <h3 className="uppercase text-gray-300 self-center whitespace-nowrap w-full text-center tracking-wide">
            Save the Date
          </h3>
          <div className="bg-orange-200/40 w-full h-[1px] self-center" />
        </div>
        <p className="self-center mt-10 font-extralight text-gray-300 text-xl md:text-3xl py-4 px-8">
          August 2nd 2025
        </p>
        <button
          className="self-center  mt-10 font-thin text-gray-300 cursor-pointer text-xl md:text-3xl border-2 border-orange-200/40 w-64 py-4 px-8 z-50"
          onClick={() => {
            const rsvpElement = document.getElementById("rsvp");
            if (rsvpElement) {
              rsvpElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          RSVP
        </button>
      </header>
    </div>
  );
};
