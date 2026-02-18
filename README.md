# Griff's Plumbing — Website Redesign

## Quick Start

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Deploy the `dist/` folder to Netlify (or use the included `netlify.toml` for auto-config).

## Project Structure

```
├── public/
│   └── griff-logo.png          # Logo file (used as favicon + can be used in header)
├── src/
│   ├── App.tsx                  # Full site — all sections and components
│   ├── main.tsx                 # React entry point
│   └── vite-env.d.ts           # Vite type declarations
├── index.html                   # HTML shell with meta tags
├── netlify.toml                 # Netlify deploy config
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Editable Areas in `App.tsx`

| What                  | Where to find it                          |
|-----------------------|------------------------------------------|
| Colors / fonts        | `T` object at top of file (design tokens) |
| Phone / email / addr  | `PHONE`, `EMAIL`, `ADDRESS` constants     |
| Services list         | `SERVICES` array                          |
| Process steps         | `STEPS` array                             |
| Service areas         | `AREAS` array                             |
| FAQ items             | `FAQS` array                              |
| GHL Calendar ID       | iframe `src` in `Booking` component       |
| GHL Webhook URL       | `GHL_WEBHOOK_URL` in `Contact` component  |

## GHL Integration

- **Calendar**: Live GHL embed (iframe) in the Booking section
- **Contact Form**: POSTs to GHL webhook with name, email, phone, message, source, and UTM params
- **UTM Capture**: Automatically reads utm_source, utm_medium, utm_campaign, utm_term, utm_content from the URL and includes them in form submissions
