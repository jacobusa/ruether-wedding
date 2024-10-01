/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import cecileImage from "../public/images/cecile.png";
import kurtImage from "../public/images/kurt.png";
import fransImage from "../public/images/frans.png";
import deanImage from "../public/images/dean.png";
import jasmineImage from "../public/images/jasmine.png";
import nicciImage from "../public/images/nicci.png";
import kobusImage from "../public/images/kobus.jpg";
import teganImage from "../public/images/tegan.png";
import Image, { StaticImageData } from "next/image";

interface WeddingPartyProps {}

export const WeddingParty: React.FC<WeddingPartyProps> = () => {
  return (
    <section className="antialiased  bg-gray-100 text-gray-800 flex flex-col">
      <h5 className="font-brush mx-auto text-secondary text-5xl sm:text-7xl mb-4">
        Wedding Party
      </h5>
      <div className="container mx-auto  mt-8 max-w-[1000px] px-0 space-x-3 md:px-6  flex">
        <div className="flex-grow space-y-6 flex flex-col border-2 border-primary  py-10 border-r-0 ">
          <div className="mx-auto relative">
            <Image
              alt="cecile"
              src={cecileImage}
              className="rounded-full grayscale"
              height={450}
              width={350}
            />
            <p className="font-medium font-brush text-gray-600 my-4 text-4xl text-center">
              Cecile
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <ImageCard
              bioText="Cecile met Nicci when she did her eyelash extensions in Lethbridge back in 2019 and as they say the rest is history.  She is a beautiful, fun-loving, smart girl with a wicked dark sense of humor that never fails to make Cecile laugh so hard she is gasping for air. Nicci is also from South Africa and is entrepreneur extraordinaire who recently launched two start-up companies The Knittens and LashMat. She is also a cat lover and currently resides in Lethbridge where she hard at work on her business pursuits."
              imageData={nicciImage}
              name="Nicci"
              title="Maid Of Honor"
            />
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <ImageCard
              bioText="Cecile met Jasmin at Nicci’s 30th Birthday party and immediately hit it off. Jasmin is a beautiful, kind, funny and thoughtful girl who shares Cecile tastes in music and as well as dark humor. She and her husband Hein are also from South Africa and live with their two young furry children in their home in Chestermere. She works as a Marketing Automation Advisor for Servus Credit Union and is an avid outdoorswoman. When she is not outside taking beautiful pictures by picturesque trails, she is either chasing auroras or watching her kittens battle it out WWE style."
              imageData={jasmineImage}
              name="Jasmine"
              title="Bridesmaid"
            />
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <ImageCard
              bioText="Kobus is Cecile’s younger brother, and despite her not having a say in the matter, they’ve been stuck with each other for life. He lives in Vancouver, living it up with his recurring shenanigans. Luckily for him, he is also the only sibling that did not inherit the ADHD gene. Although he is the higher functioning of the three siblings, he will never miss out on a good time and is always the life of the party. He works from his home office as a Software Engineer and is in fact the guy who put this website together. If he's not playing tennis in Vancouver parks, he is usually planning his next epic adventure. Make sure to buy him a drink if you see him because he always has some interesting stories to tell."
              imageData={kobusImage}
              name="Kobus"
              title="Bridesman"
            />
          </div>
        </div>
        <div className="flex-grow space-y-6 flex flex-col border-primary py-10  !mx-0 border-l-0 border-2 ">
          <div className="mx-auto relative">
            <Image
              alt="kurt"
              src={kurtImage}
              className="rounded-full grayscale"
              height={450}
              width={350}
            />
            <p className="font-medium font-brush text-gray-600 my-4 text-4xl text-center">
              Kurt
            </p>
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <ImageCard
              bioText="Dean is the youngest in the Ruether family but carries the brightest light. A hippie at heart, his love of nature aligns with his career as a gardener, helping to keep the City of Calgary vibrant and full of life. In his free time, you can find Dean outdoors, whether kayaking, camping, or hiking. Dean and Kurt often get together to spin records and plan camping trips, and if you get the chance to talk to Dean, he’ll teach you how to camp properly—though our parents might disapprove! Dean and Kurt’s relationship grew when he moved in with Cecile and Kurt while finding his roots in his new hometown of Calgary, where, in her natural way, Cecile converted him into a cat guy."
              imageData={deanImage}
              name="Dean"
              title="Best Man"
            />
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <ImageCard
              bioText="Kurt has known Tegan since 2010 through mutual friends, and they’ve maintained a strong friendship ever since. Tegan lives in Blackfalds and works at Joffre as a power engineer, but he’s still trying to achieve his ultimate goal of making the most money while doing the least amount of work. Unfortunately, his golf game can’t quite support that dream! Tegan is always ready for a good time, whether it’s traveling to Cabo with Kurt and his family, going on golf trips, or enjoying a good barbecue. Although he looks tough on the outside, his music taste might surprise you—you’ll find Sabrina Carpenter and Cher Lloyd on his Spotify playlist. Respect."
              imageData={teganImage}
              name="Tegan"
              title="Groomsman"
            />
          </div>
          <div className="flex mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
            <ImageCard
              bioText="Frans is Cecile’s older brother and the reason Kurt and Cecile were able to meet in the first place. Frans and Kurt first got to know each other in Grade 8 when they were both cut from the singles badminton team and paired together for doubles. Kurt was quickly introduced to the Badenhorst family and was practically adopted by them. Frans is always up for an adventure, especially if it involves attending electronic music festivals or tennis events. Otherwise, he’s busy being a business financial advisor or traveling back and forth to be with family. If you get the chance to have a drink with Frans, you’ll discover his sense of humor is identical to Cecile’s."
              imageData={fransImage}
              name="Frans"
              title="Groomsman"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ImageCardProps {
  name: string;
  title: string;
  imageData: StaticImageData;
  bioText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  bioText,
  imageData,
  name,
  title,
}) => {
  return (
    <div className="flex relative mx-auto justify-center flex-col max-w-[150px] sm:max-w-[250px]">
      <Image src={imageData} alt={name} className="rounded-full grayscale" />
      <span className="text-gray-600 text-sm mx-auto my-2">{title}</span>
      <p className="font-medium text-gray-600 text-xl text-center">{name}</p>
      <div className="absolute rounded-xl  overflow-y-scroll sm:overflow-auto  -inset-4 sm:-inset-x-20  sm:-inset-y-5 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center content-center  justify-center">
        <p className="text-white text-xs absolute sm:relative inset-0 font-semibold p-2 ">
          {bioText}
        </p>
      </div>
    </div>
  );
};
