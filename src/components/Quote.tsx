import * as React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Quote: React.FC = () => {
  return (
    <section className="bg-gray-50 h-[70vh] ">
      <div className="h-40" />
      <div className="bg-[#f3f0ed] py-4">
        <div className="translate-y-20 flex justify-center content-center flex-col max-w-[500px] mx-auto items-center text-center border px-4 py-5 border-[#bf896b]">
          <FaQuoteLeft
            size={30}
            className="-translate-y-10 bg-[#f3f0ed] w-10"
            color="#bf896b"
          />
          <h6 className="text-2xl">
            <q className="text-gray-500">
              True love stands by your side on good days, and even closer on bad
              days.
            </q>
            <p className="mt-4 text-gray-400 uppercase text-sm tracking-wider">
              The Internet
            </p>
          </h6>
          <FaQuoteRight
            className="translate-y-8 bg-gray-50 w-10"
            color="#bf896b"
          />
        </div>
      </div>
      <div className="h-40" />
    </section>
  );
};
