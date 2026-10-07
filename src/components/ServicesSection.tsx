import React from 'react';
import { SERVICES_DATA } from '../data/bridalData';
import { ArrowRight, Check, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
              Bespoke Artistry
            </span>
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A] leading-tight mb-4">
            The Art of Your Occasion
          </h2>

          <p className="text-base text-[#211C1A]/70 font-light max-w-lg mx-auto">
            From intimate muhurat pheras to full-scale wedding weekends across India.
          </p>
        </div>

        {/* 3 Editorial Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isSignature = index === 0;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 border ${
                  isSignature
                    ? 'bg-white border-[#D6B98C] shadow-lg ring-1 ring-[#D6B98C]/40'
                    : 'bg-[#FAF7F3] border-[#211C1A]/15 hover:border-[#211C1A]/40'
                }`}
              >
                {/* Editorial Top Accent */}
                {isSignature && (
                  <div className="absolute -top-3 left-8 bg-[#211C1A] text-[#FAF7F3] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 shadow-xs">
                    Most Requested
                  </div>
                )}

                <div>
                  {/* Number & Category */}
                  <div className="flex items-baseline justify-between border-b border-[#211C1A]/10 pb-4 mb-6">
                    <span className="font-editorial text-3xl font-light text-[#D6B98C]">
                      {service.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A70] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.prepTime}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial text-2xl font-light text-[#211C1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#211C1A]/70 font-light leading-relaxed mb-6">
                    {service.subtitle}
                  </p>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 bg-[#E9D8CF]/20 border-l-2 border-[#D6B98C] text-[11px]">
                    <span className="font-semibold text-[#211C1A] uppercase tracking-wider block mb-0.5">
                      Ideal For
                    </span>
                    <span className="text-[#211C1A]/80 font-light">{service.idealFor}</span>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C7A70] block">
                      Package Inclusions
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#211C1A]/80 font-light">
                      {service.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C] mt-1.5 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#211C1A]/10 flex flex-col gap-3">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-center transition-all cursor-pointer flex items-center justify-center gap-2 group ${
                      isSignature
                        ? 'bg-[#211C1A] text-[#FAF7F3] hover:bg-[#38302D]'
                        : 'bg-transparent text-[#211C1A] border border-[#211C1A] hover:bg-[#211C1A] hover:text-[#FAF7F3]'
                    }`}
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-[11px] uppercase tracking-widest text-center text-[#8C7A70] hover:text-[#211C1A] transition-colors cursor-pointer py-1"
                  >
                    Request Package Details
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Travel Note */}
        <div className="mt-12 text-center text-xs text-[#8C7A70] font-light max-w-xl mx-auto">
          * Destination bookings outside Mumbai and Pune include travel and accommodation arrangements managed directly with your wedding concierge.
        </div>

      </div>
    </section>
  );
};
