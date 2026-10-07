import React from 'react';
import { Sparkles } from 'lucide-react';

export const SocialProofStrip: React.FC = () => {
  const items = [
    { label: '200+ Brides', detail: 'Styled Across 5 Years' },
    { label: '4.9★ Rated', detail: 'Consistently Reviewed' },
    { label: 'Mumbai Based', detail: 'Studio in Bandra' },
    { label: 'Destination Weddings', detail: 'Pan-India & Global' },
    { label: 'Personalised Bridal Looks', detail: 'Never One-Size-Fits-All' },
  ];

  return (
    <div className="w-full border-y border-[#211C1A]/10 bg-[#FAF7F3] py-5 sm:py-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-6 text-center sm:text-left">
          {items.map((item, index) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#211C1A] uppercase">
                  {item.label}
                </span>
                <span className="text-[10px] text-[#8C7A70] tracking-wide font-light hidden lg:inline">
                  {item.detail}
                </span>
              </div>
              {index < items.length - 1 && (
                <span className="hidden sm:inline-block text-[#D6B98C] text-xs font-light ml-4" aria-hidden="true">
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
