import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CategoryInfo } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface CategoryCardProps {
  category: CategoryInfo;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Explore ${category.name} collection`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative bg-[#FCFAF7] border border-[#E8E1D5] hover:border-[#C4B5A5] focus:outline-hidden focus:ring-2 focus:ring-[#704834] rounded-xs overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col h-full text-left"
    >
      {/* Category Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#EBE5DB]">
        <img
          src={category.image}
          alt={`${category.name} collection at Satish Furniture & Door House Bhopal`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/60 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#1C1917]/75 px-2 py-0.5 rounded-2xs text-[#EDE6DB]">
            {category.itemCountDescription}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between grow space-y-3">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] group-hover:text-[#704834] transition-colors">
            {category.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1.5 leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#704834] group-hover:text-[#4A3326]">
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
