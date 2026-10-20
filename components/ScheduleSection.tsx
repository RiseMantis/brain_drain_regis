"use client";

import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KunaiIcon, ShurikenIcon, KonohaLeafSymbol, UzumakiSpiral, SharinganIcon, NarutoCharacterTag } from "./NarutoSymbols";

const SIX_PHASES = [
  {
    id: "phase-1",
    phaseNumber: "Phase 01",
    roundTitle: "NO ESCAPE ROUND",
    character: "Naruto Uzumaki",
    characterRole: "The 7th Hokage",
    characterEmoji: "🍥",
    accentColor: "var(--color-primary-500)",
    chipClass: "chip-orange",
    description: "Opening logic ignition test. Duo partners report, access their Google Forms on their own devices, and dive into the fast-paced warmup puzzle gauntlet.",
    icon: <KunaiIcon size={18} color="var(--action-primary)" rotate={-45} />,
    highlight: true,
  },
  {
    id: "phase-2",
    phaseNumber: "Phase 02",
    roundTitle: "Round 02",
    character: "Shikamaru Nara",
    characterRole: "200 IQ Strategist",
    characterEmoji: "♟️",
    accentColor: "#10b981",
    chipClass: "chip-blue",
    description: "Logic-based micro-coding challenge. Output prediction, tracing logic bugs, and rapid algorithmic problem-solving without heavy syntax overhead.",
    icon: <ShurikenIcon size={18} color="#10b981" />,
  },
  {
    id: "phase-3",
    phaseNumber: "Phase 03",
    roundTitle: "Round 03",
    character: "Kakashi Hatake",
    characterRole: "The Copy Ninja",
    characterEmoji: "⚡",
    accentColor: "var(--color-secondary-400)",
    chipClass: "chip-blue",
    description: "CS fundamentals, technology trivia, operating systems, and viral computing phenomena in a high-speed Google Forms blitz.",
    icon: <KonohaLeafSymbol size={18} color="var(--color-secondary-400)" />,
  },
  {
    id: "phase-4",
    phaseNumber: "Phase 04",
    roundTitle: "Round 04",
    character: "Sasuke Uchiha",
    characterRole: "Chidori Avenger",
    characterEmoji: "👁️",
    accentColor: "#818cf8",
    chipClass: "chip-orange",
    description: "The reverse logic twist. Lateral thinking puzzles and inverted trick questions where intuitive answers lead directly into deceptive traps.",
    icon: <SharinganIcon size={18} color="#818cf8" />,
  },
  {
    id: "phase-5",
    phaseNumber: "Phase 05",
    roundTitle: "Round 05",
    character: "Minato Namikaze",
    characterRole: "The Yellow Flash",
    characterEmoji: "⚡",
    accentColor: "#facc15",
    chipClass: "chip-blue",
    description: "Rapid-fire speed coding round. Time is running low as duos push their reflexes to amass bonus speed points on the master leaderboard.",
    icon: <UzumakiSpiral size={18} color="#facc15" />,
  },
  {
    id: "phase-6",
    phaseNumber: "Phase 06",
    roundTitle: "Round 06 & Dare Showdown",
    character: "Might Guy & Rock Lee",
    characterRole: "Youthful Spirit",
    characterEmoji: "🔥",
    accentColor: "#ef4444",
    chipClass: "chip-green",
    description: "The final decider round! Scores lock in to identify the 2nd Place jackpot champion, reveal the Mystery Rank winner, and trigger the live bottom-5 Dare Gauntlet!",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    highlight: true,
  },
];

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      aria-label="Event Schedule"
      style={{
        background: "var(--page-bg-secondary)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header — Time given clearly ONCE here */}
        <div
          className="reveal-on-scroll"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
              <KonohaLeafSymbol size={16} color="var(--action-primary)" />
              <span>Mission Timeline</span>
            </p>
            <h2 className="section-heading">
              The{" "}
              <span style={{ color: "var(--action-primary)" }}>Path</span>{" "}
              Ahead
            </h2>
            <div
              style={{
                marginTop: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "10px",
                background: "rgba(249, 109, 46, 0.15)",
                border: "1px solid rgba(249, 109, 46, 0.35)",
              }}
            >
              <ShurikenIcon size={14} color="var(--action-primary)" />
              <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-primary-300)" }}>
                Starts 5:00 PM Onwards · {EVENT_CONFIG.date} (SPIT, Mumbai)
              </span>
            </div>
            <p
              style={{
                marginTop: "12px",
                fontSize: "14.5px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "560px",
              }}
            >
              Six distinct phases for all six rounds, progressing consecutively from 5:00 PM onwards.
              Registration deadline is <strong>{EVENT_CONFIG.registrationDeadline}</strong> on Unstop.
            </p>
          </div>
          <div>
            <button
              className="btn-primary"
              onClick={() => window.dispatchEvent(new CustomEvent("open-register-modal"))}
              style={{ height: "46px", padding: "0 24px" }}
            >
              Register Duo →
            </button>
          </div>
        </div>

        {/* Registration Deadline Banner */}
        <div
          className="reveal-on-scroll"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "14px",
            padding: "12px 20px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="chip chip-orange">Phase 0 · Registration</span>
            <span style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 600 }}>
              Registrations Close: 27 October 2026 (11:59 PM) on Unstop
            </span>
          </div>
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            First Year Students (FE) Only · Duo Squads
          </span>
        </div>

        {/* 6 Sequential Phases Timeline */}
        <div style={{ display: "flex", gap: "clamp(24px, 4vw, 56px)" }}>
          {/* Vertical line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "8px" }}>
            <div
              className="timeline-line"
              style={{ flex: 1, minHeight: `${SIX_PHASES.length * 130}px` }}
            />
          </div>

          {/* Events list */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "28px" }}>
            {SIX_PHASES.map((phase, i) => (
              <div
                key={phase.id}
                id={phase.id}
                className="reveal-on-scroll"
                style={{
                  position: "relative",
                  display: "flex",
                  gap: "20px",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: `calc(-24px - clamp(24px, 4vw, 56px) / 2 - 5px)`,
                    top: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="timeline-dot"
                    style={{
                      animationDelay: `${i * 0.25}s`,
                      background: phase.highlight ? "var(--action-primary)" : "var(--color-secondary-400)",
                      boxShadow: phase.highlight ? "0 0 14px var(--action-primary)" : "0 0 10px var(--color-secondary-400)",
                    }}
                  />
                </div>

                {/* Content Card */}
                <div
                  className="round-card fire-tab"
                  style={{
                    flex: 1,
                    background: "var(--surface)",
                    border: phase.highlight ? "1px solid rgba(249, 109, 46, 0.45)" : "1px solid var(--border-subtle)",
                    borderRadius: "18px",
                    padding: "22px 26px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                      marginBottom: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      {phase.icon}
                      <span className={`chip ${phase.chipClass}`}>
                        {phase.phaseNumber}
                      </span>
                    </div>

                    <NarutoCharacterTag
                      name={phase.character}
                      role={phase.characterRole}
                      emoji={phase.characterEmoji}
                      accentColor={phase.accentColor}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: phase.id === "phase-1" ? "var(--color-primary-400)" : "var(--text-primary)",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {phase.roundTitle}
                  </h3>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
