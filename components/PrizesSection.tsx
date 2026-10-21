"use client";

import Image from "next/image";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KonohaLeafSymbol, ShurikenIcon, KunaiIcon, UzumakiSpiral, AkatsukiCloud, EightGatesFlame, NarutoCharacterTag } from "./NarutoSymbols";

const PRIZES = [
  {
    id: "second",
    rank: "🥈",
    ninjaTitle: "Grand Jonin Jackpot",
    place: "2nd Place",
    amount: "BIGGEST PRIZE",
    subtitle: "The Shinobi Inversion Twist",
    character: "Tsunade Senju",
    characterRole: "5th Hokage · Legendary Gambler",
    characterEmoji: "💎",
    description: "In Brain Drain, 2nd position takes the grandest bounty of the entire competition!",
    perks: ["Largest Cash Share", "Certificate of Merit", "IEEE-CS SPIT Recognition", "Ultimate Shinobi Bragging Rights"],
    featured: true,
    accentColor: "var(--action-primary)",
    glowColor: "rgba(249, 109, 46, 0.7)",
    glowColorSoft: "rgba(249, 109, 46, 0.4)",
    borderColor: "rgba(249, 109, 46, 0.6)",
    chipClass: "chip-orange",
    badge: "⭐ Grand Twist — Biggest Prize",
    symbol: <KunaiIcon size={24} color="var(--action-primary)" rotate={45} />,
  },
  {
    id: "first",
    rank: "🥇",
    ninjaTitle: "Hokage Pure Logic",
    place: "1st Place",
    amount: "Top Finisher Prize",
    subtitle: "Leaderboard Champion",
    character: "Naruto & Sasuke",
    characterRole: "Valley of the End Legends",
    characterEmoji: "⚡",
    description: "Honoring the top finisher who conquered the points table through sheer speed and deduction.",
    perks: ["Cash Reward", "Certificate of Excellence", "IEEE-CS SPIT Recognition"],
    featured: false,
    accentColor: "var(--color-secondary-400)",
    glowColor: "rgba(112, 174, 219, 0.7)",
    glowColorSoft: "rgba(112, 174, 219, 0.4)",
    borderColor: "rgba(112, 174, 219, 0.6)",
    chipClass: "chip-blue",
    badge: "Top Leaderboard",
    symbol: <KonohaLeafSymbol size={24} color="var(--color-secondary-400)" />,
  },
  {
    id: "random",
    rank: "🎲",
    ninjaTitle: "Anbu Mystery Rank",
    place: "Mystery Rank",
    amount: "Random Position Prize",
    subtitle: "Position Revealed Live",
    character: "Itachi Uchiha",
    characterRole: "ANBU Shadow Operative",
    characterEmoji: "🪶",
    description: "No matter where you land, anyone can win! A secret rank revealed at closing wins a cash prize.",
    perks: ["Surprise Cash Reward", "Certificate of Participation", "Lucky Shinobi Honor"],
    featured: false,
    accentColor: "var(--color-accent-400)",
    glowColor: "rgba(237, 233, 60, 0.7)",
    glowColorSoft: "rgba(237, 233, 60, 0.4)",
    borderColor: "rgba(237, 233, 60, 0.6)",
    chipClass: "chip",
    badge: "Chaos Multiplier",
    symbol: <AkatsukiCloud size={24} />,
  },
  {
    id: "dare",
    rank: "🔥",
    ninjaTitle: "Youthful Spirit Master",
    place: "The Dare Showdown",
    amount: "Best Dare Prize",
    subtitle: "Bottom 5 Shinobi Gauntlet",
    character: "Might Guy & Rock Lee",
    characterRole: "Gates of Youthful Passion",
    characterEmoji: "🔥",
    description: "The last 5 contenders must face an entertaining live dare. The best dare execution claims the prize!",
    perks: ["Special Cash Reward", "Crowd Favorite Certificate", "Dare Legend Title"],
    featured: false,
    accentColor: "var(--color-akatsuki-red)",
    glowColor: "rgba(200, 16, 46, 0.7)",
    glowColorSoft: "rgba(200, 16, 46, 0.4)",
    borderColor: "rgba(200, 16, 46, 0.6)",
    chipClass: "chip-orange",
    badge: "Fun & Absurdity",
    symbol: <EightGatesFlame size={24} />,
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
      {/* Naru2 decorative character — left edge */}
      <Image
        src="/characters/naru2-scroll.png"
        alt=""
        aria-hidden="true"
        width={414}
        height={603}
        style={{
          position: "absolute",
          bottom: 0,
          left: "-30px",
          height: "clamp(240px, 38vw, 440px)",
          width: "auto",
          objectFit: "contain",
          opacity: 0.18,
          filter: "drop-shadow(0 0 24px rgba(249,109,46,0.2))",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }} className="reveal-on-scroll">
          <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <ShurikenIcon size={14} color="var(--action-primary)" />
            <span>Prize Pool: {EVENT_CONFIG.prizePool}</span>
          </p>
          <h2 className="section-heading">
            Twists, Prizes &{" "}
            <span style={{ color: "var(--action-primary)" }}>Shinobi Glory</span>
          </h2>
          <p
            style={{
              marginTop: "14px",
              fontSize: "15px",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "14px auto 0",
              lineHeight: 1.6,
            }}
          >
            A total prize pool of {EVENT_CONFIG.prizePool} distributed with pure shinobi chaos on <strong>{EVENT_CONFIG.date} (5:00 PM Onwards)</strong>.
            Second place wins biggest, random ranks get rewarded, and the bottom 5 have their own dare arena!
          </p>
        </div>

        {/* Prize cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
            marginBottom: "48px",
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
                transitionDelay: `${idx * 100}ms`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  height: "3px",
                  background: prize.featured
                    ? "var(--gradient-naruto)"
                    : prize.accentColor,
                  boxShadow: prize.featured
                    ? "0 0 16px rgba(249, 109, 46, 0.85)"
                    : `0 0 12px ${prize.glowColor}`,
                  width: "100%",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* Featured / badge pill */}
              <div
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 12px",
                    background: "var(--page-bg-secondary, #2a2b35)",
                    color: prize.featured ? "var(--color-primary-400)" : prize.accentColor,
                    fontSize: "10.5px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    borderRadius: "9999px",
                    border: `1px solid ${prize.borderColor}`,
                    boxShadow: `0 0 0 3px var(--page-bg-secondary, #2a2b35), 0 0 14px ${prize.glowColorSoft}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {prize.badge}
                </span>
              </div>

              {/* Card body */}
              <div className="prize-card-body" style={{ padding: "28px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header row with rank icon and Naruto symbol */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ fontSize: "38px", lineHeight: 1 }}>
                    {prize.rank}
                  </div>
                  <div style={{ opacity: 0.85 }}>
                    {prize.symbol}
                  </div>
                </div>

                {/* Place and ninja title */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                  <span className={`chip ${prize.chipClass}`} style={{ display: "inline-flex" }}>
                    {prize.place}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                    {prize.ninjaTitle}
                  </span>
                </div>

                {/* Amount / Highlight */}
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: prize.featured ? "var(--color-primary-400)" : "var(--text-primary)",
                    marginBottom: "4px",
                    marginTop: "4px",
                  }}
                >
                  {prize.amount}
                </p>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  {prize.subtitle}
                </p>

                {/* Character Tag */}
                <div style={{ marginBottom: "12px" }}>
                  <NarutoCharacterTag
                    name={prize.character}
                    role={prize.characterRole}
                    emoji={prize.characterEmoji}
                    accentColor={prize.accentColor}
                  />
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginBottom: "18px",
                  }}
                >
                  {prize.description}
                </p>

                {/* Perks list */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: 0,
                    margin: "auto 0 0 0",
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "14px",
                  }}
                >
                  {prize.perks.map((perk, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--action-primary)" strokeWidth="2">
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Twists Summary Banner */}
        <div
          className="reveal-on-scroll"
          style={{
            background: "linear-gradient(135deg, rgba(249, 109, 46, 0.1) 0%, rgba(74, 147, 203, 0.1) 100%)",
            border: "1px dashed var(--action-primary)",
            borderRadius: "18px",
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
              <KonohaLeafSymbol size={18} color="var(--action-primary)" />
              <span>The Brain Drain Winning Philosophy</span>
            </h4>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", maxWidth: "720px", lineHeight: 1.5 }}>
              Forget traditional contests where only #1 matters. Here, <strong>2nd place is the jackpot</strong>, 
              anyone can win the <strong>Mystery Rank</strong>, and the <strong>Last 5 Dare</strong> keeps the excitement blazing till the very end!
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() => window.dispatchEvent(new CustomEvent("open-register-modal"))}
            style={{ fontSize: "13px", height: "42px", padding: "0 20px" }}
          >
            Claim Your Spot →
          </button>
        </div>
      </div>
    </section>
  );
}
