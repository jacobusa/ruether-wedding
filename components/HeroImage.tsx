"use client";
import * as React from "react";
import Image from "next/image";
import headerImage from "../public/images/kurt-and-cecile-proposal.jpg";
import { useEffect, useState } from "react";

export const HeroImage: React.FC = () => {
  const [objectPosition, setObjectPosition] = useState("bottom");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const updatePosition = () => {
      const width = window.innerWidth;
      if (width < 900) {
        setObjectPosition("right -250px bottom 0"); // Adjust as needed for smaller screens
        return;
      }
      setObjectPosition("right 0 bottom 0"); // Adjust as needed for larger screens
      return;
    };
    const updateHidden = () => {
      const scroll = scrollY;
      if (scroll < 1000) {
        setHidden(false); // Adjust as needed for larger screens
        return;
      }
      setHidden(true); // Adjust as needed for larger screens
      return;
    };

    // Update position on mount and when window resizes
    updatePosition();
    updateHidden();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updateHidden);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updateHidden);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <>
      <Image
        alt="kurt-and-cecile"
        src={headerImage}
        style={{ objectPosition, objectFit: "cover" }}
        className={`transition-all ${hidden && "hidden"}`}
        fill
        // objectFit="cover" // This makes the image cover the div, similar to background-size: cover;
        sizes="100vw"
        // objectPosition={objectPosition}
        // objectPosition="-700px bottom"
        // quality={100} // Adjust quality as needed
        priority // Load the image immediately with the highest priority
        placeholder="blur" // Optional: Use a blurred version while loading (requires a blurDataURL prop)
      />
      <div id="overlay" className="bg-black/40 absolute inset-0 z-0"></div>
    </>
  );
};
