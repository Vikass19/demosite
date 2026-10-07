import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onCheckDateClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCheckDateClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F3]/95 backdrop-blur-md border-t border-[#211C1A]/15 px-3 py-2.5 shadow-lg max-h-[64px]">
      <div className="grid grid-cols-2 gap-2">
        {/* Check Date Action */}
        <button
          onClick={onCheckDateClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-[11px] uppercase tracking-wider font-semibold text-[#FAF7F3] bg-[#211C1A] active:bg-[#3d3430] transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Check Date</span>
        </button>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/919820012345?text=Hello%20Shreya,%20I%20am%20inquiring%20about%20bridal%20makeup%20availability%20for%20my%20wedding."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 text-[11px] uppercase tracking-wider font-semibold text-white bg-emerald-700 active:bg-emerald-800 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
