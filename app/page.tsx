import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OurStory } from "@/components/OurStory";
import { Quote } from "@/components/Quote";
import { Timeline } from "@/components/Timeline";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { RSVP } from "@/components/RSVP";
import { auth } from "@/auth";
import { Directions } from "@/components/Directions";
import { WeddingParty } from "@/components/WeddingParty";
import { Registry } from "@/components/Registry";

export default async function Home() {
  const session = await auth();
  return (
    <>
      {/* <ConvexPublicProvider> */}
      <ConvexClientProvider session={session}>
        <main className="overflow-hidden font-bitter">
          {!!session && <Navbar />}
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
        {/* </ConvexPublicProvider> */}
      </ConvexClientProvider>
    </>
  );
}
// https://denver-2.wedsites.com
