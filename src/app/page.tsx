
"use client";

import { useState, useEffect } from "react";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GuestbookSection } from "@/components/sections/guestbook-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InvitationSection } from "@/components/sections/invitation-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/layout/footer";
import { FloralDivider } from "@/components/floral-divider";
import { ScrollAnimator } from "@/components/scroll-animator";
import { IntroAnimation } from "@/components/intro-animation";
import { GuestbookEntry } from "@/lib/types";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [guestbookMessages, setGuestbookMessages] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    // Mocking the async data fetching for the client component
    const fetchMessages = async () => {
      // In a real app, this would be a fetch call.
      // For now, using the same mock data logic.
      const mockMessages = [
        {
          id: "1",
          name: "Gajanan Patange",
          message: "So excited to celebrate with you Di",
          createdAt: new Date(),
        },
        {
          id: "2",
          name: "Harishchandra Patange",
          message: "Congratulations, Vaishnavi and Suraj! Your journey together will be beautiful. Can't wait for the big day!",
          createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
        {
          id: "3",
          name: "Grandma",
          message: "My dearest children, may your life together be filled with countless blessings and joy. My heart is full.",
          createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
        },
      ];
      setGuestbookMessages(mockMessages);
    };
    fetchMessages();
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };
  
  if (showIntro) {
    return <IntroAnimation onFinish={handleIntroFinish} />;
  }

  return (
    <main>
      <ScrollAnimator><HeroSection /></ScrollAnimator>
      <ScrollAnimator><InvitationSection /></ScrollAnimator>
      <FloralDivider />
      <ScrollAnimator><EventsSection /></ScrollAnimator>
      <FloralDivider />
      <ScrollAnimator><VenueSection /></ScrollAnimator>
      <FloralDivider />
      <ScrollAnimator><GallerySection /></ScrollAnimator>
      <FloralDivider />
      <ScrollAnimator><GuestbookSection initialMessages={guestbookMessages} /></ScrollAnimator>
      <Footer />
    </main>
  );
}
