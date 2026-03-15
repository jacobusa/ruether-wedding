import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Quote } from "@/components/Quote";
import { Timeline } from "@/components/Timeline";
import { RSVP } from "@/components/RSVP";
import { Directions } from "@/components/Directions";
import { WeddingParty } from "@/components/WeddingParty";
import { Registry } from "@/components/Registry";

export default async function Home() {
  return (
    <>
      <main className="overflow-hidden font-bitter">
        <Hero />
        <OurStory />
        <Gallery />
        <Quote />
        <Countdown />
        <Timeline />
        <RSVP />
        <Directions />
        <WeddingParty />
        <Registry />
        <Footer />
      </main>
    </>
  );
}
// https://denver-2.wedsites.com
