import React, { useState } from 'react';
import { BookingFormState } from '../types';
import { MessageCircle, Send, CheckCircle2, Calendar, MapPin, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface BookingSectionProps {
  initialService?: string;
  initialLookReference?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = 'Bridal Makeup',
  initialLookReference = '',
}) => {
  const [formState, setFormState] = useState<BookingFormState>({
    fullName: '',
    whatsappNumber: '',
    eventDate: '',
    city: 'Mumbai',
    venue: '',
    serviceType: initialService,
    guestCount: '1 (Bride Only)',
    notes: initialLookReference ? `Reference look: ${initialLookReference}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const servicesOptions = [
    'Signature Bridal Makeup',
    'Engagement & Ring Ceremony',
    'Cocktail & Reception Glam',
    'Party Makeup',
    'Family Makeup (Mothers/Sisters)',
    'Bridal Squad (Bride + 3+ Family)',
    'Master Hair Styling & Draping',
    'Destination Wedding Multi-Day Package'
  ];

  const cityOptions = [
    'Mumbai',
    'Pune',
    'Alibaug / Lonavala',
    'Goa',
    'Udaipur / Jaipur / Rajasthan',
    'Other Destination (India / International)'
  ];

  const guestOptions = [
    '1 (Bride Only)',
    'Bride + 1 to 2 Family Members',
    'Bride + 3 to 5 (Bridal Squad)',
    'Large Family (6+ Guests)'
  ];

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Shreya, I'd like to check your availability for my wedding!\n\n` +
      `• Name: ${formState.fullName || 'Bride'}\n` +
      `• Date: ${formState.eventDate || 'Date TBD'}\n` +
      `• City & Venue: ${formState.city} ${formState.venue ? `(${formState.venue})` : ''}\n` +
      `• Service: ${formState.serviceType}\n` +
      `• Guests: ${formState.guestCount}\n` +
      (formState.notes ? `• Notes: ${formState.notes}\n` : '') +
      `\nPlease share availability and package details.`
    );
    return `https://wa.me/919820012345?text=${text}`;
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!formState.fullName || !formState.whatsappNumber) {
      setFormError('Please enter your name and phone number to initiate WhatsApp inquiry.');
      return;
    }
    setFormError('');
    window.open(generateWhatsAppMessage(), '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.whatsappNumber || !formState.eventDate) {
      setFormError('Please fill in your Name, WhatsApp Number, and Event Date.');
      return;
    }
    setFormError('');
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#FAF7F3] border-b border-[#211C1A]/10 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70]">
              Availability & Bookings
            </span>
            <span className="w-5 h-[1px] bg-[#D6B98C]" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#211C1A] leading-tight mb-4">
            Let's Create Your Look.
          </h2>

          <p className="text-base text-[#211C1A]/70 font-light max-w-lg mx-auto">
            Tell us about your date, location and occasion. We'll get back to you with availability and bespoke package details within 3 business hours.
          </p>
        </div>

        {/* Conversion Form Card */}
        <div className="bg-white border border-[#211C1A]/15 shadow-xl p-8 sm:p-12 relative">
          
          {isSubmitted ? (
            /* Submission Confirmation State */
            <div className="py-12 px-4 text-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#E9D8CF]/40 text-[#211C1A] flex items-center justify-center mx-auto mb-6 border border-[#D6B98C]">
                <CheckCircle2 className="w-8 h-8 text-[#211C1A]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C7A70] block mb-2">
                Inquiry Received
              </span>

              <h3 className="font-editorial text-3xl sm:text-4xl text-[#211C1A] mb-3">
                Thank You, {formState.fullName}
              </h3>

              <p className="text-sm text-[#211C1A]/75 font-light leading-relaxed mb-6">
                Your date inquiry for <strong className="font-semibold text-[#211C1A]">{formState.eventDate}</strong> in <strong className="font-semibold text-[#211C1A]">{formState.city}</strong> has been logged in Shreya's priority bridal queue.
              </p>

              <div className="bg-[#FAF7F3] p-4 border border-[#211C1A]/10 text-xs text-[#8C7A70] space-y-1 text-left mb-8">
                <div className="flex justify-between">
                  <span>Selected Service:</span>
                  <span className="font-medium text-[#211C1A]">{formState.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact:</span>
                  <span className="font-medium text-[#211C1A]">{formState.whatsappNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Queue Status:</span>
                  <span className="text-emerald-700 font-semibold">Priority Reviewing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fast Track on WhatsApp Now
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#211C1A] border border-[#211C1A]/20 hover:bg-[#211C1A]/5 transition-colors cursor-pointer"
                >
                  Edit Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Active Inquiry Form */
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-800 tracking-wide">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    Your Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    WhatsApp Number <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 XXXXX"
                    value={formState.whatsappNumber}
                    onChange={(e) => setFormState({ ...formState, whatsappNumber: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Wedding / Event Date */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    Wedding / Event Date <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formState.eventDate}
                    onChange={(e) => setFormState({ ...formState, eventDate: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors"
                  />
                </div>

                {/* Event City */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    Event City
                  </label>
                  <select
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors cursor-pointer"
                  >
                    {cityOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    Venue (If Confirmed)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Taj Lands End / Private Villa"
                    value={formState.venue}
                    onChange={(e) => setFormState({ ...formState, venue: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Required */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    Service Required
                  </label>
                  <select
                    value={formState.serviceType}
                    onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors cursor-pointer"
                  >
                    {servicesOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Number of People */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                    Number of People
                  </label>
                  <select
                    value={formState.guestCount}
                    onChange={(e) => setFormState({ ...formState, guestCount: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors cursor-pointer"
                  >
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#211C1A] mb-2">
                  Special Notes or Style Preferences (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your outfit colors, ceremony timing, jewellery style, or questions..."
                  value={formState.notes}
                  onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF7F3] border border-[#211C1A]/20 text-sm text-[#211C1A] focus:outline-hidden focus:border-[#211C1A] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                {/* Primary WhatsApp Action (Visually Prominent) */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 py-4 px-6 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Check Availability on WhatsApp</span>
                </button>

                {/* Secondary Send Enquiry */}
                <button
                  type="submit"
                  className="sm:w-56 py-4 px-6 text-xs uppercase tracking-[0.18em] font-semibold text-[#FAF7F3] bg-[#211C1A] hover:bg-[#38302D] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Enquiry</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-[#8C7A70] pt-1">
                Your phone number is strictly used for booking correspondence. No spam or marketing messages.
              </div>

            </form>
          )}

        </div>

        {/* Urgency & Booking Information Strip (Prompt Section 17) */}
        <div className="mt-12 bg-white/70 border border-[#211C1A]/10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D6B98C] block mb-1">
              Booking Policy Note
            </span>
            <h4 className="font-editorial text-xl font-light text-[#211C1A] mb-1">
              Bridal Dates Are Limited
            </h4>
            <p className="text-xs text-[#211C1A]/75 font-light leading-relaxed">
              Wedding dates are reserved on a first-confirmed basis with advance deposit. Advance booking (4–6 months ahead) is recommended for peak muhurat seasons.
            </p>
          </div>

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#211C1A] hover:text-[#8C7A70] transition-colors shrink-0 group cursor-pointer"
          >
            <span>Check My Date</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
