import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { business, getWhatsAppLink, getPhoneLink } from '../config/business';

export const CTASection: React.FC = () => {
  return (
    <section id="whatsapp-lead-cta-section" className="py-14 sm:py-20 bg-[#241F1C] text-[#FAF8F5] border-t border-[#38322D] relative overflow-hidden">
      {/* Background warm grain pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B5D43] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#362F2A] border border-[#4D433C] text-[#D8C7B8] rounded-full text-xs uppercase tracking-[0.2em] font-semibold">
          <span>Personal Consultation</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Looking for Furniture or Doors?
        </h2>

        <p className="text-base sm:text-lg text-[#C7BCB0] max-w-2xl mx-auto leading-relaxed">
          Tell us what you're looking for and our team can help you explore the right options.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            id="cta-whatsapp-main-btn"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-sm rounded-xs transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            id="cta-call-main-btn"
            href={getPhoneLink()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold text-sm border border-[#5C524A] rounded-xs transition-all"
          >
            <Phone className="w-4 h-4 text-[#C49B7A]" />
            <span>Call Now ({business.phoneDisplay})</span>
          </a>
        </div>

        {/* Showroom location indicator */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-[#9E9387]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C49B7A]" />
            <span>Showroom: Bairagarh Chichali, Kolar Road, Bhopal</span>
          </span>
          <span className="hidden sm:inline text-[#5C524A]">•</span>
          <span>Open all 7 days for personal visits</span>
        </div>

      </div>
    </section>
  );
};
