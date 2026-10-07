/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofStrip } from './components/SocialProofStrip';
import { BrandStory } from './components/BrandStory';
import { TransformationSection } from './components/TransformationSection';
import { LookbookSection } from './components/LookbookSection';
import { FeaturedBride } from './components/FeaturedBride';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseShreya } from './components/WhyChooseShreya';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { DateAvailabilityModal } from './components/DateAvailabilityModal';

export default function App() {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Signature Bridal Makeup');
  const [lookReference, setLookReference] = useState('');

  const handleOpenDateModal = () => {
    setIsDateModalOpen(true);
  };

  const handleScrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLookbook = () => {
    const lookbookEl = document.getElementById('lookbook');
    if (lookbookEl) {
      lookbookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToExperience = () => {
    const expEl = document.getElementById('experience');
    if (expEl) {
      expEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleScrollToBooking();
  };

  const handleSelectLookForBooking = (lookName: string) => {
    setLookReference(lookName);
    handleScrollToBooking();
  };

  const handleConfirmDateFromModal = (date: string, city: string) => {
    handleScrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#211C1A] flex flex-col font-sans selection:bg-[#D6B98C]/30 selection:text-[#211C1A]">
      {/* 1. Header Navigation */}
      <Navbar onCheckDateClick={handleOpenDateModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onCheckDateClick={handleOpenDateModal}
          onExploreLookbook={handleScrollToLookbook}
        />

        {/* 3. Social Proof Strip */}
        <SocialProofStrip />

        {/* 4. Brand Story / Introduction */}
        <BrandStory onDiscoverClick={handleScrollToExperience} />

        {/* 5. Before & After Interactive Transformation */}
        <TransformationSection />

        {/* 6. Portfolio / Bridal Lookbook */}
        <LookbookSection onSelectLookForBooking={handleSelectLookForBooking} />

        {/* 7. Featured Bride Editorial Spread */}
        <FeaturedBride
          onViewLookbook={handleScrollToLookbook}
          onEnquireNow={handleScrollToBooking}
        />

        {/* 8. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 9. Why Clients Choose Shreya */}
        <WhyChooseShreya />

        {/* 10. Client Testimonials */}
        <TestimonialsSection />

        {/* 11. Instagram / Social Proof Feed */}
        <InstagramFeed />

        {/* 12 & 13. Booking Section & Urgency Info */}
        <BookingSection
          initialService={selectedService}
          initialLookReference={lookReference}
        />

        {/* 14. Frequently Asked Questions */}
        <FaqSection />

        {/* 15. Final Cinematic CTA */}
        <FinalCta onCheckDateClick={handleOpenDateModal} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Sticky Mobile Conversion Bar */}
      <StickyMobileBar onCheckDateClick={handleOpenDateModal} />

      {/* Interactive Date Availability Checker Modal */}
      <DateAvailabilityModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        onConfirmDate={handleConfirmDateFromModal}
      />
    </div>
  );
}
