import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/bridalData';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS_DATA.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === TESTIMONIALS_DATA.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-[#211C1A]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#D6B98C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
                Client Words
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A]">
              Loved by Brides
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#8C7A70]">
              4.9/5 Rating Across 200+ Weddings
            </span>
            <div className="hidden sm:flex items-center gap-1 text-[#D6B98C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D6B98C]" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid / Editorial Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#211C1A]/10 p-8 sm:p-9 flex flex-col justify-between shadow-xs hover:border-[#D6B98C] transition-colors"
            >
              <div>
                {/* 5-Star Subtle Rating */}
                <div className="flex items-center gap-1 text-[#D6B98C] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D6B98C]" />
                  ))}
                  <span className="text-[11px] text-[#8C7A70] tracking-wider ml-2">
                    Verified Bride · {t.date}
                  </span>
                </div>

                {/* Body Quote */}
                <p className="font-editorial text-lg sm:text-xl font-light text-[#211C1A] leading-relaxed italic mb-8">
                  “{t.quote}”
                </p>
              </div>

              {/* Bride Attribution with Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#211C1A]/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E9D8CF]/40 border border-[#D6B98C]/60 shrink-0">
                  <img
                    src={t.image}
                    alt={t.brideName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <h4 className="font-editorial text-base sm:text-lg font-normal text-[#211C1A]">
                    {t.brideName}
                  </h4>
                  <p className="text-[11px] text-[#8C7A70] tracking-wider uppercase font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D6B98C]" />
                    {t.location} Bride · {t.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
