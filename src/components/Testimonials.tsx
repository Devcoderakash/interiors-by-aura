import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, MapPin } from 'lucide-react';
import { business } from '../config/business';

export const Testimonials: React.FC = () => {
  return (
    <section id="customer-feedback-section" className="py-14 sm:py-20 bg-[#F6F3ED] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            Showroom Reputation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            We value genuine relationships with homeowners across Bhopal. Read verified feedback on Google Maps or share your showroom experience.
          </p>
        </div>

        {/* Structured Feedback Framework Card */}
        <div className="max-w-3xl mx-auto bg-[#FCFAF7] border border-[#DDD4C5] rounded-xs p-6 sm:p-8 text-left shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EDE6DB]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-[#F4EFE7] border border-[#DDD4C5] flex items-center justify-center text-[#704834]">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                  Google Maps Showroom Reviews
                </h3>
                <p className="text-xs text-[#78716C] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9B5D43]" />
                  <span>Satish Furniture & Door House • Kolar Road, Bhopal</span>
                </p>
              </div>
            </div>

            <a
              id="google-reviews-external-link"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] bg-[#F6F3ED] hover:bg-[#EBE5DB] border border-[#DDD4C5] px-4 py-2 rounded-xs transition-colors shrink-0"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#704834]" />
            </a>
          </div>

          {/* Genuine Experience Pillars */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-[#1C1917] block">Personal Sizing Help</span>
              <p className="text-xs text-[#635B53] leading-relaxed">
                Customers often mention the practical advice received when choosing sizes for living room and bedroom layouts.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-[#1C1917] block">Solid Wood Choices</span>
              <p className="text-xs text-[#635B53] leading-relaxed">
                Appreciation for durable wood doors, seasoned timber frames, and solid dining sets built for daily usage.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-[#1C1917] block">Direct Showroom Service</span>
              <p className="text-xs text-[#635B53] leading-relaxed">
                Approachable local team on Kolar Road who guide polish selections without high-pressure sales tactics.
              </p>
            </div>
          </div>

          {/* Review Invite Notice */}
          <div className="mt-6 pt-5 border-t border-[#EDE6DB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716C]">
            <span>Visited our showroom recently? Help fellow Bhopal residents by sharing your review.</span>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#704834] hover:text-[#4A3326] underline underline-offset-2 shrink-0"
            >
              Write a Review →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
