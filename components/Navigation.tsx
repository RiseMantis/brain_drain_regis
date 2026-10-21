"use client";

import { useState, useEffect } from "react";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { ShurikenIcon } from "./NarutoSymbols";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#rounds", label: "6 Rounds" },
  { href: "#terminal", label: "Terminal" },
  { href: "#schedule", label: "Timeline" },
  { href: "#faq", label: "Rules & FAQ" },
  { href: "#gallery", label: "Gallery" },
  { href: "#prizes", label: "Prizes & Twists" },
];

function ShinobiEmblem() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Spiral inner */}
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      {/* Center dot */}
      <circle cx="14" cy="14" r="3" fill="currentColor" />
      {/* Kunai marks */}
      <line x1="14" y1="1" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="23" x2="14" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="14" x2="5" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="14" x2="27" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {open ? (
        <>
          <line x1="4" y1="4" x2="16" y2="16" />
          <line x1="16" y1="4" x2="4" y2="16" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="17" y2="6" />
          <line x1="3" y1="10" x2="17" y2="10" />
          <line x1="3" y1="14" x2="17" y2="14" />
        </>
      )}
    </svg>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "rounds", "terminal", "schedule", "faq", "gallery", "prizes", "contact"];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(`#${sections[i]}`);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: scrolled ? "58px" : "66px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "clamp(16px, 4vw, 64px)",
          paddingRight: "clamp(16px, 4vw, 64px)",
          background: scrolled
            ? "var(--nav-bg-scrolled)"
            : "var(--nav-gradient)",
          backdropFilter: scrolled ? "blur(18px)" : "blur(6px)",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(6px)",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
          transition: "height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow: scrolled ? "0 8px 24px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        {/* Left: Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Brain Drain home"
        >
          <span style={{ color: "var(--action-primary)", display: "flex" }}>
            <ShinobiEmblem />
          </span>
          <span
            className="font-display"
            style={{
              fontSize: "15px",
              letterSpacing: "0.08em",
              color: "var(--text-primary)",
              opacity: 0.95,
              whiteSpace: "nowrap",
            }}
          >
            BRAIN DRAIN
          </span>
        </button>

        {/* Center: Nav links */}
        <nav
          className="desktop-nav"
          aria-label="Main navigation"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(8px, 1.4vw, 20px)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: isActive ? "rgba(249, 109, 46, 0.15)" : "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  color: isActive ? "var(--action-primary)" : "var(--text-secondary)",
                  fontWeight: isActive ? 600 : 500,
                  transition: "all 0.2s ease",
                  fontSize: "13.5px",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-end",
            flexShrink: 0,
            marginLeft: "auto",
          }}
        >
          <button
            className="desktop-nav btn-primary"
            onClick={() => window.dispatchEvent(new CustomEvent("open-register-modal"))}
            style={{
              height: "36px",
              padding: "0 16px",
              fontSize: "12.5px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ShurikenIcon size={12} color="#fff" />
            <span>Register</span>
          </button>

          <button
            className="mobile-menu-btn theme-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 48,
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "fixed",
              top: scrolled ? "58px" : "66px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "var(--surface-overlay)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--border-default)",
              padding: "16px clamp(16px, 4vw, 40px) 24px",
              boxShadow: "0 16px 36px rgba(0, 0, 0, 0.4)",
              animation: "fade-in-up 0.25s ease-out",
            }}
          >
            <nav aria-label="Mobile navigation">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2px", margin: 0, padding: 0 }}>
                {[...NAV_LINKS, { href: "#contact", label: "Contact Us" }].map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          background: isActive ? "rgba(249, 109, 46, 0.15)" : "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "12px 14px",
                          borderRadius: "10px",
                          fontSize: "15px",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "var(--action-primary)" : "var(--text-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "background 0.15s ease, color 0.15s ease",
                        }}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span style={{ fontSize: "12px", color: "var(--action-primary)" }}>●</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                <button
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => {
                    setMenuOpen(false);
                    window.dispatchEvent(new CustomEvent("open-register-modal"));
                  }}
                >
                  Register Now
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
