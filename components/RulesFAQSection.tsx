"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Who is eligible to participate in Brain Drain?",
    a: "Brain Drain is open to all undergraduate and postgraduate engineering and tech students from any recognized institution. Whether you are a first-year beginner or a final-year veteran, everyone has equal footing.",
  },
  {
    q: "What is the team format and size?",
    a: "You can participate as a Solo Shinobi or form a Squad of up to 3 ninja coders. Team members can divide tasks during multi-objective rounds.",
  },
  {
    q: "Which programming languages are allowed?",
    a: "The coding arena supports all standard competitive programming languages, including C++, Java, Python 3, and JavaScript/TypeScript on our judging platform.",
  },
  {
    q: "What makes the 'Surprise Rounds' unique?",
    a: "Unlike typical hackathons or CP contests, the 3rd round introduces unpredictable shinobi twists — such as timed constraint shifts, hidden test cases, speed buzzers, or blind algorithmic battles.",
  },
  {
    q: "Is there a registration fee?",
    a: "Registration details and nominal fee structures (if applicable) will be announced on the official IEEE-CS SPIT social handles and website prior to the preliminary phase.",
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(40px, 6vw, 80px)" }}>
          {/* Left Column: Heading and Context */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              📜 Shinobi Scroll
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
              Every great battle is won through preparation and discipline. Review
              the rules and requirements before stepping into the arena.
            </p>

            {/* Quick Rules Checklist */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px" }}>
                Gauntlet Guidelines
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Fair play and authentic coding are strictly enforced.",
                  "Personal laptops & chargers required for finals.",
                  "On-site Wi-Fi and power stations provided by SPIT.",
                  "IEEE-CS decision on scoring is final.",
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
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              ❓ Frequently Asked Questions
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
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "var(--text-muted)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease, color 0.2s ease",
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 20px 18px",
                          fontSize: "14px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
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
