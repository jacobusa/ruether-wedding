import * as React from "react";
import Image from "next/image";
import headerImage from "../public/images/kurt-and-cecile-proposal.jpg";
import { useEffect, useState } from "react";

export const Hero: React.FC = () => {
  const [objectPosition, setObjectPosition] = useState("bottom");

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

    // Update position on mount and when window resizes
    updatePosition();
    window.addEventListener("resize", updatePosition);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updatePosition);
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <>
      <Image
        alt="kurt-and-cecile"
        src={headerImage}
        style={{ objectPosition, objectFit: "cover" }}
        className="transition-all"
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
