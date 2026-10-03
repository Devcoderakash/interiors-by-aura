import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail, ExternalLink } from 'lucide-react';
import { business, getWhatsAppLink, getPhoneLink } from '../config/business';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-14 sm:py-20 bg-[#FCFAF7] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Connect via WhatsApp or Call
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Get instant replies for pricing, design catalogues, and custom dimensions directly from our Bhopal showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct WhatsApp & Call Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 text-left">
            
            {/* WhatsApp Card */}
            <div className="bg-[#F6FBF7] border border-[#CDE5D5] p-6 rounded-xs shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6 fill-[#25D366] text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-xs text-[#52796F]">
                    Fastest way to get photos, catalogues & quotes
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#DDECE2] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#57534E] block">
                    WhatsApp Number
                  </span>
                  <span className="font-mono text-base font-bold text-[#1C1917]">
                    {business.whatsappDisplay}
                  </span>
                </div>
                <a
                  id="contact-whatsapp-direct-btn"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-bold rounded-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Call Card */}
            <div className="bg-[#FAF7F3] border border-[#E8DCCF] p-6 rounded-xs shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#704834]/15 flex items-center justify-center text-[#704834] shrink-0">
                  <Phone className="w-5 h-5 fill-[#704834]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
                    Call Showroom
                  </h3>
                  <p className="text-xs text-[#704834]">
                    Direct voice consultation for home requirements
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EAE0D4] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#57534E] block">
                    Showroom Helpline
                  </span>
                  <span className="font-mono text-base font-bold text-[#1C1917]">
                    {business.phoneDisplay}
                  </span>
                </div>
                <a
                  id="contact-call-direct-btn"
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-bold rounded-xs transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#DDD4C5]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Showroom Address & Hours */}
            <div className="bg-[#F6F3ED] border border-[#DDD4C5] p-6 rounded-xs space-y-4 shadow-2xs flex-1">
              <div>
                <h4 className="font-serif text-base font-bold text-[#1C1917]">
                  {business.name}
                </h4>
                <p className="text-[11px] text-[#704834] font-medium tracking-wide uppercase mt-0.5">
                  Showroom Location & Visiting Hours
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#E8E1D5] text-xs text-[#44403C]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#9B5D43] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Address:</span>
                    <span>{business.address} (PIN: {business.pincode})</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Showroom Timings:</span>
                    <span>{business.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Email:</span>
                    <span>{business.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="contact-maps-btn"
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-[#DDD4C5]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A89F95]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="rounded-xs overflow-hidden border border-[#DDD4C5] bg-[#EBE5DB] flex flex-col h-full shadow-2xs">
              <div className="p-3.5 bg-[#F6F3ED] border-b border-[#DDD4C5] flex items-center justify-between text-xs text-[#57534E]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#704834]" />
                  <span className="font-semibold text-[#1C1917]">Interactive Map: Kolar Road, Bhopal</span>
                </div>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#704834] font-medium hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
              
              <div className="relative w-full flex-1 min-h-[380px] lg:min-h-[460px] bg-[#E8E1D5]">
                <iframe
                  title="Satish Furniture and Door House Google Map Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(business.mapsEmbedQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[380px] lg:min-h-[460px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                ></iframe>
              </div>

              <div className="p-3 bg-[#FCFAF7] border-t border-[#DDD4C5] text-xs text-[#57534E] flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>📍 Located along Kolar Road in Bairagarh Chichali, Bhopal</span>
                <span className="text-[#704834] font-medium">Walk-ins Welcome Everyday</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
