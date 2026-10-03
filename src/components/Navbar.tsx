import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Menu, X, MapPin } from 'lucide-react';
import { business, getWhatsAppLink, getPhoneLink } from '../config/business';
import { ActivePage } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onNavigateToCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onNavigateToCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (page: ActivePage, category?: string) => {
    setActivePage(page);
    if (category && onNavigateToCategory) {
      onNavigateToCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar with location banner */}
      <div id="top-announcement-bar" className="bg-[#241F1C] text-[#E0D8CE] text-xs py-2 px-4 border-b border-[#38322D]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C49B7A] shrink-0" />
            <span>Showroom: Bairagarh Chichali, Kolar Road, Bhopal</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wide">
            <span className="text-[#A99D92]">Open all 7 days: 10:00 AM – 9:00 PM</span>
            <a 
              href={business.mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E0D8CE] hover:text-white underline underline-offset-2 transition-colors"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D5] py-3'
            : 'bg-[#FCFAF7] border-b border-[#EDE6DB] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            id="brand-logo-btn"
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="text-left group focus:outline-hidden"
            aria-label="Go to homepage"
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <a
              id="nav-link-home"
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-sm ${
                activePage === 'home'
                  ? 'text-[#1C1917] font-semibold border-b-2 border-[#704834]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Home
            </a>

            <a
              id="nav-link-furniture"
              href="/products"
              onClick={(e) => { e.preventDefault(); handleNavClick('products', 'Living Room'); }}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-sm ${
                activePage === 'products'
                  ? 'text-[#1C1917] font-semibold border-b-2 border-[#704834]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Furniture
            </a>

            <a
              id="nav-link-doors"
              href="/doors"
              onClick={(e) => { e.preventDefault(); handleNavClick('doors', 'Doors'); }}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-sm ${
                activePage === 'doors'
                  ? 'text-[#1C1917] font-semibold border-b-2 border-[#704834]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Doors
            </a>

            <a
              id="nav-link-gallery"
              href="/gallery"
              onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-sm ${
                activePage === 'gallery'
                  ? 'text-[#1C1917] font-semibold border-b-2 border-[#704834]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Gallery
            </a>

            <a
              id="nav-link-about"
              href="/about"
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-sm ${
                activePage === 'about'
                  ? 'text-[#1C1917] font-semibold border-b-2 border-[#704834]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              About
            </a>

            <a
              id="nav-link-contact"
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-sm ${
                activePage === 'contact'
                  ? 'text-[#1C1917] font-semibold border-b-2 border-[#704834]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={getPhoneLink()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A3E39] border border-[#DDD4C5] bg-[#F6F3ED] hover:bg-[#EBE5DB] px-3.5 py-2 rounded-xs transition-colors"
              title="Call Showroom"
            >
              <Phone className="w-3.5 h-3.5 text-[#704834]" />
              <span>Call Showroom</span>
            </a>

            <a
              id="nav-whatsapp-cta-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#342D28] px-4 py-2 rounded-xs transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-nav-whatsapp-icon"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-[#1C1917] rounded-xs"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1917] hover:bg-[#EBE5DB] rounded-xs transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-drawer" className="lg:hidden border-t border-[#E8E1D5] bg-[#FCFAF7] px-4 pt-3 pb-6 mt-2 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2">
              <a
                id="mobile-link-home"
                href="/"
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className={`block text-left px-3 py-2.5 text-base font-medium rounded-xs ${
                  activePage === 'home' ? 'bg-[#EFE9DF] text-[#1C1917] font-semibold' : 'text-[#44403C]'
                }`}
              >
                Home
              </a>
              <a
                id="mobile-link-furniture"
                href="/products"
                onClick={(e) => { e.preventDefault(); handleNavClick('products', 'Living Room'); }}
                className={`block text-left px-3 py-2.5 text-base font-medium rounded-xs ${
                  activePage === 'products' ? 'bg-[#EFE9DF] text-[#1C1917] font-semibold' : 'text-[#44403C]'
                }`}
              >
                Furniture Collection
              </a>
              <a
                id="mobile-link-doors"
                href="/doors"
                onClick={(e) => { e.preventDefault(); handleNavClick('doors', 'Doors'); }}
                className={`block text-left px-3 py-2.5 text-base font-medium rounded-xs ${
                  activePage === 'doors' ? 'bg-[#EFE9DF] text-[#1C1917] font-semibold' : 'text-[#44403C]'
                }`}
              >
                Door Designs
              </a>
              <a
                id="mobile-link-gallery"
                href="/gallery"
                onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}
                className={`block text-left px-3 py-2.5 text-base font-medium rounded-xs ${
                  activePage === 'gallery' ? 'bg-[#EFE9DF] text-[#1C1917] font-semibold' : 'text-[#44403C]'
                }`}
              >
                Showroom Gallery
              </a>
              <a
                id="mobile-link-about"
                href="/about"
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                className={`block text-left px-3 py-2.5 text-base font-medium rounded-xs ${
                  activePage === 'about' ? 'bg-[#EFE9DF] text-[#1C1917] font-semibold' : 'text-[#44403C]'
                }`}
              >
                About Us
              </a>
              <a
                id="mobile-link-contact"
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className={`block text-left px-3 py-2.5 text-base font-medium rounded-xs ${
                  activePage === 'contact' ? 'bg-[#EFE9DF] text-[#1C1917] font-semibold' : 'text-[#44403C]'
                }`}
              >
                Contact & Showroom Location
              </a>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E8E1D5] flex flex-col gap-2.5">
              <a
                id="mobile-drawer-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1C1917] text-white font-medium text-sm rounded-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                id="mobile-drawer-call-btn"
                href={getPhoneLink()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-[#DDD4C5] bg-[#F6F3ED] text-[#2C2825] font-medium text-sm rounded-xs"
              >
                <Phone className="w-4 h-4 text-[#704834]" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
