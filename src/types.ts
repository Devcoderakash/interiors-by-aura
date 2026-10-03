/**
 * Application Types for Satish Furniture & Door House
 */

export type ProductCategory = 
  | "Living Room"
  | "Bedroom"
  | "Dining"
  | "Doors"
  | "Storage"
  | "Custom Furniture";

export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  headline: string;
  description: string;
  image: string;
  itemCountDescription: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  shortDescription: string;
  detailedDescription?: string;
  image: string;
  additionalImages?: string[];
  materials?: string[];
  dimensions?: string;
  featured?: boolean;
  isDoor?: boolean;
  style?: string; // e.g. "Modern", "Classic Teak", "Minimalist"
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Furniture" | "Doors" | "Bedroom" | "Living Room" | "Showroom & Finishes";
  image: string;
  description: string;
  aspectRatio?: "landscape" | "portrait" | "square";
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export type ActivePage = "home" | "products" | "doors" | "about" | "gallery" | "contact" | "404";
