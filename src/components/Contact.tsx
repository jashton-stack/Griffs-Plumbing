import { useState, FormEvent } from 'react';
import { GHL, BIZ } from '../utils/config';
import { getUtmParams } from '../utils/utm';
import { PhoneIcon, MailIcon, MapPin, ClockIcon, CheckCircle, ArrowRight } from './Icons';
import FadeIn from './FadeIn';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Build the payload with UTM params
    const utm = getUtmParams();
    const payload = {
      ...form,
      ...utm,
      source: 'website_contact_form',
      locationId: GHL.locationId,
    };

    // If a webhook URL is configured, POST to it
    if (GHL.formWebhook) {
      try {
        const res = await fetch(GHL.formWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setStatus('sent');
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // No webhook configured yet — simulate success for Phase 2 testing
      console.log('[Contact Form] Payload (webhook not configured):', payload);
      setStatus('sent');
    }
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const contactInfo = [
    { Icon: PhoneIcon, label: 'Phone', value: BIZ.phone, href: BIZ.phoneHref },
    { Icon: MailIcon, label: 'Email', value: BIZ.email, href: `mailto:${BIZ.email}` },
    { Icon: MapPin, label: 'Address', value: BIZ.address, href: `https://maps.google.com/?q=${BIZ.mapQuery}` },
    { Icon: ClockIcon, label: 'Hours', value: BIZ.hours, href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:py-28 bg-brand-off">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info side */}
          <FadeIn direction="right">
            <div>
              <p className="font-display font-bold text-[13px] uppercase tracking-[2.5px] text-brand-red mb-3">
                Get in Touch
              </p>
              <h2 className="font-display font-extrabold text-[clamp(28px,5vw,44px)] text-brand-steel-dk leading-tight mb-4">
                Prefer to Reach Out Directly?
              </h2>
              <p className="text-brand-grey600 text-base leading-relaxed mb-8">
                Can't find a time online? No problem. Give us a call, send a message, or fill out this form and we'll get back to you quickly.
              </p>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue-light flex items-center justify-center shrink-0">
                      <item.Icon size={20} color="#2E86C1" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-[13px] text-brand-grey600 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-brand-steel-dk font-medium text-[15px] no-underline hover:text-brand-red transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-brand-steel-dk font-medium text-[15px]">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency callout */}
              <div className="mt-8 p-5 rounded-2xl bg-brand-red/[0.06] border border-brand-red/15">
                <p className="font-display font-bold text-[15px] text-brand-red mb-1">
                  Plumbing Emergency?
                </p>
                <p className="text-brand-grey600 text-sm leading-relaxed">
                  We offer 24-hour emergency service. Call us anytime — we're here when you need us most.
                </p>
                <a
                  href={BIZ.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-brand-red text-white font-display font-semibold text-sm no-underline hover:bg-brand-red-hover transition-all"
                >
                  <PhoneIcon size={16} /> Call Now
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Form side */}
          <FadeIn direction="left" delay={0.15}>
            <div className="p-9 rounded-3xl bg-white border border-brand-grey100 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              {status === 'sent' ? (
                <div className="text-center py-10 px-5">
                  <CheckCircle size={48} color="#2E86C1" />
                  <h3 className="font-display font-bold text-[22px] text-brand-steel-dk mt-4 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-brand-grey600 text-[15px]">
                    We'll get back to you within 1 business day. For faster service, call us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-display font-bold text-xl text-brand-steel-dk mb-6">
                    Send Us a Message
                  </h3>
                  <div className="flex flex-col gap-4">
                    <input
                      className="w-full px-4 py-3.5 rounded-[10px] border-2 border-brand-grey200 bg-white font-body text-[15px] text-brand-grey800 outline-none transition-colors focus:border-brand-blue placeholder:text-brand-grey600"
                      type="text" placeholder="Your Name" required
                      value={form.name} onChange={set('name')}
                    />
                    <input
                      className="w-full px-4 py-3.5 rounded-[10px] border-2 border-brand-grey200 bg-white font-body text-[15px] text-brand-grey800 outline-none transition-colors focus:border-brand-blue placeholder:text-brand-grey600"
                      type="email" placeholder="Email Address" required
                      value={form.email} onChange={set('email')}
                    />
                    <input
                      className="w-full px-4 py-3.5 rounded-[10px] border-2 border-brand-grey200 bg-white font-body text-[15px] text-brand-grey800 outline-none transition-colors focus:border-brand-blue placeholder:text-brand-grey600"
                      type="tel" placeholder="Phone Number"
                      value={form.phone} onChange={set('phone')}
                    />
                    <textarea
                      className="w-full px-4 py-3.5 rounded-[10px] border-2 border-brand-grey200 bg-white font-body text-[15px] text-brand-grey800 outline-none transition-colors focus:border-brand-blue placeholder:text-brand-grey600 resize-y min-h-[100px]"
                      placeholder="How can we help?" rows={4} required
                      value={form.message} onChange={set('message')}
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] bg-brand-red text-white font-display font-semibold text-[15px] border-none cursor-pointer hover:bg-brand-red-hover hover:-translate-y-0.5 hover:shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending…' : <>Send Message <ArrowRight size={18} /></>}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-brand-red text-sm text-center mt-3">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                  <p className="text-[12px] text-brand-grey600 text-center mt-3">
                    We typically respond within a few hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
