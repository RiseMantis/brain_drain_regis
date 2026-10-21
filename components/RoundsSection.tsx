"use client";

import Image from "next/image";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { ShurikenIcon, KunaiIcon, KonohaLeafSymbol, UzumakiSpiral, SharinganIcon, NarutoCharacterTag } from "./NarutoSymbols";

const SIX_ROUNDS = [
  {
    id: "round-1",
    number: "01",
    title: "NO ESCAPE ROUND",
    character: "Naruto Uzumaki",
    characterRole: "The 7th Hokage",
    characterEmoji: "🍥",
    accentColor: "var(--color-primary-500)",
    quote: "“Believe it! Once you step into the arena, there is no turning back.”",
    description:
      "The gauntlet starts here with high intensity. Logic puzzles and rapid reflex trivia on Google Forms to test your duo's synergy from the opening second.",
    skills: ["Logical Deduction", "Quick Thinking", "Duo Synergy"],
    icon: <KunaiIcon size={26} color="var(--action-primary)" rotate={-45} />,
  },
  {
    id: "round-2",
    number: "02",
    title: "Round 02",
    character: "Shikamaru Nara",
    characterRole: "200 IQ Strategist",
    characterEmoji: "♟️",
    accentColor: "#10b981",
    quote: "“What a drag... but pure logic and calculation always win the day.”",
    description:
      "Spot the hidden bugs, predict code outputs, and solve lightweight logic snippets. No heavy syntax setup required — just pure problem-solving instinct.",
    skills: ["Code Tracing", "Pattern Recognition", "Output Prediction"],
    icon: <ShurikenIcon size={26} color="#10b981" />,
  },
  {
    id: "round-3",
    number: "03",
    title: "Round 03",
    character: "Kakashi Hatake",
    characterRole: "The Copy Ninja",
    characterEmoji: "⚡",
    accentColor: "var(--color-secondary-400)",
    quote: "“Those who break the rules are scum, but those who abandon their partner are worse.”",
    description:
      "From computing history to viral tech phenomena and AI facts — test your tech trivia arsenal in a rapid Google Forms blitz.",
    skills: ["CS Fundamentals", "Tech Trivia", "Pop Tech Culture"],
    icon: <KonohaLeafSymbol size={26} color="var(--color-secondary-400)" />,
  },
  {
    id: "round-4",
    number: "04",
    title: "Round 04",
    character: "Sasuke Uchiha",
    characterRole: "Chidori Avenger",
    characterEmoji: "👁️",
    accentColor: "#818cf8",
    quote: "“My eyes see straight through your illusions and trick questions.”",
    description:
      "Where logic gets thrown out the window! Absurd lateral thinking puzzles and trick questions where the intuitive answer is a lethal shinobi trap.",
    skills: ["Lateral Thinking", "Paradox Solving", "Illusion Shattering"],
    icon: <SharinganIcon size={26} color="#818cf8" />,
  },
  {
    id: "round-5",
    number: "05",
    title: "Round 05",
    character: "Minato Namikaze",
    characterRole: "The Yellow Flash",
    characterEmoji: "⚡",
    accentColor: "#facc15",
    quote: "“Speed is the ultimate weapon when the clock is ticking down.”",
    description:
      "Clock is ticking fast. Quick algorithmic brain teasers and speed-solving logic challenges that test whether your duo keeps cool under time heat.",
    skills: ["Speed Coding", "Time Attack", "Reflex Synchronization"],
    icon: <UzumakiSpiral size={26} color="#facc15" />,
  },
  {
    id: "round-6",
    number: "06",
    title: "Round 06",
    character: "Might Guy & Rock Lee",
    characterRole: "Youthful Spirit",
    characterEmoji: "🔥",
    accentColor: "#ef4444",
    quote: "“Springtime of youth! The final round decider and the Dare Gauntlet!”",
    description:
      "The ultimate round! Scores are calculated to reveal the 2nd Place champion, secret random rank winner, and unlock the bottom-5 Dare Gauntlet!",
    skills: ["All-in Focus", "Dare Courage", "Leaderboard Twists"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header with Gaara character guardian */}
        <div
          className="reveal-on-scroll"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "52px",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "660px", flex: "1 1 320px" }}>
            <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
              <ShurikenIcon size={14} color="var(--action-primary)" />
              <span>Shinobi Round Breakdown</span>
            </p>
            <h2 className="section-heading">
              Six Rounds.{" "}
              <span style={{ color: "var(--action-primary)" }}>
                Six Shinobi Trials.
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
              All 6 rounds will be conducted sequentially on <strong>{EVENT_CONFIG.date} starting 5:00 PM Onwards</strong> at SPIT Mumbai.
              Each participant plays individually on Google Forms from their own device, accumulating points on the master leaderboard!
            </p>
          </div>

          {/* Gaara of the Desert — Trials Overseer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/characters/gaara.png"
              alt="Gaara of the Desert - Guardian of Trials"
              width={260}
              height={448}
              priority
              style={{
                height: "clamp(190px, 24vw, 280px)",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 32px rgba(200, 16, 46, 0.45))",
              }}
            />
          </div>
        </div>

        {/* 6 Round cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {SIX_ROUNDS.map((round, index) => (
            <article
              key={round.id}
              className="round-card fire-tab reveal-on-scroll"
              id={round.id}
              style={{
                borderRadius: "20px",
                padding: "28px 24px",
                transitionDelay: `${index * 80}ms`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Number + Character Tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "36px",
                    color: "rgba(249, 109, 46, 0.45)",
                    textShadow: "0 0 16px rgba(200, 16, 46, 0.25)",
                    lineHeight: 1,
                  }}
                >
                  {round.number}
                </span>
                <NarutoCharacterTag
                  name={round.character}
                  role={round.characterRole}
                  emoji={round.characterEmoji}
                  accentColor={round.accentColor}
                />
              </div>

              {/* Icon and Title */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(200, 16, 46, 0.15), rgba(249, 109, 46, 0.2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--action-primary)",
                    border: "1px solid rgba(249, 109, 46, 0.35)",
                    boxShadow: "0 0 14px rgba(200, 16, 46, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  {round.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: round.id === "round-1" ? "var(--color-primary-400)" : "var(--text-primary)",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {round.title}
                  </h3>
                  {round.id === "round-1" && (
                    <span style={{ fontSize: "11px", color: "var(--color-accent-400)", fontWeight: 700, letterSpacing: "0.06em" }}>
                      ★ NEWLY ADDED FIRST TRIAL
                    </span>
                  )}
                </div>
              </div>

              {/* Character Shinobi Quote */}
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.25)",
                  borderLeft: `3px solid ${round.accentColor}`,
                  padding: "6px 12px",
                  borderRadius: "0 8px 8px 0",
                  marginBottom: "14px",
                }}
              >
                <p style={{ fontSize: "11.5px", fontStyle: "italic", color: "var(--text-muted)", margin: 0, lineHeight: 1.4 }}>
                  {round.quote}
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.55,
                  marginBottom: "18px",
                }}
              >
                {round.description}
              </p>

              {/* Skill tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {round.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "11px",
                      padding: "3px 9px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
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
