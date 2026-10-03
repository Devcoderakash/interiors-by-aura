import React from 'react';
import { ArrowRight, MessageCircle, DoorClosed, Shield, Compass } from 'lucide-react';
import { doorProducts } from '../data/products';
import { getProductWhatsAppLink, getWhatsAppLink } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

interface DoorCollectionProps {
  onExploreDoorsClick: () => void;
}

export const DoorCollection: React.FC<DoorCollectionProps> = ({ onExploreDoorsClick }) => {
  return (
    <section id="doors-collection-section" className="py-14 sm:py-20 bg-[#FCFAF7] border-b border-[#E8E1D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
              <DoorClosed className="w-4 h-4 text-[#9B5D43]" />
              <span>PVC Doors &amp; Wooden Door House</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Premium PVC Doors &amp; Wooden Doors in Bhopal.
            </h2>
            <p className="text-sm sm:text-base text-[#57534E]">
              Explore PVC door designs and solid wooden doors that add warmth, character and elegance to your home or office in Bhopal.
            </p>
          </div>

          <button
            id="explore-doors-cta-top"
            onClick={onExploreDoorsClick}
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
          >
            <span>Explore Door Collection</span>
            <ArrowRight className="w-4 h-4 text-[#DDD4C5]" />
          </button>
        </div>

        {/* Door categories indicator badges */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {["Main Entrance Doors", "Solid Wooden Doors", "Modern Geometric Doors", "Classic Panelled Doors", "Interior Room Doors"].map((item, idx) => (
            <span 
              key={idx}
              className="text-xs bg-[#F4EFE7] border border-[#DDD4C5] text-[#4A3E39] px-3.5 py-1.5 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Rich Horizontal Gallery / Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doorProducts.slice(0, 4).map((door) => (
            <div 
              key={door.id}
              className="group bg-[#FCFAF7] border border-[#E6DFC6] hover:border-[#9B5D43] rounded-xs overflow-hidden transition-all duration-300 flex flex-col text-left"
            >
              {/* Door Image with portrait aspect */}
              <div className="relative aspect-3/4 overflow-hidden bg-[#E7E1D8]">
                <img
                  src={door.image}
                  alt={`${door.name} - PVC door design at Satish Furniture & Door House, Bhopal`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D8C7B8] block mb-1">
                    {door.subCategory || 'Door Solution'}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {door.name}
                  </h3>
                </div>
              </div>

              {/* Door Card Details */}
              <div className="p-4 flex flex-col justify-between grow space-y-3 bg-[#FCFAF7]">
                <p className="text-xs text-[#57534E] line-clamp-2">
                  {door.shortDescription}
                </p>

                {door.dimensions && (
                  <p className="text-[11px] text-[#78716C] font-mono">
                    Std: {door.dimensions}
                  </p>
                )}

                <div className="pt-2 border-t border-[#F0EAE1]">
                  <a
                    href={getProductWhatsAppLink(door.name, "Doors")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#F6F3ED] hover:bg-[#EBE5DB] text-[#1C1917] border border-[#DDD4C5] text-xs font-semibold rounded-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire Door Sizing</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Door Craftsmanship Value Highlight */}
        <div className="mt-10 p-6 bg-[#F4EFE7] border border-[#DDD4C5] rounded-xs grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xs bg-white border border-[#DDD4C5] flex items-center justify-center shrink-0 text-[#704834]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">Seasoned Timber</h4>
              <p className="text-xs text-[#635B53] mt-0.5">Kiln-dried and seasoned wood core to withstand seasonal expansion in Bhopal.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xs bg-white border border-[#DDD4C5] flex items-center justify-center shrink-0 text-[#704834]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">Custom Door Frames</h4>
              <p className="text-xs text-[#635B53] mt-0.5">Single and double door designs crafted to your contractor's rough frame measurements.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xs bg-white border border-[#DDD4C5] flex items-center justify-center shrink-0 text-[#704834]">
              <DoorClosed className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1C1917] uppercase tracking-wider">Hardware Ready</h4>
              <p className="text-xs text-[#635B53] mt-0.5">Compatible with standard mortise locks, modern smart digital locks, and decorative brass pulls.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <button
            id="explore-doors-cta-bottom"
            onClick={onExploreDoorsClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors shadow-xs"
          >
            <span>Explore All Door Designs & Finishes</span>
            <ArrowRight className="w-4 h-4 text-[#DDD4C5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
