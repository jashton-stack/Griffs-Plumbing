import { BIZ, NAV_LINKS } from '../utils/config';

export default function Footer() {
  return (
    <footer className="bg-brand-steel-dk pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/griff-logo.png" alt="Griff's Plumbing" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[280px]">
              Omaha's trusted plumbing professionals. Over 20 years of experience serving residential and commercial customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-[1.5px]">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/45 no-underline text-sm hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-[1.5px]">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href={BIZ.phoneHref} className="text-white/45 no-underline text-sm">{BIZ.phone}</a>
              <a href={`mailto:${BIZ.email}`} className="text-white/45 no-underline text-sm">{BIZ.email}</a>
              <span className="text-white/45 text-sm">{BIZ.address}</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-[1.5px]">
              Hours
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-white/45 text-sm">{BIZ.hours}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="pulse-dot relative w-2 h-2 rounded-full bg-brand-red" />
                <span className="text-brand-red text-[13px] font-semibold">24hr Emergency Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-wrap justify-between items-center gap-3">
          <p className="text-white/30 text-[13px]">
            &copy; {new Date().getFullYear()} Griff's Plumbing. All rights reserved.
          </p>
          <a
            href={BIZ.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-[13px] no-underline hover:text-white/60 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
