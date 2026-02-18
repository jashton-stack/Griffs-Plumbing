import { useState } from 'react';
import { FAQS } from '../utils/config';
import { ChevronDown } from './Icons';
import FadeIn from './FadeIn';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-grey200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer text-left gap-4"
      >
        <span className="font-display font-semibold text-[17px] text-brand-steel-dk">{q}</span>
        <span
          className="shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={22} color="#6C7A89" />
        </span>
      </button>
      <div className={`faq-content ${open ? 'open' : ''}`}>
        <p className="text-brand-grey600 text-[15px] leading-relaxed pt-3">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 md:py-28">
      <div className="max-w-[780px] mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-red mb-3">FAQ</p>
            <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-brand-steel-dk leading-tight">
              Common Questions
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
