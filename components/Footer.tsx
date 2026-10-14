"use client";

function ShinobiEmblem({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
      <line x1="14" y1="1" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="23" x2="14" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="14" x2="5" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="14" x2="27" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  const year = 2026;

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "20px clamp(20px, 5vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {/* Logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--action-primary)" }}>
            <ShinobiEmblem size={16} />
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--text-muted)",
              letterSpacing: "0.07em",
            }}
          >
            BRAIN DRAIN · IEEE-CS SPIT
          </span>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
          © {year} IEEE Computer Society, SPIT. All rights reserved.
        </p>

        {/* Decorative sparkle */}
        <div
          aria-hidden="true"
          style={{ color: "var(--action-primary)", opacity: 0.5 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0 L8.8 6.8 L16 8 L8.8 9.2 L8 16 L7.2 9.2 L0 8 L7.2 6.8 Z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
