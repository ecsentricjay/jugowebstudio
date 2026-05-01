'use client'

import { useState, useEffect, useRef } from 'react'

// ─── BRAND ────────────────────────────────────────────────────────────────────
const B = {
  navy:    '#1a2340',
  navy2:   '#212c4f',
  navy3:   '#2a3660',
  teal:    '#1abc9c',
  tealD:   '#16a085',
  tealDim: 'rgba(26,188,156,0.12)',
  tealBdr: 'rgba(26,188,156,0.25)',
  white:   '#ffffff',
  offwhite:'#f4f7fc',
  ink:     '#0d1224',
  muted:   '#8896b3',
  border:  'rgba(255,255,255,0.07)',
  borderL: '#e0e7f2',
  card:    'rgba(255,255,255,0.04)',
}

// ─── LOGO (from logo2.png) ────────────────────────────────────────────────────
// Logo is now served from the public folder as logo2.png

// ─── PORTFOLIO ITEMS ──────────────────────────────────────────────────────────
const PORTFOLIO = [
  { name: 'Spice Garden',       niche: 'Restaurant · Birmingham',   img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=80',  tag: 'Website + Menu',     color: '#f97316' },
  { name: 'The Ivy Table',      niche: 'Café & Brunch · Manchester', img: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=700&q=80',  tag: 'Full Branding',      color: '#1e4d35' },
  { name: 'Swift Fix',          niche: 'Plumbing · Manchester',     img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',  tag: 'Lead Gen Site',      color: '#1a3a5c' },
  { name: 'BrightSmile Dental', niche: 'Dental Practice · Leeds',   img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80',  tag: 'Booking + SEO',      color: '#1a6fc4' },
  { name: 'Hartley & Assoc.',   niche: 'Solicitors · Manchester',   img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80',  tag: 'Professional Site',  color: '#c9a84c' },
  { name: 'Golden Wok',         niche: 'Takeaway · Leeds',          img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&q=80',  tag: 'E-Commerce',         color: '#e53e3e' },
]

const SERVICES = [
  {
    icon: '🌐', title: 'Website Design & Development',
    desc: 'Custom, mobile-first websites built in React/Next.js. Fast, SEO-ready and built to convert visitors into customers.',
    bullets: ['Delivered in 5–7 days','Mobile-first design','Free 1-year maintenance'],
    from: '£209',
  },
  {
    icon: '🛒', title: 'E-Commerce Stores',
    desc: 'Online stores with secure payments, product management and order tracking — fully set up and ready to trade.',
    bullets: ['Stripe & PayPal ready','Product upload included','Inventory management'],
    from: '£419',
  },
  {
    icon: '📍', title: 'Google Business Profile',
    desc: 'Get your business properly listed, verified and optimised on Google Maps so local customers can find you instantly.',
    bullets: ['Full profile setup','Photo & copy optimised','Review strategy included'],
    from: '£55',
  },
  {
    icon: '🔍', title: 'Local SEO',
    desc: 'Rank higher on Google in your city. Monthly work that builds lasting visibility — not quick fixes that fade.',
    bullets: ['Keyword research','On-page & local SEO','Monthly reporting'],
    from: '£104/mo',
  },
  {
    icon: '📱', title: 'Social Media Setup',
    desc: 'Professional Facebook, Instagram and TikTok presence set up, branded and ready to go — with a content strategy.',
    bullets: ['Full profile branding','Content plan included','3 starter posts created'],
    from: '£90',
  },
  {
    icon: '🛡️', title: 'Website Maintenance',
    desc: 'Keep your site fast, secure and up to date. Updates, backups, security monitoring and small changes handled for you.',
    bullets: ['Monthly updates & backups','Security monitoring','Unlimited small edits'],
    from: '£20/mo',
  },
]

const PROCESS = [
  { n: '01', title: 'You Tell Us About Your Business',      desc: 'Quick call or WhatsApp chat — tell us what you need, who your customers are, and what you want the site to do.' },
  { n: '02', title: 'We Send a Fixed Quote',                desc: 'No vague estimates. You get a clear price and timeline before anything starts. No surprises on the invoice.' },
  { n: '03', title: 'We Build — You Review',               desc: 'We deliver a first draft in 3–5 days. You review, request changes, and we refine until you\'re completely happy.' },
  { n: '04', title: 'Go Live & We Handle Everything',       desc: 'We launch your site, set up your domain, configure hosting and hand you the keys — with full support included.' },
]

const TESTIMONIALS = [
  { name: 'David H.',   biz: 'Swift Fix Plumbing, Manchester', stars: 5, text: 'Had no website at all before JugoWeb. They built one in under a week, it looks incredible, and I\'ve already had 3 new enquiries through it. Best money I\'ve spent on the business.' },
  { name: 'Aisha K.',   biz: 'Spice Garden, Birmingham',       stars: 5, text: 'Found them on Google Maps. Sent a message on a Monday, had a live website by Friday. The price was less than a quarter of what a local agency quoted me. Absolutely brilliant.' },
  { name: 'Charlotte B.',biz: 'The Ivy Table, Manchester',     stars: 5, text: 'Our café needed a rebrand. JugoWeb handled the full website, Google profile and social media setup. The booking enquiries doubled in the first month.' },
  { name: 'James R.',   biz: 'Hartley & Associates, Manchester',stars: 5, text: 'Professional from start to finish. Clear communication, delivered exactly what was agreed, on time. We\'ve since recommended them to three other businesses.' },
]

const FAQS = [
  { q: 'Where is JugoWeb Studio based?',              a: 'We\'re a remote-first digital agency. Our team works internationally, which is how we\'re able to offer prices well below UK agency rates — without compromising on quality, speed or communication.' },
  { q: 'How long does a website take?',               a: 'Most standard websites are delivered in 5–7 working days. E-commerce stores typically take 7–10 days. We\'ll give you a specific timeline before we start.' },
  { q: 'What\'s included in the free 1-year maintenance?', a: 'Security updates, software updates, monthly backups, uptime monitoring, and small content changes (text, images, opening hours etc.). After year one, maintenance continues at £20/month.' },
  { q: 'Do I need to provide content and images?',    a: 'Not necessarily. We can write the copy for your site and source professional stock photography at no extra charge. If you have your own photos and text, even better — we\'ll use those.' },
  { q: 'How do I pay?',                               a: 'We take 50% upfront and 50% on delivery. We accept bank transfer, PayPal, and card payments via Stripe. All prices are in GBP, USD or your local currency — just ask.' },
  { q: 'What if I need changes after the site goes live?', a: 'Minor changes are included in your free maintenance year. For larger additions or redesigns, we\'ll quote you a fair fixed price — no hourly rates, no surprises.' },
]

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function Stars({ n }: { n: number }) {
  return (
    <span>{[1,2,3,4,5].map(i => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i<=n?'#f59e0b':'none'} stroke="#f59e0b" strokeWidth="2" style={{display:'inline',marginRight:1}}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}</span>
  )
}

// Animated counter
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = Math.ceil(end / 40)
        const t = setInterval(() => {
          start = Math.min(start + step, end)
          setCount(start)
          if (start >= end) clearInterval(t)
        }, 35)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ onContact }: { onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mOpen, setMOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => { setMOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const links = [['home','Home'],['services','Services'],['work','Our Work'],['pricing','Pricing'],['about','About'],['contact','Contact']]

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:1000, background: scrolled ? 'rgba(26,35,64,0.97)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? `1px solid ${B.border}` : 'none', transition:'all 0.35s ease' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px', display:'flex', alignItems:'center', justifyContent:'space-between', height:70 }}>

        {/* Logo */}
        <div onClick={() => go('home')} style={{ cursor:'pointer', display:'flex', alignItems:'center', gap:10 }}>
          <img src="/logo2.png" alt="JugoWeb Studio" style={{ height:44, width:'auto' }} />
          <div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:17, fontWeight:800, color:'#fff', letterSpacing:'-0.01em', lineHeight:1.1 }}>JugoWeb<span style={{ color:B.teal }}> Studio</span></div>
            <div style={{ fontFamily:'sans-serif', fontSize:9, color:'rgba(255,255,255,0.4)', letterSpacing:'0.18em', textTransform:'uppercase' }}>Web Design & Digital</div>
          </div>
        </div>

        {/* Desktop */}
        <div className="jw-desktop-nav" style={{ display:'flex', gap:28, alignItems:'center' }}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ background:'none', border:'none', color:'rgba(255,255,255,0.65)', fontSize:14, cursor:'pointer', fontFamily:'sans-serif', transition:'color 0.2s', padding:0, letterSpacing:'0.02em' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = B.teal }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)' }}
            >{label}</button>
          ))}
          <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
            style={{ background:'none', border:`1.5px solid ${B.teal}`, color:B.teal, padding:'9px 18px', borderRadius:6, fontSize:13.5, fontWeight:700, textDecoration:'none', fontFamily:'sans-serif', letterSpacing:'0.03em', transition:'all 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = B.teal; el.style.color = B.navy }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'none'; el.style.color = B.teal }}
          >💬 WhatsApp</a>
          <button onClick={onContact}
            style={{ background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, border:'none', color:'#fff', padding:'10px 22px', borderRadius:6, fontSize:13.5, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 4px 18px rgba(26,188,156,0.35)`, transition:'opacity 0.2s, transform 0.2s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity='0.88'; el.style.transform='translateY(-1px)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity='1'; el.style.transform='none' }}
          >Get a Free Quote</button>
        </div>

        <button onClick={() => setMOpen(o => !o)} className="jw-hamburger"
          style={{ display:'none', background:'none', border:'none', color:'#fff', fontSize:26, cursor:'pointer' }}>
          {mOpen ? '✕' : '☰'}
        </button>
      </div>

      {mOpen && (
        <div style={{ background:B.navy2, borderTop:`1px solid ${B.border}`, padding:'16px 28px 28px' }}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)}
              style={{ display:'block', background:'none', border:'none', color:'rgba(255,255,255,0.8)', fontSize:16, cursor:'pointer', padding:'12px 0', width:'100%', textAlign:'left', borderBottom:`1px solid ${B.border}`, fontFamily:'sans-serif' }}
            >{label}</button>
          ))}
          <div style={{ display:'flex', gap:10, marginTop:16, flexWrap:'wrap' }}>
            <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
              style={{ flex:1, padding:'12px', background:'#25d366', borderRadius:6, color:'#fff', fontWeight:700, fontSize:14, textAlign:'center', textDecoration:'none', fontFamily:'sans-serif' }}>
              💬 WhatsApp
            </a>
            <button onClick={onContact}
              style={{ flex:1, padding:'12px', background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, border:'none', borderRadius:6, color:'#fff', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'sans-serif' }}>
              Free Quote
            </button>
          </div>
        </div>
      )}
      <style>{`.jw-desktop-nav{display:flex} @media(max-width:960px){.jw-desktop-nav{display:none!important}.jw-hamburger{display:block!important}}`}</style>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section id="home" style={{ background:B.navy, minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflowX:'hidden', paddingTop:70 }}>
      {/* Background grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(26,188,156,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,188,156,0.04) 1px, transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none' }} />
      {/* Glow */}
      <div style={{ position:'absolute', top:'20%', right:'-10%', width:600, height:600, borderRadius:'50%', background:`radial-gradient(circle, rgba(26,188,156,0.08) 0%, transparent 65%)`, pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-5%', left:'-5%', width:400, height:400, borderRadius:'50%', background:`radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 65%)`, pointerEvents:'none' }} />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'80px 20px', width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }} className="jw-hero-grid">

        {/* Left */}
        <div>
          {/* Badge */}
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:B.tealDim, border:`1px solid ${B.tealBdr}`, borderRadius:100, padding:'6px 16px', marginBottom:28 }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:B.teal, animation:'jwPulse 2s infinite' }} />
            <span style={{ fontFamily:'sans-serif', fontSize:12, color:B.teal, letterSpacing:'0.08em', fontWeight:600 }}>Available for new projects</span>
          </div>

          <h1 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(36px,5.5vw,68px)', fontWeight:900, color:'#fff', lineHeight:1.0, marginBottom:24, letterSpacing:'-0.03em' }}>
            Websites That<br />
            <span style={{ background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Win Customers
            </span><br />
            <span style={{ color:'rgba(255,255,255,0.85)' }}>Not Awards</span>
          </h1>

          <p style={{ fontFamily:'sans-serif', fontSize:'clamp(15px,1.8vw,18px)', color:'rgba(255,255,255,0.6)', lineHeight:1.8, marginBottom:16, maxWidth:520, fontWeight:300 }}>
            We build fast, professional websites for small businesses in the UK, US, Canada and Australia — at prices local agencies can't match.
          </p>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:40, flexWrap:'wrap' }}>
            {['✅ Free 1-year maintenance','✅ Delivered in 5–7 days','✅ Fixed price, no surprises'].map(t => (
              <span key={t} style={{ fontFamily:'sans-serif', fontSize:13, color:B.teal, fontWeight:600 }}>{t}</span>
            ))}
          </div>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap', width:'100%' }}>
            <button onClick={onContact}
              style={{ background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, border:'none', color:'#fff', padding:'15px 36px', borderRadius:8, fontSize:16, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 8px 32px rgba(26,188,156,0.4)`, transition:'transform 0.2s, box-shadow 0.2s', letterSpacing:'0.01em' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform='translateY(-2px)'; el.style.boxShadow=`0 12px 40px rgba(26,188,156,0.5)` }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform='none'; el.style.boxShadow=`0 8px 32px rgba(26,188,156,0.4)` }}
            >Get a Free Quote →</button>
            <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, border:'1.5px solid rgba(255,255,255,0.2)', color:'rgba(255,255,255,0.85)', padding:'15px 28px', borderRadius:8, fontSize:15, fontWeight:600, textDecoration:'none', fontFamily:'sans-serif', transition:'border-color 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=B.teal; el.style.color=B.teal }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.2)'; el.style.color='rgba(255,255,255,0.85)' }}
            >💬 Chat on WhatsApp</a>
          </div>

          {/* Stats */}
          <div style={{ display:'flex', gap:0, marginTop:48, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)', flexWrap:'wrap' }}>
            {[{n:20,s:'+',l:'Websites delivered'},{n:5,s:' countries',l:'We work in'},{n:100,s:'%',l:'On-time delivery'},{n:1,s:' year',l:'Free maintenance'}].map((st,i) => (
              <div key={st.l} style={{ minWidth:'80px', paddingRight:16, borderRight: i<3 ? '1px solid rgba(255,255,255,0.08)' : 'none', marginRight:16, marginBottom:12 }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:28, fontWeight:900, color:B.teal, lineHeight:1 }}>
                  <Counter end={st.n} suffix={st.s} />
                </div>
                <div style={{ fontFamily:'sans-serif', fontSize:11, color:'rgba(255,255,255,0.4)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:5 }}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating demo cards */}
        <div className="jw-hero-right" style={{ position:'relative', height:520 }}>
          {/* Main card */}
          <div style={{ position:'absolute', top:0, left:0, right:40, background:B.navy2, border:`1px solid ${B.border}`, borderRadius:14, overflow:'hidden', boxShadow:'0 24px 64px rgba(0,0,0,0.4)' }}>
            <div style={{ background:B.navy3, padding:'14px 18px', display:'flex', alignItems:'center', gap:8, borderBottom:`1px solid ${B.border}` }}>
              {['#ef4444','#f59e0b','#22c55e'].map(c => <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />)}
              <div style={{ flex:1, background:'rgba(255,255,255,0.06)', borderRadius:4, height:20, marginLeft:8, display:'flex', alignItems:'center', paddingLeft:10 }}>
                <span style={{ fontFamily:'monospace', fontSize:11, color:'rgba(255,255,255,0.3)' }}>jugowebstudio.com</span>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80" alt="Demo site" style={{ width:'100%', height:220, objectFit:'cover' }} />
            <div style={{ padding:'16px 18px' }}>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:700, color:'#fff', marginBottom:4 }}>Spice Garden — Birmingham</div>
              <div style={{ display:'flex', gap:6 }}>
                {['Restaurant','Website','SEO'].map(t => <span key={t} style={{ fontFamily:'sans-serif', fontSize:10, color:B.teal, background:B.tealDim, padding:'2px 8px', borderRadius:100, border:`1px solid ${B.tealBdr}` }}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* Floating metric */}
          <div style={{ position:'absolute', bottom:80, right:0, background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, borderRadius:12, padding:'16px 20px', boxShadow:'0 12px 40px rgba(26,188,156,0.4)', minWidth:150 }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:28, fontWeight:900, color:'#fff', lineHeight:1 }}>£209</div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, color:'rgba(255,255,255,0.8)', marginTop:4, letterSpacing:'0.06em', textTransform:'uppercase' }}>starting from</div>
          </div>

          {/* Floating delivery badge */}
          <div style={{ position:'absolute', bottom:0, left:20, background:B.navy2, border:`1px solid ${B.border}`, borderRadius:10, padding:'12px 16px', display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:8, background:B.tealDim, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>⚡</div>
            <div>
              <div style={{ fontFamily:'sans-serif', fontSize:12, fontWeight:700, color:'#fff' }}>5–7 day delivery</div>
              <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.muted }}>Most projects complete in a week</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes jwPulse { 0%,100%{opacity:0.5;transform:scale(0.9)} 50%{opacity:1;transform:scale(1.1)} }
        @media(max-width:900px) { .jw-hero-grid{grid-template-columns:1fr!important;gap:32px!important;padding:60px 20px!important} .jw-hero-right{display:none!important} }
        @media(max-width:600px) { .jw-hero-grid{padding:48px 16px!important} }
      `}</style>
    </section>
  )
}

// ─── TRUSTED BY STRIP ─────────────────────────────────────────────────────────
function TrustedBy() {
  const names = ['Restaurants','Takeaways','Dental Practices','Law Firms','Plumbers','Hair Salons','Gyms','Real Estate','Electricians','Accountants','Cafés','Solicitors']
  return (
    <div style={{ background:B.navy2, borderTop:`1px solid ${B.border}`, borderBottom:`1px solid ${B.border}`, padding:'16px 0', overflow:'hidden' }}>
      <div style={{ display:'flex', gap:48, animation:'jwScroll 22s linear infinite', whiteSpace:'nowrap', width:'max-content' }}>
        {[...names,...names,...names].map((n,i) => (
          <span key={i} style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.4)', display:'flex', alignItems:'center', gap:16, letterSpacing:'0.04em' }}>
            {n} <span style={{ color:B.teal, fontSize:10 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes jwScroll { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }`}</style>
    </div>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services({ onContact }: { onContact: () => void }) {
  const [hover, setHover] = useState<number|null>(null)
  return (
    <section id="services" style={{ background:B.offwhite, padding:'80px 20px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div style={{ display:'inline-block', background:B.tealDim, border:`1px solid ${B.tealBdr}`, color:B.teal, fontSize:11, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, marginBottom:16, fontFamily:'sans-serif' }}>What We Do</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(28px,4.5vw,52px)', fontWeight:900, color:B.ink, marginBottom:16, letterSpacing:'-0.02em', lineHeight:1.05 }}>
            Everything Your Business<br />Needs to Win Online
          </h2>
          <p style={{ fontFamily:'sans-serif', fontSize:16, color:B.muted, maxWidth:520, margin:'0 auto', lineHeight:1.8, fontWeight:300 }}>
            Six services. One agency. We handle it all — so you can focus on running your business.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', gap:2 }}>
          {SERVICES.map((s,i) => (
            <div key={s.title}
              style={{ background: hover===i ? B.navy : B.white, borderTop:`1px solid ${hover===i ? 'transparent' : B.borderL}`, borderRight:`1px solid ${hover===i ? 'transparent' : B.borderL}`, borderBottom:`1px solid ${hover===i ? 'transparent' : B.borderL}`, borderLeft: hover===i ? `4px solid ${B.teal}` : `4px solid transparent`, padding:'32px 28px', transition:'all 0.25s', cursor:'default' }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                <span style={{ fontSize:32 }}>{s.icon}</span>
                <span style={{ fontFamily:'sans-serif', fontSize:14, fontWeight:800, color: hover===i ? B.teal : B.navy, background: hover===i ? B.tealDim : B.offwhite, border:`1px solid ${hover===i ? B.tealBdr : B.borderL}`, padding:'4px 12px', borderRadius:100, transition:'all 0.25s' }}>
                  from {s.from}
                </span>
              </div>
              <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:18, fontWeight:800, color: hover===i ? '#fff' : B.ink, marginBottom:10, letterSpacing:'-0.01em', transition:'color 0.25s' }}>{s.title}</h3>
              <p style={{ fontFamily:'sans-serif', fontSize:14, color: hover===i ? 'rgba(255,255,255,0.55)' : B.muted, lineHeight:1.75, margin:'0 0 18px', fontWeight:300, transition:'color 0.25s' }}>{s.desc}</p>
              <ul style={{ padding:0, listStyle:'none', margin:'0 0 20px' }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'sans-serif', fontSize:13, color: hover===i ? 'rgba(255,255,255,0.7)' : B.muted, marginBottom:6, transition:'color 0.25s' }}>
                    <span style={{ color:B.teal, fontSize:14, flexShrink:0 }}>✓</span>{b}
                  </li>
                ))}
              </ul>
              <button onClick={onContact}
                style={{ background:'transparent', border:`1px solid ${hover===i ? B.tealBdr : B.borderL}`, color: hover===i ? B.teal : B.muted, padding:'8px 18px', borderRadius:6, fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'sans-serif', transition:'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=B.teal; el.style.color=B.teal; el.style.background=B.tealDim }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor= hover===i ? B.tealBdr : B.borderL; el.style.color= hover===i ? B.teal : B.muted; el.style.background='transparent' }}
              >Get a Quote →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
function Portfolio({ onContact }: { onContact: () => void }) {
  const [hov, setHov] = useState<number|null>(null)
  return (
    <section id="work" style={{ background:B.navy, padding:'80px 20px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:56, flexWrap:'wrap', gap:20 }}>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>Our Work</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(28px,4.5vw,48px)', fontWeight:900, color:'#fff', letterSpacing:'-0.02em', lineHeight:1.05 }}>
              Sites We've Built
            </h2>
          </div>
          <p style={{ fontFamily:'sans-serif', fontSize:15, color:B.muted, maxWidth:360, lineHeight:1.8, fontWeight:300 }}>
            Each site built from scratch. No templates. No page builders. Pure code, built to perform.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', gap:16 }}>
          {PORTFOLIO.map((p,i) => (
            <div key={p.name}
              style={{ borderRadius:12, overflow:'hidden', position:'relative', cursor:'pointer', border:`1px solid ${B.border}`, transition:'transform 0.3s, box-shadow 0.3s', transform: hov===i ? 'translateY(-5px)' : 'none', boxShadow: hov===i ? '0 20px 60px rgba(0,0,0,0.4)' : 'none' }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div style={{ height:220, overflow:'hidden', position:'relative' }}>
                <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s', transform: hov===i ? 'scale(1.06)' : 'scale(1)' }} />
                <div style={{ position:'absolute', inset:0, background:`linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)` }} />
                <div style={{ position:'absolute', top:14, right:14, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:100, padding:'4px 12px' }}>
                  <span style={{ fontFamily:'sans-serif', fontSize:11, color:'#fff', fontWeight:600 }}>{p.tag}</span>
                </div>
                <div style={{ position:'absolute', bottom:14, left:16 }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:17, fontWeight:800, color:'#fff', marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.6)' }}>{p.niche}</div>
                </div>
              </div>
              <div style={{ padding:'16px 18px', background:B.navy2, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ display:'flex', gap:6 }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:B.teal }} />
                  <div style={{ width:8, height:8, borderRadius:'50%', background:'rgba(255,255,255,0.15)' }} />
                  <div style={{ width:8, height:8, borderRadius:'50%', background:'rgba(255,255,255,0.15)' }} />
                </div>
                <span style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, fontWeight:600 }}>Live ↗</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:52 }}>
          <p style={{ fontFamily:'sans-serif', fontSize:15, color:B.muted, marginBottom:20, fontWeight:300 }}>Your business could be our next case study.</p>
          <button onClick={onContact}
            style={{ background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, border:'none', color:'#fff', padding:'14px 40px', borderRadius:8, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 6px 24px rgba(26,188,156,0.3)`, transition:'transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none' }}
          >Start Your Project →</button>
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
function Process({ onContact }: { onContact: () => void }) {
  return (
    <section style={{ background:B.offwhite, padding:'80px 20px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.8fr', gap:80, alignItems:'start' }} className="jw-proc-grid">
          <div className="jw-proc-left">
            <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>How It Works</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(26px,4vw,48px)', fontWeight:900, color:B.ink, marginBottom:20, letterSpacing:'-0.02em', lineHeight:1.1 }}>
              Simple.<br />Fast.<br />Done.
            </h2>
            <p style={{ fontFamily:'sans-serif', fontSize:15, color:B.muted, lineHeight:1.8, marginBottom:32, fontWeight:300 }}>
              Most clients go from "first message" to "live website" in under two weeks. We handle everything — you just review and approve.
            </p>
            <button onClick={onContact}
              style={{ background:B.ink, border:'none', color:'#fff', padding:'13px 28px', borderRadius:8, fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', transition:'background 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background=B.navy3 }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=B.ink }}
            >Let's Get Started →</button>
          </div>
          <div>
            {PROCESS.map((p,i) => (
              <div key={p.n} style={{ display:'flex', gap:24, marginBottom: i < PROCESS.length-1 ? 0 : 0, position:'relative' }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                  <div style={{ width:52, height:52, borderRadius:12, background:B.navy, border:`1px solid ${B.borderL}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:15, fontWeight:900, color:B.teal }}>{p.n}</span>
                  </div>
                  {i < PROCESS.length-1 && <div style={{ width:2, flex:1, background:`linear-gradient(to bottom, ${B.borderL}, transparent)`, minHeight:40, margin:'6px 0' }} />}
                </div>
                <div style={{ paddingBottom: i < PROCESS.length-1 ? 40 : 0, paddingTop:10 }}>
                  <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:18, fontWeight:800, color:B.ink, marginBottom:8, letterSpacing:'-0.01em' }}>{p.title}</h3>
                  <p style={{ fontFamily:'sans-serif', fontSize:14.5, color:B.muted, lineHeight:1.75, margin:0, fontWeight:300 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.jw-proc-grid{grid-template-columns:1fr!important;gap:40px!important}} .jw-proc-left{position:sticky;top:120px} @media(max-width:860px){.jw-proc-left{position:static!important;top:auto!important}}`}</style>
    </section>
  )
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function Pricing({ onContact }: { onContact: () => void }) {
  const plans = [
    {
      name: 'Starter',
      price: '£209',
      usd: '$265',
      desc: 'Perfect for getting your business online fast.',
      items: ['5-page custom website','Mobile-first design','Contact form + WhatsApp button','Google Business setup','1 year free maintenance','Delivered in 5–7 days'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Business',
      price: '£384',
      usd: '$489',
      desc: 'For businesses that want to stand out and convert.',
      items: ['Up to 10 pages','Everything in Starter','Online booking or order form','Local SEO setup','3 months social media setup','Priority 3-day delivery'],
      cta: 'Most Popular',
      highlight: true,
    },
    {
      name: 'E-Commerce',
      price: '£559',
      usd: '$699',
      desc: 'Sell online with a full store, built to trade from day one.',
      items: ['Full online store','Product upload (up to 50 items)','Stripe & PayPal payments','Order management system','Everything in Business','7-day delivery'],
      cta: 'Get a Store',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" style={{ background:B.navy, padding:'80px 20px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>Transparent Pricing</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(28px,4.5vw,50px)', fontWeight:900, color:'#fff', marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.05 }}>
            Fixed Prices. No Surprises.
          </h2>
          <p style={{ fontFamily:'sans-serif', fontSize:16, color:B.muted, maxWidth:480, margin:'0 auto', lineHeight:1.8, fontWeight:300 }}>
            Every plan includes free 1-year maintenance and a 50% upfront / 50% on delivery payment split.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }} className="jw-pricing-grid">
          {plans.map(pl => (
            <div key={pl.name}
              style={{ background: pl.highlight ? `linear-gradient(160deg, ${B.navy3}, ${B.navy2})` : B.navy2, border: pl.highlight ? `1.5px solid ${B.teal}` : `1px solid ${B.border}`, borderRadius:14, padding:'32px 28px', position:'relative', overflow:'hidden', transition:'transform 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-4px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='none' }}
            >
              {pl.highlight && (
                <>
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)` }} />
                  <div style={{ position:'absolute', top:16, right:16, background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, color:'#fff', fontSize:10, fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 12px', borderRadius:100 }}>Most Popular</div>
                </>
              )}
              <div style={{ fontFamily:'sans-serif', fontSize:12, color:B.teal, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>{pl.name}</div>
              <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:6 }}>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(30px,6vw,44px)', fontWeight:900, color:'#fff', lineHeight:1 }}>{pl.price}</span>
                <span style={{ fontFamily:'sans-serif', fontSize:14, color:B.muted }}>/{pl.usd}</span>
              </div>
              <p style={{ fontFamily:'sans-serif', fontSize:13.5, color:B.muted, marginBottom:24, lineHeight:1.6, fontWeight:300 }}>{pl.desc}</p>
              <ul style={{ padding:0, listStyle:'none', margin:'0 0 28px' }}>
                {pl.items.map(it => (
                  <li key={it} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:'sans-serif', fontSize:13.5, color:'rgba(255,255,255,0.75)', marginBottom:10, lineHeight:1.5 }}>
                    <span style={{ color:B.teal, fontSize:14, flexShrink:0, marginTop:1 }}>✓</span>{it}
                  </li>
                ))}
              </ul>
              <button onClick={onContact}
                style={{ width:'100%', padding:'13px', background: pl.highlight ? `linear-gradient(135deg, ${B.teal}, #0ea5e9)` : 'rgba(255,255,255,0.06)', border: pl.highlight ? 'none' : `1px solid ${B.border}`, borderRadius:8, color:'#fff', fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', transition:'all 0.2s', letterSpacing:'0.03em' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; if (!pl.highlight) { el.style.background=B.tealDim; el.style.borderColor=B.tealBdr; el.style.color=B.teal } else { el.style.opacity='0.88' } }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; if (!pl.highlight) { el.style.background='rgba(255,255,255,0.06)'; el.style.borderColor=B.border; el.style.color='#fff' } else { el.style.opacity='1' } }}
              >{pl.highlight ? '→ ' : ''}{pl.cta}</button>
            </div>
          ))}
        </div>

        <div style={{ marginTop:32, background:'rgba(26,188,156,0.06)', border:`1px solid ${B.tealBdr}`, borderRadius:10, padding:'18px 24px', display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
          <span style={{ fontSize:20 }}>💬</span>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:14, fontWeight:700, color:'#fff' }}>Need something custom? Not sure which plan fits?</div>
            <div style={{ fontFamily:'sans-serif', fontSize:13, color:B.muted, fontWeight:300 }}>Message us on WhatsApp and we'll put together a quote in under 2 hours.</div>
          </div>
          <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
            style={{ marginLeft:'auto', background:'#25d366', border:'none', color:'#fff', padding:'10px 22px', borderRadius:8, fontSize:13, fontWeight:700, textDecoration:'none', fontFamily:'sans-serif', whiteSpace:'nowrap' }}>
            WhatsApp Us →
          </a>
        </div>
      </div>
      <style>{`@media(max-width:860px){.jw-pricing-grid{grid-template-columns:1fr!important}} @media(max-width:600px){.jw-pricing-grid .jw-plan{padding:24px 20px!important}}`}</style>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section style={{ background:B.offwhite, padding:'80px 20px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:52, flexWrap:'wrap', gap:20 }}>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>Client Reviews</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(26px,4vw,46px)', fontWeight:900, color:B.ink, letterSpacing:'-0.02em', lineHeight:1.1 }}>
              What Clients Say
            </h2>
          </div>
          <div style={{ textAlign:'right' }}>
            <Stars n={5} />
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:32, fontWeight:900, color:B.ink, marginTop:4 }}>5.0</div>
            <div style={{ fontFamily:'sans-serif', fontSize:13, color:B.muted }}>Average client rating</div>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(270px, 1fr))', gap:18 }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name}
              style={{ background:B.white, border:`1px solid ${B.borderL}`, borderRadius:12, padding:'26px', transition:'all 0.25s', borderTop:'3px solid transparent' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderTopColor=B.teal; el.style.boxShadow='0 10px 40px rgba(0,0,0,0.07)'; el.style.transform='translateY(-3px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderTopColor='transparent'; el.style.boxShadow='none'; el.style.transform='none' }}
            >
              <Stars n={t.stars} />
              <p style={{ fontFamily:'sans-serif', fontSize:14.5, color:B.ink, lineHeight:1.75, margin:'14px 0 20px', fontWeight:300 }}>"{t.text}"</p>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:`1px solid ${B.borderL}`, paddingTop:14 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:34, height:34, borderRadius:'50%', background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:700, color:'#fff', fontFamily:'sans-serif' }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontFamily:'sans-serif', fontSize:13.5, fontWeight:700, color:B.ink }}>{t.name}</div>
                    <div style={{ fontFamily:'sans-serif', fontSize:11.5, color:B.muted }}>{t.biz}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background:B.navy, padding:'80px 20px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }} className="jw-about-grid">
        {/* Left */}
        <div>
          <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>About JugoWeb</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:900, color:'#fff', marginBottom:24, letterSpacing:'-0.02em', lineHeight:1.1 }}>
            We Level the<br /><span style={{ color:B.teal }}>Playing Field</span>
          </h2>
          <p style={{ fontFamily:'sans-serif', fontSize:15.5, color:'rgba(255,255,255,0.6)', lineHeight:1.85, marginBottom:20, fontWeight:300 }}>
            JugoWeb Studio was built on a single observation: small businesses in the UK, US, Canada and Australia pay £2,000–£10,000 for websites that should cost a fraction of that. We close that gap.
          </p>
          <p style={{ fontFamily:'sans-serif', fontSize:15.5, color:'rgba(255,255,255,0.6)', lineHeight:1.85, marginBottom:36, fontWeight:300 }}>
            We're a remote-first studio. Our lower cost base means we pass the savings directly to clients — delivering work that rivals what local agencies charge multiples for, at a price that actually makes sense for a small business.
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            {[
              ['⚡','5–7 Day Delivery','Most projects launched in under a week'],
              ['🛡️','1 Year Free Maintenance','Updates, backups and changes included'],
              ['💷','Fixed Pricing','No hourly rates. No surprise invoices'],
              ['🌍','Global Clients','UK · USA · Canada · Australia · Ireland'],
            ].map(([ic,t,d]) => (
              <div key={t} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${B.border}`, borderRadius:10, padding:'16px' }}>
                <div style={{ fontSize:22, marginBottom:8 }}>{ic}</div>
                <div style={{ fontFamily:'sans-serif', fontSize:13.5, fontWeight:700, color:'#fff', marginBottom:4 }}>{t}</div>
                <div style={{ fontFamily:'sans-serif', fontSize:12.5, color:B.muted, lineHeight:1.5, fontWeight:300 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <div style={{ background:B.navy2, border:`1px solid ${B.border}`, borderRadius:14, padding:'28px', marginBottom:16 }}>
            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:20 }}>
              <img src="/logo2.png" alt="JugoWeb Studio" style={{ height:52, width:'auto' }} />
              <div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:20, fontWeight:800, color:'#fff' }}>JugoWeb<span style={{ color:B.teal }}> Studio</span></div>
                <div style={{ fontFamily:'sans-serif', fontSize:12, color:B.muted }}>jugowebstudio.com</div>
              </div>
            </div>
            <div style={{ fontFamily:'sans-serif', fontSize:14.5, color:'rgba(255,255,255,0.6)', lineHeight:1.8, fontWeight:300 }}>
              "We believe every small business deserves a professional online presence — not just the ones who can afford a local agency. That belief is why we built JugoWeb."
            </div>
          </div>

          {/* Tech stack */}
          <div style={{ background:B.navy2, border:`1px solid ${B.border}`, borderRadius:14, padding:'22px 24px' }}>
            <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.14em', textTransform:'uppercase', fontWeight:700, marginBottom:14 }}>Built With</div>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              {['React','Next.js','TypeScript','Tailwind CSS','Vercel','Stripe','WordPress'].map(t => (
                <span key={t} style={{ fontFamily:'sans-serif', fontSize:12.5, color:'rgba(255,255,255,0.6)', background:'rgba(255,255,255,0.05)', border:`1px solid ${B.border}`, padding:'5px 12px', borderRadius:6, fontWeight:500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.jw-about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number|null>(0)
  return (
    <section style={{ background:B.offwhite, padding:'72px 20px' }}>
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>FAQ</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(24px,4vw,44px)', fontWeight:900, color:B.ink, letterSpacing:'-0.02em' }}>Common Questions</h2>
        </div>
        {FAQS.map((f,i) => (
          <div key={i} style={{ background:B.white, border:`1px solid ${open===i ? B.tealBdr : B.borderL}`, borderRadius:10, marginBottom:10, overflow:'hidden', transition:'border-color 0.2s' }}>
            <button onClick={() => setOpen(open===i ? null : i)}
              style={{ width:'100%', padding:'20px 24px', background:'none', border:'none', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer', textAlign:'left' }}>
              <span style={{ fontFamily:'sans-serif', fontSize:'clamp(14px,3.5vw,15.5px)', fontWeight:700, color:B.ink }}>{f.q}</span>
              <span style={{ fontSize:20, color:B.teal, flexShrink:0, marginLeft:12, transition:'transform 0.2s', transform: open===i ? 'rotate(45deg)' : 'none', display:'inline-block' }}>+</span>
            </button>
            {open===i && (
              <div style={{ padding:'0 24px 20px' }}>
                <p style={{ fontFamily:'sans-serif', fontSize:14.5, color:B.muted, lineHeight:1.8, margin:0, fontWeight:300 }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', country:'', message:'' })
  const [sent, setSent] = useState(false)
  const h = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    // In production: POST to /api/contact which emails contact@jugowebstudio.com
  }

  const inp = { display:'block', width:'100%', padding:'13px 15px', background:'rgba(255,255,255,0.05)', border:`1px solid ${B.border}`, borderRadius:8, color:'#fff', fontSize:14, fontFamily:'sans-serif', fontWeight:300, boxSizing:'border-box' as const, transition:'border-color 0.2s' }

  return (
    <section id="contact" style={{ background:B.navy, padding:'80px 20px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48 }} className="jw-contact-grid">

        {/* Left */}
        <div>
          <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.teal, letterSpacing:'0.16em', textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>Get In Touch</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:900, color:'#fff', marginBottom:20, letterSpacing:'-0.02em', lineHeight:1.1 }}>
            Ready to Get<br /><span style={{ color:B.teal }}>Online?</span>
          </h2>
          <p style={{ fontFamily:'sans-serif', fontSize:15, color:'rgba(255,255,255,0.55)', lineHeight:1.85, marginBottom:36, fontWeight:300 }}>
            Tell us about your business and what you need. We'll reply within 2 hours with a fixed quote and timeline — no obligation, no sales pressure.
          </p>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
            style={{ display:'flex', alignItems:'center', gap:14, background:'rgba(37,211,102,0.1)', border:'1px solid rgba(37,211,102,0.25)', borderRadius:12, padding:'18px 22px', textDecoration:'none', marginBottom:24, transition:'background 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(37,211,102,0.15)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(37,211,102,0.1)' }}
          >
            <div style={{ width:44, height:44, borderRadius:10, background:'#25d366', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>💬</div>
            <div>
              <div style={{ fontFamily:'sans-serif', fontSize:14, fontWeight:700, color:'#fff' }}>WhatsApp — Fastest Response</div>
              <div style={{ fontFamily:'sans-serif', fontSize:13, color:'rgba(255,255,255,0.45)' }}>+234 706 856 5954 · Usually replies in minutes</div>
            </div>
            <div style={{ marginLeft:'auto', color:'#25d366', fontSize:18 }}>→</div>
          </a>

          {[
            ['✉️','Email','contact@jugowebstudio.com'],
            ['🌐','Website','jugowebstudio.com'],
            ['🕐','Response time','Within 2 hours (Mon–Sat)'],
            ['🌍','We work with','UK · USA · Canada · Australia · Ireland'],
          ].map(([ic,l,v]) => (
            <div key={l} style={{ display:'flex', gap:14, marginBottom:18, alignItems:'flex-start' }}>
              <div style={{ width:36, height:36, borderRadius:8, background:B.tealDim, border:`1px solid ${B.tealBdr}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:15, flexShrink:0 }}>{ic}</div>
              <div>
                <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, color:B.teal, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:2 }}>{l}</div>
                <div style={{ fontFamily:'sans-serif', fontSize:14, color:'rgba(255,255,255,0.6)', fontWeight:300 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background:'rgba(255,255,255,0.03)', border:`1px solid ${B.border}`, borderRadius:14, padding:'36px 32px' }}>
          <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:22, fontWeight:800, color:'#fff', marginBottom:6, letterSpacing:'-0.01em' }}>Get a Free Quote</h3>
          <p style={{ fontFamily:'sans-serif', fontSize:13, color:B.muted, marginBottom:24, fontWeight:300 }}>Fixed price · No obligation · Reply in 2 hours</p>
          {sent ? (
            <div style={{ textAlign:'center', padding:'52px 0' }}>
              <div style={{ fontSize:56, marginBottom:18 }}>🚀</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:24, fontWeight:800, color:'#fff', marginBottom:10 }}>Message Received!</div>
              <div style={{ fontFamily:'sans-serif', fontSize:15, color:B.muted, fontWeight:300, lineHeight:1.7 }}>
                We'll send your fixed quote to<br /><strong style={{ color:B.teal }}>{form.email || 'your email'}</strong><br />within 2 hours.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
                <input name="name" value={form.name} onChange={h} placeholder="Your name" required style={inp} />
                <input name="phone" value={form.phone} onChange={h} placeholder="Phone / WhatsApp" style={inp} />
              </div>
              <input name="email" value={form.email} onChange={h} placeholder="Email address" type="email" required style={{ ...inp, marginBottom:12 }} />
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
                <select name="service" value={form.service} onChange={h} style={{ ...inp, color: form.service ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                  <option value="">Service needed</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title} style={{ background:B.navy2 }}>{s.title}</option>)}
                </select>
                <input name="country" value={form.country} onChange={h} placeholder="Your country (UK, US...)" style={inp} />
              </div>
              <textarea name="message" value={form.message} onChange={h} placeholder="Tell us about your business and what you need..." rows={4}
                style={{ ...inp, resize:'vertical', marginBottom:20 }} />
              <button type="submit"
                style={{ width:'100%', padding:'14px', background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, border:'none', borderRadius:8, color:'#fff', fontSize:15, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', boxShadow:`0 4px 20px rgba(26,188,156,0.3)`, transition:'opacity 0.2s, transform 0.2s', letterSpacing:'0.03em' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity='0.9'; el.style.transform='translateY(-1px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity='1'; el.style.transform='none' }}
              >Send My Free Quote Request →</button>
              <p style={{ fontFamily:'sans-serif', fontSize:11.5, color:B.muted, textAlign:'center', marginTop:12, fontWeight:300 }}>
                No spam. No cold calls. Just a straightforward quote.
              </p>
            </form>
          )}
        </div>
      </div>
      <style>{`@media(max-width:900px){.jw-contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

// ─── QUOTE MODAL ──────────────────────────────────────────────────────────────
function QuoteModal({ open, onClose }: { open:boolean; onClose:() => void }) {
  const [sent, setSent] = useState(false)
  if (!open) return null
  const inp = { display:'block', width:'100%', padding:'11px 14px', marginBottom:10, background:B.offwhite, border:`1px solid ${B.borderL}`, borderRadius:8, color:B.ink, fontSize:14, fontFamily:'sans-serif', boxSizing:'border-box' as const }
  return (
    <div style={{ position:'fixed', inset:0, zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, background:'rgba(10,15,30,0.88)', backdropFilter:'blur(6px)' }} onClick={onClose}>
      <div style={{ background:B.white, borderRadius:14, padding:'36px 32px', maxWidth:420, width:'100%', maxHeight:'92vh', overflowY:'auto', borderTop:`4px solid ${B.teal}` }} onClick={e => e.stopPropagation()}>
        {sent ? (
          <div style={{ textAlign:'center', padding:'32px 0' }}>
            <div style={{ fontSize:52, marginBottom:14 }}>🚀</div>
            <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:22, fontWeight:800, color:B.ink, marginBottom:8 }}>Quote Request Sent!</h3>
            <p style={{ fontFamily:'sans-serif', fontSize:14, color:B.muted, fontWeight:300, lineHeight:1.7 }}>We'll reply within 2 hours with a fixed price for your project.</p>
            <button onClick={onClose} style={{ marginTop:20, background:B.navy, border:'none', color:'#fff', padding:'12px 28px', borderRadius:8, fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif' }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
                  <img src="/logo2.png" alt="JugoWeb Studio" style={{ height:32, width:'auto' }} />
                  <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:16, fontWeight:800, color:B.ink }}>JugoWeb<span style={{ color:B.teal }}> Studio</span></span>
                </div>
                <p style={{ fontFamily:'sans-serif', fontSize:12, color:B.muted, margin:0, fontWeight:300 }}>Free quote · 2-hour reply</p>
              </div>
              <button onClick={onClose} style={{ background:'none', border:'none', color:B.muted, fontSize:22, cursor:'pointer' }}>✕</button>
            </div>
            <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
              style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(37,211,102,0.08)', border:'1px solid rgba(37,211,102,0.2)', borderRadius:8, padding:'12px 14px', textDecoration:'none', marginBottom:20 }}>
              <span style={{ fontSize:18 }}>💬</span>
              <div>
                <div style={{ fontFamily:'sans-serif', fontSize:12, fontWeight:700, color:'#1a7a3f' }}>Prefer WhatsApp? Message us directly</div>
                <div style={{ fontFamily:'sans-serif', fontSize:11, color:B.muted }}>Usually responds in minutes</div>
              </div>
            </a>
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <input placeholder="Your name" required style={inp} />
              <input placeholder="Email address" type="email" required style={inp} />
              <input placeholder="Phone / WhatsApp (optional)" style={inp} />
              <select defaultValue="" style={{ ...inp, color:B.muted }}>
                <option value="" disabled>Service needed</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <textarea placeholder="Tell us about your business and what you need..." rows={3}
                style={{ ...inp, resize:'vertical', marginBottom:18 }} />
              <button type="submit"
                style={{ width:'100%', padding:'14px', background:`linear-gradient(135deg, ${B.teal}, #0ea5e9)`, border:'none', borderRadius:8, color:'#fff', fontSize:15, fontWeight:800, cursor:'pointer', fontFamily:'sans-serif', letterSpacing:'0.03em' }}>
                Send Quote Request →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onContact }: { onContact: () => void }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer style={{ background:B.ink, borderTop:`1px solid ${B.border}`, padding:'64px 32px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:52, paddingBottom:52, borderBottom:`1px solid ${B.border}` }} className="jw-footer-grid">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <img src="/logo2.png" alt="JugoWeb Studio" style={{ height:44, width:'auto' }} />
              <div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:18, fontWeight:800, color:'#fff' }}>JugoWeb<span style={{ color:B.teal }}> Studio</span></div>
                <div style={{ fontFamily:'sans-serif', fontSize:10, color:'rgba(255,255,255,0.3)', letterSpacing:'0.16em', textTransform:'uppercase' }}>Web Design & Digital</div>
              </div>
            </div>
            <p style={{ fontFamily:'sans-serif', fontSize:13.5, color:'rgba(255,255,255,0.35)', lineHeight:1.8, maxWidth:260, fontWeight:300 }}>
              Professional websites for small businesses in the UK, US, Canada, Australia and beyond. Fast delivery. Fixed prices. Free maintenance.
            </p>
            <div style={{ display:'flex', gap:10, marginTop:20, flexWrap:'wrap' }}>
              <a href="https://wa.me/2347068565954" target="_blank" rel="noreferrer"
                style={{ background:'#25d366', color:'#fff', padding:'9px 18px', borderRadius:6, fontSize:12, fontWeight:700, textDecoration:'none', fontFamily:'sans-serif' }}>
                💬 WhatsApp
              </a>
              <button onClick={onContact}
                style={{ background:'transparent', border:`1.5px solid ${B.teal}`, color:B.teal, padding:'9px 18px', borderRadius:6, fontSize:12, fontWeight:700, cursor:'pointer', fontFamily:'sans-serif', transition:'all 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background=B.teal; el.style.color=B.navy }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='transparent'; el.style.color=B.teal }}
              >Free Quote</button>
            </div>
          </div>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:B.teal, marginBottom:16 }}>Services</div>
            {SERVICES.map(s => (
              <button key={s.title} onClick={() => go('services')}
                style={{ display:'block', background:'none', border:'none', color:'rgba(255,255,255,0.38)', fontSize:13, cursor:'pointer', padding:'4px 0', textAlign:'left', fontFamily:'sans-serif', transition:'color 0.2s', fontWeight:300 }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color=B.teal }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color='rgba(255,255,255,0.38)' }}
              >{s.title}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:B.teal, marginBottom:16 }}>Navigate</div>
            {[['home','Home'],['services','Services'],['work','Our Work'],['pricing','Pricing'],['about','About'],['contact','Contact']].map(([id,l]) => (
              <button key={id} onClick={() => go(id)}
                style={{ display:'block', background:'none', border:'none', color:'rgba(255,255,255,0.38)', fontSize:13, cursor:'pointer', padding:'5px 0', textAlign:'left', fontFamily:'sans-serif', transition:'color 0.2s', fontWeight:300 }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color='#fff' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color='rgba(255,255,255,0.38)' }}
              >{l}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:B.teal, marginBottom:16 }}>Contact</div>
            {[
              ['💬','+234 706 856 5954','WhatsApp preferred'],
              ['✉️','contact@jugowebstudio.com',''],
              ['🌐','jugowebstudio.com',''],
              ['🕐','Mon–Sat, 8am–8pm WAT','2hr response time'],
            ].map(([ic,v,sub]) => (
              <div key={v} style={{ display:'flex', gap:8, marginBottom:14 }}>
                <span style={{ fontSize:13 }}>{ic}</span>
                <div>
                  <div style={{ fontFamily:'sans-serif', fontSize:13, color:'rgba(255,255,255,0.45)', fontWeight:300 }}>{v}</div>
                  {sub && <div style={{ fontFamily:'sans-serif', fontSize:11, color:'rgba(255,255,255,0.25)' }}>{sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
          <div style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.2)' }}>© 2024 JugoWeb Studio. All rights reserved. jugowebstudio.com</div>
          <div style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(255,255,255,0.2)' }}>Serving UK · USA · Canada · Australia · Ireland</div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.jw-footer-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:560px){.jw-footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  )
}

// ─── ROOT ──────────────────────────────────────────────────────────────────────
export default function JugoWebStudio() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <div style={{ background: B.navy, overflowX:'hidden' }}>
      <Navbar onContact={() => setQuoteOpen(true)} />
      <Hero onContact={() => setQuoteOpen(true)} />
      <TrustedBy />
      <Services onContact={() => setQuoteOpen(true)} />
      <Portfolio onContact={() => setQuoteOpen(true)} />
      <Process onContact={() => setQuoteOpen(true)} />
      <Pricing onContact={() => setQuoteOpen(true)} />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer onContact={() => setQuoteOpen(true)} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}
