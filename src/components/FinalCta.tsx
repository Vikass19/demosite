import React from 'react';
import { ASSETS } from '../data/bridalData';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  onCheckDateClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCheckDateClick }) => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#211C1A]">
      {/* Full-width Photography Background */}
      <img
        src={ASSETS.hero}
        alt="Shreya Kamat luxury Indian bride visual"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
      />

      {/* Deep Vignette Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#211C1A] via-[#211C1A]/70 to-[#211C1A]/80" />

      {/* Center Typographic Overlay */}
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center text-[#FAF7F3] py-20 z-10">
        
        {/* Eyebrow */}
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#D6B98C] block mb-6">
          The Sacred Celebration
        </span>

        {/* Triple Headline */}
        <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-6">
          Your Wedding.<br />
          Your Features.<br />
          <span className="italic font-normal text-[#D6B98C]">Your Moment.</span>
        </h2>

        {/* Small Supporting Text */}
        <p className="text-sm sm:text-base text-[#FAF7F3]/80 font-light max-w-md mx-auto mb-10 tracking-wide">
          Luxury bridal beauty by Shreya Kamat. Handcrafted for a lifetime of memories.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCheckDateClick}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#211C1A] bg-[#FAF7F3] hover:bg-white transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>Check Date Availability</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/919820012345?text=Hello%20Shreya,%20I%20would%20like%20to%20check%20your%20availability%20for%20my%20wedding%20date."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Shreya</span>
          </a>
        </div>

        {/* Subtle subtext */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mt-8 font-light">
          Available across Mumbai · Pune · Destination Weddings Across India
        </p>

      </div>
    </section>
  );
};
