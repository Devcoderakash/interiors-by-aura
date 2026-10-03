import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, business } from '../config/business';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a subtle welcoming tooltip after 3 seconds on first load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="mb-2 mr-1 bg-[#1C1917] text-white text-xs py-2 px-3 rounded-xs shadow-lg border border-[#38312B] flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="text-left">
            <p className="font-semibold text-white">Need furniture guidance?</p>
            <p className="text-[11px] text-[#C4BAB0]">Chat directly with our Bhopal team</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8C8277] hover:text-white p-0.5 rounded-full transition-colors"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-trigger"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Chat with Satish Furniture & Door House on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-black group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
