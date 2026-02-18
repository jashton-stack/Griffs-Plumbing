import { useState } from 'react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 max-w-[480px] mx-auto px-6 py-4 rounded-2xl bg-brand-red text-white flex items-center justify-between gap-4 shadow-banner">
      <div>
        <p className="font-display font-bold text-[15px] mb-0.5">
          🔧 10% Off This Month!
        </p>
        <p className="text-[13px] text-white/90">New customers save on their first service.</p>
      </div>
      <div className="flex gap-2 shrink-0">
        <a
          href="#booking"
          onClick={() => setVisible(false)}
          className="inline-flex items-center px-4 py-2 rounded-[10px] border-2 border-white/50 text-white text-[13px] font-display font-semibold no-underline hover:bg-white/10 transition-colors"
        >
          Book Now
        </a>
        <button
          onClick={() => setVisible(false)}
          className="bg-transparent border-none text-white/60 cursor-pointer text-lg leading-none hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
