import { useState } from 'react';
import { GHL, BIZ } from '../utils/config';
import { CalendarIcon, PhoneIcon, CheckCircle } from './Icons';
import FadeIn from './FadeIn';

export default function Booking() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <section
      id="booking"
      className="py-24 px-6 md:py-28 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #1E2126 0%, #1A5276 100%)`,
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-52 h-52 rounded-full border-2 border-white/[0.06] pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full border-2 border-white/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-blue mb-3">
              Schedule Service
            </p>
            <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-white leading-tight mb-4">
              Book Your Appointment
            </h2>
            <p className="text-[17px] text-white/60 max-w-[600px] mx-auto leading-relaxed">
              Pick a time that works for you. We'll confirm within minutes.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-[700px] mx-auto rounded-3xl bg-white overflow-hidden shadow-modal">
            {/* ─── GHL Calendar Embed ────────────────────────── */}
            {!iframeError ? (
              <div className="ghl-calendar-wrapper">
                <iframe
                  src={GHL.calendarEmbed}
                  style={{
                    width: '100%',
                    minHeight: 600,
                    border: 'none',
                    overflow: 'hidden',
                  }}
                  scrolling="no"
                  id={`${GHL.calendarId}_embed`}
                  title="Book an appointment with Griff's Plumbing"
                  onError={() => setIframeError(true)}
                />
              </div>
            ) : (
              /* ─── Fallback UI if embed fails ──────────────── */
              <div className="w-full py-16 px-8 flex flex-col items-center justify-center text-center bg-brand-off">
                <div className="w-[72px] h-[72px] rounded-2xl bg-brand-blue-light flex items-center justify-center mb-5">
                  <CalendarIcon size={36} color="#2E86C1" />
                </div>
                <h3 className="font-display font-bold text-[22px] text-brand-steel-dk mb-2">
                  Online Scheduling
                </h3>
                <p className="text-brand-grey600 text-[15px] max-w-[400px] mb-6 leading-relaxed">
                  Our calendar is temporarily unavailable. You can book directly using the link below or call us.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={GHL.calendarEmbed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-brand-blue text-white font-display font-semibold text-[15px] no-underline hover:opacity-90 transition-all"
                  >
                    <CalendarIcon size={18} /> Open Scheduler
                  </a>
                  <a
                    href={BIZ.phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-brand-red text-white font-display font-semibold text-[15px] no-underline hover:bg-brand-red-hover transition-all"
                  >
                    <PhoneIcon size={18} /> Call {BIZ.phone}
                  </a>
                </div>
              </div>
            )}

            {/* ─── "What happens next" reassurance bar ──────── */}
            <div className="px-8 py-5 border-t border-brand-grey100 bg-brand-off">
              <p className="font-display font-bold text-sm text-brand-steel-dk mb-2.5">
                What happens after you book?
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  "You'll get instant confirmation via text & email",
                  "We'll arrive on time with a free estimate",
                  'No obligation — you decide how to proceed',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 flex-1 min-w-[200px]">
                    <CheckCircle size={18} color="#2E86C1" />
                    <span className="text-[13px] text-brand-grey600 leading-snug">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
