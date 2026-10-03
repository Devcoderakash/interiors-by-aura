import React from 'react';
import { MessageCircle, Info } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppLink } from '../config/business';
import { handleImageError } from '../utils/imageUtils';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-[#FCFAF7] border border-[#E8E1D5] hover:border-[#BFAF9E] rounded-xs overflow-hidden transition-all duration-300 flex flex-col h-full text-left"
    >
      {/* Large Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#EAE4DC]">
        <img
          src={product.image}
          alt={product.category === 'Doors'
            ? `${product.name} - PVC door design at Satish Furniture, Bhopal`
            : `${product.name} - ${product.category} at Satish Furniture Bhopal`}
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
          loading="lazy"
          onError={handleImageError}
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#1C1917]/80 backdrop-blur-xs text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-2xs border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Optional Quick View trigger */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#1C1917] p-2 rounded-xs shadow-xs transition-opacity opacity-0 group-hover:opacity-100 sm:block hidden text-xs font-medium"
            title="View Details"
          >
            <Info className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col justify-between grow space-y-4">
        <div className="space-y-2">
          {product.style && (
            <span className="text-[11px] font-medium text-[#704834] uppercase tracking-wider block">
              {product.style} • {product.subCategory || 'Showroom Design'}
            </span>
          )}

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] leading-snug group-hover:text-[#704834] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Key Materials Preview */}
          {product.materials && product.materials.length > 0 && (
            <div className="pt-1 flex flex-wrap gap-1.5">
              {product.materials.slice(0, 2).map((mat, idx) => (
                <span key={idx} className="text-[10px] bg-[#F4EFE7] text-[#635B53] px-2 py-0.5 rounded-2xs border border-[#E6DFC6]">
                  {mat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing Notice & WhatsApp CTA */}
        <div className="pt-3 border-t border-[#F0EAE1] space-y-2.5">
          <div className="flex items-center justify-between text-[11px] text-[#78716C]">
            <span className="font-medium text-[#704834]">Enquiry-based pricing</span>
            <span>Custom sizes available</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              id={`whatsapp-enquiry-${product.id}`}
              href={getProductWhatsAppLink(product.name, product.category)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 bg-[#1C1917] hover:bg-[#38312B] text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
              aria-label={`Enquire on WhatsApp about ${product.name}`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>

            {onQuickView && (
              <button
                onClick={() => onQuickView(product)}
                className="sm:hidden p-2.5 bg-[#F6F3ED] border border-[#DDD4C5] text-[#1C1917] rounded-xs"
                aria-label="View specifications"
              >
                <Info className="w-4 h-4 text-[#704834]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
