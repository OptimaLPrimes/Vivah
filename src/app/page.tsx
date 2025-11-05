
"use client";

import { useState, useEffect } from "react";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GuestbookSection } from "@/components/sections/guestbook-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InvitationSection } from "@/components/sections/invitation-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/layout/footer";
import { ScrollAnimator } from "@/components/scroll-animator";
import { GuestbookEntry } from "@/lib/types";
import { getGuestbookMessages } from "@/lib/actions";
import { PhotoSection } from "@/components/sections/photo-section";
import { IntroAnimation } from "@/components/intro-animation";

export default function Home() {
  const [guestbookMessages, setGuestbookMessages] = useState<GuestbookEntry[]>([]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getGuestbookMessages();
      setGuestbookMessages(messages);
    };
    fetchMessages();
    
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
      <ScrollAnimator><PhotoSection imageId="couple-portrait" /></ScrollAnimator>
      <ScrollAnimator><GallerySection /></ScrollAnimator>
      <ScrollAnimator><GuestbookSection initialMessages={guestbookMessages} /></ScrollAnimator>
      <Footer />
    </main>
  );
}
