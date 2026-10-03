import React from 'react';
import { MapPin, Navigation, Clock, Check, ExternalLink } from 'lucide-react';
import { business } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

export const ShowroomExperience: React.FC = () => {
  return (
    <section id="showroom-experience-section" className="py-14 sm:py-20 bg-[#F4EFE7] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FCFAF7] border border-[#DDD4C5] rounded-xs overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-between space-y-8 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
                  <MapPin className="w-3.5 h-3.5 text-[#9B5D43]" />
                  <span>Physical Showroom Experience</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
                  See It. Feel It. Choose It.
                </h2>

                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
                  Sometimes the best way to choose furniture is to see the finish, feel the material and understand the size in person. Visit our showroom and explore the collection.
                </p>

                {/* Showroom Experience Perks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="flex items-start gap-2.5 text-xs text-[#2C2825]">
                    <Check className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                    <span>Compare solid wood & laminate finish swatches</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#2C2825]">
                    <Check className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                    <span>Inspect door thicknesses & lock provisions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#2C2825]">
                    <Check className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                    <span>Evaluate sofa foam density and seat depth</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#2C2825]">
                    <Check className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                    <span>Discuss custom floor plan measurements</span>
                  </div>
                </div>
              </div>

              {/* Showroom address card & directions button */}
              <div className="pt-6 border-t border-[#EDE6DB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1917]">
                    <MapPin className="w-4 h-4 text-[#9B5D43]" />
                    <span>{business.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#78716C]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{business.openingHours}</span>
                  </div>
                </div>

                <a
                  id="get-directions-btn"
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors shadow-xs shrink-0"
                >
                  <Navigation className="w-4 h-4 text-[#DDD4C5]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A89F95]" />
                </a>
              </div>
            </div>

            {/* Right Column: Showroom Image Preview */}
            <div className="lg:col-span-5 relative bg-[#EAE4DC] min-h-[300px] lg:min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Satish Furniture showroom interior in Bhopal"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D8C7B8] block mb-1">
                  Kolar Road, Bhopal
                </span>
                <p className="font-serif text-xl font-bold text-white leading-tight">
                  Walk in and explore furniture ready for your home.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
