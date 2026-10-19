"use client";

import { useEffect, useRef } from "react";

/* ─── Pillar data (unchanged content) ─────────────────────── */
const PILLARS = [
  {
    icon: "⚡",
    title: "Strategic",
    description: "Every decision counts. Plan your approach like a seasoned jonin.",
  },
  {
    icon: "🎯",
    title: "Competitive",
    description: "Go head-to-head against the sharpest minds from across institutions.",
  },
  {
    icon: "🌀",
    title: "Unpredictable",
    description: "Rules shift. Formats evolve. Only the truly adaptable survive.",
  },
  {
    icon: "🏆",
    title: "Rewarding",
    description: "Top shinobi earn prizes, recognition, and a place in the rankings.",
  },
];

/* ─── SVG: decorative Leaf-Village-inspired spiral seal ──────
   Hand-drawn spiral, not a reproduction of any official logo.  */
function SpiralSeal() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className="scroll-seal-svg"
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
      {/* Inner ring */}
      <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Spiral path — 2.5 turns */}
      <path
        d="M60,60
           m0,-28
           a28,28 0 1,1 -0.01,0
           m0,-8
           a36,36 0 1,1 -0.01,0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Centre dot */}
      <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.5" />
      {/* Four-petal diamond marks at cardinal points */}
      {[0, 90, 180, 270].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 60 60)`}>
          <path d="M60,14 L63,20 L60,26 L57,20 Z" fill="currentColor" opacity="0.35" />
        </g>
      ))}
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasUnrolled = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Respect prefers-reduced-motion: open immediately, no animation */
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      section.classList.add("scroll-open");
      return;
    }

    /* IntersectionObserver — trigger at ~35 % in view, play only once */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasUnrolled.current) {
            hasUnrolled.current = true;
            section.classList.add("scroll-open");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    /* ── Outer section: acts as the "stage" — no background override needed,
          the fire-background-content rule already makes it transparent.      */
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Brain Drain"
      className="shinobi-scroll-section"
    >
      {/* ── Scroll wrapper — this element animates the full height ── */}
      <div className="shinobi-scroll-wrapper" aria-hidden="false">

        {/* ── TOP ROD ── */}
        <div className="scroll-rod scroll-rod-top" aria-hidden="true">
          <span className="scroll-rod-cap scroll-rod-cap-left" />
          <span className="scroll-rod-body" />
          <span className="scroll-rod-cap scroll-rod-cap-right" />
        </div>

        {/* ── TIE / CORD (visible while closed, fades out as it opens) ── */}
        <div className="scroll-tie" aria-hidden="true">
          <span className="scroll-tie-horizontal" />
          <span className="scroll-tie-bow scroll-tie-bow-left" />
          <span className="scroll-tie-bow scroll-tie-bow-right" />
        </div>

        {/* ── PARCHMENT BODY — clips content during roll ── */}
        <div className="scroll-parchment">
          {/* SVG noise texture layer (feTurbulence paper grain) */}
          <svg aria-hidden="true" className="scroll-noise-svg" xmlns="http://www.w3.org/2000/svg">
            <filter id="scroll-paper-noise" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65 0.72"
                numOctaves="4"
                seed="8"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComposite in2="SourceGraphic" operator="multiply" />
            </filter>
            <rect width="100%" height="100%" filter="url(#scroll-paper-noise)" opacity="0.18" />
          </svg>

          {/* Parchment vignette / edge darkening overlay */}
          <div className="scroll-vignette" aria-hidden="true" />

          {/* Faint ink-brush border frame */}
          <div className="scroll-border-frame" aria-hidden="true" />

          {/* Decorative seal (centre watermark) */}
          <div className="scroll-seal" aria-hidden="true">
            <SpiralSeal />
          </div>

          {/* ── Actual content — fades in after parchment opens ── */}
          <div className="scroll-content-inner">

            {/* Two-column layout — matches original structure */}
            <div className="scroll-content-grid">

              {/* Left: copy */}
              <div className="scroll-content-left scroll-fade-child" style={{ "--child-delay": "0ms" } as React.CSSProperties}>
                <p className="eyebrow scroll-eyebrow" style={{ marginBottom: "12px" }}>
                  🌀 About the Event
                </p>
                <h2 className="section-heading scroll-heading" style={{ marginBottom: "20px" }}>
                  What Is{" "}
                  <span className="scroll-heading-accent">Brain Drain?</span>
                </h2>
                <p className="scroll-body-text scroll-fade-child" style={{ marginBottom: "16px", "--child-delay": "80ms" } as React.CSSProperties}>
                  Brain Drain is the annual flagship coding and technology quiz competition
                  organized by <strong className="scroll-strong">IEEE-CS SPIT</strong> — the
                  IEEE Computer Society student chapter at Sardar Patel Institute of Technology, Mumbai.
                </p>
                <p className="scroll-body-text scroll-fade-child" style={{ marginBottom: "24px", "--child-delay": "160ms" } as React.CSSProperties}>
                  Inspired by the shinobi world, participants face multi-round challenges that test
                  algorithmic thinking, technical knowledge, and the ability to adapt on the fly.
                  One event. Three rounds. Unlimited chaos.
                </p>

                {/* Mission statement */}
                <div className="scroll-mission-tab scroll-fade-child" style={{ "--child-delay": "240ms" } as React.CSSProperties}>
                  <p className="scroll-mission-text">
                    &ldquo;A shinobi mission in which participants battle through coding puzzles,
                    technology trivia, and surprising challenges.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right: pillars */}
              <div className="about-pillars-grid">
                {PILLARS.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="scroll-pillar-card scroll-fade-child"
                    style={{ "--child-delay": `${320 + idx * 90}ms` } as React.CSSProperties}
                  >
                    <div className="scroll-pillar-icon" aria-hidden="true">
                      {pillar.icon}
                    </div>
                    <p className="scroll-pillar-title">{pillar.title}</p>
                    <p className="scroll-pillar-desc">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROD ── */}
        <div className="scroll-rod scroll-rod-bottom" aria-hidden="true">
          <span className="scroll-rod-cap scroll-rod-cap-left" />
          <span className="scroll-rod-body" />
          <span className="scroll-rod-cap scroll-rod-cap-right" />
        </div>
      </div>
    </section>
  );
}
