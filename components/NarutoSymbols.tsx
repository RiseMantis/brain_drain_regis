import React from "react";

/**
 * Clean, lightweight SVG Naruto elements to enhance shinobi atmosphere across sections.
 */

export function KonohaLeafSymbol({ size = 24, className = "", color = "currentColor" }: { size?: number; className?: string; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Konoha Leaf Emblem */}
      <path
        d="M18 5 C10 5, 6 12, 6 18 C6 24.6 11.4 30 18 30 C24.6 30 30 24.6 30 18 C30 15, 29 13, 27 11 C25 9, 21 8, 18 10 C15 12, 13 15, 14 18 C15 21, 18 22, 21 21 C23 20.5, 24 19, 24 17.5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow beak of Leaf */}
      <polygon points="18,3 22,7 18,7" fill={color} />
      {/* Side leaf notch */}
      <line x1="28" y1="12" x2="33" y2="10" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ShurikenIcon({ size = 20, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Four-pointed Ninja Shuriken */}
      <path
        d="M16 2 L19 12 L29 15 L19 18 L16 28 L13 18 L3 15 L13 12 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Center opening */}
      <circle cx="16" cy="15" r="3" fill="var(--page-bg, #1f2029)" />
      <circle cx="16" cy="15" r="1.5" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

export function KunaiIcon({ size = 22, color = "currentColor", className = "", rotate = 0 }: { size?: number; color?: string; className?: string; rotate?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      aria-hidden="true"
    >
      {/* Kunai blade */}
      <polygon points="16,2 20,13 17.5,15 14.5,15 12,13" fill={color} opacity="0.9" />
      {/* Central bevel spine */}
      <line x1="16" y1="3" x2="16" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
      {/* Wrapped handle */}
      <rect x="14.5" y="15" width="3" height="9" rx="0.8" fill={color} />
      {/* Handle bindings */}
      <line x1="14" y1="17" x2="18" y2="18" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
      <line x1="14" y1="20" x2="18" y2="21" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
      {/* Ring pommel */}
      <circle cx="16" cy="27" r="3" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

export function UzumakiSpiral({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Uzumaki clan spiral seal */}
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.4" />
      <path
        d="M16 16 C16 13, 13.5 11, 11 12.5 C8.5 14, 8 18, 11 20.5 C14 23, 19 23, 21.5 19.5 C24 16, 23.5 10, 19 7 C14.5 4, 7 5.5, 4 11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="16" r="2" fill={color} />
    </svg>
  );
}

export function SharinganIcon({ size = 24, color = "#ef4444", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Crimson Iris */}
      <circle cx="18" cy="18" r="15" fill="#c8102e" stroke="#1f2029" strokeWidth="2" />
      {/* Outer Tomoe Track */}
      <circle cx="18" cy="18" r="9.5" stroke="#1f2029" strokeWidth="1.2" strokeDasharray="3 2" />
      {/* Center pupil */}
      <circle cx="18" cy="18" r="3.2" fill="#1f2029" />
      {/* 3 Tomoe marks */}
      {[0, 120, 240].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 18 18)`}>
          <circle cx="18" cy="8.5" r="2.2" fill="#1f2029" />
          <path d="M18 10.7 C18 10.7, 19.8 12.5, 20.2 13.8" stroke="#1f2029" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Iconic Akatsuki Crimson Cloud with white border outline
 */
export function AkatsukiCloud({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 22) / 32)}
      viewBox="0 0 36 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Cloud Outer Stroke (White outline) */}
      <path
        d="M9 19 C5 19, 2 16, 2 12.5 C2 9.5, 4.5 7, 7.5 7 C8.2 4 11 2 14.5 2 C18 2, 20.5 4, 21.5 6.5 C23 5, 25 4.5, 27 5.5 C29.5 6.8, 30.5 9.5, 30 12 C32.5 12.5, 34 14.5, 34 17 C34 19.8, 31.8 22, 29 22 L9 22 Z"
        fill="#b91c1c"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Inner cloud swirl line */}
      <path
        d="M12 16 C10 16, 8 14.5, 8 12.5 C8 10.5, 10 9, 12.5 9.5 C14 10, 15 11.5, 15 13"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Rinnegan Divine Eye (Concentric ripple circles of Nagato / Pain / Madara)
 */
export function RinneganIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Pale purple / lavender base */}
      <circle cx="18" cy="18" r="16" fill="#a78bfa" stroke="#4c1d95" strokeWidth="1.5" />
      {/* Concentric rings */}
      <circle cx="18" cy="18" r="12.5" stroke="#4c1d95" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="9" stroke="#4c1d95" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="5.5" stroke="#4c1d95" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="2.2" fill="#2e1065" />
    </svg>
  );
}

/**
 * Itachi's Pinwheel Mangekyo Sharingan
 */
export function MangekyoSharinganIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Blood red background */}
      <circle cx="18" cy="18" r="15" fill="#dc2626" stroke="#18181b" strokeWidth="2" />
      {/* Center pupil */}
      <circle cx="18" cy="18" r="2.8" fill="#18181b" />
      {/* 3 curved curved curved pinwheel blades */}
      {[0, 120, 240].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 18 18)`}>
          <path
            d="M18 18 C18 12, 23 8, 25 5 C23 10, 22 14, 18 18 Z"
            fill="#18181b"
          />
          <circle cx="21" cy="9" r="1.8" fill="#18181b" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Byakugan Lavender Eye (Hyuga Clan / Neji / Hinata)
 */
export function ByakuganIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Pearlescent white-lilac sclera */}
      <circle cx="18" cy="18" r="15" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="2" />
      {/* Soft lavender iris */}
      <circle cx="18" cy="18" r="10" stroke="#8b5cf6" strokeWidth="1.4" fill="#ede9fe" />
      <circle cx="18" cy="18" r="5" stroke="#7c3aed" strokeWidth="1" strokeDasharray="2 2" />
      {/* Subtle vein flares */}
      <line x1="2" y1="18" x2="6" y2="18" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="30" y1="18" x2="34" y2="18" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="18" y1="2" x2="18" y2="6" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="18" y1="30" x2="18" y2="34" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Eight Inner Gates Green Chakra Flame (Might Guy & Rock Lee)
 */
export function EightGatesFlame({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Green steam/fire aura */}
      <path
        d="M16 2 C16 7, 21 10, 21 16 C21 23, 17 28, 16 30 C15 28, 11 23, 11 16 C11 11, 14 6, 16 2 Z"
        fill="#22c55e"
        opacity="0.9"
      />
      <path
        d="M16 10 C18 13, 19 16, 19 20 C19 24, 17 27, 16 28 C15 27, 13 24, 13 20 C13 16, 14 13, 16 10 Z"
        fill="#86efac"
      />
      <circle cx="16" cy="22" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export function ShinobiHeadbandPlate({ text = "LEAF VILLAGE", style }: { text?: string; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "6px",
        background: "linear-gradient(180deg, #3a3b47 0%, #20212b 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 12px rgba(0, 0, 0, 0.4)",
        ...style,
      }}
    >
      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8e90a0", display: "inline-block" }} />
      <KonohaLeafSymbol size={15} color="var(--color-primary-400)" />
      <span
        style={{
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.14em",
          color: "#e2e4ee",
          textTransform: "uppercase",
          fontFamily: "var(--font-display)",
        }}
      >
        {text}
      </span>
      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8e90a0", display: "inline-block" }} />
    </div>
  );
}

/**
 * Character pill component displaying Naruto character name, tag, and thematic badge
 */
export function NarutoCharacterTag({
  name,
  role,
  accentColor = "var(--action-primary)",
  emoji = "⚡",
}: {
  name: string;
  role: string;
  accentColor?: string;
  emoji?: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "9999px",
        background: "rgba(255, 255, 255, 0.05)",
        border: `1px solid ${accentColor}44`,
        boxShadow: `0 0 10px ${accentColor}18`,
      }}
    >
      <span style={{ fontSize: "11px" }}>{emoji}</span>
      <span style={{ fontSize: "11.5px", fontWeight: 700, color: "var(--text-primary)" }}>{name}</span>
      <span style={{ fontSize: "10px", color: accentColor, fontWeight: 600 }}>· {role}</span>
    </div>
  );
}
