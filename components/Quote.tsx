import * as React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Quote: React.FC = () => {
  return (
    <section className="bg-gray-50 pb-40 sm:pb-20 ">
      <div className="h-40" />
      <div className="bg-[#f3f0ed] py-4">
        <div className="translate-y-20 flex justify-center content-center flex-col max-w-[500px] mx-auto items-center text-center border px-4 py-5 border-primary">
          <FaQuoteLeft
            size={30}
            className="-translate-y-10 bg-[#f3f0ed] w-10"
            color="#8ec2ce"
          />
          <h6 className="text-2xl">
            <q className="text-gray-500">
              I would rather share one lifetime with you than face all the ages
              of this world alone.
            </q>
            <p className="mt-6 text-gray-400 uppercase text-sm tracking-wider">
              - J.R.R. Tolkien
            </p>
          </h6>
          <FaQuoteRight
            className="translate-y-8 bg-gray-50 w-10"
            color="#8ec2ce"
          />
        </div>
      </div>
      <div className="h-40" />
    </section>
  );
};
