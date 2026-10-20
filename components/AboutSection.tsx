"use client";

import { useEffect, useRef } from "react";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KonohaLeafSymbol, ShurikenIcon, KunaiIcon, UzumakiSpiral, NarutoCharacterTag } from "./NarutoSymbols";

const PILLARS = [
  {
    icon: <KunaiIcon size={24} color="var(--action-primary)" />,
    title: "Solo & Duo Play",
    description: "Participate solo or form a 2-ninja squad. Play individually from your own devices via Google Forms to climb the leaderboard.",
  },
  {
    icon: <UzumakiSpiral size={24} color="var(--color-primary-400)" />,
    title: "Logic Meets Chaos",
    description: "6 rapid rounds featuring easy logic-based coding, tech trivia, and questions that throw standard logic out the window!",
  },
  {
    icon: <ShurikenIcon size={24} color="var(--color-accent-400)" />,
    title: "Twist Rewards",
    description: "2nd position takes the BIGGEST prize! Plus a secret random rank prize and the bottom-5 dare challenge.",
  },
  {
    icon: <KonohaLeafSymbol size={24} color="var(--color-secondary-400)" />,
    title: "5:00 PM Onwards",
    description: "Single-day shinobi showdown on 28 October 2026 starting 5:00 PM onwards. Open to First Year Students only.",
  },
];

/* ─── SVG: decorative Leaf-Village-inspired spiral seal ──────
   Hand-drawn spiral with cardinal shuriken marks.  */
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
      {/* Spiral path */}
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
      {/* Four-point shuriken marks at cardinal points */}
      {[0, 90, 180, 270].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 60 60)`}>
          <path d="M60,12 L64,20 L60,26 L56,20 Z" fill="currentColor" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasUnrolled = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      section.classList.add("scroll-open");
      return;
    }

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
        threshold: 0.25,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Brain Drain"
      className="shinobi-scroll-section"
    >
      {/* ── Scroll wrapper ── */}
      <div className="shinobi-scroll-wrapper" aria-hidden="false">

        {/* ── TOP ROD ── */}
        <div className="scroll-rod scroll-rod-top" aria-hidden="true">
          <span className="scroll-rod-cap scroll-rod-cap-left" />
          <span className="scroll-rod-body" />
          <span className="scroll-rod-cap scroll-rod-cap-right" />
        </div>

        {/* ── TIE / CORD ── */}
        <div className="scroll-tie" aria-hidden="true">
          <span className="scroll-tie-horizontal" />
          <span className="scroll-tie-bow scroll-tie-bow-left" />
          <span className="scroll-tie-bow scroll-tie-bow-right" />
        </div>

        {/* ── PARCHMENT BODY ── */}
        <div className="scroll-parchment">
          {/* SVG noise texture layer */}
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

          {/* Parchment vignette */}
          <div className="scroll-vignette" aria-hidden="true" />
          <div className="scroll-border-frame" aria-hidden="true" />

          {/* Decorative seal */}
          <div className="scroll-seal" aria-hidden="true">
            <SpiralSeal />
          </div>

          {/* ── Content inside scroll ── */}
          <div className="scroll-content-inner">
            <div className="scroll-content-grid">

              {/* Left: Event Description & Why Participate */}
              <div className="scroll-content-left scroll-fade-child" style={{ "--child-delay": "0ms" } as React.CSSProperties}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <KonohaLeafSymbol size={18} color="var(--action-primary)" />
                  <p className="eyebrow scroll-eyebrow" style={{ margin: 0 }}>
                    What Is Brain Drain?
                  </p>
                </div>
                
                <h2 className="section-heading scroll-heading" style={{ marginBottom: "20px" }}>
                  Where Logic{" "}
                  <span className="scroll-heading-accent">Meets Chaos!!</span>
                </h2>
                <p className="scroll-body-text scroll-fade-child" style={{ marginBottom: "16px", "--child-delay": "80ms" } as React.CSSProperties}>
                  {EVENT_CONFIG.description}
                </p>
                
                <div style={{ marginTop: "18px", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <ShurikenIcon size={14} color="var(--action-primary)" />
                    <p className="eyebrow scroll-eyebrow" style={{ margin: 0, color: "var(--action-primary)" }}>
                      Why Participate?
                    </p>
                  </div>
                  <p className="scroll-body-text scroll-fade-child" style={{ marginBottom: "20px", "--child-delay": "160ms" } as React.CSSProperties}>
                    {EVENT_CONFIG.whyParticipate}
                  </p>
                </div>

                {/* Mission statement */}
                <div className="scroll-mission-tab scroll-fade-child" style={{ "--child-delay": "240ms" } as React.CSSProperties}>
                  <p className="scroll-mission-text">
                    &ldquo;Individual play, solo ninjas and duo squads, 6 rapid rounds on Google Forms, and unpredictable twists worthy of a shinobi.&rdquo;
                  </p>
                </div>

                {/* Shinobi Character Spotlight */}
                <div style={{ marginTop: "14px" }} className="scroll-fade-child">
                  <NarutoCharacterTag
                    name="Jiraiya (Gallant Sage)"
                    role="“A true ninja is one who endures no matter what logic gets thrown at them!”"
                    emoji="🐸"
                    accentColor="var(--action-primary)"
                  />
                </div>
              </div>

              {/* Right: Pillars */}
              <div className="about-pillars-grid">
                {PILLARS.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="scroll-pillar-card scroll-fade-child"
                    style={{ "--child-delay": `${320 + idx * 90}ms` } as React.CSSProperties}
                  >
                    <div className="scroll-pillar-icon" aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
