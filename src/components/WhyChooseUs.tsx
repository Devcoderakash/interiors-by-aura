import React from 'react';
import { Sparkles, Home, UserCheck, Eye, Layers, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const valueProps = [
    {
      icon: Sparkles,
      title: "Quality-Focused",
      description: "Furniture and door options selected with careful attention to solid wood joinery, edge finishing, and lasting hardware."
    },
    {
      icon: Home,
      title: "Practical Designs",
      description: "Solutions designed specifically for everyday Indian homes, balancing aesthetic appeal with easy maintenance and smart storage."
    },
    {
      icon: UserCheck,
      title: "Personal Assistance",
      description: "Get honest, face-to-face guidance choosing furniture and doors that harmonize with your floor plan and spatial limits."
    },
    {
      icon: Eye,
      title: "Showroom Experience",
      description: "Visit our showroom on Kolar Road to see the real wood grain, touch fabric textures, and test seating firmness in person."
    },
    {
      icon: Layers,
      title: "Furniture + Doors",
      description: "A single, convenient destination where you can select both interior furniture and entrance door solutions simultaneously."
    },
    {
      icon: MapPin,
      title: "Local Bhopal Service",
      description: "Rooted in Bhopal, providing dependable local assistance, direct communication, and prompt coordination for your home."
    }
  ];

  return (
    <section id="why-choose-us-section" className="py-14 sm:py-20 bg-[#F6F3ED] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Why Choose Satish Furniture & Door House?
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Grounded in genuine local craftsmanship and dedicated support for Bhopal homeowners.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valueProps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FCFAF7] border border-[#E6DFC6] p-6 sm:p-7 rounded-xs shadow-2xs hover:border-[#9B5D43] transition-colors text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xs bg-[#F4EFE7] border border-[#DDD4C5] flex items-center justify-center text-[#704834]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
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
