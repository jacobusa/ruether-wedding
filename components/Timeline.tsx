import { FC } from "react";
import gallery1 from "../public/images/gallery/1.jpg";
import gallery2 from "../public/images/gallery/2.jpg";
import gallery3 from "../public/images/gallery/3.jpg";
import gallery4 from "../public/images/gallery/4.jpg";
import flowerImage from "../public/images/single-gold-flower.png";
import Image from "next/image";

export const Timeline: FC = () => {
  return (
    <section className="antialiased bg-gray-100 text-gray-800 flex flex-col">
      <h5 className="pt-20 font-brush mx-auto text-secondary text-5xl sm:text-7xl mb-4">
        Wedding Day
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
              <strong className="text-gray-500">3:30 pm</strong>
              <p className="text-gray-500 text-xl font-medium my-2">
                Guests Gather and Find Their Seats
              </p>
              <p className="text-sm">
                Please arrive by this time to find your seats and get
                comfortable. Take a moment to relax and enjoy the beautiful
                surroundings as we prepare to celebrate this special day.
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
              <strong className="text-gray-500">4:00 pm</strong>
              <p className="text-gray-500 text-xl font-medium my-2">
                Wedding Ceremony
              </p>
              <p className="text-sm">
                The ceremony will begin promptly at 4:00 PM. Join us as we
                witness the exchange of vows and celebrate the union of the
                happy couple. Please be sure to turn off or silence your phones
                during the ceremony.
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
              <strong className="text-gray-500">4:30 pm</strong>
              <p className="text-gray-500 text-xl font-medium my-2">
                Cocktails
              </p>
              <p className="text-sm">
                Following the ceremony, enjoy a selection of cocktails. This is
                a great opportunity to mingle with other guests, congratulate
                the newlyweds, and pose for some pictures.
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
              <strong className="text-gray-500">5:30 pm</strong>
              <p className="text-gray-500 text-xl font-medium my-2">
                Dinner and Reception
              </p>
              <p className="text-sm">
                The dinner and reception will start at 5:30 PM. Join us in
                celebrating with a delicious meal, heartfelt toasts, and
                dancing. The evening will be filled with joy, laughter, and
                plenty of fun on the dance floor!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="wedding flower"
        className="w-48 mt-20 self-center"
        src={flowerImage}
      />
    </section>
  );
};
