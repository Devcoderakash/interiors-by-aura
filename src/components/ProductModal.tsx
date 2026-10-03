import React, { useEffect } from 'react';
import { X, MessageCircle, Ruler, Layers, MapPin, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppLink, business } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#FCFAF7] border border-[#E0D7CB] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-10 p-2 bg-white/90 hover:bg-white text-[#1C1917] rounded-full border border-[#DDD4C5] transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-[#EAE4DC] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="absolute bottom-3 left-3 bg-[#1C1917]/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-2xs">
              {product.category}
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#704834]">
                {product.style || 'Showroom Piece'} • {product.category}
              </span>
              
              <h2 id="modal-product-title" className="font-serif text-2xl font-bold text-[#1C1917] leading-tight">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {product.detailedDescription || product.shortDescription}
              </p>

              {/* Dimensions */}
              {product.dimensions && (
                <div className="flex items-start gap-2.5 text-xs text-[#2C2825] pt-1">
                  <Ruler className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Dimensions:</span>
                    <span className="text-[#686057]">{product.dimensions}</span>
                  </div>
                </div>
              )}

              {/* Materials */}
              {product.materials && product.materials.length > 0 && (
                <div className="flex items-start gap-2.5 text-xs text-[#2C2825]">
                  <Layers className="w-4 h-4 text-[#704834] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Materials & Build:</span>
                    <span className="text-[#686057]">{product.materials.join(' • ')}</span>
                  </div>
                </div>
              )}

              {/* Showroom inspection note */}
              <div className="p-3 bg-[#F4EFE7] border border-[#E5DDD0] rounded-xs text-[11px] text-[#635B53] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#1C1917]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Customization Available</span>
                </div>
                <p>
                  Visit our Kolar Road showroom to select polish shades, fabrics, or request custom sizing for your room.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3 border-t border-[#EBE5DB] space-y-2">
              <a
                href={getProductWhatsAppLink(product.name, product.category)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire Availability on WhatsApp</span>
              </a>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 border border-[#DDD4C5] bg-[#F6F3ED] hover:bg-[#EBE5DB] text-[#2C2825] text-xs font-medium rounded-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#704834]" />
                <span>View Showroom Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
