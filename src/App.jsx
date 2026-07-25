import { useState, useEffect } from "react";

const NAV = ["Features", "How It Works", "Pricing"];

const FEATURES = [
  { emoji: "✦", title: "One Prompt, Full Video", desc: "Type how you feel. Claruna builds the entire video — music, cuts, effects, captions — automatically." },
  { emoji: "◈", title: "Emotional Intelligence", desc: "The AI understands your mood, not just your words. Every edit decision matches the feeling you described." },
  { emoji: "♫", title: "Beat-Synced Editing", desc: "Every cut lands exactly on the beat. Every transition matches the music drop. Zero manual sync." },
  { emoji: "✿", title: "Life Event Templates", desc: "Birthdays, weddings, travel, memorials. Pre-built emotional packs for every important moment." },
  { emoji: "◆", title: "Platform-Ready Export", desc: "9:16 for TikTok & Reels. 1:1 for Instagram. 16:9 for YouTube. Optimized automatically." },
  { emoji: "▣", title: "AI Captions & Hashtags", desc: "Real captions written to match your story. Platform-optimized hashtags generated instantly." },
];

const STEPS = [
  { num: "01", title: "Describe the feeling", desc: "Type one sentence. 'Soft romantic birthday story' or 'High-energy travel cinematic'. That's all." },
  { num: "02", title: "Upload your moments", desc: "Drop in your photos and video clips. Claruna scores, ranks, and selects the best ones automatically." },
  { num: "03", title: "Receive your video", desc: "In seconds, a fully edited, beat-synced, captioned video — ready to post with zero manual editing." },
];

const PLANS = [
  { name: "Free", price: "$0", period: "", color: "#888", features: ["3 videos/month", "Watermark", "Basic templates", "720p export"], cta: "Start Free", highlight: false },
  { name: "Premium", price: "$14.99", period: "/mo", color: "#A89FE8", features: ["Unlimited videos", "No watermark", "All templates", "4K export", "Advanced AI editing"], cta: "Get Premium", highlight: true },
  { name: "Pro", price: "$49", period: "/mo", color: "#7F77DD", features: ["Everything in Premium", "Brand kit", "Bulk creation", "Analytics", "Priority render"], cta: "Go Pro", highlight: false },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const s = {
    root: { fontFamily: "'Inter', system-ui, sans-serif", background: "#080810", color: "#fff", minHeight: "100vh", overflowX: "hidden" },
    nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", background: scrolled ? "rgba(8,8,16,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.3s" },
    navLogo: { fontSize: 18, fontWeight: 700, letterSpacing: -0.5, background: "linear-gradient(135deg, #A89FE8, #E8C4F0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    navLinks: { display: "flex", gap: "2rem" },
    navLink: (active) => ({ fontSize: 13, color: active ? "#A89FE8" : "rgba(255,255,255,0.5)", cursor: "pointer", transition: "color 0.2s", textDecoration: "none" }),
    navCta: { padding: "8px 20px", borderRadius: 20, background: "linear-gradient(135deg, #7F77DD, #A89FE8)", color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", border: "none" },

    hero: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "6rem 1.5rem 4rem", position: "relative", overflow: "hidden" },
    heroBg: { position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, background: "radial-gradient(ellipse, rgba(127,119,221,0.15) 0%, transparent 70%)", pointerEvents: "none" },
    heroBg2: { position: "absolute", top: "30%", left: "30%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(212,83,126,0.08) 0%, transparent 70%)", pointerEvents: "none" },
    badge: { display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 20, background: "rgba(127,119,221,0.12)", border: "0.5px solid rgba(127,119,221,0.3)", fontSize: 12, color: "#A89FE8", marginBottom: "1.5rem" },
    heroTitle: { fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: -1, marginBottom: "1.25rem", maxWidth: 700 },
    heroGradient: { background: "linear-gradient(135deg, #A89FE8 0%, #E8C4F0 50%, #7F77DD 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    heroSub: { fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.5)", maxWidth: 500, lineHeight: 1.7, marginBottom: "2.5rem" },
    emailRow: { display: "flex", gap: 8, maxWidth: 420, width: "100%", margin: "0 auto" },
    emailInput: { flex: 1, padding: "12px 16px", borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)", color: "#fff", fontSize: 14, outline: "none" },
    heroBtnPrimary: { padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg, #7F77DD, #A89FE8)", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", border: "none", whiteSpace: "nowrap" },
    heroNote: { fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: "1rem" },
    statsRow: { display: "flex", gap: "3rem", marginTop: "3rem", justifyContent: "center" },
    stat: { textAlign: "center" },
    statNum: { fontSize: "1.8rem", fontWeight: 700, background: "linear-gradient(135deg, #A89FE8, #E8C4F0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    statLabel: { fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 },

    section: { padding: "5rem 1.5rem", maxWidth: 1100, margin: "0 auto" },
    sectionTag: { fontSize: 11, color: "#A89FE8", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.75rem" },
    sectionTitle: { fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: -0.5, marginBottom: "1rem" },
    sectionSub: { fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: 500, lineHeight: 1.7 },

    featGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginTop: "3rem" },
    featCard: { background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "1.75rem", transition: "border-color 0.2s, background 0.2s" },
    featEmoji: { fontSize: 22, marginBottom: "1rem", display: "block" },
    featTitle: { fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#fff" },
    featDesc: { fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 },

    stepsWrap: { marginTop: "3rem", display: "flex", flexDirection: "column", gap: 1 },
    stepRow: { display: "flex", gap: "2rem", padding: "2rem", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)", alignItems: "center" },
    stepNum: { fontSize: "3rem", fontWeight: 800, color: "rgba(127,119,221,0.2)", flexShrink: 0, width: 80, fontVariantNumeric: "tabular-nums" },
    stepTitle: { fontSize: 18, fontWeight: 600, marginBottom: 6 },
    stepDesc: { fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 },

    pricingGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: "3rem" },
    pricingCard: (h) => ({ background: h ? "linear-gradient(135deg, rgba(127,119,221,0.15), rgba(168,159,232,0.08))" : "rgba(255,255,255,0.03)", border: h ? "0.5px solid rgba(168,159,232,0.4)" : "0.5px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "2rem", position: "relative", overflow: "hidden" }),
    popularBadge: { position: "absolute", top: 16, right: 16, fontSize: 10, color: "#A89FE8", background: "rgba(127,119,221,0.15)", border: "0.5px solid rgba(168,159,232,0.3)", borderRadius: 20, padding: "3px 10px", letterSpacing: 1 },
    planName: { fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 },
    planPrice: (h) => ({ fontSize: "2.5rem", fontWeight: 800, letterSpacing: -1, color: h ? "#A89FE8" : "#fff" }),
    planPeriod: { fontSize: 14, color: "rgba(255,255,255,0.35)", fontWeight: 400 },
    planFeatures: { listStyle: "none", padding: 0, margin: "1.5rem 0 2rem", display: "flex", flexDirection: "column", gap: 10 },
    planFeature: { fontSize: 13, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 8 },
    checkmark: (h) => ({ color: h ? "#A89FE8" : "rgba(255,255,255,0.3)", fontSize: 14 }),
    planBtn: (h) => ({ width: "100%", padding: "12px", borderRadius: 10, border: h ? "none" : "0.5px solid rgba(255,255,255,0.15)", background: h ? "linear-gradient(135deg, #7F77DD, #A89FE8)" : "transparent", color: "#fff", fontSize: 14, fontWeight: 500, cursor: "pointer" }),

    footer: { borderTop: "0.5px solid rgba(255,255,255,0.06)", padding: "3rem 1.5rem", textAlign: "center" },
    footerLogo: { fontSize: 20, fontWeight: 700, background: "linear-gradient(135deg, #A89FE8, #E8C4F0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" },
    footerSub: { fontSize: 12, color: "rgba(255,255,255,0.25)", marginBottom: "1.5rem" },
    footerLinks: { display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" },
    footerLink: { fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" },

    divider: { height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(127,119,221,0.2), transparent)", margin: "0 auto", maxWidth: 800 },
  };

  return (
    <div style={s.root}>
      {/* NAV */}
      <nav style={s.nav}>
        <div style={s.navLogo}>Claruna</div>
        <div style={s.navLinks}>
          {NAV.map(n => <span key={n} style={s.navLink(activeNav === n)} onClick={() => setActiveNav(n)}>{n}</span>)}
        </div>
        <button style={s.navCta}>Get Early Access</button>
      </nav>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <div style={s.heroBg2} />
        <div style={s.badge}>✦ AI-Powered Video Creation</div>
        <h1 style={s.heroTitle}>
          Create from <span style={s.heroGradient}>feeling.</span><br />One prompt.
        </h1>
        <p style={s.heroSub}>
          Describe how you feel. Upload your moments. Claruna builds a complete,
          emotionally-intelligent, beat-synced video — ready to post in seconds.
        </p>
        {!joined ? (
          <>
            <div style={s.emailRow}>
              <input style={s.emailInput} placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
              <button style={s.heroBtnPrimary} onClick={() => email && setJoined(true)}>Get Early Access</button>
            </div>
            <div style={s.heroNote}>Free to start · No credit card required</div>
          </>
        ) : (
          <div style={{ padding: "14px 28px", borderRadius: 12, background: "rgba(127,119,221,0.15)", border: "0.5px solid rgba(168,159,232,0.3)", fontSize: 14, color: "#A89FE8" }}>
            ✦ You're on the list. We'll be in touch.
          </div>
        )}
        <div style={s.statsRow}>
          {[["1 Prompt", "is all it takes"], ["0 Edits", "needed from you"], ["∞ Feeling", "expressed perfectly"]].map(([n, l]) => (
            <div key={n} style={s.stat}>
              <div style={s.statNum}>{n}</div>
              <div style={s.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* FEATURES */}
      <section style={s.section}>
        <div style={s.sectionTag}>Features</div>
        <h2 style={s.sectionTitle}>Everything happens automatically</h2>
        <p style={s.sectionSub}>No timeline. No music picking. No settings. You describe the feeling — Claruna handles every creative decision.</p>
        <div style={s.featGrid}>
          {FEATURES.map(f => (
            <div key={f.title} style={s.featCard}>
              <span style={s.featEmoji}>{f.emoji}</span>
              <div style={s.featTitle}>{f.title}</div>
              <div style={s.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* HOW IT WORKS */}
      <section style={s.section}>
        <div style={s.sectionTag}>How It Works</div>
        <h2 style={s.sectionTitle}>Three steps. Full video.</h2>
        <p style={s.sectionSub}>The simplest creative workflow ever built. No skills needed.</p>
        <div style={s.stepsWrap}>
          {STEPS.map(st => (
            <div key={st.num} style={s.stepRow}>
              <div style={s.stepNum}>{st.num}</div>
              <div>
                <div style={s.stepTitle}>{st.title}</div>
                <div style={s.stepDesc}>{st.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* PRICING */}
      <section style={s.section}>
        <div style={s.sectionTag}>Pricing</div>
        <h2 style={s.sectionTitle}>Start free. Scale when ready.</h2>
        <p style={s.sectionSub}>No team needed. No upfront costs. Your first videos are always free.</p>
        <div style={s.pricingGrid}>
          {PLANS.map(p => (
            <div key={p.name} style={s.pricingCard(p.highlight)}>
              {p.highlight && <div style={s.popularBadge}>POPULAR</div>}
              <div style={s.planName}>{p.name}</div>
              <div><span style={s.planPrice(p.highlight)}>{p.price}</span><span style={s.planPeriod}>{p.period}</span></div>
              <ul style={s.planFeatures}>
                {p.features.map(f => (
                  <li key={f} style={s.planFeature}><span style={s.checkmark(p.highlight)}>✓</span>{f}</li>
                ))}
              </ul>
              <button style={s.planBtn(p.highlight)}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ ...s.section, textAlign: "center", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(127,119,221,0.1), rgba(212,83,126,0.05))", border: "0.5px solid rgba(127,119,221,0.2)", borderRadius: 24, padding: "3rem 2rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 700, marginBottom: "1rem", letterSpacing: -0.5 }}>
            Your story deserves to be seen.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}>
            Join thousands creating emotionally-driven videos with a single prompt.
          </p>
          <button style={{ ...s.heroBtnPrimary, fontSize: 15, padding: "14px 32px" }}>Start Creating Free</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerLogo}>Claruna</div>
        <div style={s.footerSub}>Create from feeling. One prompt. — moonlight × hope</div>
        <div style={s.footerLinks}>
          {["Privacy", "Terms", "Contact", "Instagram", "TikTok"].map(l => (
            <span key={l} style={s.footerLink}>{l}</span>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", marginTop: "1.5rem" }}>© 2026 Claruna. All rights reserved.</div>
      </footer>
    </div>
  );
}
