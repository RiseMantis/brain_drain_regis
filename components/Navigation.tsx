"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#rounds", label: "Rounds" },
  { href: "#terminal", label: "Terminal" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "Rules & FAQ" },
  { href: "#gallery", label: "Gallery" },
  { href: "#prizes", label: "Prizes" },
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

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" />
      <line x1="4.22" y1="19.78" x2="7.05" y2="16.95" />
      <line x1="16.95" y1="7.05" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

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
          height: scrolled ? "56px" : "64px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "clamp(20px, 4vw, 64px)",
          paddingRight: "clamp(20px, 4vw, 64px)",
          background: scrolled
            ? "var(--nav-bg-scrolled)"
            : "var(--nav-gradient)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
          transition: "height 0.2s ease, background 0.2s ease, border-color 0.2s ease",
        }}
      >
        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <span style={{ color: "var(--action-primary)" }}>
            <ShinobiEmblem />
          </span>
          <span
            className="font-display"
            style={{
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "var(--text-primary)",
              opacity: 0.9,
              whiteSpace: "nowrap",
            }}
          >
            BRAIN DRAIN
          </span>
        </div>

        {/* Center: Nav links */}
        <nav
          className="desktop-nav"
          aria-label="Main navigation"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(16px, 2vw, 32px)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              className="nav-link"
              onClick={() => handleNavClick(link.href)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
            >
              {link.label}
            </button>
          ))}
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
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="desktop-nav nav-link"
            onClick={() => handleNavClick("#contact")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
          >
            Contact Us
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            zIndex: 49,
            background: "rgba(14, 18, 25, 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "20px clamp(20px, 4vw, 40px) 28px",
          }}
        >
          <nav aria-label="Mobile navigation">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
              {[...NAV_LINKS, { href: "#contact", label: "Contact Us" }].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "12px 0",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      borderBottom: "1px solid var(--border-subtle)",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "20px" }}>
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
      )}
    </>
  );
}
