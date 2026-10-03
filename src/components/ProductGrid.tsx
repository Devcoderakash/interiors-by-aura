import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { featuredProducts } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Product } from '../types';

interface ProductGridProps {
  onViewAllProducts: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onViewAllProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="featured-collection-section" className="py-14 sm:py-20 bg-[#F6F3ED] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
              <Sparkles className="w-3.5 h-3.5 text-[#9B5D43]" />
              <span>Curated Showroom Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Featured Furniture
            </h2>
            <p className="text-sm sm:text-base text-[#57534E]">
              Handcrafted designs selected for their structural strength, finish, and suitability for Indian homes.
            </p>
          </div>

          <button
            id="view-full-catalogue-btn"
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 self-start md:self-auto text-xs sm:text-sm font-semibold text-[#704834] hover:text-[#4A3326] border-b border-[#704834] pb-1 transition-colors"
          >
            <span>View Full Catalogue (14+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Transparent Catalogue Placeholder Notice */}
        <div className="mt-10 p-4 bg-[#EDE6DB] border border-[#DDD4C5] rounded-xs text-center max-w-3xl mx-auto text-xs text-[#6B655F]">
          <p>
            <span className="font-semibold text-[#1C1917]">Catalogue Note:</span> Product designs shown are catalogue representations of items and custom woodwork available at Satish Furniture & Door House. Visit our Bhopal showroom or contact via WhatsApp for current floor models, custom dimensions, and wood polish varieties.
          </p>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
