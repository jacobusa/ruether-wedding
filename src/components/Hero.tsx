import * as React from "react";
import { HeroImage } from "./HeroImage";

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed  w-full h-screen -z-10 flex justify-center">
        <HeroImage />
      </div>
      <header className="flex h-screen flex-col z-10 content-center justify-center">
        <h2 className="uppercase text-xs tracking-widest text-gray-300 self-center">
          we are getting married
        </h2>
        <h1 className="tracking-tight self-center text-gray-200 my-10 md:text-9xl lg:text-9xl font-brush">
          Kurt <strong className="font-medium mx-2">&</strong> Cecile
        </h1>
        <div className="flex justify-center content-center">
          <div className="bg-orange-200/35 w-full h-[1px] self-center" />
          <h3 className="uppercase text-gray-300 self-center w-full text-center tracking-wide">
            Save the Date
          </h3>
          <div className="bg-orange-200/35 w-full h-[1px] self-center" />
        </div>
        <p className="self-center mt-10 font-extralight text-gray-300 text-3xl py-4 px-8">
          August 28th 2025
        </p>
        <a
          href="google.com"
          target="_blank"
          className="self-center mt-10 font-thin text-gray-300 cursor-pointer text-3xl border-2 border-orange-200/35 py-4 px-8 z-50"
        >
          See Our Registry
        </a>
      </header>
    </div>
  );
};
