"use client";

import FireVisualEffect from "./FireVisualEffect";

const ROUNDS = [
  {
    id: "code-battle",
    number: "01",
    chipClass: "chip-orange",
    chipLabel: "Code Battles",
    title: "The Coding Arena",
    description:
      "Solve algorithmic challenges under time pressure. Every problem is a mission; every bug is your enemy. Think with the precision of a shinobi.",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "tech-quiz",
    number: "02",
    chipClass: "chip-blue",
    chipLabel: "Tech Quiz",
    title: "Knowledge Jutsu",
    description:
      "From networking to AI, from OS internals to web standards — test your theoretical arsenal. A true shinobi knows both strategy and technique.",
    skills: ["CS Fundamentals", "Networking", "AI & ML"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "surprise",
    number: "03",
    chipClass: "chip-green",
    chipLabel: "Surprise Rounds",
    title: "Chaos Protocol",
    description:
      "The rules change. The format shifts. Expect the unexpected. Only the most adaptable shinobi will survive the final gauntlet.",
    skills: ["Adaptability", "Creative Thinking", "Speed"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function RoundsSection() {
  return (
    <section
      id="rounds"
      aria-label="Challenge Rounds"
      style={{
        position: "relative",
        background: "var(--page-bg)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
        overflow: "hidden",
      }}
    >
      {/* 3D Visual Motion Fire Effect Background */}
      <FireVisualEffect intensity="high" showBeam={true} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ marginBottom: "56px", maxWidth: "560px" }} className="reveal-on-scroll">
          <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)" }}>
            ⚔️ The Challenge
          </p>
          <h2 className="section-heading">
            Three Rounds.{" "}
            <span style={{ color: "var(--action-primary)" }}>
              Infinite Chaos.
            </span>
          </h2>
          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Each round is a new mission. Each mission demands a different skill.
            Master them all to claim the title.
          </p>
        </div>

        {/* Round cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {ROUNDS.map((round, index) => (
            <article
              key={round.id}
              className="round-card fire-tab reveal-on-scroll"
              id={`round-${round.id}`}
              style={{
                borderRadius: "20px",
                padding: "30px 26px",
                transitionDelay: `${index * 120}ms`,
              }}
            >
              {/* Number + chip */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "42px",
                    color: "rgba(249, 115, 22, 0.4)",
                    textShadow: "0 0 16px rgba(239, 68, 68, 0.25)",
                    lineHeight: 1,
                  }}
                >
                  {round.number}
                </span>
                <span className={`chip ${round.chipClass}`}>{round.chipLabel}</span>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(249, 115, 22, 0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--action-primary)",
                  marginBottom: "18px",
                  border: "1px solid rgba(249, 115, 22, 0.35)",
                  boxShadow: "0 0 16px rgba(239, 68, 68, 0.22)",
                }}
              >
                {round.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {round.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                {round.description}
              </p>

              {/* Skill tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {round.skills.map((skill) => (
                  <span key={skill} className="chip" style={{ fontSize: "10px" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
