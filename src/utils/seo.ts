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
    title: `PVC Doors & Furniture | Premium PVC Door Designs in Bhopal | pvcdoor.shop`,
    description: `Explore premium PVC doors, wooden door designs and quality furniture at Satish Furniture & Door House in Bhopal. PVC door solutions for homes and offices in Bhopal.`,
    path: '/',
    canonical: `${business.siteUrl}/`,
    ogImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` }
    ]
  },
  products: {
    title: `Furniture & Door Collection | PVC Doors & Wooden Furniture in Bhopal`,
    description: `Browse PVC doors, wooden doors and quality furniture at Satish Furniture & Door House in Bhopal. Custom sizes, solid wood and PVC door designs available.`,
    path: '/products',
    canonical: `${business.siteUrl}/products`,
    ogImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Furniture & Door Collection", url: `${business.siteUrl}/products` }
    ]
  },
  doors: {
    title: `PVC Doors & Wooden Door Designs | PVC Door Supplier in Bhopal`,
    description: `Discover premium PVC door designs, wooden main entrance doors and interior door solutions in Bhopal. PVC doors for homes and offices at Satish Furniture & Door House.`,
    path: '/doors',
    canonical: `${business.siteUrl}/doors`,
    ogImage: "/images/doors/door_teak_carved.jpg",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "PVC Doors & Door Designs", url: `${business.siteUrl}/doors` }
    ]
  },
  about: {
    title: `About Satish Furniture & Door House | PVC Door Showroom in Bhopal`,
    description: `Learn about Satish Furniture & Door House — your trusted PVC door and furniture showroom on Kolar Road, Bhopal. Quality doors, transparent service, local expertise.`,
    path: '/about',
    canonical: `${business.siteUrl}/about`,
    ogImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "About Us", url: `${business.siteUrl}/about` }
    ]
  },
  gallery: {
    title: `PVC Door & Furniture Gallery | Showroom Photos | Satish Furniture Bhopal`,
    description: `View our showroom gallery featuring PVC door designs, wooden entrance doors and furniture setups from Satish Furniture & Door House in Bhopal.`,
    path: '/gallery',
    canonical: `${business.siteUrl}/gallery`,
    ogImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Gallery", url: `${business.siteUrl}/gallery` }
    ]
  },
  contact: {
    title: `Contact & Location | PVC Door & Furniture Showroom | Bhopal`,
    description: `Visit Satish Furniture & Door House for PVC door enquiries, wooden door designs and furniture in Bhopal. Showroom on Kolar Road — open all 7 days. Call or WhatsApp now.`,
    path: '/contact',
    canonical: `${business.siteUrl}/contact`,
    ogImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    breadcrumbs: [
      { name: "Home", url: `${business.siteUrl}/` },
      { name: "Contact & Location", url: `${business.siteUrl}/contact` }
    ]
  },
  '404': {
    title: `Page Not Found | Satish Furniture & Door House Bhopal`,
    description: `The page you requested could not be found. Explore PVC doors, door designs and furniture at Satish Furniture & Door House, Kolar Road, Bhopal.`,
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
