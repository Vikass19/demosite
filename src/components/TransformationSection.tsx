import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, ChevronsLeftRight } from 'lucide-react';
import { ASSETS } from '../data/bridalData';

export const TransformationSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const looks = [
    {
      title: 'Muhurat Bridal Radiance',
      event: 'Morning Wedding Ceremony · Mumbai',
      beforeLabel: 'Pre-Prep Natural Bare Face',
      afterLabel: 'Bridal HD Complexion & Gold Accents',
      afterImage: ASSETS.hero,
      // For realistic transformation visual, we use the artist's high-res asset with stylized natural grading for 'before' and pristine glam for 'after'
      beforeFilter: 'brightness-95 contrast-95 saturate-75',
      afterFilter: 'brightness-105 contrast-105 saturate-110',
      highlights: ['Featherlight skin coverage', 'Defined natural eyes', 'Waterproof seal']
    },
    {
      title: 'Champagne Reception Glow',
      event: 'Evening Reception & Cocktail · Taj Palace',
      beforeLabel: 'Studio Prep Skin',
      afterLabel: 'Sculpted Chandelier Glam',
      afterImage: ASSETS.featuredBride,
      beforeFilter: 'brightness-90 contrast-90 saturate-70',
      afterFilter: 'brightness-105 contrast-105 saturate-115',
      highlights: ['Flash-proof contouring', 'Soft smokey eye lift', 'Dewy long-wear finish']
    }
  ];

  const currentLook = looks[activeLookIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section id="transformation" className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
              The Transformation
            </span>
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A] leading-tight mb-4">
            See the Difference.{' '}
            <span className="italic block sm:inline font-normal">Feel Like Yourself.</span>
          </h2>

          <p className="text-base text-[#211C1A]/70 font-light max-w-lg mx-auto">
            Skin-like finish. Refined details. Camera-ready longevity built to celebrate without worry.
          </p>

          {/* Look Preset Switcher (Functional Segmented Control) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#E9D8CF]/30 border border-[#211C1A]/10">
            {looks.map((look, idx) => (
              <button
                key={look.title}
                onClick={() => {
                  setActiveLookIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeLookIndex === idx
                    ? 'bg-[#211C1A] text-[#FAF7F3] shadow-xs'
                    : 'text-[#211C1A]/70 hover:text-[#211C1A]'
                }`}
              >
                {look.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Draggable Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle outer frame */}
          <div className="border border-[#211C1A]/15 p-2 sm:p-3 bg-white shadow-xl">
            
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full select-none overflow-hidden cursor-ew-resize bg-[#211C1A]"
              role="slider"
              aria-valuenow={sliderPosition}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Before and after bridal makeup comparison slider"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(5, prev - 5));
                if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(95, prev + 5));
              }}
            >
              {/* "AFTER" Image (Full background layer) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={currentLook.afterImage}
                  alt="After bridal makeup by Shreya Kamat"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-center ${currentLook.afterFilter}`}
                />
                {/* AFTER Overlay Label */}
                <div className="absolute bottom-6 right-6 z-10 bg-[#211C1A]/85 backdrop-blur-xs text-[#FAF7F3] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold border border-white/10 shadow-md">
                  AFTER — Bridal Finish
                </div>
              </div>

              {/* "BEFORE" Image (Clipped overlay on the left) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                  <img
                    src={activeLookIndex === 0 ? ASSETS.closeup : ASSETS.transformation}
                    alt="Before makeup natural face"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center ${currentLook.beforeFilter}`}
                  />
                  {/* Subtle tint indicating natural skin baseline */}
                  <div className="absolute inset-0 bg-[#211C1A]/10 pointer-events-none" />

                  {/* BEFORE Overlay Label */}
                  <div className="absolute bottom-6 left-6 z-10 bg-[#FAF7F3]/90 backdrop-blur-xs text-[#211C1A] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold border border-[#211C1A]/15 shadow-md">
                    BEFORE — Bare Skin
                  </div>
                </div>
              </div>

              {/* Draggable Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-[#FAF7F3] cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Central handle knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FAF7F3] text-[#211C1A] border-2 border-[#D6B98C] shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                  <ChevronsLeftRight className="w-5 h-5 text-[#211C1A]" />
                </div>
              </div>

              {/* Top Hint Pill */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#211C1A]/80 text-[#FAF7F3] px-4 py-1 text-[10px] uppercase tracking-widest font-medium pointer-events-none shadow-sm">
                Drag Slider Left / Right
              </div>

            </div>
          </div>

          {/* Under-Slider Key Value Statement */}
          <div className="mt-8 pt-6 border-t border-[#211C1A]/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-10 text-xs sm:text-sm text-[#211C1A] tracking-wider font-medium text-center">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
              Natural Skin Texture
            </span>
            <span className="text-[#8C7A70] hidden sm:inline" aria-hidden="true">•</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
              Defined Features
            </span>
            <span className="text-[#8C7A70] hidden sm:inline" aria-hidden="true">•</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
              Long-Lasting Tear-Proof Finish
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
