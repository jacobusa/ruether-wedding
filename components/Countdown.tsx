"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ringImage from "../public/images/ring.jpg";
import { useDimension } from "@/hooks/useDimension";
import { useScroll, useTransform, motion } from "framer-motion";

export const Countdown: React.FC = () => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = new Date("2025-08-02T07:00:00.000Z");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      if (difference < 0) {
        setDays(0);
        setMinutes(0);
        setHours(0);
        setSeconds(0);
        return;
      }
      const helpful = 1000 * 60 * 60 * 24;
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const container = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const updateScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    if (!container.current) return;
    if (container.current.clientWidth < 650) return;
    updateScroll();
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [container.current]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, scrollY / 15]);

  return (
    <section ref={container} className="relative h-[70vh] overflow-hidden">
      <motion.div className="h-[120vh]" style={{ y: y.get() - 200 }}>
        <Image
          alt="kurt-and-cecile"
          src={ringImage}
          fill
          sizes="100vw"
          className="object-cover relative"
        />
        <div id="overlay" className="bg-black/40 absolute inset-0 z-0"></div>
      </motion.div>
      <h4 className="absolute inset-0 top-28 font-brush text-tertiary text-4xl sm:text-7xl flex justify-center">
        We Can&#39;t Wait
      </h4>
      <ul className="w-full absolute inset-0 top-[40%] flex  text-tertiary place-content-center  gap-5 mx-auto ">
        <li>
          <div
            className="border-tertiary border-2 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
            id="cdD"
          >
            {days}
          </div>
          <p className="text-center text-sm mt-2 tracking-wide">Days</p>
        </li>
        <li>
          <div
            className="border-tertiary border-2 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
            id="cdH"
          >
            {hours}
          </div>
          <p className="text-center text-sm mt-2 tracking-wide">Hours</p>
        </li>
        <li>
          <div
            className="border-tertiary border-2 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
            id="cdM"
          >
            {minutes}
          </div>
          <p className="text-center text-sm mt-2 tracking-wide">Minutes</p>
        </li>
        <li>
          <div
            className="border-tertiary border-2 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
            id="cdS"
          >
            {seconds}
          </div>
          <p className="text-center text-sm mt-2 tracking-wide">Seconds</p>
        </li>
      </ul>
    </section>
  );
};
