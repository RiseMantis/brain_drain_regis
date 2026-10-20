"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { ShurikenIcon, KunaiIcon, KonohaLeafSymbol, ShinobiHeadbandPlate, NarutoCharacterTag, AkatsukiCloud } from "./NarutoSymbols";

function MissionCard() {
  return (
    <div
      className="floating-card animate-float"
      style={{
        position: "absolute",
        top: "clamp(72px, 10%, 110px)",
        right: "clamp(20px, 6%, 64px)",
        width: "clamp(280px, 30vw, 360px)",
        padding: "20px 22px",
        zIndex: 10,
      }}
    >
      {/* Top row: chips + thumbnail */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
        <div style={{ flex: 1 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: "8px", color: "var(--action-primary)", display: "flex", alignItems: "center", gap: "6px" }}
          >
            <ShurikenIcon size={14} color="var(--action-primary)" />
            <span>{EVENT_CONFIG.date} · 5:00 PM Onwards</span>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            <span className="chip chip-orange">Solo & Duo Welcome</span>
            <span className="chip chip-blue">6 Rapid Rounds</span>
            <span className="chip chip-green">Prize: {EVENT_CONFIG.prizePool}</span>
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
            alt="Brain Drain Mission Teaser"
            fill
            sizes="70px"
            style={{ objectFit: "cover" }}
          />
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
          lineHeight: 1.2,
          color: "var(--text-primary)",
          marginBottom: "6px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>Where logic gets thrown out the window.</span>
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "12px",
          lineHeight: 1.45,
        }}
      >
        2nd place gets the biggest prize! Random rank rewards, logic-bending quizzes, and a bottom-5 dare showdown.
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
          28 Oct 2026 · Starts 5:00 PM Onwards
        </span>
        <span className="meta-chip">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 1a3.5 3.5 0 0 0-3.5 3.5C2.5 7.5 6 11 6 11s3.5-3.5 3.5-6.5A3.5 3.5 0 0 0 6 1z" />
            <circle cx="6" cy="4.5" r="1.2" />
          </svg>
          SPIT, Mumbai
        </span>
        <span className="meta-chip" style={{ color: "var(--action-primary)" }}>
          FE Students Only
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 1.5) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById("info-banner") || document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      {/* Background image with subtle parallax depth */}
      <div
        style={{
          position: "absolute",
          inset: "-5% 0 -5% 0",
          zIndex: 0,
          transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
          willChange: "transform",
          transition: "transform 0.05s linear",
        }}
      >
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
          paddingTop: "clamp(84px, 12vh, 128px)",
          paddingLeft: "clamp(20px, 5vw, 80px)",
          paddingRight: "clamp(20px, 5vw, 80px)",
          paddingBottom: "clamp(120px, 18vh, 180px)",
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Left hero content */}
        <div style={{ maxWidth: "580px" }}>
          {/* Eyebrow with Naruto Headband Plate */}
          <div className="animate-fade-in-up" style={{ marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <ShinobiHeadbandPlate text="IEEE CS PRESENTS" />
            <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>•</span>
            <span style={{ fontSize: "12px", color: "var(--color-primary-300)", fontWeight: 700, letterSpacing: "0.05em" }}>
              28 OCT 2026 · 5:00 PM ONWARDS
            </span>
          </div>

          {/* Main title with Konoha accent */}
          <div className="animate-fade-in-up delay-100" style={{ marginBottom: "14px", position: "relative" }}>
            <h1 className="text-hero" style={{ display: "block" }}>
              <span style={{ color: "var(--text-primary)", display: "block" }}>BRAIN</span>
              <span style={{ color: "var(--action-primary)", display: "inline-flex", alignItems: "center", gap: "12px" }}>
                DRAIN
                <KunaiIcon size={38} color="var(--color-primary-400)" rotate={45} />
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: "clamp(16px, 2.2vw, 22px)",
              color: "var(--color-accent-400)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.05em",
              marginBottom: "10px",
              lineHeight: 1.2,
              textTransform: "uppercase",
              textShadow: "0 0 16px rgba(232, 228, 26, 0.35)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <KonohaLeafSymbol size={22} color="var(--color-accent-400)" />
            <span>{EVENT_CONFIG.tagline}</span>
          </p>

          {/* Supporting */}
          <p
            className="animate-fade-in-up delay-300"
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginBottom: "16px",
              lineHeight: 1.6,
            }}
          >
            A fun, quiz-based shinobi competition where solo ninjas and duos compete individually on Google Forms, and win prizes unpredictably. 6 rapid rounds starting 5:00 PM onwards!
          </p>

          {/* Naruto Character Featured Quote / Seal */}
          <div
            className="animate-fade-in-up delay-300"
            style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "18px" }}
          >
            <NarutoCharacterTag
              name="Naruto Uzumaki"
              role="“Believe it! Logic meets pure chaos!”"
              emoji="🍥"
              accentColor="var(--action-primary)"
            />
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", opacity: 0.9 }}>
              <AkatsukiCloud size={24} />
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>S-Rank Proving Grounds</span>
            </div>
          </div>

          {/* Key Quick Badges */}
          <div
            className="animate-fade-in-up delay-300"
            style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "26px" }}
          >
            <span className="chip chip-orange">🏆 Prize Pool: {EVENT_CONFIG.prizePool}</span>
            <span className="chip chip-blue">👥 Solo & Duo Welcome</span>
            <span className="chip">🎓 First Years Only</span>
            <span className="chip chip-green">⏱ Starts 5:00 PM Onwards</span>
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-in-up delay-400"
            style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
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
              Explore the 6 Rounds
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="2" y1="6" x2="10" y2="6" />
                <polyline points="6,2 10,6 6,10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative floating card */}
        <div
          className="hero-right-col"
          style={{
            transform: `translate3d(0, ${scrollY * -0.08}px, 0)`,
            transition: "transform 0.05s linear",
          }}
        >
          <MissionCard />
        </div>
      </div>

      {/* Interactive Shinobi Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="hero-scroll-btn"
        aria-label="Scroll down to explore"
        style={{
          position: "absolute",
          bottom: "clamp(24px, 5vh, 48px)",
          left: "clamp(20px, 5vw, 80px)",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px 0",
          color: "var(--text-muted)",
          opacity: Math.max(0, 1 - scrollY / 220),
          transform: `translate3d(0, ${Math.min(20, scrollY * 0.2)}px, 0)`,
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "36px",
            borderRadius: "12px",
            border: "1.5px solid var(--border-default)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
            background: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "7px",
              borderRadius: "2px",
              background: "var(--action-primary)",
              boxShadow: "0 0 8px var(--action-primary)",
              animation: "float-card 1.6s ease-in-out infinite",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Scroll to Explore
        </span>
      </button>
    </section>
  );
}
