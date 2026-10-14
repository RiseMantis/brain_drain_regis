"use client";

const TIMELINE_EVENTS = [
  {
    id: "registrations-open",
    time: "TBA",
    label: "Registrations Open",
    description: "Sign up on the official IEEE-CS SPIT portal. Solo or team — your choice.",
    status: "upcoming",
    chipClass: "chip-orange",
    chipLabel: "Phase 1",
  },
  {
    id: "prelims",
    time: "TBA",
    label: "Preliminary Round",
    description: "Online screening to shortlist participants for the on-campus finals. Tech quiz + coding warmup.",
    status: "upcoming",
    chipClass: "chip-blue",
    chipLabel: "Phase 2",
  },
  {
    id: "finals-day-1",
    time: "TBA",
    label: "Finals — Day 1",
    description: "On-campus coding battles and knowledge jutsu. The main event begins.",
    status: "upcoming",
    chipClass: "chip-orange",
    chipLabel: "Phase 3",
  },
  {
    id: "finals-day-2",
    time: "TBA",
    label: "Finals — Day 2 & Closing",
    description: "Surprise rounds, leaderboard showdown, and prize ceremony. Only the worthy prevail.",
    status: "upcoming",
    chipClass: "chip-green",
    chipLabel: "Phase 4",
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
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              🗓 Mission Timeline
            </p>
            <h2 className="section-heading">
              The{" "}
              <span style={{ color: "var(--action-primary)" }}>Path</span>{" "}
              Ahead
            </h2>
            <p
              style={{
                marginTop: "14px",
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "440px",
              }}
            >
              Dates and venues will be confirmed by the organizers. Stay tuned to
              the official IEEE-CS SPIT channels.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", gap: "clamp(40px, 6vw, 80px)" }}>
          {/* Vertical line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "6px" }}>
            <div
              className="timeline-line"
              style={{ flex: 1, minHeight: `${TIMELINE_EVENTS.length * 120}px` }}
            />
          </div>

          {/* Events */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px" }}>
            {TIMELINE_EVENTS.map((event, i) => (
              <div
                key={event.id}
                id={event.id}
                style={{
                  position: "relative",
                  display: "flex",
                  gap: "20px",
                }}
              >
                {/* Dot (positioned against the line) */}
                <div
                  style={{
                    position: "absolute",
                    left: `calc(-40px - clamp(40px, 6vw, 80px) / 2 - 6px)`,
                    top: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="timeline-dot"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    background: "var(--surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className={`chip ${event.chipClass}`}>{event.chipLabel}</span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {event.time}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    {event.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Register CTA */}
        <div
          style={{
            marginTop: "56px",
            padding: "32px",
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
              Ready to begin your mission?
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
              Registration details will be announced soon. Don&apos;t miss your slot.
            </p>
          </div>
          <a
            href="#register"
            className="btn-primary"
            id="schedule-register-btn"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-register-modal"));
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
