import * as React from "react";

interface DirectionsProps {}

export const Directions: React.FC<DirectionsProps> = ({}) => {
  return (
    <section className="antialiased pb-28 bg-gray-100 text-gray-800 flex flex-col">
      <h5 className="pt-20 font-brush mx-auto text-secondary text-5xl sm:text-7xl mb-12">
        Directions
      </h5>
      <div className="container relative mx-auto px-6 flex flex-col space-y-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.2804632740153!2d-119.42724222295323!3d49.8559760714847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8c8c0718c229%3A0x72cc47935932396c!2sThe%20Harvest%20Golf%20Club!5e0!3m2!1sen!2sca!4v1725045604211!5m2!1sen!2sca"
          width="100%"
          height="500"
          style={{ borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
