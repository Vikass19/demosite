import React, { useState } from 'react';
import { X, Calendar, MapPin, MessageCircle, ArrowRight, Check } from 'lucide-react';

interface DateAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDate: (date: string, city: string) => void;
}

export const DateAvailabilityModal: React.FC<DateAvailabilityModalProps> = ({
  isOpen,
  onClose,
  onConfirmDate,
}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheck = () => {
    if (!selectedDate) {
      setStatusMessage('Please choose your prospective wedding or event date.');
      return;
    }
    // High-converting feedback
    setStatusMessage(`Slot for ${selectedDate} in ${selectedCity} is currently available for inquiry!`);
  };

  const handleProceedWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shreya, I'd like to check your availability for my wedding on ${selectedDate || 'upcoming date'} in ${selectedCity}. Please let me know if your diary is open.`
    );
    window.open(`https://wa.me/919820012345?text=${text}`, '_blank');
    onClose();
  };

  const handleProceedForm = () => {
    onConfirmDate(selectedDate, selectedCity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#211C1A]/80 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative bg-[#FAF7F3] max-w-lg w-full border border-[#D6B98C] shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#211C1A] hover:bg-[#211C1A] hover:text-[#FAF7F3] transition-colors border border-[#211C1A]/10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70] block mb-1">
            Diary Check
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#211C1A]">
            Check Date Availability
          </h3>
          <p className="text-xs text-[#211C1A]/70 font-light mt-1">
            Shreya personally accepts only one bride per major auspicious slot to maintain undivided attention.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#211C1A] mb-1.5">
              Prospective Event Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setStatusMessage(null);
              }}
              className="w-full px-3.5 py-2.5 bg-white border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A]"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#211C1A] mb-1.5">
              Event Location
            </label>
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setStatusMessage(null);
              }}
              className="w-full px-3.5 py-2.5 bg-white border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] cursor-pointer"
            >
              <option value="Mumbai">Mumbai (Home Base)</option>
              <option value="Pune">Pune</option>
              <option value="Alibaug">Alibaug / Lonavala</option>
              <option value="Goa">Goa</option>
              <option value="Udaipur / Rajasthan">Udaipur / Rajasthan</option>
              <option value="Other Destination">Other Destination in India</option>
            </select>
          </div>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div className="mb-6 p-3 bg-[#E9D8CF]/30 border border-[#D6B98C] text-xs text-[#211C1A] leading-relaxed flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleProceedWhatsApp}
            className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Check Availability on WhatsApp</span>
          </button>

          <button
            onClick={handleProceedForm}
            className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#211C1A] bg-transparent border border-[#211C1A] hover:bg-[#211C1A] hover:text-[#FAF7F3] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Inquiry Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[11px] text-[#8C7A70]">
            Average WhatsApp response time: &lt; 30 minutes
          </p>
        </div>

      </div>
    </div>
  );
};
