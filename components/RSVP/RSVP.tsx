"use client";
import Image from "next/image";
import kurtAndCecile from "../../public/images/balcony.jpg";
import blueMarbleImage from "../../public/images/blue-marble.png";
import { useState } from "react";
import { ListUsersRSVP } from "./ListUsersRSVP";
import Link from "next/link";
import { Button } from "../ui/Button";

export const RSVP = () => {
  const [name, setName] = useState<string | undefined>(undefined);
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
          <div className="shadow-2xl  relative z-40 p-3 sm:px-10 flex justify-center  space-y-4 flex-col shadow-primary bg-white ring-gray-900/5 h-full  md:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target) {
                  const formData = new FormData(e.currentTarget);
                  const formName = Object.fromEntries(formData);
                  setName(formName.name as string);
                }
              }}
              className="relative z-10 flex justify-center  space-y-4 flex-col shadow-primary ring-gray-900/5   md:col-span-2"
            >
              <label
                htmlFor="name"
                className="hidden text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              />
              {name?.length && name?.length <= 2 ? (
                <p className="text-gray-500 text-xs">
                  Enter at least 3 letters
                </p>
              ) : (
                <></>
              )}
              <Button label="Search" variant="primary" />
            </form>
            {name?.length && name?.length > 2 ? (
              <ListUsersRSVP name={name} />
            ) : (
              <></>
            )}
            <div className="text-gray-400 absolute bottom-5 left-5">
              <span className="mr-1">Having trouble?</span>
              <Link href="/contact" className="text-secondary underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
