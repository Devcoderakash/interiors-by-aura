import React, { useState, useMemo } from 'react';
import { Search, Filter, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { Product, ProductCategory } from '../types';
import { getWhatsAppLink } from '../config/business';

interface ProductsPageProps {
  initialCategory?: ProductCategory | 'All';
}

export const Products: React.FC<ProductsPageProps> = ({ initialCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Living Room',
    'Bedroom',
    'Dining',
    'Doors',
    'Storage',
    'Custom Furniture'
  ];

  const filteredProducts = useMemo(() => {
    const sanitizedSearch = searchQuery.trim().slice(0, 80).toLowerCase();
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      if (!sanitizedSearch) return matchesCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(sanitizedSearch) ||
        product.shortDescription.toLowerCase().includes(sanitizedSearch) ||
        (product.materials && product.materials.some(m => m.toLowerCase().includes(sanitizedSearch))) ||
        (product.style && product.style.toLowerCase().includes(sanitizedSearch));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div id="products-catalogue-page" className="py-10 sm:py-16 bg-[#FCFAF7] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="border-b border-[#E8E1D5] pb-8 mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            <Sparkles className="w-3.5 h-3.5 text-[#9B5D43]" />
            <span>{selectedCategory === 'Doors' ? 'PVC Doors & Wooden Door Designs' : 'Showroom Catalogue & Custom Builds'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            {selectedCategory === 'Doors'
              ? 'PVC Doors & Wooden Door Designs in Bhopal'
              : 'Furniture & Door Collection'}
          </h1>

          <p className="text-sm sm:text-base text-[#57534E] max-w-2xl leading-relaxed">
            {selectedCategory === 'Doors'
              ? 'Explore our range of PVC doors, wooden entrance doors and interior door designs. Custom PVC door sizes available for homes and offices in Bhopal.'
              : 'Browse contemporary and solid wood designs available at Satish Furniture & Door House. Sizing, polish shades, and fabric choices can be customized to your floor plan.'}
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-[#F4EFE7] text-[#57534E] hover:text-[#1C1917] border border-[#DDD4C5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C8277] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search design, wood, style..."
              maxLength={80}
              aria-label="Search furniture and door designs"
              autoComplete="off"
              className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2 bg-white border border-[#DDD4C5] rounded-full focus:outline-hidden focus:border-[#704834]"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#78716C] mb-6">
          <span>
            Showing <strong className="text-[#1C1917]">{filteredProducts.length}</strong> items in{' '}
            <strong className="text-[#704834]">{selectedCategory}</strong>
          </span>

          <span className="hidden sm:inline">
            Pricing provided upon enquiry based on dimensions & finish
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F6F3ED] border border-[#DDD4C5] rounded-xs p-8">
            <p className="font-serif text-lg font-bold text-[#1C1917]">No designs matched your filter</p>
            <p className="text-xs text-[#6B655F] mt-1 mb-4">
              Try adjusting your search query or view another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#1C1917] text-white text-xs font-semibold rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Furniture Order Consultation Box */}
        <div className="mt-14 bg-[#F4EFE7] border border-[#DDD4C5] p-6 sm:p-8 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Need a custom PVC door size or specific door profile?
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E]">
              Share your door opening measurements or room dimensions on WhatsApp to receive tailored PVC door and furniture options.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hi Satish Furniture & Door House, I have custom dimensions and would like to discuss custom furniture/door options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#342D28] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Consult Custom Sizing</span>
          </a>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
