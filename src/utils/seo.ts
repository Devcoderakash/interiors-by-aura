import { business } from '../config/business';
import { ActivePage } from '../types';

export interface RouteSEO {
  title: string;
  description: string;
  path: string;
  canonical: string;
  ogImage?: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}

export const SEO_DATA: Record<ActivePage | '404', RouteSEO> = {
  home: {
    title: `${business.name} | Furniture & Doors in Bhopal`,
    description: `Explore quality furniture and stylish door solutions from ${business.name} in Bhopal. Discover handcrafted sofas, beds, dining sets and wooden doors on Kolar Road.`,
    path: '/',
    canonical: `${business.siteUrl}/`,
    ogImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` }
    ]
  },
  products: {
    title: `Furniture & Door Collection | ${business.name} Bhopal`,
    description: `Browse contemporary living room, bedroom, dining, and storage furniture at ${business.name} in Bhopal. Custom sizing and solid wood finishes available.`,
    path: '/products',
    canonical: `${business.siteUrl}/products`,
    ogImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Furniture Collection", url: `${business.siteUrl}/products` }
    ]
  },
  doors: {
    title: `Wooden Door Designs & Sizing | ${business.name} Bhopal`,
    description: `Explore solid teak wood main entrance doors, modern fluted doors, and interior room door solutions at ${business.name}, Kolar Road, Bhopal.`,
    path: '/doors',
    canonical: `${business.siteUrl}/doors`,
    ogImage: "/images/doors/door_teak_carved.jpg",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Doors", url: `${business.siteUrl}/doors` }
    ]
  },
  about: {
    title: `About Our Bhopal Showroom | ${business.name}`,
    description: `Learn about ${business.name} on Kolar Road, Bhopal. Trusted showroom providing handcrafted solid wood furniture, transparent materials, and local customer care.`,
    path: '/about',
    canonical: `${business.siteUrl}/about`,
    ogImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "About Us", url: `${business.siteUrl}/about` }
    ]
  },
  gallery: {
    title: `Showroom Gallery & Finishes | ${business.name} Bhopal`,
    description: `View photos of handcrafted living room setups, solid wood entrance doors, and natural timber polish finishes at ${business.name} in Bhopal.`,
    path: '/gallery',
    canonical: `${business.siteUrl}/gallery`,
    ogImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Gallery", url: `${business.siteUrl}/gallery` }
    ]
  },
  contact: {
    title: `Contact Showroom & Location | ${business.name} Bhopal`,
    description: `Visit ${business.name} showroom in Bairagarh Chichali, Kolar Road, Bhopal. Open 7 days a week. Connect via WhatsApp or call for directions and catalogue enquiries.`,
    path: '/contact',
    canonical: `${business.siteUrl}/contact`,
    ogImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Contact & Location", url: `${business.siteUrl}/contact` }
    ]
  },
  '404': {
    title: `Page Not Found | ${business.name} Bhopal`,
    description: `The page you requested could not be found. Explore furniture and door designs at ${business.name} on Kolar Road, Bhopal.`,
    path: '/404',
    canonical: `${business.siteUrl}/404`,
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "404 Not Found", url: `${business.siteUrl}/404` }
    ]
  }
};

/**
 * Updates head metadata and JSON-LD schema dynamically on route transitions.
 */
export function updatePageSEO(page: ActivePage | '404'): void {
  const seo = SEO_DATA[page] || SEO_DATA.home;

  // 1. Document Title
  document.title = seo.title;

  // 2. Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', seo.description);

  // 3. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', seo.canonical);

  // 4. Open Graph Updates
  const updateMetaProperty = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  updateMetaProperty('og:title', seo.title);
  updateMetaProperty('og:description', seo.description);
  updateMetaProperty('og:url', seo.canonical);
  if (seo.ogImage) {
    updateMetaProperty('og:image', seo.ogImage.startsWith('http') ? seo.ogImage : `${business.siteUrl}${seo.ogImage}`);
  }

  // 5. Twitter Card Updates
  const updateMetaName = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  updateMetaName('twitter:title', seo.title);
  updateMetaName('twitter:description', seo.description);
  if (seo.ogImage) {
    updateMetaName('twitter:image', seo.ogImage.startsWith('http') ? seo.ogImage : `${business.siteUrl}${seo.ogImage}`);
  }

  // 6. Dynamic BreadcrumbList JSON-LD Schema
  let breadcrumbScript = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;
  if (!breadcrumbScript) {
    breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.type = 'application/ld+json';
    document.head.appendChild(breadcrumbScript);
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": seo.breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema, null, 2);
}
