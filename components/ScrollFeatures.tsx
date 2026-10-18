"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ScrollFeatures() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTeleporting, setIsTeleporting] = useState(false);
  const teleportTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // ── 1. Scroll Progress & Scroll-to-Top visibility ──
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setShowScrollTop(window.scrollY > 320);

      // If we've reached near the top, reset teleporting state
      if (window.scrollY < 10 && isTeleporting) {
        setIsTeleporting(false);
        if (teleportTimerRef.current) clearTimeout(teleportTimerRef.current);
      }
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
      if (teleportTimerRef.current) clearTimeout(teleportTimerRef.current);
    };
  }, [isTeleporting]);

  const scrollToTop = () => {
    if (isTeleporting) return;
    setIsTeleporting(true);
    setHovered(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    teleportTimerRef.current = setTimeout(() => {
      setIsTeleporting(false);
    }, 2350);
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
            background: "var(--gradient-naruto)",
            boxShadow: "0 0 12px rgba(249, 109, 46, 0.8), 0 0 24px rgba(112, 174, 219, 0.6)",
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
                background: "var(--color-secondary-400)",
                boxShadow: "0 0 8px var(--color-secondary-400), 0 0 16px var(--color-secondary-400)",
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
          opacity: showScrollTop || isTeleporting ? 1 : 0,
          transform: showScrollTop || isTeleporting ? "scale(1) translateY(0)" : "scale(0.8) translateY(16px)",
          pointerEvents: showScrollTop && !isTeleporting ? "auto" : "none",
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
            opacity: hovered && !isTeleporting ? 1 : 0,
            pointerEvents: "none",
            transition: "opacity 0.15s ease",
          }}
        >
          ⚡ Flying Raijin Teleport
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => !isTeleporting && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={isTeleporting}
          aria-label={isTeleporting ? "Flying Raijin Teleporting..." : "Scroll back to top"}
          className={`teleport-jutsu-btn ${isTeleporting ? "teleporting" : ""}`}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: isTeleporting ? "transparent" : "var(--surface-overlay)",
            backdropFilter: isTeleporting ? "none" : "blur(12px)",
            WebkitBackdropFilter: isTeleporting ? "none" : "blur(12px)",
            border: isTeleporting ? "none" : "1px solid var(--surface-overlay-border)",
            cursor: isTeleporting ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isTeleporting
              ? "none"
              : "0 10px 28px rgba(0, 0, 0, 0.35), 0 0 16px rgba(249, 109, 46, 0.2)",
            position: "relative",
            color: "var(--text-primary)",
            padding: 0,
            outline: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          }}
        >
          {isTeleporting ? (
            <div className="raijin-flying-container">
              {/* Lightning Chakra Trail */}
              <div className="raijin-lightning-trail" />
              {/* Expanding launch shockwave ring */}
              <div className="raijin-launch-burst" />
              {/* Raijin Kunai */}
              <div className="raijin-kunai-sprite">
                <Image
                  src="/raijin.png"
                  alt="Flying Raijin"
                  width={82}
                  height={32}
                  priority
                  style={{
                    width: "78px",
                    height: "auto",
                    transform: "rotate(-90deg)",
                    display: "block",
                    filter: "drop-shadow(0 0 10px #facc15) drop-shadow(0 0 20px #f97316) drop-shadow(0 0 32px #e8e41a)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </button>
      </div>
    </>
  );
}
