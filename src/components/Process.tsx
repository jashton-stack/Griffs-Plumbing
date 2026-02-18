import { STEPS } from '../utils/config';
import FadeIn from './FadeIn';

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:py-28 bg-brand-steel-dk relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-2 border-brand-blue/10 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-blue mb-3">
              Our Process
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-white leading-tight mb-4">
              How It Works
            </h2>
            <p className="text-[17px] text-white/55 max-w-[600px] mx-auto leading-relaxed">
              Getting your plumbing fixed shouldn't be complicated. Here's our simple process.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/[0.08] backdrop-blur-sm h-full">
                <span className="font-display font-extrabold text-[40px] text-brand-blue/40 leading-none">
                  {s.num}
                </span>
                <h3 className="font-display font-bold text-[19px] text-white mt-3 mb-2">{s.title}</h3>
                <p className="text-white/55 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
