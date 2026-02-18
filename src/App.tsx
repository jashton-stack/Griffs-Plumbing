import React, { useState, useEffect, useRef, ReactNode } from "react";

type IconProps = { size?: number; color?: string };

/* ─── DESIGN TOKENS ──────────────────────────────────────────── */
const T = {
  colors: {
    steel:    "#3B3F45",
    steelDk:  "#1E2126",
    red:      "#C0392B",
    redHover: "#A93226",
    redLight: "#FADBD8",
    blue:     "#2E86C1",
    blueDk:   "#1A5276",
    blueLight:"#D6EAF8",
    white:    "#FFFFFF",
    offWhite: "#F7F8FA",
    grey100:  "#EEF0F2",
    grey200:  "#D5D8DC",
    grey600:  "#6C7A89",
    grey800:  "#2C3E50",
  },
  font: {
    display: "'Outfit', sans-serif",
    body:    "'DM Sans', sans-serif",
  },
};

/* ─── ICON COMPONENTS (inline SVG) ───────────────────────────── */
const PhoneIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const CalendarIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const ClockIcon = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CheckCircle = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const MapPin = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const Mail = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,7 12,13 2,7"/>
  </svg>
);
const WrenchIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);
const DropletIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
  </svg>
);
const FlameIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/>
  </svg>
);
const ShieldIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const HomeIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const ArrowRight = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const StarIcon = ({ size = 18, color = "#F39C12" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ChevronDown = ({ size = 20, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const MenuIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const XIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const ExternalLink = ({ size = 16, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ─── SCROLL ANIMATION HOOK ──────────────────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }: { children: ReactNode; delay?: number; direction?: string; className?: string }) => {
  const [ref, visible] = useInView();
  const transforms = { up: "translateY(32px)", down: "translateY(-32px)", left: "translateX(32px)", right: "translateX(-32px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : transforms[direction],
      transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
};

/* ─── DATA ───────────────────────────────────────────────────── */
const PHONE = "402-933-8525";
const PHONE_HREF = "tel:4029338525";
const EMAIL = "chris@griffsplumbing.com";
const ADDRESS = "8060 H Street, Omaha, NE 68127";

const SERVICES = [
  { icon: FlameIcon, title: "Water Heaters", desc: "Installation, repair, and replacement of tank and tankless water heaters for reliable hot water year-round." },
  { icon: DropletIcon, title: "Faucet Repairs", desc: "Fix leaks, drips, and worn fixtures. Upgrade to modern faucets with expert installation." },
  { icon: WrenchIcon, title: "Drain Cleaning", desc: "Clear stubborn clogs and slow drains with professional tools that restore full flow." },
  { icon: HomeIcon, title: "Remodeling", desc: "Kitchen and bathroom plumbing for remodels — from rough-in to finish, done right." },
  { icon: ShieldIcon, title: "Sewer & Water Repair", desc: "Diagnose and repair sewer line issues and water main problems before they become emergencies." },
  { icon: CheckCircle, title: "Backflow Testing", desc: "Certified backflow prevention testing to keep your water supply safe and code-compliant." },
];

const STEPS = [
  { num: "01", title: "Book Your Appointment", desc: "Pick a time that works for you using our online scheduler — or just give us a call." },
  { num: "02", title: "Free On-Site Estimate", desc: "We'll assess the situation and walk you through every option, with transparent pricing." },
  { num: "03", title: "Expert Repair", desc: "Our experienced team handles the work efficiently — backed by a 90-day service guarantee." },
  { num: "04", title: "Follow-Up", desc: "We stay in communication until you're 100% satisfied with the results." },
];

const AREAS = ["Omaha", "Council Bluffs", "Papillion", "La Vista", "Bellevue", "Elkhorn", "Gretna"];

const FAQS = [
  { q: "How much does an estimate cost?", a: "Estimates are always free. We'll come to you, assess the situation, and explain all your options with upfront pricing — no surprises." },
  { q: "Do you offer a warranty on your work?", a: "Absolutely. We stand behind our work 100% with a 90-day service guarantee, plus all manufacturer warranties on parts and equipment." },
  { q: "Do you offer financing?", a: "Yes, we offer financing options to help make larger projects manageable. Give us a call at 402-933-8525 for details." },
  { q: "Do you handle drain cleaning?", a: "Yes — we handle all types of drain cleaning, from simple kitchen clogs to main sewer line blockages." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, cash, and checks for your convenience." },
  { q: "Do you offer emergency service?", a: "Yes — we provide 24-hour emergency plumbing service. Call us anytime at 402-933-8525 for urgent issues." },
  { q: "What areas do you serve?", a: "We serve the greater Omaha metro including Council Bluffs, Papillion, La Vista, Bellevue, Elkhorn, Gretna, and surrounding communities." },
];

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ─── STYLES (injected via style tag) ────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
    body { font-family: ${T.font.body}; color: ${T.colors.grey800}; background: ${T.colors.white}; line-height: 1.6; }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: ${T.colors.grey100}; }
    ::-webkit-scrollbar-thumb { background: ${T.colors.grey200}; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: ${T.colors.grey600}; }
    
    /* Utility */
    .section-pad { padding: 96px 24px; }
    @media (max-width: 768px) { .section-pad { padding: 64px 16px; } }
    .container { max-width: 1200px; margin: 0 auto; width: 100%; }
    
    /* Pipe texture pattern (subtle) */
    .pipe-bg {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    
    /* Hero gradient overlay */
    .hero-gradient {
      background: linear-gradient(135deg, ${T.colors.steelDk}ee 0%, ${T.colors.steel}dd 40%, ${T.colors.blueDk}cc 100%);
    }
    
    /* Button styles */
    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; border-radius: 10px; border: none;
      background: ${T.colors.red}; color: white;
      font-family: ${T.font.display}; font-weight: 600; font-size: 15px;
      cursor: pointer; transition: all 0.25s ease;
      text-decoration: none; white-space: nowrap;
    }
    .btn-primary:hover { background: ${T.colors.redHover}; transform: translateY(-2px); box-shadow: 0 8px 24px ${T.colors.red}44; }
    
    .btn-secondary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; border-radius: 10px;
      border: 2px solid white; background: transparent; color: white;
      font-family: ${T.font.display}; font-weight: 600; font-size: 15px;
      cursor: pointer; transition: all 0.25s ease;
      text-decoration: none; white-space: nowrap;
    }
    .btn-secondary:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
    
    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 24px; border-radius: 10px;
      border: 2px solid ${T.colors.red}; background: transparent; color: ${T.colors.red};
      font-family: ${T.font.display}; font-weight: 600; font-size: 15px;
      cursor: pointer; transition: all 0.25s ease;
      text-decoration: none; white-space: nowrap;
    }
    .btn-outline:hover { background: ${T.colors.redLight}; }
    
    /* Section headers */
    .section-label {
      font-family: ${T.font.display}; font-weight: 700; font-size: 13px;
      text-transform: uppercase; letter-spacing: 2.5px;
      color: ${T.colors.red}; margin-bottom: 12px;
    }
    .section-title {
      font-family: ${T.font.display}; font-weight: 800; font-size: clamp(28px, 5vw, 44px);
      color: ${T.colors.steelDk}; line-height: 1.15; margin-bottom: 16px;
    }
    .section-subtitle {
      font-size: 17px; color: ${T.colors.grey600}; max-width: 600px; line-height: 1.7;
    }
    
    /* Card hover */
    .card-hover { transition: all 0.3s ease; }
    .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.1); }
    
    /* FAQ accordion */
    .faq-content { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
    .faq-content.open { max-height: 300px; }
    
    /* Mobile nav */
    .mobile-nav {
      position: fixed; inset: 0; z-index: 100;
      background: ${T.colors.steelDk}; 
      display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 24px;
      opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    }
    .mobile-nav.open { opacity: 1; pointer-events: auto; }
    .mobile-nav a {
      color: white; text-decoration: none; font-family: ${T.font.display};
      font-size: 24px; font-weight: 600; padding: 8px 0;
      transition: color 0.2s;
    }
    .mobile-nav a:hover { color: ${T.colors.red}; }
    
    /* Form inputs */
    .form-input {
      width: 100%; padding: 14px 16px; border-radius: 10px;
      border: 2px solid ${T.colors.grey200}; background: white;
      font-family: ${T.font.body}; font-size: 15px; color: ${T.colors.grey800};
      transition: border-color 0.2s ease; outline: none;
    }
    .form-input:focus { border-color: ${T.colors.blue}; }
    .form-input::placeholder { color: ${T.colors.grey600}; }
    
    /* Pulse animation for emergency badge */
    @keyframes pulse-ring {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(1.6); opacity: 0; }
    }
    .pulse-dot::before {
      content: ''; position: absolute; inset: -4px;
      border-radius: 50%; border: 2px solid ${T.colors.red};
      animation: pulse-ring 2s ease infinite;
    }
    
    /* Water drip animation for hero */
    @keyframes drip {
      0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.6; }
      50% { transform: translateY(20px) scaleY(0.8); opacity: 0; }
    }
  `}</style>
);

/* ─── HEADER ─────────────────────────────────────────────────── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? `${T.colors.white}f8` : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? `1px solid ${T.colors.grey200}` : "1px solid transparent",
    transition: "all 0.3s ease",
    padding: scrolled ? "8px 24px" : "16px 24px",
  };

  return (
    <>
      <header style={headerStyle}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo area */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            {/* Logo placeholder - replace with actual logo img tag in production */}
            <div style={{
              width: 160, height: 50, 
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <span style={{
                fontFamily: T.font.display, fontWeight: 800, fontSize: 22,
                color: scrolled ? T.colors.steelDk : T.colors.white,
                transition: "color 0.3s",
                letterSpacing: "-0.5px",
              }}>
                Griff's
              </span>
              <span style={{
                fontFamily: T.font.display, fontWeight: 500, fontSize: 14,
                color: scrolled ? T.colors.grey600 : "rgba(255,255,255,0.8)",
                transition: "color 0.3s",
                marginLeft: 6, textTransform: "uppercase", letterSpacing: "2px",
              }}>
                Plumbing
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            <div style={{ display: "flex", gap: 28 }}>
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} style={{
                  color: scrolled ? T.colors.grey800 : "rgba(255,255,255,0.9)",
                  textDecoration: "none", fontFamily: T.font.display,
                  fontWeight: 500, fontSize: 14, letterSpacing: "0.3px",
                  transition: "color 0.2s",
                }}>{link.label}</a>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a href={PHONE_HREF} style={{
                display: "flex", alignItems: "center", gap: 6,
                color: scrolled ? T.colors.steelDk : "white",
                textDecoration: "none", fontFamily: T.font.display,
                fontWeight: 600, fontSize: 14, transition: "color 0.2s",
              }}>
                <PhoneIcon size={16} /> {PHONE}
              </a>
              <a href="#booking" className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
                <CalendarIcon size={16} /> Book Now
              </a>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            color: scrolled ? T.colors.steelDk : "white",
          }} className="mobile-toggle">
            <MenuIcon />
          </button>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}</style>
      </header>

      {/* Mobile nav overlay */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <button onClick={() => setMobileOpen(false)} style={{
          position: "absolute", top: 20, right: 20,
          background: "none", border: "none", cursor: "pointer", color: "white",
        }}>
          <XIcon size={32} />
        </button>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
        ))}
        <a href={PHONE_HREF} className="btn-primary" style={{ marginTop: 16 }}>
          <PhoneIcon size={18} /> {PHONE}
        </a>
        <a href="#booking" className="btn-outline" style={{ borderColor: "white", color: "white" }} onClick={() => setMobileOpen(false)}>
          <CalendarIcon size={18} /> Book Appointment
        </a>
      </div>
    </>
  );
};

/* ─── HERO ───────────────────────────────────────────────────── */
const Hero = () => (
  <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
    {/* Background */}
    <div style={{ position: "absolute", inset: 0, background: T.colors.steelDk }}>
      {/* Diagonal accent line */}
      <div style={{
        position: "absolute", top: 0, right: "-10%", width: "50%", height: "100%",
        background: `linear-gradient(150deg, transparent 30%, ${T.colors.blueDk}33 50%, transparent 70%)`,
        transform: "skewX(-12deg)",
      }} />
      {/* Red accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: 4,
        background: `linear-gradient(90deg, ${T.colors.red}, ${T.colors.blue})`,
      }} />
      {/* Subtle grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
    </div>

    <div className="container" style={{ position: "relative", zIndex: 1, padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 700 }}>
        {/* Emergency badge */}
        <FadeIn delay={0}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 18px", borderRadius: 100,
            background: "rgba(192,57,43,0.15)", border: `1px solid ${T.colors.red}55`,
            marginBottom: 28,
          }}>
            <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: T.colors.red }} className="pulse-dot" />
            <span style={{ color: T.colors.redLight, fontFamily: T.font.display, fontWeight: 600, fontSize: 13, letterSpacing: "0.5px" }}>
              24-Hour Emergency Service Available
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: T.font.display, fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.08,
            color: "white", marginBottom: 20,
          }}>
            Omaha's Trusted
            <span style={{ display: "block", color: T.colors.blue }}> Plumbing Experts</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontSize: "clamp(16px, 2.2vw, 19px)", color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7, maxWidth: 520, marginBottom: 36,
          }}>
            Over 20 years of experience serving residential and commercial customers across the Omaha metro. Free estimates, upfront pricing, and a 90-day guarantee on every job.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href="#booking" className="btn-primary" style={{ padding: "16px 32px", fontSize: 16 }}>
              <CalendarIcon size={20} /> Book Your Appointment
            </a>
            <a href={PHONE_HREF} className="btn-secondary">
              <PhoneIcon size={18} /> Call {PHONE}
            </a>
          </div>
        </FadeIn>

        {/* Trust badges */}
        <FadeIn delay={0.45}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginTop: 48 }}>
            {[
              { icon: ShieldIcon, text: "90-Day Guarantee" },
              { icon: CheckCircle, text: "Free Estimates" },
              { icon: ClockIcon, text: "24/7 Emergency" },
            ].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <b.icon size={18} color={T.colors.blue} />
                <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: T.font.display, fontWeight: 500, fontSize: 14 }}>
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ─── SERVICES ───────────────────────────────────────────────── */
const Services = () => (
  <section id="services" className="section-pad pipe-bg">
    <div className="container">
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Professional Plumbing Services</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From quick repairs to full remodels, Griff's handles every aspect of residential and commercial plumbing.
          </p>
        </div>
      </FadeIn>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: 24,
      }}>
        {SERVICES.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="card-hover" style={{
              padding: 32, borderRadius: 16,
              background: "white", border: `1px solid ${T.colors.grey100}`,
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              height: "100%",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: T.colors.blueLight, display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: 20,
              }}>
                <s.icon size={26} color={T.colors.blue} />
              </div>
              <h3 style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 20, marginBottom: 8, color: T.colors.steelDk }}>
                {s.title}
              </h3>
              <p style={{ color: T.colors.grey600, fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#booking" className="btn-primary">
            Get a Free Estimate <ArrowRight size={18} />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── PROCESS ────────────────────────────────────────────────── */
const Process = () => (
  <section id="process" className="section-pad" style={{ background: T.colors.steelDk, position: "relative", overflow: "hidden" }}>
    {/* Decorative diagonal */}
    <div style={{
      position: "absolute", top: -100, right: -100, width: 400, height: 400,
      borderRadius: "50%", border: `2px solid ${T.colors.blue}22`,
    }} />
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ color: T.colors.blue }}>Our Process</p>
          <h2 className="section-title" style={{ color: "white" }}>How It Works</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)", margin: "0 auto" }}>
            Getting your plumbing fixed shouldn't be complicated. Here's our straightforward process.
          </p>
        </div>
      </FadeIn>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24,
      }}>
        {STEPS.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              padding: 32, borderRadius: 16,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)", height: "100%",
            }}>
              <span style={{
                fontFamily: T.font.display, fontWeight: 800, fontSize: 40,
                color: T.colors.blue, opacity: 0.4, lineHeight: 1,
              }}>{s.num}</span>
              <h3 style={{
                fontFamily: T.font.display, fontWeight: 700, fontSize: 19,
                color: "white", margin: "12px 0 8px",
              }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

/* ─── REVIEWS ────────────────────────────────────────────────── */
const Reviews = () => (
  <section id="reviews" className="section-pad pipe-bg">
    <div className="container">
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Customer Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We're proud of the relationships we build with every customer. See what others are saying about Griff's Plumbing.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div style={{
          maxWidth: 640, margin: "0 auto", padding: 48, borderRadius: 20,
          background: "white", border: `1px solid ${T.colors.grey100}`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.06)", textAlign: "center",
        }}>
          {/* Stars */}
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 20 }}>
            {[1,2,3,4,5].map(i => <StarIcon key={i} size={28} />)}
          </div>
          <p style={{
            fontFamily: T.font.display, fontWeight: 600, fontSize: 22,
            color: T.colors.steelDk, marginBottom: 12,
          }}>
            Trusted by Omaha Homeowners
          </p>
          <p style={{ color: T.colors.grey600, fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
            Our customers rate us highly on Facebook for reliable service, fair pricing, and expert workmanship. We'd love for you to check out our reviews and share your experience too.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <a
              href="https://www.facebook.com/227410830745499"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read Our Facebook Reviews <ExternalLink size={16} />
            </a>
            <a
              href="https://www.google.com/search?q=Griff%27s+Plumbing+Omaha+NE+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Google Reviews <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── SERVICE AREAS ──────────────────────────────────────────── */
const ServiceAreas = () => (
  <section id="areas" className="section-pad" style={{ background: T.colors.offWhite }}>
    <div className="container">
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Coverage</p>
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Serving the greater Omaha metropolitan area with reliable plumbing services.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14,
          maxWidth: 700, margin: "0 auto",
        }}>
          {AREAS.map((area, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "12px 24px", borderRadius: 100,
              background: "white", border: `1px solid ${T.colors.grey200}`,
              fontFamily: T.font.display, fontWeight: 600, fontSize: 15,
              color: T.colors.steelDk, boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <MapPin size={16} color={T.colors.red} /> {area}
            </div>
          ))}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "12px 24px", borderRadius: 100,
            background: T.colors.blueLight, border: `1px solid ${T.colors.blue}33`,
            fontFamily: T.font.display, fontWeight: 600, fontSize: 15,
            color: T.colors.blue,
          }}>
            + Surrounding Areas
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── FAQ ─────────────────────────────────────────────────────── */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: `1px solid ${T.colors.grey200}`,
      padding: "20px 0",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
      }}>
        <span style={{ fontFamily: T.font.display, fontWeight: 600, fontSize: 17, color: T.colors.steelDk }}>
          {q}
        </span>
        <span style={{
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease", flexShrink: 0,
        }}>
          <ChevronDown size={22} color={T.colors.grey600} />
        </span>
      </button>
      <div className={`faq-content ${open ? "open" : ""}`}>
        <p style={{ color: T.colors.grey600, fontSize: 15, lineHeight: 1.7, paddingTop: 12 }}>{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="section-pad">
    <div className="container" style={{ maxWidth: 780 }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div>
          {FAQS.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── BOOKING SECTION (Calendar Embed Placeholder) ───────────── */
const Booking = () => (
  <section id="booking" className="section-pad" style={{
    background: `linear-gradient(135deg, ${T.colors.steelDk} 0%, ${T.colors.blueDk} 100%)`,
    position: "relative", overflow: "hidden",
  }}>
    {/* Decorative circles */}
    <div style={{ position: "absolute", top: -60, left: -60, width: 200, height: 200, borderRadius: "50%", border: `2px solid rgba(255,255,255,0.06)` }} />
    <div style={{ position: "absolute", bottom: -40, right: -40, width: 300, height: 300, borderRadius: "50%", border: `2px solid rgba(255,255,255,0.04)` }} />

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label" style={{ color: T.colors.blue }}>Schedule Service</p>
          <h2 className="section-title" style={{ color: "white" }}>Book Your Appointment</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.65)", margin: "0 auto" }}>
            Pick a time that works for you. We'll confirm within minutes.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div style={{
          maxWidth: 700, margin: "0 auto", borderRadius: 20,
          background: "white", overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
        }}>
          {/* ── GHL Calendar Embed (Live) ──────────────────────── */}
          <div style={{ width: "100%", position: "relative" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/q5C7BbDJzEui1eQz7MXR"
              style={{
                width: "100%", height: 700, border: "none",
                display: "block",
              }}
              title="Book an appointment with Griff's Plumbing"
              loading="lazy"
              allow="geolocation"
            />
            {/* Fallback: shown if user has JS disabled or iframe blocked */}
            <noscript>
              <div style={{
                padding: 48, textAlign: "center",
                background: T.colors.offWhite,
              }}>
                <p style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 18, color: T.colors.steelDk, marginBottom: 12 }}>
                  Online booking requires JavaScript
                </p>
                <p style={{ color: T.colors.grey600, marginBottom: 20 }}>
                  Call us directly or open the booking page in a new tab.
                </p>
                <a href={PHONE_HREF} style={{ color: T.colors.red, fontWeight: 600 }}>
                  Call {PHONE}
                </a>
                {" | "}
                <a href="https://api.leadconnectorhq.com/widget/booking/q5C7BbDJzEui1eQz7MXR" target="_blank" rel="noopener noreferrer"
                  style={{ color: T.colors.blue, fontWeight: 600 }}>
                  Open Booking Page →
                </a>
              </div>
            </noscript>
          </div>

          {/* What happens next */}
          <div style={{
            padding: "24px 32px", borderTop: `1px solid ${T.colors.grey100}`,
            background: T.colors.offWhite,
          }}>
            <p style={{
              fontFamily: T.font.display, fontWeight: 700, fontSize: 14,
              color: T.colors.steelDk, marginBottom: 10,
            }}>What happens after you book?</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              {[
                "You'll get instant confirmation via text & email",
                "We'll arrive on time with a free estimate",
                "No obligation — you decide how to proceed",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, flex: "1 1 200px" }}>
                  <CheckCircle size={18} color={T.colors.blue} />
                  <span style={{ fontSize: 13, color: T.colors.grey600, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── CONTACT FORM (secondary) ───────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // ── PHASE 2: Paste your GHL webhook URL here ──────────────
  const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/G4czjmTJMsJplz32hwTf/webhook-trigger/KBH3vFbFTPtyHMbR8s1h";
  // ──────────────────────────────────────────────────────────

  // Capture UTMs from URL on mount
  const utmRef = useRef<Record<string, string>>({});
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    utmKeys.forEach(k => { if (params.get(k)) utmRef.current[k] = params.get(k); });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    if (GHL_WEBHOOK_URL.startsWith("PASTE")) {
      // Fallback while webhook isn't configured yet
      console.log("Form data (webhook not configured):", formData, utmRef.current);
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          ...utmRef.current,
          source: "website_contact_form",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please call us directly or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad" style={{ background: T.colors.offWhite }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48, alignItems: "start",
        }}>
          {/* Info side */}
          <FadeIn direction="right">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title">Prefer to Reach Out Directly?</h2>
              <p style={{ color: T.colors.grey600, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Can't find a time online? No problem. Give us a call, send a message, or fill out this form and we'll get back to you quickly.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: PhoneIcon, label: "Phone", value: PHONE, href: PHONE_HREF },
                  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: MapPin, label: "Address", value: ADDRESS, href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}` },
                  { icon: ClockIcon, label: "Hours", value: "Mon–Fri: 8:00 AM – 4:00 PM", href: null },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: T.colors.blueLight, display: "flex",
                      alignItems: "center", justifyContent: "center",
                    }}>
                      <item.icon size={20} color={T.colors.blue} />
                    </div>
                    <div>
                      <p style={{ fontFamily: T.font.display, fontWeight: 600, fontSize: 13, color: T.colors.grey600, marginBottom: 2 }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} style={{ color: T.colors.steelDk, fontWeight: 500, fontSize: 15, textDecoration: "none" }}>
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ color: T.colors.steelDk, fontWeight: 500, fontSize: 15 }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency callout */}
              <div style={{
                marginTop: 32, padding: "20px 24px", borderRadius: 14,
                background: `linear-gradient(135deg, ${T.colors.red}11, ${T.colors.red}08)`,
                border: `1px solid ${T.colors.red}22`,
              }}>
                <p style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 15, color: T.colors.red, marginBottom: 4 }}>
                  Plumbing Emergency?
                </p>
                <p style={{ color: T.colors.grey600, fontSize: 14, lineHeight: 1.6 }}>
                  We offer 24-hour emergency service. Call us anytime — we're here when you need us most.
                </p>
                <a href={PHONE_HREF} className="btn-primary" style={{ marginTop: 12, padding: "10px 20px", fontSize: 14 }}>
                  <PhoneIcon size={16} /> Call Now
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Form side */}
          <FadeIn direction="left" delay={0.15}>
            <div style={{
              padding: 36, borderRadius: 20,
              background: "white", border: `1px solid ${T.colors.grey100}`,
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <CheckCircle size={48} color={T.colors.blue} />
                  <h3 style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 22, color: T.colors.steelDk, margin: "16px 0 8px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: T.colors.grey600, fontSize: 15 }}>
                    We'll get back to you within 1 business day. For faster service, call us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 20, color: T.colors.steelDk, marginBottom: 24 }}>
                    Send Us a Message
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <input className="form-input" type="text" placeholder="Your Name" required
                      value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    <input className="form-input" type="email" placeholder="Email Address" required
                      value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    <input className="form-input" type="tel" placeholder="Phone Number"
                      value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    <textarea className="form-input" placeholder="How can we help?" rows={4} required
                      style={{ resize: "vertical", minHeight: 100 }}
                      value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                    <button type="submit" className="btn-primary" disabled={submitting}
                      style={{ width: "100%", justifyContent: "center", opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? "Sending..." : "Send Message"} {!submitting && <ArrowRight size={18} />}
                    </button>
                    {error && (
                      <p style={{ fontSize: 13, color: T.colors.red, textAlign: "center", marginTop: 8 }}>{error}</p>
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: T.colors.grey600, textAlign: "center", marginTop: 12 }}>
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
};

/* ─── FOOTER ─────────────────────────────────────────────────── */
const Footer = () => (
  <footer style={{ background: T.colors.steelDk, padding: "64px 24px 32px" }}>
    <div className="container">
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 40, marginBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontFamily: T.font.display, fontWeight: 800, fontSize: 22, color: "white" }}>
              Griff's
            </span>
            <span style={{ fontFamily: T.font.display, fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "2px" }}>
              Plumbing
            </span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
            Omaha's trusted plumbing professionals. Over 20 years of experience serving residential and commercial customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 14, color: "white", marginBottom: 16, textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Quick Links
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 14, color: "white", marginBottom: 16, textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Contact
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href={PHONE_HREF} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14 }}>
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14 }}>
              {EMAIL}
            </a>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{ADDRESS}</span>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 14, color: "white", marginBottom: 16, textTransform: "uppercase", letterSpacing: "1.5px" }}>
            Hours
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Mon – Fri: 8:00 AM – 4:00 PM</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
              <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: T.colors.red }} className="pulse-dot" />
              <span style={{ color: T.colors.red, fontSize: 13, fontWeight: 600 }}>24hr Emergency Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: 24,
        display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12,
      }}>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
          © {new Date().getFullYear()} Griff's Plumbing. All rights reserved.
        </p>
        <a href="https://www.facebook.com/227410830745499" target="_blank" rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none" }}>
          Facebook
        </a>
      </div>
    </div>
  </footer>
);

/* ─── PROMO BANNER ───────────────────────────────────────────── */
const PromoBanner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", bottom: 24, left: 24, right: 24, zIndex: 40,
      maxWidth: 480, margin: "0 auto",
      padding: "16px 24px", borderRadius: 14,
      background: T.colors.red, color: "white",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
      boxShadow: "0 12px 40px rgba(192,57,43,0.35)",
    }}>
      <div>
        <p style={{ fontFamily: T.font.display, fontWeight: 700, fontSize: 15, marginBottom: 2 }}>
          🔧 10% Off This Month!
        </p>
        <p style={{ fontSize: 13, opacity: 0.9 }}>New customers save on their first service.</p>
      </div>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <a href="#booking" className="btn-secondary" style={{ padding: "8px 16px", fontSize: 13, borderColor: "rgba(255,255,255,0.5)" }}
          onClick={() => setVisible(false)}>
          Book Now
        </a>
        <button onClick={() => setVisible(false)} style={{
          background: "none", border: "none", color: "rgba(255,255,255,0.6)",
          cursor: "pointer", fontSize: 18, lineHeight: 1,
        }}>✕</button>
      </div>
    </div>
  );
};

/* ─── MAIN APP ───────────────────────────────────────────────── */
export default function GriffsPlumbing() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Reviews />
        <ServiceAreas />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <PromoBanner />
    </>
  );
}
