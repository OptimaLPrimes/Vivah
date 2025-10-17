
import { getGuestbookMessages } from "@/lib/actions";
import { EventsSection } from "@/components/sections/events-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GuestbookSection } from "@/components/sections/guestbook-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InvitationSection } from "@/components/sections/invitation-section";
import { VenueSection } from "@/components/sections/venue-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FloralDivider } from "@/components/floral-divider";
import { ScrollAnimator } from "@/components/scroll-animator";

export default async function Home() {
  const guestbookMessages = await getGuestbookMessages();

  return (
    <main>
      <Header />
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
