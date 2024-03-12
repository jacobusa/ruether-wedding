import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-28 space-y-6 relative flex justify-center flex-col content-center w-full">
      <h3 className="text-4xl text-center">Hope to see you there!</h3>
      <h3 className="font-brush  text-4xl text-center">Kurt & Cecile</h3>
      <span className=" absolute bottom-1 right-1 ">
        Website developed by{" "}
        <a
          href="https://www.linkedin.com/in/jacobus-badenhorst-0101"
          className="hover:text-black transition-all underline"
          target="_blank"
        >
          Kobus
        </a>
      </span>
    </footer>
  );
};
