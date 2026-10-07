import React, { useState } from 'react';
import { LookCategory, LookbookItem } from '../types';
import { LOOKBOOK_ITEMS } from '../data/bridalData';
import { ArrowUpRight, X, Sparkles, MapPin, Eye, Check } from 'lucide-react';

interface LookbookSectionProps {
  onSelectLookForBooking: (lookName: string) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onSelectLookForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<LookCategory>('ALL');
  const [activeModalItem, setActiveModalItem] = useState<LookbookItem | null>(null);

  const categories: LookCategory[] = [
    'ALL',
    'TRADITIONAL BRIDAL',
    'MODERN GLAM',
    'ENGAGEMENT',
    'RECEPTION',
    'EDITORIAL'
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? LOOKBOOK_ITEMS
    : LOOKBOOK_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="lookbook" className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#211C1A]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#D6B98C]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
                Curated Portfolio
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A] tracking-tight">
              The Bridal Lookbook
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#211C1A]/70 font-light max-w-md">
            A collection of real brides, sacred celebrations and thoughtfully crafted looks across Mumbai and destination weddings.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-[#211C1A] text-[#FAF7F3] border-[#211C1A] shadow-xs'
                  : 'bg-transparent text-[#211C1A]/70 border-[#211C1A]/15 hover:border-[#211C1A] hover:text-[#211C1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span rule
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';
            const aspectClass = isLarge ? 'aspect-[16/11]' : 'aspect-[3/4]';

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className={`${colSpan} group cursor-pointer relative flex flex-col justify-between`}
              >
                {/* Visual Frame */}
                <div className={`relative ${aspectClass} overflow-hidden bg-[#E9D8CF]/30 border border-[#211C1A]/10`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle darkening scrim on hover */}
                  <div className="absolute inset-0 bg-[#211C1A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Corner indicator */}
                  <div className="absolute top-4 right-4 bg-[#FAF7F3]/90 p-2 text-[#211C1A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Overlay Meta reveal */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#211C1A]/90 via-[#211C1A]/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D6B98C] font-semibold">
                      {item.categoryLabel}
                    </span>
                    <p className="font-editorial text-xl font-light text-white mt-1">
                      {item.brideName}
                    </p>
                    <p className="text-xs text-white/80 font-light flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#D6B98C]" />
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Always visible minimal editorial caption below tile */}
                <div className="pt-3 pb-1 flex items-baseline justify-between border-b border-[#211C1A]/10">
                  <div>
                    <h3 className="font-editorial text-lg text-[#211C1A] group-hover:text-[#8C7A70] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#8C7A70] tracking-wider uppercase font-medium">
                      {item.brideName} · {item.location}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#211C1A]/50">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State Guard */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center border border-dashed border-[#211C1A]/20">
            <p className="font-editorial text-xl text-[#211C1A]">No looks found in this category.</p>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="mt-3 text-xs uppercase tracking-widest text-[#8C7A70] underline cursor-pointer"
            >
              Reset to all looks
            </button>
          </div>
        )}

      </div>

      {/* Lightbox / Look Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-[#211C1A]/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200">
          <div className="relative bg-[#FAF7F3] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#D6B98C]/40 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-[#FAF7F3] text-[#211C1A] hover:bg-[#211C1A] hover:text-[#FAF7F3] transition-colors border border-[#211C1A]/10 cursor-pointer"
              aria-label="Close look detail modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Modal Visual (Col 6) */}
              <div className="md:col-span-6 aspect-[3/4] md:aspect-auto overflow-hidden bg-[#211C1A]">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Modal Details (Col 6) */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
                      {activeModalItem.categoryLabel}
                    </span>
                    <span className="text-[#D6B98C]">·</span>
                    <span className="text-[10px] text-[#8C7A70] tracking-wider uppercase">
                      {activeModalItem.location}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#211C1A] mb-2">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-sm font-medium text-[#211C1A]/80 mb-4">
                    Bride: {activeModalItem.brideName}
                  </p>

                  <p className="text-sm text-[#211C1A]/70 font-light leading-relaxed mb-6">
                    {activeModalItem.description}
                  </p>

                  {/* Look Specs Breakdown */}
                  <div className="border-t border-[#211C1A]/10 pt-4 space-y-3 text-xs mb-6">
                    <div>
                      <span className="text-[#8C7A70] uppercase tracking-wider block text-[10px]">Occasion / Event</span>
                      <span className="font-medium text-[#211C1A]">{activeModalItem.details.event}</span>
                    </div>
                    <div>
                      <span className="text-[#8C7A70] uppercase tracking-wider block text-[10px]">Skin Complexion Finish</span>
                      <span className="font-medium text-[#211C1A]">{activeModalItem.details.skinFinish}</span>
                    </div>
                    <div>
                      <span className="text-[#8C7A70] uppercase tracking-wider block text-[10px]">Lip & Cheek Tone</span>
                      <span className="font-medium text-[#211C1A]">{activeModalItem.details.lipShade}</span>
                    </div>
                    <div>
                      <span className="text-[#8C7A70] uppercase tracking-wider block text-[10px]">Hair Styling & Drape</span>
                      <span className="font-medium text-[#211C1A]">{activeModalItem.details.hairDrape}</span>
                    </div>
                    <div>
                      <span className="text-[#8C7A70] uppercase tracking-wider block text-[10px]">Kit Highlights</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {activeModalItem.details.keyProducts.map((prod) => (
                          <span key={prod} className="text-[11px] text-[#211C1A]/90 bg-[#E9D8CF]/40 px-2 py-0.5">
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-[#211C1A]/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      const lookName = activeModalItem.title;
                      setActiveModalItem(null);
                      onSelectLookForBooking(lookName);
                    }}
                    className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#FAF7F3] bg-[#211C1A] hover:bg-[#342D2A] transition-colors text-center cursor-pointer shadow-xs"
                  >
                    Enquire For This Specific Look
                  </button>
                  <p className="text-[11px] text-center text-[#8C7A70]">
                    We’ll pre-fill your inquiry with this moodboard reference.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
