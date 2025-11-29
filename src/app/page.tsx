
"use client";

import { EventsSection } from "@/components/sections/events-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InvitationSection } from "@/components/sections/invitation-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/layout/footer";
import { ScrollAnimator } from "@/components/scroll-animator";
import { IntroAnimation } from "@/components/intro-animation";
import { useEffect, useState } from "react";

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
    }, 4500); // Must be slightly longer than the fade-out animation
    return () => clearTimeout(timer);
  }, []);

  if (introVisible) {
    return <IntroAnimation />;
  }

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
