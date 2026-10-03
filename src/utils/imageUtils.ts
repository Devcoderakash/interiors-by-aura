import React from 'react';

/**
 * Default fallback image for furniture and showroom photography.
 * Uses a stable, high-availability Unsplash showroom visual.
 */
export const DEFAULT_FALLBACK_IMAGE = 
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80";

/**
 * Safely handles image load errors and applies a fallback image without
 * risking infinite recursion crash loops (Client-Side Denial of Service).
 * 
 * Sets `currentTarget.onerror = null` before replacing the source to guarantee
 * that if the fallback fails or network is disconnected, the browser does not
 * repeatedly re-trigger the error event handler in an endless cycle.
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc: string = DEFAULT_FALLBACK_IMAGE
): void => {
  const target = event.currentTarget;
  // Clear the event handler to break potential infinite recursion
  target.onerror = null;
  target.src = fallbackSrc;
};
