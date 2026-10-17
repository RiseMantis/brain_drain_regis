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
    accentColor: "#94a3b8",
    chipClass: "chip",
  },
  {
    id: "third",
    rank: "🥉",
    place: "3rd Place",
    amount: "TBA",
    subtitle: "Rising Chunin",
    perks: ["Cash Prize", "Certificate of Participation", "IEEE-CS Recognition"],
    featured: false,
    accentColor: "#b45309",
    chipClass: "chip",
  },
];

export default function PrizesSection() {
  return (
    <section
      id="prizes"
      aria-label="Prizes and Rewards"
      style={{
        background: "var(--page-bg-secondary)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }} className="reveal-on-scroll">
          <p className="eyebrow" style={{ marginBottom: "12px" }}>
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
            alignItems: "start",
          }}
        >
          {PRIZES.map((prize, idx) => (
            <div
              key={prize.id}
              id={`prize-${prize.id}`}
              className={`prize-card ${prize.featured ? "prize-card-featured" : ""} reveal-on-scroll`}
              style={{
                position: "relative",
                overflow: "visible",
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
                  <span className="chip chip-orange" style={{ fontSize: "10px" }}>
                    ⭐ Grand Prize
                  </span>
                </div>
              )}

              {/* Top accent bar */}
              <div
                style={{
                  height: "4px",
                  background: prize.accentColor,
                  width: "100%",
                }}
              />

              {/* Card body */}
              <div style={{ padding: "28px" }}>
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
