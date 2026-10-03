/**
 * Central business configuration for Satish Furniture & Door House.
 * All contact details, location pointers, and messaging hooks are defined here.
 * When real phone numbers and hours are provided by the business owner, update them here.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  city: string;
  state: string;
  area: string;
  address: string;
  pincode: string;
  phone: string; // Configurable: placeholder if not verified
  phoneDisplay: string;
  whatsapp: string; // Phone digits without '+' or dashes for wa.me API
  whatsappDisplay: string;
  email: string;
  siteUrl: string;
  mapsUrl: string;
  mapsEmbedQuery: string;
  openingHours: string;
  defaultWhatsAppMessage: string;
  productWhatsAppMessage: (productName: string, category: string) => string;
}

export const business: BusinessConfig = {
  name: "Satish Furniture & Door House",
  tagline: "Furniture That Makes Your Space Feel Like Home.",
  shortDescription: "A trusted local furniture and door showroom on Kolar Road, Bhopal, offering thoughtfully crafted wooden furniture and stylish door solutions.",
  city: "Bhopal",
  state: "Madhya Pradesh",
  area: "Bairagarh Chichali, Kolar Road",
  address: "Bairagarh Chichali, Kolar Road, Bhopal, Madhya Pradesh",
  pincode: "462042",
  // Business phone and WhatsApp contact numbers
  phone: "+919755991010",
  phoneDisplay: "+91 97559 91010",
  whatsapp: "919755991010",
  whatsappDisplay: "+91 97559 91010",
  email: "contact@satishfurniture.com",
  siteUrl: "https://pvcdoor.shop",
  mapsUrl: "https://www.google.com/maps/place/Satish+furniture+and+door+house/@23.1627446,77.4022272,17z/data=!3m1!4b1!4m6!3m5!1s0x397c43006b5a144f:0x8df221123acd1b1d!8m2!3d23.1627397!4d77.4048021!16s%2Fg%2F11z8pgx0sv?entry=ttu",
  mapsEmbedQuery: "23.1627397,77.4048021+(Satish+furniture+and+door+house)",
  openingHours: "Monday – Sunday: 10:00 AM – 9:00 PM (Showroom Open All Days)",
  defaultWhatsAppMessage: "Hi, I found Satish Furniture & Door House online. I would like to know more about your furniture and door collection.",
  productWhatsAppMessage: (productName: string, category: string) => 
    `Hi Satish Furniture & Door House, I saw the "${productName}" (${category}) on your website catalogue. Could you please share more details regarding availability, wood finish options, and showroom visit?`
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || business.defaultWhatsAppMessage;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const getProductWhatsAppLink = (productName: string, category: string): string => {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.productWhatsAppMessage(productName, category))}`;
};

export const getPhoneLink = (): string => {
  return `tel:${business.phone}`;
};
