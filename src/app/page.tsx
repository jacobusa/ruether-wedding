"use client";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Gallery } from "@/components/Gallery";
import { Quote } from "@/components/Quote";
import { Countdown } from "@/components/Countdown";
import { RSVP } from "@/components/RSVP";
import { Planning } from "@/components/Planning";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden font-bitter">
      <Hero />
      <OurStory />
      <Gallery />
      <Quote />
      <Countdown />
      <Planning />
      <RSVP />
      <Footer />
    </main>
  );
}
