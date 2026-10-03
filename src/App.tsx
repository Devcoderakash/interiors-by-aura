/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ActivePage, ProductCategory } from './types';
import { updatePageSEO } from './utils/seo';

// Route mapper
const getPageFromPath = (path: string): ActivePage => {
  if (path === '/' || path === '') return 'home';
  if (path.startsWith('/products')) return 'products';
  if (path.startsWith('/doors')) return 'doors';
  if (path.startsWith('/about')) return 'about';
  if (path.startsWith('/gallery')) return 'gallery';
  if (path.startsWith('/contact')) return 'contact';
  return '404';
};

const getPathFromPage = (page: ActivePage): string => {
  if (page === 'home') return '/';
  if (page === '404') return window.location.pathname; // Keep current path on 404
  return `/${page}`;
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');

  // Handle initial load and popstate (browser back/forward)
  useEffect(() => {
    const handleLocationChange = () => {
      const page = getPageFromPath(window.location.pathname);
      setActivePage(page);
      if (page === 'doors') setSelectedCategory('Doors');
      updatePageSEO(page);
    };

    // Initial check
    handleLocationChange();

    // Listen to history changes
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (page: ActivePage, category?: ProductCategory | 'All') => {
    const newPath = getPathFromPage(page);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    setActivePage(page);
    if (category) {
      setSelectedCategory(category);
    }
    updatePageSEO(page);
  };

  const handleCategoryNavigation = (categoryName: string) => {
    if (categoryName === 'Doors') {
      navigateTo('doors', 'Doors');
    } else {
      navigateTo('products', categoryName as ProductCategory);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#22201D]">
      {/* Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => navigateTo(page)}
        onNavigateToCategory={handleCategoryNavigation}
      />

      {/* Main Page Content */}
      <main className="grow">
        {activePage === 'home' && (
          <Home
            setActivePage={(page) => navigateTo(page)}
            setSelectedCategory={(cat) => handleCategoryNavigation(cat === 'All' ? 'All' : cat)}
          />
        )}

        {activePage === 'products' && (
          <Products initialCategory={selectedCategory} />
        )}

        {activePage === 'doors' && (
          <Products initialCategory="Doors" />
        )}

        {activePage === 'about' && (
          <About
            onContactClick={() => {
              navigateTo('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
        
        {activePage === '404' && (
          <NotFoundPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Sticky / Fixed WhatsApp Lead Button */}
      <WhatsAppButton />

      {/* Premium Footer */}
      <Footer
        activePage={activePage}
        setActivePage={(page) => navigateTo(page)}
        onNavigateToCategory={handleCategoryNavigation}
      />
    </div>
  );
}
