import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { CategorySection } from '../components/CategorySection';
import { ProductGrid } from '../components/ProductGrid';
import { DoorCollection } from '../components/DoorCollection';
import { ShowroomExperience } from '../components/ShowroomExperience';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { AboutSection } from '../components/AboutSection';
import { GallerySection } from '../components/GallerySection';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';
import { ActivePage, ProductCategory } from '../types';

interface HomeProps {
  setActivePage: (page: ActivePage) => void;
  setSelectedCategory: (category: ProductCategory | 'All') => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage, setSelectedCategory }) => {
  const handleCategoryClick = (categoryName: ProductCategory) => {
    setSelectedCategory(categoryName);
    if (categoryName === 'Doors') {
      setActivePage('doors');
    } else {
      setActivePage('products');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page" className="w-full">
      {/* 1. Hero */}
      <Hero
        onExploreClick={() => {
          setSelectedCategory('All');
          setActivePage('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onVisitShowroomClick={() => {
          setActivePage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Product Categories */}
      <CategorySection onSelectCategory={handleCategoryClick} />

      {/* 4. Featured Furniture Collection */}
      <ProductGrid
        onViewAllProducts={() => {
          setSelectedCategory('All');
          setActivePage('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 5. Door Collection Highlight */}
      <DoorCollection
        onExploreDoorsClick={() => {
          setSelectedCategory('Doors');
          setActivePage('doors');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 6. Physical Showroom Experience */}
      <ShowroomExperience />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. About Section */}
      <AboutSection
        onKnowMoreClick={() => {
          setActivePage('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 9. Visual Gallery Preview */}
      <GallerySection
        onViewFullGallery={() => {
          setActivePage('gallery');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 10. Customer Feedback / Google Reviews Framework */}
      <Testimonials />

      {/* 11. WhatsApp Lead CTA */}
      <CTASection />

      {/* 12. Contact & Showroom Location */}
      <ContactSection />
    </div>
  );
};
