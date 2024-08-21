"use client";

import Image from "next/image";
import { WebGallery } from "./WebGallery";

const horizontalImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "10.jpg",
];

const verticalImages = ["4.jpg", "5.jpg", "9.jpg", "11.jpg", "12.jpg"];

export const Gallery: React.FC = () => {
  return (
    <div className="relative">
      <div className="md:hidden">
        <div className="flex flex-col h-full bg-white m-auto p-auto">
          <div className="flex overflow-x-scroll scroll-smooth py-32 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              {horizontalImages.map((src: any, index: number) => (
                <div key={src} className="inline-block px-3">
                  <Image
                    alt="image"
                    sizes="100%"
                    width={300}
                    height={700}
                    className="h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    src={`/images/gallery/${src}`}
                    priority
                  />
                </div>
              ))}
              {verticalImages.map((src: any, index: number) => (
                <div key={src} className="inline-block px-3 overflow-hidden">
                  <Image
                    alt="image"
                    sizes="100%"
                    width={1000}
                    height={1000}
                    className="object-contain max-w-2xl overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    src={`/images/gallery/${src}`}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <WebGallery />
      </div>
    </div>
  );
};
