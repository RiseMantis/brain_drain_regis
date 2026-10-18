"use client";

const PRIZES = [
  {
    id: "first",
    rank: "🥇",
    place: "1st Place",
    amount: "TBA",
    subtitle: "Grand Shinobi Champion",
    perks: ["Cash Prize", "Certificate of Excellence", "IEEE-CS Recognition", "Exclusive Merch"],
    featured: true,
    accentColor: "var(--action-primary)",
    chipClass: "chip-orange",
  },
  {
    id: "second",
    rank: "🥈",
    place: "2nd Place",
    amount: "TBA",
    subtitle: "Elite Jonin",
    perks: ["Cash Prize", "Certificate of Merit", "IEEE-CS Recognition"],
    featured: false,
    accentColor: "var(--color-secondary-400)",
    chipClass: "chip-blue",
  },
  {
    id: "third",
    rank: "🥉",
    place: "3rd Place",
    amount: "TBA",
    subtitle: "Rising Chunin",
    perks: ["Cash Prize", "Certificate of Participation", "IEEE-CS Recognition"],
    featured: false,
    accentColor: "var(--color-accent-400)",
    chipClass: "chip",
  },
];

export default function PrizesSection() {
  return (
    <section
      id="prizes"
      aria-label="Prizes and Rewards"
      style={{
        position: "relative",
        background: "var(--page-bg-secondary)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }} className="reveal-on-scroll">
          <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)" }}>
            🏆 Rewards
          </p>
          <h2 className="section-heading">
            Claim Your{" "}
            <span style={{ color: "var(--action-primary)" }}>Reward</span>
          </h2>
          <p
            style={{
              marginTop: "14px",
              fontSize: "15px",
              color: "var(--text-secondary)",
              maxWidth: "440px",
              margin: "14px auto 0",
              lineHeight: 1.6,
            }}
          >
            Prize details will be confirmed by the organizers. Every shinobi
            who competes earns recognition.
          </p>
        </div>

        {/* Prize cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {PRIZES.map((prize, idx) => (
            <div
              key={prize.id}
              id={`prize-${prize.id}`}
              className={`prize-card fire-tab ${prize.featured ? "prize-card-featured" : ""} reveal-on-scroll`}
              style={{
                position: "relative",
                overflow: "visible",
                borderRadius: "20px",
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              {/* Featured badge */}
              {prize.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                >
                  <span className="chip chip-orange" style={{ fontSize: "10px", boxShadow: "0 0 12px rgba(249, 109, 46, 0.6)" }}>
                    ⭐ Grand Prize
                  </span>
                </div>
              )}

              {/* Top accent bar */}
              <div
                style={{
                  height: "4px",
                  background: prize.featured
                    ? "var(--gradient-naruto)"
                    : prize.accentColor,
                  boxShadow: prize.featured
                    ? "0 0 16px rgba(249, 109, 46, 0.9)"
                    : "none",
                  width: "100%",
                }}
              />

              {/* Card body */}
              <div className="prize-card-body" style={{ padding: "28px" }}>
                {/* Rank icon */}
                <div style={{ fontSize: "42px", marginBottom: "12px", lineHeight: 1 }}>
                  {prize.rank}
                </div>

                {/* Place */}
                <span className={`chip ${prize.chipClass}`} style={{ marginBottom: "12px", display: "inline-flex" }}>
                  {prize.place}
                </span>

                {/* Title */}
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                    marginTop: "8px",
                  }}
                >
                  {prize.amount}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    marginBottom: "20px",
                  }}
                >
                  {prize.subtitle}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "var(--divider)",
                    marginBottom: "20px",
                  }}
                />

                {/* Perks */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {prize.perks.map((perk) => (
                    <li
                      key={perk}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span style={{ color: prize.accentColor, fontWeight: 700 }}>✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            marginTop: "36px",
            fontSize: "12px",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          All prize amounts and perks will be confirmed by IEEE-CS SPIT. Configurable
          placeholder values shown above.
        </p>
      </div>
    </section>
  );
}
