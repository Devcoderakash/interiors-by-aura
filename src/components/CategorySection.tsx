import React from 'react';
import { categories } from '../data/categories';
import { CategoryCard } from './CategoryCard';
import { ProductCategory } from '../types';

interface CategorySectionProps {
  onSelectCategory: (categoryName: ProductCategory) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories-section" className="py-14 sm:py-18 bg-[#FCFAF7] border-b border-[#EBE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#704834]">
            Showroom Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Explore Our Collection
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Furniture and door solutions for every corner of your home.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onClick={() => onSelectCategory(cat.name)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
