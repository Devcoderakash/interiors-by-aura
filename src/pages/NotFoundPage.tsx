import React from 'react';
import { Home, Compass, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { business, getWhatsAppLink } from '../config/business';
import { ActivePage } from '../types';

interface NotFoundPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div id="not-found-page" className="py-16 sm:py-24 bg-[#FCFAF7] min-h-[70vh] flex items-center text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#F6F3ED] border border-[#DDD4C5] rounded-xs p-8 sm:p-12 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBE5DB] border border-[#D5C9B8] text-[#704834] rounded-full text-xs uppercase tracking-[0.2em] font-semibold">
            <span>404 Error</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
              We couldn't find the showroom page or design catalogue you were looking for. It may have moved or the address may have a slight typo.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors shadow-xs"
            >
              <Home className="w-4 h-4 text-[#DDD4C5]" />
              <span>Back to Home</span>
            </a>

            <a
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('products');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FCFAF7] hover:bg-[#EBE5DB] text-[#1C1917] border border-[#DDD4C5] text-xs sm:text-sm font-semibold rounded-xs transition-colors"
            >
              <Compass className="w-4 h-4 text-[#704834]" />
              <span>Browse Furniture</span>
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FCFAF7] hover:bg-[#EBE5DB] text-[#1C1917] border border-[#DDD4C5] text-xs sm:text-sm font-semibold rounded-xs transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#704834]" />
              <span>Contact Showroom</span>
            </a>
          </div>

          <div className="pt-6 border-t border-[#E0D7CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#78716C]">
            <span>Need direct assistance? Chat directly with our Bhopal showroom team.</span>
            <a
              href={getWhatsAppLink("Hi, I was browsing your website and had a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#704834] hover:text-[#4A3326]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us ({business.whatsappDisplay})</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
