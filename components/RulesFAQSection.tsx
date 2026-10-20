"use client";

import { useState } from "react";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KonohaLeafSymbol, ShurikenIcon, KunaiIcon, NarutoCharacterTag, AkatsukiCloud } from "./NarutoSymbols";

const FAQ_ITEMS = [
  {
    q: "Who is eligible to participate in Brain Drain?",
    a: "Brain Drain 2026 is strictly OPEN TO FIRST YEAR STUDENTS ONLY (FE) from all engineering branches. It's the ultimate proving ground for freshmen to test their wit and have immense fun!",
  },
  {
    q: "What is the team format and size?",
    a: "You can register either as a Duo (team of 2) or Solo (individual). If you register as a duo, you will compete together as a pair. All participants play individually from their own respective devices via Google Forms.",
  },
  {
    q: "How does the individual scoring work if we are in a duo or solo?",
    a: "Both members in a duo play individually from their own respective devices (laptops or phones) via Google Forms. Your individual scores combine to form your duo's standing. Solo participants compete with their individual score on the master leaderboard.",
  },
  {
    q: "What platform will the quiz be conducted on?",
    a: "The entire 6-round competition will be conducted via Google Forms! It's fast, smooth, and lightweight. Participants can bring their own laptops or mobile devices.",
  },
  {
    q: "Is it really true that 2nd place gets the biggest prize?",
    a: `Yes! That is the signature Brain Drain twist. The second-ranked contender on the final leaderboard takes the largest chunk of the ${EVENT_CONFIG.prizePool} prize pool.`,
  },
  {
    q: "What are the other twists in Brain Drain?",
    a: "Beyond the 2nd-place jackpot, an unannounced Mystery Position will win a surprise cash reward, and the Last 5 players on the leaderboard will compete in a live Dare Showdown where the best dare wins a prize!",
  },
  {
    q: "What is the event timing and registration deadline?",
    a: `Registrations close on ${EVENT_CONFIG.registrationDeadline}. The full 6-round event takes place on ${EVENT_CONFIG.date}, starting 5:00 PM onwards at SPIT Mumbai.`,
  },
];

export default function RulesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      aria-label="Rules and FAQ"
      style={{
        background: "var(--page-bg)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(40px, 6vw, 80px)" }}>
          {/* Left Column: Heading and Context */}
          <div className="reveal-on-scroll">
            <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
              <KonohaLeafSymbol size={16} color="var(--action-primary)" />
              <span>Shinobi Scroll</span>
            </p>
            <h2 className="section-heading" style={{ marginBottom: "20px" }}>
              Rules of{" "}
              <span style={{ color: "var(--action-primary)" }}>Engagement</span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              Every great battle combines strategy, humor, and a little chaos.
              Review the official rules and guidelines before stepping into the arena.
            </p>

            {/* Quick Rules Checklist */}
            <div
              className="round-card fire-tab"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <KunaiIcon size={18} color="var(--action-primary)" rotate={45} />
                <span>Gauntlet Guidelines</span>
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0 }}>
                {[
                  "Eligibility: Open strictly to First Year Students (FE) only.",
                  "Team Format: Solo or Duo. Individual play from your own device via Google Forms.",
                  "Platform: Google Forms. Bring your laptops or phones with active browsers.",
                  "Prize Twist 1: 2nd place receives the BIGGEST prize!",
                  "Prize Twist 2: A mystery random position winner receives a dedicated prize.",
                  "Prize Twist 3: The last 5 players enter the Dare Gauntlet (best dare wins a prize).",
                  "Schedule: Starts 5:00 PM Onwards on 28 October 2026. Reg closes 27 Oct.",
                ].map((rule, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: "var(--action-primary)", fontWeight: 700, flexShrink: 0 }}>
                      ⚡
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>

              {/* Naruto Character Feature */}
              <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: "8px" }}>
                <NarutoCharacterTag
                  name="Gaara (Kazekage)"
                  role="“Rules are absolute like sand armor, but victory favors those who adapt.”"
                  emoji="⏳"
                  accentColor="#f97316"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
            <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
              <ShurikenIcon size={14} color="var(--action-primary)" />
              <span>Frequently Asked Questions</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: "var(--surface)",
                      border: `1px solid ${isOpen ? "var(--action-primary)" : "var(--border-subtle)"}`,
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      style={{
                        width: "100%",
                        padding: "18px 20px",
                        background: "none",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: isOpen ? "var(--action-primary)" : "var(--text-primary)",
                          transition: "color 0.15s ease",
                        }}
                      >
                        {item.q}
                      </span>
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: isOpen ? "rgba(249, 109, 46, 0.15)" : "var(--surface-raised)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          color: isOpen ? "var(--action-primary)" : "var(--text-muted)",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 20px 18px",
                          fontSize: "13.5px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          borderTop: "1px solid var(--border-subtle)",
                          paddingTop: "14px",
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
