"use client";

function SpiralIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 14 C14 10, 10 8, 8 10 C6 12, 7 17, 11 18 C15 19, 19 16, 19 12 C19 7, 15 4, 10 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
}

export default function InfoBanner() {
  return (
    <section
      id="info-banner"
      aria-label="Event information banner"
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        padding: "0 clamp(20px, 5vw, 80px)",
        marginTop: "-64px",
        paddingBottom: "40px",
      }}
    >
      <div
        className="info-banner-box"
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          borderRadius: "24px",
          overflow: "hidden",
          background: "var(--banner-bg)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "var(--shadow-banner)",
          minHeight: "96px",
        }}
      >
        {/* ── Orange Feature Tile ── */}
        <div
          className="banner-tile-gradient"
          style={{
            flex: "0 0 clamp(120px, 23%, 240px)",
            padding: "clamp(14px, 2.5%, 22px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
            borderRadius: "24px 0 0 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>
              <SpiralIcon />
            </span>
          </div>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "#ffffff",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Shinobi Mode
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.75)",
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            Think fast. Adapt faster.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="divider-v" style={{ margin: "0" }} />

        {/* ── Event Metric / Descriptor ── */}
        <div
          style={{
            flex: "0 0 clamp(140px, 33%, 340px)",
            padding: "clamp(14px, 2.5%, 22px) clamp(16px, 3%, 32px)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Avatar placeholders */}
          <div
            style={{ display: "flex", flexDirection: "row", flexShrink: 0 }}
            aria-hidden="true"
          >
            {["#f97316", "#3b82f6", "#a855f7", "#22c55e"].map((color, i) => (
              <div
                key={i}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: color,
                  border: "2px solid var(--banner-bg)",
                  marginLeft: i === 0 ? 0 : "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                {["⚡", "💻", "🏆", "🎯"][i]}
              </div>
            ))}
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3vw, 38px)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              CODING + TECH QUIZ
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                fontWeight: 500,
                marginTop: "3px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Multi-round challenge
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="divider-v" style={{ margin: "0" }} />

        {/* ── Registration Message ── */}
        <div
          style={{
            flex: 1,
            padding: "clamp(14px, 2.5%, 22px) clamp(18px, 3%, 32px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(13px, 1.4vw, 18px)",
              color: "var(--text-primary)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            Outthink. Outcode. Outlast.
          </p>
          <a
            href="#register"
            id="banner-register-link"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-register-modal"));
            }}
            style={{
              fontSize: "12px",
              color: "var(--action-primary)",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              transition: "color 0.15s ease",
            }}
          >
            Register Now →
          </a>
        </div>
      </div>
    </section>
  );
}
