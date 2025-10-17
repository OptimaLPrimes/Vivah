import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { InvitationSection } from '@/components/sections/invitation-section';
import { EventsSection } from '@/components/sections/events-section';
import { VenueSection } from '@/components/sections/venue-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { GuestbookSection } from '@/components/sections/guestbook-section';
import { RsvpSection } from '@/components/sections/rsvp-section';
import { getGuestbookMessages } from '@/lib/actions';
import { FloralDivider } from '@/components/floral-divider';

export default async function Home() {
  const initialMessages = await getGuestbookMessages();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FloralDivider />
        <InvitationSection />
        <FloralDivider />
        <EventsSection />
        <FloralDivider />
        <VenueSection />
        <FloralDivider />
        <GallerySection />
        <FloralDivider />
        <GuestbookSection initialMessages={initialMessages} />
        <FloralDivider />
        <RsvpSection />
      </main>
      <Footer />
    </div>
  );
}
