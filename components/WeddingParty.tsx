/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import cecileImage from "../public/images/cecile.png";
import kurtImage from "../public/images/kurt.png";
import fransImage from "../public/images/frans.png";
import deanImage from "../public/images/dean.png";
import jasmineImage from "../public/images/jasmine.png";
import nicciImage from "../public/images/nicci.png";
import kobusImage from "../public/images/kobus.jpg";
import Image from "next/image";

interface WeddingPartyProps {}

export const WeddingParty: React.FC<WeddingPartyProps> = () => {
  return (
    <section className="antialiased  bg-gray-100 text-gray-800 flex flex-col">
      <h5 className="font-brush mx-auto text-secondary text-5xl sm:text-7xl mb-4">
        Wedding Party
      </h5>
      <div className="container mx-auto  mt-8 max-w-[1000px] px-0 space-x-3 md:px-6  flex">
        <div className="flex-grow space-y-6 flex flex-col border-2 border-primary md:rounded-full py-10 border-r-0 ">
          <div className="mx-auto relative">
            <Image
              alt="cecile"
              src={cecileImage}
              className="rounded-full grayscale"
              height={450}
              width={350}
            />
            <p className="font-medium font-brush text-gray-600 my-4 text-4xl text-center">
              Cecile
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <Image
              src={nicciImage}
              alt="nicci"
              className="rounded-full grayscale"
            />
            <span className="text-gray-600 text-sm mx-auto my-2">
              Maid Of Honor
            </span>
            <p className="font-medium text-gray-600 text-xl text-center">
              Nicci
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <Image
              src={jasmineImage}
              alt="jasmine"
              className="rounded-full grayscale"
            />
            <span className="text-gray-600 text-sm mx-auto my-2">
              Bridesmaid
            </span>
            <p className="font-medium text-gray-600 text-xl text-center">
              Jasmine
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <Image
              src={kobusImage}
              alt="kobus"
              className="rounded-full grayscale"
            />
            <span className="text-gray-600 text-sm mx-auto my-2">
              Bridesman
            </span>
            <p className="font-medium text-gray-600 text-xl text-center">
              Kobus
            </p>
          </div>
        </div>
        <div className="flex-grow space-y-6 flex flex-col border-primary py-10 md:rounded-full !mx-0 border-l-0 border-2 ">
          <div className="mx-auto relative">
            <Image
              alt="kurt"
              src={kurtImage}
              className="rounded-full grayscale"
              height={450}
              width={350}
            />
            <p className="font-medium font-brush text-gray-600 my-4 text-4xl text-center">
              Kurt
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <Image
              src={deanImage}
              alt="dean"
              className="rounded-full grayscale"
            />
            <span className="text-gray-600 text-sm mx-auto my-2">Best Man</span>
            <p className="font-medium text-gray-600 text-xl text-center">
              Dean
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <img
              src="https://placehold.co/400x400?text=Teagan"
              alt="teagan"
              className="rounded-full "
            />
            <span className="text-gray-600 text-sm mx-auto my-2">
              Groomsman
            </span>
            <p className="font-medium text-gray-600 text-xl text-center">
              Teagan
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <Image
              src={fransImage}
              alt="frans"
              className="rounded-full grayscale"
            />
            <span className="text-gray-600 text-sm mx-auto my-2">
              Groomsman
            </span>
            <p className="font-medium text-gray-600 text-xl text-center">
              Frans
            </p>
          </div>
        </div>
        {/* <div className="flex-grow flex flex-col">
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
        </div> */}
      </div>
    </section>
  );
};
