"use client";

import { useState, useEffect, useRef } from "react";

export default function ScrollFeatures() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // ── 1. Scroll Progress & Scroll-to-Top visibility ──
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ── 2. Scroll Reveal Intersection Observer ──
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Unobserve once revealed so it remains visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => {
      if (prefersReducedMotion) {
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular progress parameters
  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* ── Top Scroll Progress Bar with Glowing Chakra Tip ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3.5px",
          zIndex: 100,
          pointerEvents: "none",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #ea580c 0%, #f97316 45%, #38bdf8 100%)",
            boxShadow: "0 0 12px rgba(249, 115, 22, 0.8), 0 0 24px rgba(56, 189, 248, 0.6)",
            transition: "width 0.1s linear",
            position: "relative",
          }}
        >
          {/* Glowing particle at the leading edge */}
          {scrollProgress > 1 && (
            <div
              style={{
                position: "absolute",
                right: "-3px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#38bdf8",
                boxShadow: "0 0 8px #38bdf8, 0 0 16px #38bdf8",
              }}
            />
          )}
        </div>
      </div>

      {/* ── Floating Shinobi Teleport (Scroll To Top) Button ── */}
      <div
        style={{
          position: "fixed",
          bottom: "clamp(20px, 4vw, 36px)",
          right: "clamp(20px, 4vw, 36px)",
          zIndex: 48,
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "scale(1) translateY(0)" : "scale(0.8) translateY(16px)",
          pointerEvents: showScrollTop ? "auto" : "none",
          transition: "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Tooltip */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            right: "50%",
            transform: "translateX(50%)",
            padding: "4px 10px",
            background: "var(--surface)",
            border: "1px solid var(--border-default)",
            borderRadius: "8px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--action-primary)",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            opacity: hovered ? 1 : 0,
            pointerEvents: "none",
            transition: "opacity 0.15s ease",
          }}
        >
          ⚡ Teleport to Top
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Scroll back to top"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "var(--surface-overlay)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid var(--surface-overlay-border)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.35), 0 0 16px rgba(249, 115, 22, 0.2)",
            position: "relative",
            color: "var(--text-primary)",
            padding: 0,
            outline: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          }}
          className="teleport-jutsu-btn"
        >
          {/* Circular Progress Ring */}
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "rotate(-90deg)",
              pointerEvents: "none",
            }}
          >
            {/* Background ring */}
            <circle
              cx="25"
              cy="25"
              r={circleRadius}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="2.5"
            />
            {/* Active progress ring */}
            <circle
              cx="25"
              cy="25"
              r={circleRadius}
              fill="none"
              stroke="var(--action-primary)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.1s linear",
              }}
            />
          </svg>

          {/* Kunai / Arrow Up Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "relative",
              zIndex: 1,
              transition: "transform 0.2s ease",
            }}
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </>
  );
}
