import React from 'react';
import { ShieldCheck, Compass, HeartHandshake, Store, Users } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      description: "Selected seasoned timber, durable boards & fabrics"
    },
    {
      icon: Compass,
      title: "Elegant Designs",
      description: "Contemporary silhouettes for Indian home spaces"
    },
    {
      icon: HeartHandshake,
      title: "Reliable Service",
      description: "Personal guidance on sizing & finish selection"
    },
    {
      icon: Store,
      title: "Local Showroom",
      description: "Conveniently located on Kolar Road, Bhopal"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Custom adjustments tailored to your floor plan"
    }
  ];

  return (
    <section id="trust-strip-section" className="bg-[#F6F3ED] border-b border-[#E8E1D5] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-3.5 text-left group"
              >
                <div className="w-9 h-9 rounded-xs bg-[#FCFAF7] border border-[#DDD4C5] flex items-center justify-center shrink-0 text-[#704834] group-hover:border-[#9B5D43] transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1C1917] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6B655F] leading-tight line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
