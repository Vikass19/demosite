import React from 'react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F3] border-t border-[#211C1A]/10 text-[#211C1A] pt-16 sm:pt-20 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#211C1A]/10">
          
          {/* Brand Info (Col 5) */}
          <div className="md:col-span-5">
            <h3 className="font-editorial text-2xl sm:text-3xl tracking-widest uppercase font-light text-[#211C1A] mb-1">
              Shreya Kamat
            </h3>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C7A70] font-semibold mb-5">
              Luxury Bridal & Beauty
            </p>

            <p className="text-xs text-[#211C1A]/70 font-light leading-relaxed max-w-sm mb-6">
              Bespoke bridal, engagement and editorial makeup artistry. Dedicated to celebrating your natural features with camera-ready longevity.
            </p>

            <div className="text-xs space-y-1 text-[#211C1A]/80 font-light">
              <p className="font-medium text-[#211C1A]">Studio: Bandra West, Mumbai, MH, India</p>
              <p className="text-[#8C7A70]">Available for destination weddings across India & worldwide</p>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70] block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-[#211C1A]/80 font-medium">
              <li>
                <a href="#lookbook" className="hover:text-[#211C1A] transition-colors">Portfolio Lookbook</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#211C1A] transition-colors">Bridal Services</a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-[#211C1A] transition-colors">The Transformation</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#211C1A] transition-colors">The Experience</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#211C1A] transition-colors">Bride Reviews</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#211C1A] transition-colors">Check Availability</a>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Chat (Col 4) */}
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70] block mb-4">
              Direct Contact
            </span>

            <div className="space-y-3 mb-6">
              <a
                href="https://wa.me/919820012345?text=Hello%20Shreya,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#211C1A] hover:text-[#8C7A70] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span className="font-medium">+91 98200 12345 (WhatsApp Desk)</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#211C1A] hover:text-[#8C7A70] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#211C1A]" />
                <span className="font-medium">@shreyakamat on Instagram</span>
              </a>

              <p className="text-xs text-[#8C7A70] pt-1">
                inquiries@shreyakamat.com
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A70] hover:text-[#211C1A] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C7A70]">
          <p>© 2026 Shreya Kamat Makeup Artist. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Booking</span>
            <span>·</span>
            <span>Mumbai & Destination Weddings</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
