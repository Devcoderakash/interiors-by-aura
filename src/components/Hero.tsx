import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { business, getWhatsAppLink } from '../config/business';
import { ActivePage } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface HeroProps {
  onExploreClick: () => void;
  onVisitShowroomClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onVisitShowroomClick
}) => {
  return (
    <section id="hero-section" className="relative bg-[#FCFAF7] border-b border-[#EBE5DB] overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20">
      {/* Background subtle architectural tone pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8DFD3] rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#EFE8DC] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy & Conversion CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1ECE3] border border-[#DDD3C3] text-[#704834] rounded-full text-xs uppercase tracking-[0.2em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B5D43]"></span>
              <span>PVC DOORS • WOODEN DOORS • FURNITURE</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1C1917] leading-[1.12] tracking-tight">
              Premium PVC Doors &amp; Furniture for Your Home.
            </h1>

            {/* Supporting copy */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
              Explore premium PVC doors, wooden door designs and quality furniture crafted to bring comfort, character and lasting value to homes and offices in Bhopal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-explore-collection-btn"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1C1917] hover:bg-[#342D28] border border-transparent rounded-xs shadow-xs hover:shadow-md transition-all group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#DDD4C5] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#1C1917] bg-[#F6F3ED] hover:bg-[#EBE5DB] border border-[#DDD4C5] rounded-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Secondary location visit indicator */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[#78716C]">
              <button
                onClick={onVisitShowroomClick}
                className="inline-flex items-center gap-2 font-medium text-[#704834] hover:text-[#4A3326] underline underline-offset-4 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#9B5D43]" />
                <span>Visit Our Showroom in Bhopal</span>
              </button>
              <span className="text-[#DDD4C5]">•</span>
              <span className="text-[#867E77]">Bairagarh Chichali, Kolar Road</span>
            </div>
          </div>

          {/* Right Column: Editorial Visual Photography */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative warm border frame */}
              <div className="absolute -inset-2 bg-linear-to-tr from-[#E6DFD5] to-[#DDD4C5] rounded-sm opacity-60 transform -rotate-1 hidden sm:block"></div>
              
              <div className="relative overflow-hidden rounded-xs border border-[#DDD4C5] bg-[#EFEBE4] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                  alt="PVC door and furniture showroom in Bhopal — Satish Furniture & Door House, Kolar Road"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  fetchPriority="high"
                  onError={handleImageError}
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/70 via-[#1C1917]/10 to-transparent"></div>

                {/* Editorial image caption & showroom tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <div className="flex items-center justify-between text-xs text-[#E8E1D7] mb-1">
                    <span className="uppercase tracking-widest text-[10px] font-semibold text-[#D4C0B0]">Showroom Showcase</span>
                    <span>Bhopal, MP</span>
                  </div>
                  <p className="font-serif text-lg font-medium text-white tracking-wide">
                    Thoughtfully Chosen Furniture & Custom Woodwork
                  </p>
                </div>
              </div>

              {/* Floating micro trust card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FCFAF7] border border-[#DDD4C5] p-3.5 shadow-md rounded-xs items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xs bg-[#F6F3ED] border border-[#E8E1D5] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#9B5D43]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1C1917]">In-Store Inspection</p>
                  <p className="text-[11px] text-[#78716C]">Feel solid wood finishes & fabric live</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
