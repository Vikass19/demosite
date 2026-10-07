import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onCheckDateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckDateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#lookbook' },
    { label: 'Services', href: '#services' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Experience', href: '#experience' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#booking' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F3]/90 backdrop-blur-md border-b border-[#211C1A]/10 py-3 shadow-xs'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single Text Element per Top Bar Contract) */}
          <a
            href="#"
            className="group flex flex-col focus:outline-hidden"
            aria-label="Shreya Kamat Home"
          >
            <span className="font-editorial text-2xl sm:text-3xl tracking-widest text-[#211C1A] uppercase font-light">
              Shreya Kamat
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.2em] font-medium text-[#211C1A]/80">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="hover:text-[#211C1A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#211C1A] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCheckDateClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#FAF7F3] bg-[#211C1A] hover:bg-[#342D2A] transition-colors duration-200 cursor-pointer shadow-xs border border-[#211C1A]"
            >
              Check Your Date
            </button>

            {/* Mobile quick CTA */}
            <button
              onClick={onCheckDateClick}
              className="sm:hidden px-3.5 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#FAF7F3] bg-[#211C1A] cursor-pointer"
            >
              Check Date
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#211C1A] focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF7F3] pt-24 px-8 pb-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 pt-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C7A70] border-b border-[#211C1A]/10 pb-2">
              Menu Navigation
            </span>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-editorial text-2xl tracking-wide text-[#211C1A] hover:text-[#8C7A70] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-8 border-t border-[#211C1A]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCheckDateClick();
              }}
              className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-[#FAF7F3] bg-[#211C1A] text-center"
            >
              Check Date Availability
            </button>
            <a
              href="https://wa.me/919820012345?text=Hello%20Shreya,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-xs uppercase tracking-widest font-medium text-[#211C1A] border border-[#211C1A]/30 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              Chat on WhatsApp
            </a>
            <div className="text-center text-[11px] text-[#8C7A70] pt-2">
              Mumbai · Pune · Destination Weddings Across India
            </div>
          </div>
        </div>
      )}
    </>
  );
};
