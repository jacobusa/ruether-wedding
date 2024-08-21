import * as React from "react";
import flowerImage from "../public/images/flower.png";
import ovalImage from "../public/images/cecile-kurt-wedding-oval.png";
import Image from "next/image";

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="bg-gray-100 p-4 pb-44">
      <div className="w-full pt-28 flex justify-center flex-col">
        <Image
          alt="wedding flower"
          className="w-24 h-11 self-center"
          src={flowerImage}
        />
        <h4 className="text-gray-800 text-2xl md:text-5xl font-light text-center">
          Our Story
        </h4>
        <p className="max-w-[700px] text-gray-500 text-center  font-light py-4 self-center text-sm md:text-base tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          repellendus totam modi voluptas cum commodi aspernatur ut minima a,
          excepturi odit vel, fuga, suscipit dolores possimus quam reprehenderit
          voluptates dolor. Perferendis totam eius aut molestias
        </p>
        <div className="mt-10 self-center w-full flex flex-col md:flex-row  max-w-[1000px]">
          <div className="mb-4">
            <h5 className="text-gray-800 lg:whitespace-nowrap text-2xl md:text-4xl mb-7">
              Cecile Badenhorst
            </h5>
            <p className="text-gray-500 max-w-[600px]  font-light text-sm leading-6 tracking-wide md:text-right">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              doloremque earum fugit voluptatem repudiandae unde necessitatibus.
              Recusandae, itaque praesentium voluptatibus modi veritatis
              reiciendis ea ducimus, consectetur delectus, excepturi omnis
              eaque.
            </p>
          </div>
          <div className="flex justify-center content-center w-full">
            <Image
              alt="Cecile and kurt oval photo"
              src={ovalImage}
              className="w-[400px] shrink-0"
            />
          </div>
          <div className="md:mt-32">
            <h5 className="text-gray-800 text-2xl text-right md:text-left md:text-4xl mb-7">
              Kurt Ruether
            </h5>
            <div className="flex justify-end">
              <p className="text-gray-500 max-w-[600px] font-light text-sm leading-6 text-right md:text-left tracking-wide">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cumque, doloremque earum fugit voluptatem repudiandae unde
                necessitatibus. Recusandae, itaque praesentium voluptatibus modi
                veritatis reiciendis ea ducimus, consectetur delectus, excepturi
                omnis eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
