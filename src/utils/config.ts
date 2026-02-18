/* ═══════════════════════════════════════════════════════════════
   config.ts — Single source of truth for business data & GHL IDs
   Edit this file to update content across the whole site.
   ═══════════════════════════════════════════════════════════════ */

// ── GoHighLevel ─────────────────────────────────────────────────
export const GHL = {
  apiKey:      'pit-ff742ec2-1c2e-474a-8139-aee59c05577b',
  locationId:  'G4czjmTJMsJplz32hwTf',
  calendarId:  'q5C7BbDJzEui1eQz7MXR',

  /** Calendar embed URL (iframe src) */
  calendarEmbed: 'https://api.leadconnectorhq.com/widget/booking/q5C7BbDJzEui1eQz7MXR',

  /**
   * Contact form webhook URL.
   * Go to GHL → Automations → Triggers → "Inbound Webhook"
   * and paste that URL here. Until then the form posts to '#'.
   */
  formWebhook: '',
} as const;

// ── Business info ───────────────────────────────────────────────
export const BIZ = {
  name:       "Griff's Plumbing",
  phone:      '402-933-8525',
  phoneHref:  'tel:4029338525',
  email:      'chris@griffsplumbing.com',
  address:    '8060 H Street, Omaha, NE 68127',
  mapQuery:   'Griff%27s+Plumbing+8060+H+Street+Omaha+NE+68127',
  hours:      'Mon – Fri: 8:00 AM – 4:00 PM',
  facebook:   'https://www.facebook.com/227410830745499',
  googleSearch: 'https://www.google.com/search?q=Griff%27s+Plumbing+Omaha+NE+reviews',
} as const;

// ── Navigation ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services',      href: '#services' },
  { label: 'How It Works',  href: '#process' },
  { label: 'Reviews',       href: '#reviews' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
] as const;

// ── Services ────────────────────────────────────────────────────
export interface ServiceItem {
  icon: string; // key into Icons map
  title: string;
  desc: string;
}

export const SERVICES: ServiceItem[] = [
  { icon: 'flame',      title: 'Water Heaters',       desc: 'Installation, repair, and replacement of tank and tankless water heaters for reliable hot water year-round.' },
  { icon: 'droplet',    title: 'Faucet Repairs',       desc: 'Fix leaks, drips, and worn fixtures. Upgrade to modern faucets with expert installation.' },
  { icon: 'wrench',     title: 'Drain Cleaning',       desc: 'Clear stubborn clogs and slow drains with professional tools that restore full flow.' },
  { icon: 'home',       title: 'Remodeling',           desc: 'Kitchen and bathroom plumbing for remodels — from rough-in to finish, done right.' },
  { icon: 'shield',     title: 'Sewer & Water Repair', desc: 'Diagnose and repair sewer line issues and water main problems before they become emergencies.' },
  { icon: 'check',      title: 'Backflow Testing',     desc: 'Certified backflow prevention testing to keep your water supply safe and code-compliant.' },
];

// ── Process steps ───────────────────────────────────────────────
export const STEPS = [
  { num: '01', title: 'Book Your Appointment', desc: 'Pick a time that works for you using our online scheduler — or just give us a call.' },
  { num: '02', title: 'Free On-Site Estimate',  desc: "We'll assess the situation and walk you through every option, with transparent pricing." },
  { num: '03', title: 'Expert Repair',           desc: 'Our experienced team handles the work efficiently — backed by a 90-day service guarantee.' },
  { num: '04', title: 'Follow-Up',               desc: "We stay in communication until you're 100% satisfied with the results." },
];

// ── Service areas ───────────────────────────────────────────────
export const AREAS = ['Omaha', 'Council Bluffs', 'Papillion', 'La Vista', 'Bellevue', 'Elkhorn', 'Gretna'];

// ── FAQ ─────────────────────────────────────────────────────────
export const FAQS = [
  { q: 'How much does an estimate cost?',        a: "Estimates are always free. We'll come to you, assess the situation, and explain all your options with upfront pricing — no surprises." },
  { q: 'Do you offer a warranty on your work?',  a: 'Absolutely. We stand behind our work 100% with a 90-day service guarantee, plus all manufacturer warranties on parts and equipment.' },
  { q: 'Do you offer financing?',                a: `Yes, we offer financing options to help make larger projects manageable. Give us a call at ${BIZ.phone} for details.` },
  { q: 'Do you handle drain cleaning?',           a: 'Yes — we handle all types of drain cleaning, from simple kitchen clogs to main sewer line blockages.' },
  { q: 'What payment methods do you accept?',     a: 'We accept all major credit cards, cash, and checks for your convenience.' },
  { q: 'Do you offer emergency service?',         a: `Yes — we provide 24-hour emergency plumbing service. Call us anytime at ${BIZ.phone} for urgent issues.` },
  { q: 'What areas do you serve?',                a: 'We serve the greater Omaha metro including Council Bluffs, Papillion, La Vista, Bellevue, Elkhorn, Gretna, and surrounding communities.' },
];
