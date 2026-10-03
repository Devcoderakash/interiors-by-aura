import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { business } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

interface AboutSectionProps {
  onKnowMoreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onKnowMoreClick }) => {
  return (
    <section id="about-overview-section" className="py-14 sm:py-20 bg-[#FCFAF7] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-xs overflow-hidden border border-[#DDD4C5] bg-[#EBE5DB] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
                  alt="Satish Furniture showroom solid woodwork and furniture in Bhopal"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/50 via-transparent to-transparent"></div>
              </div>

              {/* Decorative side accent tag */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-[#F4EFE7] border border-[#DDD4C5] py-3 px-4 rounded-xs text-left shadow-xs">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#704834] block">
                  Showroom Presence
                </span>
                <span className="text-xs font-semibold text-[#1C1917]">
                  Bairagarh Chichali, Kolar Road
                </span>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
              <span>About The Showroom</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
              Furniture for Homes That Feel Personal.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#57534E] leading-relaxed">
              <p>
                {business.name} is a local furniture and door showroom serving customers in Bhopal. The brand focuses on helping customers find PVC doors, wooden door designs and furniture solutions that fit their homes, style and requirements.
              </p>
              <p>
                Whether you are setting up a newly constructed residence, looking for a durable PVC door for your home or office, or furnishing an apartment along Kolar Road, our showroom presents options carefully selected for longevity, aesthetic balance, and practical Indian family living.
              </p>
            </div>

            {/* Genuine highlights */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#2C2825]">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#704834] shrink-0" />
                <span>Dedicated collections for living rooms, bedrooms, and dining spaces.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#704834] shrink-0" />
                <span>Extensive selection of PVC doors, wooden entrance doors and interior panel doors.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#704834] shrink-0" />
                <span>In-person consultation to guide sizing, wood polish, and layout matching.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="about-know-more-btn"
                onClick={onKnowMoreClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#1C1917] bg-[#F6F3ED] hover:bg-[#EBE5DB] border border-[#DDD4C5] rounded-xs transition-colors shadow-2xs"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#704834]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
