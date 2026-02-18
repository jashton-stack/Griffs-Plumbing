import { BIZ } from '../utils/config';
import { CalendarIcon, PhoneIcon, ShieldIcon, CheckCircle, ClockIcon } from './Icons';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-steel-dk">
        {/* Diagonal accent */}
        <div className="absolute top-0 -right-[10%] w-1/2 h-full bg-gradient-to-br from-transparent via-brand-blue-dk/20 to-transparent skew-x-[-12deg]" />
        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-blue" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 pt-28 pb-20 lg:pt-32">
        <div className="max-w-[700px]">
          {/* Emergency badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-red/15 border border-brand-red/30 mb-7">
              <span className="pulse-dot relative w-2 h-2 rounded-full bg-brand-red" />
              <span className="text-brand-red-light font-display font-semibold text-[13px] tracking-wide">
                24-Hour Emergency Service Available
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display font-extrabold text-[clamp(36px,6vw,64px)] leading-[1.08] text-white mb-5">
              Omaha's Trusted
              <span className="block text-brand-blue"> Plumbing Experts</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[clamp(16px,2.2vw,19px)] text-white/70 leading-relaxed max-w-[520px] mb-9">
              Over 20 years of experience serving residential and commercial customers across the Omaha metro. Free estimates, upfront pricing, and a 90-day guarantee on every job.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-brand-red text-white font-display font-semibold text-base no-underline hover:bg-brand-red-hover hover:-translate-y-0.5 hover:shadow-glow transition-all"
              >
                <CalendarIcon size={20} /> Book Your Appointment
              </a>
              <a
                href={BIZ.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[10px] border-2 border-white text-white font-display font-semibold text-[15px] no-underline hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <PhoneIcon size={18} /> Call {BIZ.phone}
              </a>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-7 mt-12">
              {[
                { Icon: ShieldIcon, text: '90-Day Guarantee' },
                { Icon: CheckCircle, text: 'Free Estimates' },
                { Icon: ClockIcon, text: '24/7 Emergency' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <b.Icon size={18} color="#2E86C1" />
                  <span className="text-white/65 font-display font-medium text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
