import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ASSETS } from '../data/bridalData';

interface BrandStoryProps {
  onDiscoverClick: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onDiscoverClick }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Backstage Detail (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative hairline */}
              <div className="absolute -inset-3 border border-[#211C1A]/10 -z-10 translate-x-3 translate-y-3" />
              
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E9D8CF]/30 shadow-lg">
                <img
                  src={ASSETS.artist}
                  alt="Shreya Kamat in her bridal beauty studio in Bandra, Mumbai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Floating caption tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F3]/95 backdrop-blur-xs p-3 border border-[#211C1A]/10">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#211C1A]">
                    Shreya Kamat
                  </p>
                  <p className="text-[10px] text-[#8C7A70] tracking-wider mt-0.5 font-light">
                    Founder & Principal Bridal Artist · Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Philosophy (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[1px] bg-[#D6B98C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
                The Shreya Kamat Experience
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A] leading-[1.15] mb-6">
              Your Features. Your Personality.{' '}
              <span className="italic block font-normal">Your Bridal Look.</span>
            </h2>

            {/* Quote Body Copy */}
            <blockquote className="border-l-2 border-[#D6B98C] pl-5 my-2 mb-6 text-lg sm:text-xl font-editorial italic text-[#211C1A]/90">
              “Every face has its own character. My approach is to enhance what makes you uniquely beautiful rather than covering it up.”
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#211C1A]/75 font-light leading-relaxed mb-8 max-w-xl">
              <p>
                Modern Indian brides deserve makeup that breathes with them. Too often, brides are told they must conform to heavy, cakey layers and artificial trends that mask their true self.
              </p>
              <p>
                I curate each bridal look around your bone structure, skin undertones, lighting at your specific venue, and the embroidery of your lehenga or saree. The outcome is effortless radiance that turns heads in person and commands timeless distinction in 4K photography.
              </p>
            </div>

            {/* Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9 max-w-xl text-xs uppercase tracking-wider text-[#211C1A]/90 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
                <span>Zero Cakey Layers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
                <span>12+ Hour Tear & Sweat Proof</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
                <span>Flash & 8K Video Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
                <span>Heirloom Draping Mastery</span>
              </div>
            </div>

            {/* Action & Signature Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#211C1A]/10">
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#211C1A] hover:text-[#8C7A70] transition-colors group cursor-pointer"
              >
                <span>Discover The Experience</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex flex-col">
                <span className="font-editorial text-2xl sm:text-3xl text-[#211C1A] italic tracking-wide font-normal">
                  Shreya Kamat
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A70]">
                  Mumbai · Luxury Bridal Artist
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
