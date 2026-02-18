import { AREAS } from '../utils/config';
import { MapPin } from './Icons';
import FadeIn from './FadeIn';

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-6 md:py-28 bg-brand-off">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-red mb-3">
              Coverage
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-brand-steel-dk leading-tight mb-4">
              Areas We Serve
            </h2>
            <p className="text-[17px] text-brand-grey600 max-w-[600px] mx-auto leading-relaxed">
              Serving the greater Omaha metropolitan area with reliable plumbing services.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3.5 max-w-[700px] mx-auto">
            {AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-grey200 font-display font-semibold text-[15px] text-brand-steel-dk shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <MapPin size={16} color="#C0392B" /> {area}
              </div>
            ))}
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue-light border border-brand-blue/20 font-display font-semibold text-[15px] text-brand-blue">
              + Surrounding Areas
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
