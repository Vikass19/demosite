import React, { useState } from 'react';
import { FAQ_DATA } from '../data/bridalData';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
              Clarity & Details
            </span>
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A] leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-[#211C1A]/70 font-light">
            Everything you need to know about bridal preparations, dates, travel and on-day timelines.
          </p>
        </div>

        {/* Minimal Editorial Accordion */}
        <div className="border-t border-[#211C1A]/15 divide-y divide-[#211C1A]/10">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-normal text-[#211C1A] group-hover:text-[#8C7A70] transition-colors pr-6">
                    {item.question}
                  </span>

                  <span className="p-1 border border-[#211C1A]/15 text-[#211C1A] group-hover:border-[#211C1A] transition-colors shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-6 sm:pr-12 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-xs sm:text-sm text-[#211C1A]/75 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center text-xs text-[#8C7A70] font-light">
          Have a unique requirement or multi-day wedding celebration?{' '}
          <a
            href="https://wa.me/919820012345?text=Hello%20Shreya,%20I%20have%20a%20few%20custom%20questions%20regarding%20my%20bridal%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#211C1A] font-medium underline hover:text-[#8C7A70]"
          >
            Chat directly with Shreya on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
