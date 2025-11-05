
"use client";

import { useState, useEffect } from "react";
import { EventsSection } from "@/components/sections/events-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InvitationSection } from "@/components/sections/invitation-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/layout/footer";
import { ScrollAnimator } from "@/components/scroll-animator";
import { IntroAnimation } from "@/components/intro-animation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("introShown")) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
    sessionStorage.setItem("introShown", "true");
  };
  
  if (showIntro) {
    return <IntroAnimation onFinish={handleIntroFinish} />;
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
