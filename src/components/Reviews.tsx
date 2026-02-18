import { BIZ } from '../utils/config';
import { StarIcon, ExternalLink } from './Icons';
import FadeIn from './FadeIn';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 md:py-28 pipe-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-red mb-3">
              Customer Reviews
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-brand-steel-dk leading-tight mb-4">
              What Our Customers Say
            </h2>
            <p className="text-[17px] text-brand-grey600 max-w-[600px] mx-auto leading-relaxed">
              We're proud of the relationships we build with every customer. See what others are saying about Griff's Plumbing.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-[640px] mx-auto p-12 rounded-3xl bg-white border border-brand-grey100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} size={28} />
              ))}
            </div>
            <p className="font-display font-semibold text-[22px] text-brand-steel-dk mb-3">
              Trusted by Omaha Homeowners
            </p>
            <p className="text-brand-grey600 text-base leading-relaxed mb-7">
              Our customers rate us highly on Facebook for reliable service, fair pricing, and expert workmanship. We'd love for you to check out our reviews and share your experience too.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-brand-red text-white font-display font-semibold text-[15px] no-underline hover:bg-brand-red-hover transition-all"
              >
                Read Our Facebook Reviews <ExternalLink size={16} />
              </a>
              <a
                href={BIZ.googleSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] border-2 border-brand-red text-brand-red font-display font-semibold text-[15px] no-underline hover:bg-brand-red-light transition-all"
              >
                Google Reviews <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
