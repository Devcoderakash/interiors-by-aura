# 🛋️ Satish Furniture & Door House

> **Furniture That Makes Your Space Feel Like Home.**  
> A contemporary, high-performance web showcase and digital catalog for **Satish Furniture & Door House**, located on Kolar Road, Bhopal, Madhya Pradesh.

[![React 19](https://img.shields.io/badge/React-19.0.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Security Hardened](https://img.shields.io/badge/Security-Hardened-22C55E?logo=shield&logoColor=white)](https://github.com/Devcoderakash/interiors-by-aura)

---

## 📖 Overview

**Satish Furniture & Door House** is an established local showroom in Bairagarh Chichali, Bhopal, specializing in durable wooden home furniture, custom carpentry, and bespoke door solutions.

This application provides homeowners, architects, and interior designers with an editorial digital catalog to browse handcrafted designs, inspect materials, and connect directly with the showroom team via WhatsApp or phone.

---

## ✨ Key Features

- **🛋️ Curated Furniture Collection**: Explore handcrafted pieces across Living Room (sectional sofas, fluted TV consoles, center tables), Bedroom (solid wood king beds, dressing vanity units), Dining (4 & 6-seater solid wood sets, crockery cabinets), and Custom Storage.
- **🚪 Dedicated Door House**: Specialized catalog featuring seasoned solid teak carved entrance doors, modern fluted luxury doors, geometric panel designs, and double villa doors.
- **💬 Seamless WhatsApp Inquiries**: Direct click-to-chat integrations that pre-fill specific product names, categories, and custom sizing requests directly to the showroom helpline (`+91 97559 91010`).
- **📍 Interactive Showroom Map**: Embedded Google Maps with one-click navigation and directions to the Kolar Road showroom.
- **🛡️ Enterprise-Grade Security**:
  - Strict **Content Security Policy (CSP)** preventing unauthorized code injection.
  - Production **HTTP Security Headers** (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Referrer-Policy`, and `Permissions-Policy`).
  - Pre-configured headers for **Vercel** (`vercel.json`) and **Cloudflare Pages / Netlify** (`public/_headers`).
  - Safe image loading handlers (`handleImageError`) preventing recursive infinite loops and client-side Denial-of-Service.
  - Robust **React 19 Error Boundary** for failure resilience with zero stack-trace leakage.
- **♿ WCAG 2.1 AA Accessibility**: Full keyboard navigation support, `Escape` key dialog dismissal, scroll locking, and screen-reader ARIA semantics.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [React DOM 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Build Tool** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animation** | [Motion](https://motion.dev/) |
| **Typography** | Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans |

---

## 📂 Project Structure

```text
├── public/
│   ├── _headers                  # Production security headers for Netlify / Cloudflare Pages
│   └── images/                   # High-resolution catalog photography
│       ├── dining/
│       ├── doors/
│       ├── furniture/
│       └── living/
├── src/
│   ├── components/               # Modular UI components
│   │   ├── AboutSection.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── CategorySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── DoorCollection.tsx
│   │   ├── ErrorBoundary.tsx     # React 19 failure recovery boundary
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductModal.tsx      # Keyboard-accessible quick-view modal
│   │   ├── ShowroomExperience.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── WhatsAppButton.tsx    # Floating lead button with welcoming tooltip
│   │   └── WhyChooseUs.tsx
│   ├── config/
│   │   └── business.ts           # Centralized business coordinates, hours & links
│   ├── data/
│   │   ├── categories.ts         # Furniture & door category metadata
│   │   ├── gallery.ts            # Showroom gallery showcase items
│   │   └── products.ts           # Comprehensive product specifications
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── ContactPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── Home.tsx
│   │   └── Products.tsx          # Filterable catalog with search & category tabs
│   ├── utils/
│   │   └── imageUtils.ts         # Recursion-safe image error handling
│   ├── App.tsx                   # Main SPA state & routing orchestration
│   ├── index.css                 # Design tokens & custom scrollbar
│   ├── main.tsx                  # Application entry point with ErrorBoundary
│   └── types.ts                  # TypeScript data contracts
├── .env.example                  # DevSecOps environment guidelines
├── index.html                    # SEO tags, schema.org JSON-LD & meta CSP
├── tsconfig.json                 # TypeScript compiler configuration
├── vercel.json                   # Vercel deployment headers & SPA rewrites
└── vite.config.ts                # Vite plugins, aliases & dev/preview server headers
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher (or **Bun** `v1.0+`)
- **Package Manager**: `npm` or `bun`

### Installation
Clone the repository:
```bash
git clone https://github.com/Devcoderakash/interiors-by-aura.git
cd interiors-by-aura
```

Install dependencies:
```bash
npm install
# or
bun install
```

### Local Development
Start the Vite development server:
```bash
npm run dev
# or
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing, Linting & Production Build

### TypeScript Validation
Run the TypeScript compiler to verify zero type mismatches:
```bash
npm run lint
```

### Production Build
Compile and bundle the production assets:
```bash
npm run build
```
The output will be placed in the `dist/` directory, complete with minified bundles and security headers.

### Preview Production Build
Preview the production build locally with full HTTP response headers:
```bash
npm run preview
```

---

## 🌐 Production Deployment

The project is pre-configured for frictionless, secure deployment across major static hosting providers:

- **Vercel**: Pre-configured via `vercel.json` with single-page app rewrites and complete HTTP security headers (`HSTS`, `CSP`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **Cloudflare Pages / Netlify**: Pre-configured via `public/_headers` (automatically copied to `dist/_headers` on build).

---

## 📍 Showroom Coordinates

- **Showroom Name:** Satish Furniture & Door House
- **Address:** Bairagarh Chichali, Kolar Road, Bhopal, Madhya Pradesh — 462042
- **Helpline / Voice:** [+91 97559 91010](tel:+919755991010)
- **WhatsApp Inquiry:** [+91 97559 91010](https://wa.me/919755991010)
- **Email:** contact@satishfurniture.com
- **Visiting Hours:** Monday – Sunday: 10:00 AM – 9:00 PM (Open All 7 Days)

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).
