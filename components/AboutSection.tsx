"use client";

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

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Brain Drain"
      style={{
        position: "relative",
        background: "var(--page-bg-secondary)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Left: copy */}
          <div className="reveal-on-scroll">
            <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)" }}>
              🌀 About the Event
            </p>
            <h2 className="section-heading" style={{ marginBottom: "20px" }}>
              What Is{" "}
              <span style={{ color: "var(--action-primary)" }}>Brain Drain?</span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Brain Drain is the annual flagship coding and technology quiz competition
              organized by <strong style={{ color: "var(--text-primary)" }}>IEEE-CS SPIT</strong> — the
              IEEE Computer Society student chapter at Sardar Patel Institute of Technology, Mumbai.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Inspired by the shinobi world, participants face multi-round challenges that test
              algorithmic thinking, technical knowledge, and the ability to adapt on the fly.
              One event. Three rounds. Unlimited chaos.
            </p>

            {/* Mission statement */}
            <div
              className="fire-tab"
              style={{
                padding: "20px 24px",
                borderLeft: "3.5px solid #ef4444",
                borderRadius: "0 16px 16px 0",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                }}
              >
                &ldquo;A shinobi mission in which participants battle through coding puzzles,
                technology trivia, and surprising challenges.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: pillars */}
          <div
            className="about-pillars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "16px",
            }}
          >
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                style={{
                  borderRadius: "18px",
                  padding: "22px 20px",
                  transitionDelay: `${idx * 90}ms`,
                }}
                className="round-card fire-tab reveal-on-scroll"
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(249, 115, 22, 0.12)",
                    border: "1px solid rgba(249, 115, 22, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "12px",
                    boxShadow: "0 0 12px rgba(239, 68, 68, 0.2)",
                  }}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  {pillar.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
