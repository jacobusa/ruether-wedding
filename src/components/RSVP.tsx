import Image from "next/image";
import kurtAndCecile from "../../public/images/balcony.jpg";
import whiteFlowerImage from "../../public/images/white-flower.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export const RSVP = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const updateScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, scrollY / 15]);
  return (
    <section className="h-screen pt-40 z-10 bg-gray-100 relative">
      <div className="flex">
        <div
          ref={container}
          className="basis-7/12 my-20 relative h-[40vh] overflow-hidden"
        >
          <div className="absolute max-w-[50%] top-[40%] left-[30%] z-10">
            <h1 className=" text-4xl  text-gray-200 tracking-wider font-light">
              Will You Attend?
            </h1>
            <p className="text-gray-200 text-sm mt-6 tracking-wider leading-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nostrum quas repudiandae a unde ullam ab pariatur delectus illo
              esse.
            </p>
          </div>
          <motion.div style={{ y: y.get() - 800 }} className="relative">
            <Image
              src={kurtAndCecile}
              alt="something"
              className="transition-all "
              sizes="100%"
            />
            <div
              id="overlay"
              className="bg-black/40 absolute inset-0 z-0"
            ></div>
          </motion.div>
        </div>
        <div className="basis-5/12  relative border-2 border-primary max-w-96 h-[50vh] self-center bg-white">
          <Image
            src={whiteFlowerImage}
            className="absolute -translate-y-56 -z-10 top-[40%] left-[90%]"
            alt="white flower"
            sizes="100%"
          />
          <form className="shadow-2xl relative z-10 p-10 flex justify-between flex-col shadow-primary ring-1 ring-gray-900/5 h-full  md:col-span-2">
            <div>
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
                placeholder="Name"
                className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="hidden text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="block w-full p-3  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="hidden text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="block w-full p-3 min-h-48  border-0 bg-gray-100  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus:ring-offset-primary outline-primary sm:text-sm sm:leading-6"
              />
            </div>
            <button className="border tracking-widest uppercase text-primary font-light text-sm border-primary bg-white hover:bg-primary hover:text-white transition-all w-[50%] text white py-3 px-10">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
