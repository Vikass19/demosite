import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { ASSETS } from '../data/bridalData';

interface HeroProps {
  onCheckDateClick: () => void;
  onExploreLookbook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckDateClick, onExploreLookbook }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-20 flex items-center overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute inset-0 bg-[#FAF7F3] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E9D8CF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Editorial Focus (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-2 lg:pt-0">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-[1px] bg-[#D6B98C]" />
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
                Mumbai · India · Destination Weddings
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-[#211C1A] font-light leading-[1.08] tracking-tight mb-6 sm:mb-7">
              Makeup that feels like you.{' '}
              <span className="italic block font-normal text-[#211C1A]">
                Only more extraordinary.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#211C1A]/75 font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
              Luxury bridal and event makeup crafted to look flawless in person, photograph beautifully under every camera lens, and last through every sacred moment of your celebration.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12">
              <button
                onClick={onCheckDateClick}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF7F3] bg-[#211C1A] hover:bg-[#38302D] transition-all duration-300 cursor-pointer shadow-sm group"
              >
                <span>Check Date Availability</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreLookbook}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#211C1A] bg-transparent border border-[#211C1A]/30 hover:border-[#211C1A] hover:bg-[#211C1A]/5 transition-all duration-300 cursor-pointer"
              >
                Explore The Lookbook
              </button>
            </div>

            {/* Subtle Trust Indicators (Unboxed per Zero-Pill discipline) */}
            <div className="pt-6 border-t border-[#211C1A]/10 flex flex-wrap items-center gap-y-2 gap-x-6 sm:gap-x-8 text-xs text-[#211C1A]/80 tracking-wider font-medium">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tabular-nums text-[#211C1A]">200+</span>
                <span className="text-[#8C7A70] uppercase text-[11px] tracking-widest">Brides Styled</span>
              </div>
              <span className="text-[#D6B98C]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm tabular-nums text-[#211C1A]">4.9</span>
                <Star className="w-3.5 h-3.5 fill-[#D6B98C] text-[#D6B98C]" />
                <span className="text-[#8C7A70] uppercase text-[11px] tracking-widest">Client Rating</span>
              </div>
              <span className="text-[#D6B98C]" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <span className="text-[#8C7A70] uppercase text-[11px] tracking-widest">Mumbai & Destinations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Bridal Visual (Col 5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Image Frame with Editorial Offset Border */}
              <div className="relative">
                {/* Thin background accent frame */}
                <div className="absolute -inset-3 sm:-inset-4 border border-[#D6B98C]/40 -z-10 translate-x-2 translate-y-2" />

                {/* Dominant Visual Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E9D8CF]/20 shadow-xl">
                  <img
                    src={ASSETS.hero}
                    alt="Editorial Indian bridal makeup by Shreya Kamat in Mumbai"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211C1A]/40 via-transparent to-transparent opacity-60" />

                  {/* Floating Editorial Label */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                    <div className="bg-[#FAF7F3]/95 backdrop-blur-xs py-2 px-3.5 shadow-sm border border-[#211C1A]/10">
                      <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#211C1A]">
                        Bridal Look — Mumbai
                      </p>
                      <p className="text-[10px] text-[#8C7A70] tracking-wider mt-0.5 font-light">
                        Dewy Finish · Heirloom Gold Setting
                      </p>
                    </div>

                    <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-[#FAF7F3] drop-shadow-md">
                      01 / Vol. 26
                    </span>
                  </div>
                </div>

                {/* Floating Micro Detail Accent */}
                <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-[#FAF7F3] border border-[#211C1A]/15 py-2 px-3 shadow-md hidden sm:block">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8C7A70] block">Vogue Aesthetic</span>
                  <span className="font-editorial text-sm text-[#211C1A] italic">Real Skin Finish</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
