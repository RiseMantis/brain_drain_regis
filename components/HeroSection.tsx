"use client";

import Image from "next/image";

function ChakraRoute() {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="chakra-route-svg"
      style={{
        position: "absolute",
        right: "5%",
        top: "15%",
        width: "280px",
        height: "320px",
        pointerEvents: "none",
        zIndex: 5,
      }}
      aria-hidden="true"
    >
      {/* Main path */}
      <path
        d="M240 20 C200 40, 160 60, 140 100 C120 140, 130 180, 100 220 C75 255, 50 280, 20 300"
        stroke="#38bdf8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="6 4"
        className="animate-chakra"
        opacity="0.75"
      />
      {/* Secondary branch */}
      <path
        d="M140 100 C170 110, 195 130, 210 160"
        stroke="#38bdf8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="4 5"
        opacity="0.4"
      />
      {/* Nodes */}
      {[
        { cx: 240, cy: 20, delay: "0s" },
        { cx: 160, cy: 70, delay: "0.4s" },
        { cx: 140, cy: 100, delay: "0.8s" },
        { cx: 100, cy: 175, delay: "1.2s" },
        { cx: 50, cy: 250, delay: "1.6s" },
      ].map((node, i) => (
        <g key={i}>
          {/* Glow */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="8"
            fill="rgba(56,189,248,0.15)"
          />
          {/* Outer ring */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="5"
            stroke="#172554"
            strokeWidth="2"
            fill="#38bdf8"
            className="animate-node"
            style={{ animationDelay: node.delay }}
          />
        </g>
      ))}
    </svg>
  );
}

function MissionCard() {
  return (
    <div
      className="floating-card animate-float"
      style={{
        position: "absolute",
        top: "clamp(72px, 10%, 110px)",
        right: "clamp(20px, 6%, 64px)",
        width: "clamp(260px, 28vw, 330px)",
        padding: "18px 20px",
        zIndex: 10,
      }}
    >
      {/* Top row: chips + thumbnail */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
        <div style={{ flex: 1 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: "8px", color: "var(--action-primary)" }}
          >
            ⚡ Mission Briefing
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            <span className="chip chip-orange">Code Battles</span>
            <span className="chip chip-blue">Tech Quiz</span>
            <span className="chip chip-green">Surprise Rounds</span>
          </div>
        </div>
        {/* Thumbnail */}
        <div
          style={{
            width: "70px",
            height: "52px",
            borderRadius: "10px",
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Image
            src="/mission-thumb.jpg"
            alt="Mission teaser — glowing scroll"
            fill
            sizes="70px"
            style={{ objectFit: "cover" }}
          />
          {/* Play overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
                <path d="M2 1.5l4 3-4 3V1.5z" fill="#17191f" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h3
        style={{
          fontSize: "17px",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "var(--text-primary)",
          marginBottom: "6px",
        }}
      >
        Every round hides a new twist.
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "12px",
          lineHeight: 1.4,
        }}
      >
        Logic, speed, and a little shinobi chaos.
      </p>

      {/* Metadata row */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span className="meta-chip">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="2" width="10" height="9" rx="1.5" />
            <line x1="8" y1="1" x2="8" y2="3.5" />
            <line x1="4" y1="1" x2="4" y2="3.5" />
            <line x1="1" y1="5" x2="11" y2="5" />
          </svg>
          TBA
        </span>
        <span className="meta-chip">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 1a3.5 3.5 0 0 0-3.5 3.5C2.5 7.5 6 11 6 11s3.5-3.5 3.5-6.5A3.5 3.5 0 0 0 6 1z" />
            <circle cx="6" cy="4.5" r="1.2" />
          </svg>
          SPIT, Mumbai
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Brain Drain hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-bg.jpg"
          alt="Cinematic shinobi landscape at sunset"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>

      {/* Vignette overlay */}
      <div
        className="hero-vignette"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingTop: "clamp(80px, 11vh, 120px)",
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
          paddingBottom: "clamp(120px, 18vh, 180px)",
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Left hero content */}
        <div style={{ maxWidth: "520px" }}>
          {/* Eyebrow */}
          <p
            className="eyebrow animate-fade-in-up"
            style={{ marginBottom: "16px" }}
          >
            IEEE-CS SPIT Presents
          </p>

          {/* Main title */}
          <div className="animate-fade-in-up delay-100" style={{ marginBottom: "12px" }}>
            <h1 className="text-hero" style={{ display: "block" }}>
              <span style={{ color: "var(--text-primary)", display: "block" }}>BRAIN</span>
              <span style={{ color: "var(--action-primary)", display: "block" }}>DRAIN</span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: "clamp(14px, 1.8vw, 18px)",
              color: "var(--text-secondary)",
              fontWeight: 500,
              marginBottom: "8px",
              lineHeight: 1.4,
            }}
          >
            Outthink the opponent. Outsmart the challenge.
          </p>

          {/* Supporting */}
          <p
            className="animate-fade-in-up delay-300"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              marginBottom: "28px",
              lineHeight: 1.5,
            }}
          >
            Coding battles, tech trivia, and twists worthy of a shinobi.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up delay-400"
            style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}
          >
            <a
              href="#register"
              className="btn-primary"
              id="hero-register-btn"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-register-modal"));
              }}
            >
              Register Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="7" x2="11" y2="7" />
                <polyline points="7,3 11,7 7,11" />
              </svg>
            </a>
            <a href="#rounds" className="link-secondary">
              Explore the Rounds
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="2" y1="6" x2="10" y2="6" />
                <polyline points="6,2 10,6 6,10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative chakra route + floating card (responsive) */}
        <div className="hero-right-col">
          <ChakraRoute />
          <MissionCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "160px",
          left: "clamp(20px, 5vw, 80px)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "6px",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            width: "1.5px",
            height: "40px",
            background: "linear-gradient(to bottom, transparent, var(--text-muted))",
            borderRadius: "1px",
          }}
        />
      </div>
    </section>
  );
}
