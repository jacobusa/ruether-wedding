import * as React from "react";
import { GiDiamondRing, GiFoodTruck } from "react-icons/gi";
import { FaChampagneGlasses } from "react-icons/fa6";
import { HiOutlineCake } from "react-icons/hi";
import Image from "next/image";
import gallery1 from "../../public/images/gallery/1.jpg";
import gallery2 from "../../public/images/gallery/6.jpg";
import gallery3 from "../../public/images/gallery/7.jpg";
import gallery4 from "../../public/images/gallery/10.jpg";

export const Organization: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-600 min-h-[70vh]">
      <div className="max-w-[1300px] mx-auto">
        <h5 className="pt-20 pb-4 w-full ml-4 font-brush text-[#bf896b] text-6xl">
          Planning
        </h5>
        <div className="flex ">
          {/* <div className="p-4 relative"> */}
          <div className="group">
            <div className="relative border-2 group-hover:bg-primary  transition-all border-primary  py-8 px-4 overflow-hidden">
              <Image
                src={gallery1}
                alt="something"
                className="absolute inset-0 bg-cover transition-all group-hover:opacity-0 opacity-15"
              />
              <GiDiamondRing
                //       color="#bf896b"
                size={30}
                className="absolute top-2 left-3 text-primary group-hover:text-white"
              />
              <h6 className="text-primary text-3xl mt-2 group-hover:text-white">
                01
              </h6>
              <h6 className="font-normal text-2xl my-4 group-hover:text-white">
                Ceremony
              </h6>
              <p className="text-sm tracking-wide leading-7 group-hover:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem nemo rem hic suscipit possimus eius fugiat, soluta natus
                cumque temporibus.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative transition-all group-hover:bg-primary py-8 px-4 overflow-hidden border-y-2 border-primary">
              <Image
                src={gallery2}
                alt="something"
                className="absolute object-bottom inset-0 bg-cover group-hover:opacity-0 opacity-15"
              />
              <GiFoodTruck
                // color="#bf896b"
                size={30}
                className="absolute top-2 left-3 text-primary group-hover:text-white"
              />
              <h6 className="text-primary text-3xl mt-2 group-hover:text-white ">
                02
              </h6>
              <h6 className="font-normal text-2xl my-4 group-hover:text-white">
                Lunch Time
              </h6>
              <p className="text-sm tracking-wide leading-7 group-hover:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem nemo rem hic suscipit possimus eius fugiat, soluta natus
                cumque temporibus.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative transition-all border-y-2 group-hover:bg-primary border-primary border-l-2 py-8 px-4 overflow-hidden">
              <Image
                src={gallery3}
                alt="something"
                className="absolute object-bottom inset-0 bg-cover group-hover:opacity-0 opacity-15"
              />
              <FaChampagneGlasses
                // color="#bf896b"
                size={30}
                className="absolute text-primary group-hover:text-white top-2 left-3"
              />
              <h6 className="text-primary text-3xl mt-2 group-hover:text-white">
                03
              </h6>
              <h6 className="font-normal text-2xl my-4 group-hover:text-white">
                Party
              </h6>
              <p className="text-sm tracking-wide leading-7 group-hover:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem nemo rem hic suscipit possimus eius fugiat, soluta natus
                cumque temporibus.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="relative py-8 px-4 transition-all group-hover:bg-primary overflow-hidden border-2 border-primary">
              <Image
                src={gallery4}
                alt="something"
                className="absolute object-bottom inset-0 bg-cover opacity-15 group-hover:opacity-0"
              />
              <HiOutlineCake
                // color="#bf896b"
                size={30}
                className="absolute text-primary group-hover:text-white top-2 left-3"
              />
              <h6 className="text-primary text-3xl mt-2 group-hover:text-white">
                04
              </h6>
              <h6 className="font-normal text-2xl my-4 group-hover:text-white">
                Cake Cutting
              </h6>
              <p className="text-sm tracking-wide leading-7 group-hover:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem nemo rem hic suscipit possimus eius fugiat, soluta natus
                cumque temporibus.
              </p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73213.19267868267!2d-119.52295139004391!3d49.87884032323447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c730b3%3A0x4ef8e53ddab4c4f7!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1710217816788!5m2!1sen!2sca"
          width="100%"
          height="550"
          style={{ border: 3 }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=""></div>
    </section>
  );
};
