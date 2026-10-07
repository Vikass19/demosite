import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/bridalData';

interface FeaturedBrideProps {
  onViewLookbook: () => void;
  onEnquireNow: () => void;
}

export const FeaturedBride: React.FC<FeaturedBrideProps> = ({ onViewLookbook, onEnquireNow }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#211C1A] text-[#FAF7F3] overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D6B98C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Heading Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D6B98C] font-semibold">
              Editorial Spotlight
            </span>
            <span className="text-white/30">/</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF7F3]/70 font-light">
              Vol. 26 · Mumbai Edition
            </span>
          </div>

          <span className="font-editorial text-sm italic text-[#D6B98C] mt-2 sm:mt-0">
            “Grace in every sacred gesture”
          </span>
        </div>

        {/* Spread Layout: 65% Visual / 35% Editorial Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 65% Dominant Editorial Visual (Col 8) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black/40 border border-white/10 shadow-2xl group">
              <img
                src={ASSETS.featuredBride}
                alt="Editorial bride spread styled by Shreya Kamat in Mumbai"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Luxury magazine aesthetic corner badge */}
              <div className="absolute top-5 left-5 bg-[#211C1A]/85 backdrop-blur-xs py-2 px-3.5 border border-white/10">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#D6B98C] font-semibold">
                  Real Bride Editorial
                </p>
                <p className="font-editorial text-xs text-white italic mt-0.5">
                  The Taj Mahal Palace, Mumbai
                </p>
              </div>

              {/* Watermark-free subtle photographer credit */}
              <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.2em] text-white/60">
                Artistry by Shreya Kamat
              </div>
            </div>
          </div>

          {/* 35% Editorial Spec Sheet & Story (Col 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-2">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D6B98C] block mb-2">
                The Look
              </span>

              <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#FAF7F3] leading-tight mb-4">
                Soft Traditional Glam
              </h3>

              <p className="text-sm text-[#FAF7F3]/70 font-light leading-relaxed mb-6">
                Curated for evening palace architecture. Sculpted cheekbones, champagne metallic lids, seamless contouring under chandeliers, and a sheer embroidered veil anchored weightlessly.
              </p>

              {/* Specification Table */}
              <div className="border-t border-b border-white/10 py-5 space-y-3.5 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="text-white/50 uppercase tracking-widest text-[10px]">Event</span>
                  <span className="font-medium text-[#FAF7F3]">Wedding & Reception</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/50 uppercase tracking-widest text-[10px]">Location</span>
                  <span className="font-medium text-[#FAF7F3]">Colaba, South Mumbai</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/50 uppercase tracking-widest text-[10px]">Look Aesthetic</span>
                  <span className="font-medium text-[#FAF7F3]">Traditional Royalty</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/50 uppercase tracking-widest text-[10px]">Complexion</span>
                  <span className="font-medium text-[#D6B98C]">HD / 14-Hour Long Wear</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onViewLookbook}
                className="inline-flex items-center justify-between px-5 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#211C1A] bg-[#FAF7F3] hover:bg-white transition-colors cursor-pointer shadow-sm group"
              >
                <span>View Bridal Lookbook</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onEnquireNow}
                className="inline-flex items-center justify-center px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF7F3] border border-white/20 hover:border-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                Enquire For Similar Look
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
