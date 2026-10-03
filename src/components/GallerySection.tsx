import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, X, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface GallerySectionProps {
  onViewFullGallery: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewFullGallery }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const tabs = ['All', 'Living Room', 'Doors', 'Bedroom', 'Showroom & Finishes'];

  const filteredItems = activeTab === 'All' 
    ? galleryItems.slice(0, 6)
    : galleryItems.filter(item => item.category === activeTab || (activeTab === 'Doors' && item.category === 'Doors'));

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
    <section id="gallery-preview-section" className="py-14 sm:py-20 bg-[#FCFAF7] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
              Visual Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Furniture & Door Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#57534E]">
              A glimpse into design silhouettes, natural wood finishes, and craftsmanship inspirations.
            </p>
          </div>

          <button
            id="view-full-gallery-btn"
            onClick={onViewFullGallery}
            className="inline-flex items-center gap-2 self-start md:self-auto text-xs sm:text-sm font-semibold text-[#704834] hover:text-[#4A3326] border-b border-[#704834] pb-1 transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs rounded-full font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[#1C1917] text-white'
                  : 'bg-[#F4EFE7] text-[#57534E] hover:text-[#1C1917] border border-[#DDD4C5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              className="group relative overflow-hidden rounded-xs border border-[#E8E1D5] bg-[#EAE4DC] cursor-pointer shadow-2xs hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#704834] transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-[#1C1917]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#1C1917] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title strip */}
              <div className="p-3.5 bg-[#FCFAF7] border-t border-[#EDE6DB] text-left">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#704834] block">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm font-bold text-[#1C1917] mt-0.5 truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Temporary imagery disclaimer */}
        <p className="mt-8 text-center text-xs text-[#78716C] max-w-xl mx-auto">
          Inspirational and catalogue photos shown for visual reference. Authentic showroom inventory photos are continually updated at our Bhopal showroom.
        </p>

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

            <div className="p-5 text-left bg-[#FCFAF7]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#704834]">
                {activeImage.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mt-1">
                {activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] mt-1.5">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
