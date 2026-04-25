// ============================================================
//  SITE CONFIG — edit this file for each new client project
//  Everything else in the project stays the same
// ============================================================

const siteConfig = {
  // ── Business identity ──────────────────────────────────────
  name:        "JugoWeb Studio",
  tagline:     "Web Design & Digital",
  description: "Professional websites for small businesses in the UK, US, Canada, Australia and beyond. Fast delivery. Fixed prices. Free maintenance.",
  logo:        "/logo.png",            // emoji OR path to image in /public e.g. "/logo.png"

  // ── SEO (fills <head> meta tags automatically) ──────────────
  seo: {
    title:       "JugoWeb Studio | Professional Web Design & Digital Marketing",
    description: "Professional websites for small businesses. Fast delivery, fixed prices, free maintenance. React/Next.js experts.",
    keywords:    "web design, web development, digital marketing, small business websites, Next.js, React, freelance web design",
    ogImage:     "/og-image.jpg",
    favicon:     "/favicon.ico",
    themeColor:  "#1abc9c",
  },

  // ── Contact & location ─────────────────────────────────────
  contact: {
    phone:         "+2347068565954",
    whatsapp:      "+2347068565954",
    email:         "contact@jugowebstudio.com",
    address:       "Remote · Available Worldwide",
    googleMapsUrl: "https://maps.google.com",
  },

  // ── Opening hours ──────────────────────────────────────────
  hours: [
    { days: "Mon – Fri",     time: "9am – 6pm" },
    { days: "Saturday",      time: "10am – 4pm"  },
    { days: "Sunday",        time: "Closed"  },
  ],

  // ── Order platforms (set to null to hide a button) ─────────
  ordering: {
    directPhone:    true,
    directWhatsapp: true,
    justEat:   null,
    uberEats:  null,
    deliveroo: null,
  },

  // ── Brand colours ─────────────────────────────────────────
  colors: {
    primary:   "#1abc9c",
    secondary: "#0ea5e9",
    dark:      "#1a2340",
    card:      "#2a3660",
    border:    "rgba(255,255,255,0.07)",
  },

  // ── Social links (null = hidden) ──────────────────────────
  social: {
    facebook:  null,
    instagram: null,
    tiktok:    null as string | null,
    twitter:   null as string | null,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copy:    "© 2024 JugoWeb Studio. All rights reserved.",
    tagline: "Websites That Win Customers.",
  },
}

export default siteConfig
