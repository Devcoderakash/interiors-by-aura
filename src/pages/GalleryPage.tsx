import React, { useState, useEffect } from 'react';
import { ZoomIn, X, Sparkles, MessageCircle } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';
import { getWhatsAppLink } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const tabs = ['All', 'Furniture', 'Doors', 'Bedroom', 'Living Room', 'Showroom & Finishes'];

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImage]);

  return (
    <div id="full-gallery-page" className="py-10 sm:py-16 bg-[#FCFAF7] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#E8E1D5] pb-8 mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            <Sparkles className="w-3.5 h-3.5 text-[#9B5D43]" />
            <span>Visual Showcase & Finishes</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Showroom Gallery
          </h1>

          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed">
            Explore photos of furniture designs, solid wood entrance doors, bedroom arrangements, and wood finish samples.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-[#F4EFE7] text-[#57534E] hover:text-[#1C1917] border border-[#DDD4C5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onClick={() => setActiveImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              className="group bg-[#FCFAF7] border border-[#E8E1D5] hover:border-[#9B5D43] focus:outline-hidden focus:ring-2 focus:ring-[#704834] rounded-xs overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#EAE4DC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={handleImageError}
                />
                
                <div className="absolute inset-0 bg-[#1C1917]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-[#1C1917] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-2.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#1C1917]/80 text-white px-2 py-0.5 rounded-2xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#704834] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#686057] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Inquiry for any item */}
        <div className="mt-14 p-6 bg-[#F6F3ED] border border-[#DDD4C5] rounded-xs text-center space-y-3">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
            Saw a specific design in the gallery you liked?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-xl mx-auto">
            Take a screenshot or send us the title on WhatsApp and we will check showroom availability and customization details for you.
          </p>
          <a
            href={getWhatsAppLink("Hi Satish Furniture & Door House, I saw a design in your online gallery and would like to inquire about it.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-xs shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Inquire About a Gallery Design</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#FCFAF7] rounded-xs overflow-hidden shadow-2xl border border-[#DDD4C5]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#1C1917] transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[70vh] object-cover"
              onError={handleImageError}
            />

            <div className="p-5 text-left bg-[#FCFAF7] space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#704834]">
                {activeImage.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                {activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E]">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
