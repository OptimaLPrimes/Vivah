
"use client";

import { EventsSection } from "@/components/sections/events-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InvitationSection } from "@/components/sections/invitation-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/layout/footer";
import { ScrollAnimator } from "@/components/scroll-animator";

export default function Home() {
  return (
    <main>
      <ScrollAnimator><HeroSection /></ScrollAnimator>
      <ScrollAnimator><InvitationSection /></ScrollAnimator>
      <ScrollAnimator><EventsSection /></ScrollAnimator>
      <ScrollAnimator><VenueSection /></ScrollAnimator>
      <Footer />
    </main>
  );
}
