import { FC } from "react";
import gallery1 from "../public/images/gallery/1.jpg";
import gallery2 from "../public/images/gallery/2.jpg";
import gallery3 from "../public/images/gallery/3.jpg";
import gallery4 from "../public/images/gallery/4.jpg";
import flowerImage from "../public/images/flower.png";
import Image from "next/image";

export const Timeline: FC = () => {
  return (
    <section className="antialiased bg-gray-100 text-gray-800 flex flex-col">
      <h5 className="pt-20 font-brush mx-auto text-[#bf896b] text-5xl sm:text-7xl mb-4">
        Wedding Timeline
      </h5>
      <div className="container relative mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute w-2 z-0 h-full bg-white shadow-md left-17 inset-0 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <Image
            src={gallery1.src}
            alt="Wedding timeline photo"
            width={96}
            height={96}
            className="timeline-img"
          />
          <div className="timeline-container">
            <div aria-hidden={true} className="timeline-pointer"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <strong className="text-gray-500">10:00 am</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                commodi molestias fugit facere eos doloremque rem enim ab
                quaerat quidem error, dolore est autem explicabo eveniet officia
                eum blanditiis nobis.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <Image
            src={gallery2.src}
            alt="Wedding timeline photo"
            width={96}
            height={96}
            className="timeline-img"
          />
          <div className="timeline-container timeline-container-left">
            <div
              aria-hidden={true}
              className="timeline-pointer timeline-pointer-left"
            ></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <strong className="text-gray-500">3:00 am</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                commodi molestias fugit facere eos doloremque rem enim ab
                quaerat quidem error, dolore est autem explicabo eveniet officia
                eum blanditiis nobis.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <Image
            src={gallery3.src}
            alt="Wedding timeline photo"
            width={96}
            height={96}
            className="timeline-img"
          />
          <div className="timeline-container">
            <div aria-hidden={true} className="timeline-pointer"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <strong className="text-gray-500">3:00 am</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                commodi molestias fugit facere eos doloremque rem enim ab
                quaerat quidem error, dolore est autem explicabo eveniet officia
                eum blanditiis nobis.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <Image
            src={gallery4.src}
            alt="Wedding timeline photo"
            width={96}
            height={96}
            className="timeline-img"
          />
          <div className="timeline-container timeline-container-left ">
            <div
              aria-hidden={true}
              className="timeline-pointer timeline-pointer-left "
            ></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <strong className="text-gray-500">3:00 am</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                commodi molestias fugit facere eos doloremque rem enim ab
                quaerat quidem error, dolore est autem explicabo eveniet officia
                eum blanditiis nobis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="wedding flower"
        className="w-36 mt-7 self-center"
        src={flowerImage}
      />
    </section>
  );
};
