import { useState, useEffect } from 'react';
import { BIZ, NAV_LINKS } from '../utils/config';
import { PhoneIcon, CalendarIcon, MenuIcon, XIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-brand-grey200 py-2'
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline shrink-0">
            {/*
              LOGO: Replace the text below with:
              <img src="/griff-logo.png" alt="Griff's Plumbing" className="h-12" />
            */}
            <img
              src="/griff-logo.png"
              alt="Griff's Plumbing"
              className={`h-10 md:h-12 transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-display font-medium text-sm tracking-wide transition-colors no-underline ${
                    scrolled ? 'text-brand-grey800 hover:text-brand-red' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href={BIZ.phoneHref}
                className={`flex items-center gap-1.5 font-display font-semibold text-sm no-underline transition-colors ${
                  scrolled ? 'text-brand-steel-dk' : 'text-white'
                }`}
              >
                <PhoneIcon size={16} /> {BIZ.phone}
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-brand-red text-white font-display font-semibold text-[13px] no-underline hover:bg-brand-red-hover hover:-translate-y-0.5 hover:shadow-glow transition-all"
              >
                <CalendarIcon size={16} /> Book Now
              </a>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-brand-steel-dk' : 'text-white'
            }`}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-brand-steel-dk flex flex-col justify-center items-center gap-6 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 bg-transparent border-none cursor-pointer text-white"
          aria-label="Close menu"
        >
          <XIcon size={32} />
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-white no-underline font-display text-2xl font-semibold py-2 hover:text-brand-red transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={BIZ.phoneHref}
          className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-brand-red text-white font-display font-semibold text-base no-underline"
        >
          <PhoneIcon size={18} /> {BIZ.phone}
        </a>
        <a
          href="#booking"
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] border-2 border-white text-white font-display font-semibold text-base no-underline hover:bg-white/10 transition-colors"
        >
          <CalendarIcon size={18} /> Book Appointment
        </a>
      </div>
    </>
  );
}
