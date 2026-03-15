"use client";
import Image from "next/image";
import kurtAndCecile from "../../public/images/balcony.jpg";
import blueMarbleImage from "../../public/images/blue-marble.png";

export const RSVP = () => {
  return (
    <section id="rsvp" className="pt-40 z-10 bg-gray-100 relative">
      <div className="flex flex-col md:flex-row">
        <div className="sm:basis-7/12 sm:my-20 relative h-[70vh] sm:h-[40vh] overflow-hidden">
          <div className="absolute  top-[30%] sm:left-[30%] left-[10%]  z-10">
            <h1 className=" text-3xl sm:text-4xl   text-gray-200 tracking-wider font-light">
              Find Your Reservation
            </h1>
            {/* <p className="text-gray-200 text-sm mt-6 tracking-wider leading-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nostrum quas repudiandae a unde ullam ab pariatur delectus illo
              esse.
            </p> */}
          </div>
          <div className="relative">
            <Image
              src={kurtAndCecile}
              alt="Kurt and cecile in italy"
              className="transition-all lg:-translate-y-[500px] "
              sizes="100%"
            />
            <div
              id="overlay"
              className="bg-black/40 absolute inset-0 z-0"
            ></div>
          </div>
        </div>
        <div className="md:basis-5/12 relative border-2 h-[450px] border-primary w-[95%] max-w-[450px]  mx-auto -translate-y-44 md:translate-y-8 md:mx-0">
          <Image
            src={blueMarbleImage}
            className="absolute  -translate-y-56 -z-10 top-[30%] left-[50%]"
            alt="white flower"
            sizes="100%"
            style={{ zIndex: 0 }}
          />
          <h5 className="pt-36 px-9 font-brush mx-auto text-secondary text-5xl sm:text-5xl mb-12">
            Thanks for coming everyone! <br /> - Kobus
          </h5>
        </div>
      </div>
    </section>
  );
};
