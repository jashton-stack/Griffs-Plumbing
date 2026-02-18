import { SERVICES } from '../utils/config';
import { SERVICE_ICONS, ArrowRight } from './Icons';
import FadeIn from './FadeIn';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:py-28 pipe-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-red mb-3">
              What We Do
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-brand-steel-dk leading-tight mb-4">
              Professional Plumbing Services
            </h2>
            <p className="text-[17px] text-brand-grey600 max-w-[600px] mx-auto leading-relaxed">
              From quick repairs to full remodels, Griff's handles every aspect of residential and commercial plumbing.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-white border border-brand-grey100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div className="w-13 h-13 rounded-xl bg-brand-blue-light flex items-center justify-center mb-5"
                       style={{ width: 52, height: 52 }}>
                    {Icon && <Icon size={26} color="#2E86C1" />}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-steel-dk mb-2">{s.title}</h3>
                  <p className="text-brand-grey600 text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-brand-red text-white font-display font-semibold text-[15px] no-underline hover:bg-brand-red-hover hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              Get a Free Estimate <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
