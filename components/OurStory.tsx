import * as React from "react";
import flowerImage from "../public/images/gold-flower.png";
import ovalImage from "../public/images/cecile-kurt-wedding-oval.png";
import Image from "next/image";

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="bg-gray-100 p-4 pb-44">
      <div className="w-full pt-28 flex justify-center flex-col">
        <Image
          alt="wedding flower"
          className="w-48  self-center"
          src={flowerImage}
        />
        <h4 className="text-4xl md:text-6xl font-brush text-secondary font-light text-center">
          Our Story
        </h4>
        <p className="max-w-[700px] text-gray-600 text-center  font-light py-4 self-center text-sm  tracking-wide">
          Kurt and Cecile met through Cecile’s brother Frans while growing up in
          Red Deer. They dated in High school before going their separate ways.
          Cecile went off to University and Kurt pursued his career in
          Paramedicine. But in the summer of 2017, they rekindled they’re
          romance and made it last. They both share a house in Calgary and are
          the proud servants of two furry overlords.
        </p>
        <div className="mt-10 self-center w-full flex flex-col md:flex-row  max-w-[1300px]">
          <div className="mb-4">
            <h5 className="text-secondary font-brush lg:whitespace-nowrap text-4xl md:text-6xl mb-7">
              Cecile Badenhorst
            </h5>
            <p className="text-gray-600 max-w-[1200px]  font-light text-sm tracking-wide md:text-right">
              Born in the wilds of South Africa, Cecile was whisked away to the
              frozen tundra of Canada at the tender age of seven. Armed with a
              bilingual tongue that can switch between Afrikaans and English,
              they&#39;ve mastered the art of confusing the heck out of people.
              She is a self-described nerd and will find a fascination with the
              weirdest things possible. As a researcher stationed at the
              University of Calgary, she&#39;s boldly declared war on
              Parkinson’s disease, armed with determination and a hefty dose of
              caffeine. In between Cecile’s busy schedule she finds solace in
              the soothing world of gardening. And is particularly fond of
              aquaponics experiments. Guilty pleasures include enjoys indulging
              their inner nerd with murder documentaries and reality TV. Their
              dark sense of humor has been known to raise eyebrows and elicit
              nervous laughter, but hey, life&#39;s too short not to laugh at
              the absurdity of it all. Cecile has admittedly become a bit of a
              crazy cat lady with dreams of amassing a feline army that would
              make even the ancient Egyptians jealous. Kurt, on the other hand,
              is less enthused about the prospect of living in a house overrun
              by whiskered dictators.
            </p>
          </div>
          <div className="flex justify-center mx-auto content-center w-full min-w-[300px] max-w-[400px]">
            <Image
              alt="Cecile and kurt oval photo"
              src={ovalImage}
              className="w-[500px] h-fit my-auto shrink-0"
            />
          </div>
          <div className="md:mt-32">
            <h5 className="text-secondary font-brush text-2xl text-right md:text-left md:text-6xl mb-7">
              Kurt Ruether
            </h5>
            <div className="flex justify-end">
              <p className="text-gray-600 max-w-[1200px] font-light text-sm text-right md:text-left tracking-wide">
                Kurt&#39;s upbringing unfolded in the quieter landscape of Red
                Deer, Alberta, a place where he roamed outdoors, honing skills
                in needle safety pickups as this would transition into part of
                his career as a Firemedic. As he matured, Kurt&#39;s love for
                nature blossomed, often bonding with his brother Dean over
                therapeutic camping trips in the mountains—a pursuit not
                entirely aligned with his parents&#39; preferences, but to each
                their own. During his leisure time, Kurt enjoys indulging in
                Cecile&#39;s fascination with murder documentaries, hitting the
                golf course (in classic cat dad style), spinning records, and
                delving into the intricacies of crafting the perfect hi-fi audio
                setup for his family&#39;s enjoyment.
                <br />
                <br />
                Kurt initially encountered Cecilia through her brother Frans,
                who has been one of Kurt&#39;s closest companions since Grade 8.
                It soon became evident that Kurt was leveraging his friendship
                with Frans to learn more about Cecilia. And now, two decades on,
                here we are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
