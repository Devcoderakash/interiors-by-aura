import React from 'react';
import { MessageCircle, MapPin, Phone, ArrowUp, Mail } from 'lucide-react';
import { business, getWhatsAppLink, getPhoneLink } from '../config/business';
import { ActivePage } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onNavigateToCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  activePage,
  setActivePage,
  onNavigateToCategory
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: ActivePage, category?: string) => {
    setActivePage(page);
    if (category && onNavigateToCategory) {
      onNavigateToCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C1917] text-[#E8E1D7] border-t border-[#38312B] text-left">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <Logo variant="light" size="md" />
            </div>

            <p className="text-xs sm:text-sm text-[#A89E93] leading-relaxed max-w-sm">
              Your destination for handcrafted home furniture and stylish wooden doors in Bhopal. Built with attention to materials, durable joinery, and everyday comfort.
            </p>

            <div className="pt-2">
              <a
                id="footer-whatsapp-cta-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-semibold rounded-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-black" />
                <span>WhatsApp Us ({business.whatsappDisplay})</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C49B7A]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C4BAB0]">
              <li>
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); handleNav('home'); }}
                  className="hover:text-white transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(e) => { e.preventDefault(); handleNav('products', 'Living Room'); }}
                  className="hover:text-white transition-colors block"
                >
                  Furniture Collection
                </a>
              </li>
              <li>
                <a
                  href="/doors"
                  onClick={(e) => { e.preventDefault(); handleNav('doors', 'Doors'); }}
                  className="hover:text-white transition-colors block"
                >
                  Door Designs & Sizing
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  onClick={(e) => { e.preventDefault(); handleNav('gallery'); }}
                  className="hover:text-white transition-colors block"
                >
                  Showroom Gallery
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); handleNav('about'); }}
                  className="hover:text-white transition-colors block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
                  className="hover:text-white transition-colors block"
                >
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom Contact Details (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C49B7A]">
              Bhopal Showroom
            </h4>
            <div className="space-y-2.5 text-xs text-[#A89E93]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49B7A] shrink-0 mt-0.5" />
                <span>
                  {business.address}, Bhopal, Madhya Pradesh (PIN {business.pincode})
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C49B7A] shrink-0" />
                <a href={getPhoneLink()} className="hover:text-white transition-colors">
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C49B7A] shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                  {business.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#8C8277]">
                <p>Visiting Hours: 10:00 AM – 9:00 PM</p>
                <p>Showroom Open All 7 Days</p>
              </div>

              <div className="pt-1">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C49B7A] hover:text-white underline underline-offset-2"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Micro Footer */}
      <div className="border-t border-[#292420] py-5 px-4 sm:px-6 lg:px-8 bg-[#141210]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C8277]">
          <div>
            © 2026 {business.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-[#1C1917] px-3.5 py-1.5 rounded-full border border-[#38312B] shadow-sm">
              <span className="text-[11px] sm:text-xs text-[#A89E93]">
                Website by <span className="text-white font-bold tracking-wide">AuraForge</span> 
                <span className="text-[#8C8277] ml-1.5">(Akash Lodhi)</span>
              </span>
              <div className="hidden sm:block w-px h-3.5 bg-[#38312B]"></div>
              <a 
                href="tel:+917869461895" 
                className="flex items-center gap-1.5 text-[#C49B7A] hover:text-white text-[11px] sm:text-xs font-medium transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                7869461895
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-xs bg-[#241F1C] hover:bg-[#342D28] text-[#C4BAB0] hover:text-white transition-colors"
              aria-label="Scroll to top of page"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
