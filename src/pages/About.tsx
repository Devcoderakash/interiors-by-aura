import React from 'react';
import { MapPin, CheckCircle, Store, ShieldCheck, HeartHandshake, Navigation } from 'lucide-react';
import { business } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <div id="about-page" className="py-10 sm:py-16 bg-[#FCFAF7] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="border-b border-[#E8E1D5] pb-8 mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            <span>About The Showroom</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Furniture for Homes That Feel Personal.
          </h1>

          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed">
            Satish Furniture & Door House is a local furniture and door showroom serving customers in Bhopal.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-[#57534E] text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
              A Dedicated Showroom on Kolar Road, Bhopal
            </h2>

            <p>
              Satish Furniture & Door House is established in Bairagarh Chichali along Kolar Road in Bhopal, Madhya Pradesh. The showroom was founded with a straightforward purpose: to help local families, new home builders, and apartment owners find furniture and door solutions that fit their actual living spaces, personal taste, and everyday requirements.
            </p>

            <p>
              Rather than overwhelming customers with mass-market catalogues without practical guidance, we provide a physical environment where you can touch solid wood finishes, inspect door thickness, test sofa seating comfort, and explore furniture built for long-term durability.
            </p>

            <div className="pt-2 border-l-2 border-[#704834] pl-4 italic text-[#2C2825] font-serif text-base sm:text-lg">
              "We believe choosing furniture for your home should never feel like guesswork. Seeing and feeling the craftsmanship in person makes all the difference."
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xs overflow-hidden border border-[#DDD4C5] bg-[#EAE4DC] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="Inside Satish Furniture Showroom Bhopal"
                className="w-full h-[380px] sm:h-[420px] object-cover"
                onError={handleImageError}
              />
              <div className="p-4 bg-[#F6F3ED] border-t border-[#EDE6DB] text-xs text-[#78716C] flex items-center justify-between">
                <span>Showroom Floor • Kolar Road</span>
                <span>Bhopal, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-[#F6F3ED] border border-[#DDD4C5] p-8 sm:p-10 rounded-xs mb-16">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
              How We Work
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Our Guiding Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-white border border-[#DDD4C5] flex items-center justify-center text-[#704834]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C1917]">Material Transparency</h4>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Clear explanations regarding seasoned solid timber, moisture-resistant plywood cores, and polish varieties suitable for the Bhopal weather.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-white border border-[#DDD4C5] flex items-center justify-center text-[#704834]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C1917]">Personal Assistance</h4>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Honest sizing advice for living room seating, bed frame clearances, and door swing directions based on your layout.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-white border border-[#DDD4C5] flex items-center justify-center text-[#704834]">
                <Store className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C1917]">Both Furniture & Doors</h4>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Conveniently select your entrance doors, room doors, sofas, wardrobes, and dining tables together in one showroom trip.
              </p>
            </div>
          </div>
        </div>

        {/* Visit Showroom CTA card */}
        <div className="bg-[#241F1C] text-white p-8 sm:p-12 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              We Welcome You to Visit Our Showroom
            </h3>
            <p className="text-xs sm:text-sm text-[#C4BAB0] max-w-xl">
              Located at Bairagarh Chichali, Kolar Road, Bhopal. Open all 7 days from 10:00 AM to 9:00 PM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FCFAF7] hover:bg-white text-[#1C1917] text-xs sm:text-sm font-semibold rounded-xs transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#704834]" />
              <span>Get Directions</span>
            </a>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#5C524A] hover:bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors"
            >
              <span>Contact Showroom</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
