import React from 'react';

export const WhyChooseShreya: React.FC = () => {
  const pillars = [
    {
      num: 'I',
      title: 'PERSONALIZED',
      subtitle: 'Tailored to your bone structure',
      description: 'Your features, skin undertone, bridal jewellery, and personal comfort guide every brushstroke. Never a formulaic copy-paste bridal mask.'
    },
    {
      num: 'II',
      title: 'CAMERA-READY',
      subtitle: 'Flawless across all lenses',
      description: 'Engineered to look ethereal in daylight, radiant under indoor chandeliers, and immaculate in raw high-resolution 4K/8K wedding films.'
    },
    {
      num: 'III',
      title: 'LONG-LASTING',
      subtitle: 'Sweat, tear & climate tested',
      description: 'Formulations chosen specifically for Indian climates, emotional rituals, and uninterrupted 12+ hour celebrations without caking.'
    },
    {
      num: 'IV',
      title: 'DETAIL-OBSESSED',
      subtitle: 'From prep to pleat',
      description: 'From 30-minute bespoke facial prep to hair contouring and micro-precise saree pleating, every single millimetre is perfected.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Editorial Eyebrow & Title */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
              The Artistic Standard
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#211C1A] tracking-tight">
            More than makeup.
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col justify-between border-t border-[#211C1A]/20 pt-6 transition-all duration-300 hover:border-[#211C1A]"
            >
              <div>
                {/* Roman Numeral Accent */}
                <span className="font-editorial text-2xl text-[#D6B98C] font-light block mb-4">
                  {pillar.num}
                </span>

                <h3 className="font-editorial text-xl sm:text-2xl font-light text-[#211C1A] tracking-wide mb-1 group-hover:text-[#8C7A70] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-[11px] uppercase tracking-wider text-[#8C7A70] font-medium mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#211C1A]/75 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#211C1A]/5 flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase text-[#8C7A70]">
                  Standard No. {pillar.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D6B98C]/40 group-hover:bg-[#D6B98C] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
