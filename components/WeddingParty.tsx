import * as React from "react";
import cecileImage from "../public/images/cecile.png";
import kurtImage from "../public/images/kurt.png";
import Image from "next/image";

interface WeddingPartyProps {}

export const WeddingParty: React.FC<WeddingPartyProps> = ({}) => {
  return (
    <section className="antialiased  bg-gray-100 text-gray-800 flex flex-col">
      <h5 className="font-brush mx-auto text-secondary text-5xl sm:text-7xl mb-4">
        Wedding Party
      </h5>
      <div className="container mx-auto mt-8 max-w-[1000px] px-6 flex">
        <div className="flex-grow flex flex-col">
          <div className="mx-auto relative">
            <Image
              alt="cecile"
              src={cecileImage}
              className="rounded-full"
              height={400}
              width={300}
            />
            <p className="font-medium font-brush text-gray-600 my-4 text-4xl text-center">
              Cecile
            </p>
          </div>
          <p className="font-medium text-gray-600 text-xl text-center">
            Nicci (Bridesmaid)
          </p>
          <p className="font-medium text-gray-600 text-xl text-center">
            Jasmine
          </p>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="mx-auto relative">
            <Image
              alt="kurt"
              src={kurtImage}
              className="rounded-full"
              height={400}
              width={300}
            />
            <p className="font-medium font-brush text-gray-600 mb-4 mt-3 text-4xl text-center">
              Kurt
            </p>
          </div>
          <p className="font-medium text-gray-600 text-xl text-center">
            Teagan (Best man)
          </p>
          <p className="font-medium text-gray-600 text-xl text-center">Frans</p>
        </div>
      </div>
    </section>
  );
};
