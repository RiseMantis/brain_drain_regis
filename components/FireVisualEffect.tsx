"use client";

import Image from "next/image";

interface FireVisualEffectProps {
  className?: string;
  intensity?: "normal" | "high";
  showBeam?: boolean;
}

export default function FireVisualEffect({
  className = "",
  intensity = "normal",
  showBeam = true,
}: FireVisualEffectProps) {
  // Spark particles with predetermined pseudo-random positions for hydration consistency
  const sparks = [
    { left: "12%", top: "45%", delay: "0s", duration: "4.2s", size: "3px" },
    { left: "24%", top: "58%", delay: "1.1s", duration: "5.0s", size: "4px" },
    { left: "38%", top: "35%", delay: "0.5s", duration: "3.8s", size: "2.5px" },
    { left: "48%", top: "52%", delay: "1.8s", duration: "4.6s", size: "5px" },
    { left: "55%", top: "42%", delay: "0.2s", duration: "4.0s", size: "3px" },
    { left: "68%", top: "60%", delay: "2.1s", duration: "5.4s", size: "4px" },
    { left: "76%", top: "38%", delay: "0.9s", duration: "3.6s", size: "2px" },
    { left: "85%", top: "48%", delay: "1.5s", duration: "4.8s", size: "4.5px" },
    { left: "18%", top: "25%", delay: "2.5s", duration: "5.2s", size: "3px" },
    { left: "32%", top: "68%", delay: "1.3s", duration: "4.4s", size: "3.5px" },
    { left: "62%", top: "28%", delay: "0.7s", duration: "4.9s", size: "2.5px" },
    { left: "82%", top: "65%", delay: "2.8s", duration: "5.6s", size: "4px" },
  ];

  return (
    <div
      aria-hidden="true"
      className={`fire-motion-container ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* ── 3D Panning/Breathing Fire Motion Layer ── */}
      <div
        className="fire-motion-layer"
        style={{
          position: "absolute",
          inset: "-8% -5%",
          opacity: intensity === "high" ? 0.55 : 0.42,
          mixBlendMode: "screen",
          willChange: "transform, opacity",
        }}
      >
        <Image
          src="/fire-motion.png"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          style={{
            objectFit: "cover",
            objectPosition: "center 50%",
          }}
        />
      </div>

      {/* ── Radiant Horizontal Fire Horizon Beam ── */}
      {showBeam && (
        <div
          className="fire-horizon-beam"
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "2px",
            transform: "translateY(-50%)",
            background: "linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.4) 20%, #f97316 50%, rgba(239, 68, 68, 0.4) 80%, transparent 100%)",
            boxShadow: "0 0 16px rgba(239, 68, 68, 0.8), 0 0 32px rgba(249, 115, 22, 0.6)",
            opacity: 0.65,
          }}
        />
      )}

      {/* ── Floating 3D Fire Ember Sparks ── */}
      {sparks.map((spark, i) => (
        <div
          key={i}
          className="fire-spark"
          style={{
            position: "absolute",
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#f97316" : "#ef4444",
            boxShadow: i % 2 === 0
              ? "0 0 8px #f97316, 0 0 16px #fb923c"
              : "0 0 8px #ef4444, 0 0 16px #f87171",
            animation: `fire-ember-drift ${spark.duration} ease-in-out infinite`,
            animationDelay: spark.delay,
            opacity: 0,
          }}
        />
      ))}

      {/* ── Soft Edge Vignette (Blends into section background) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 35%, var(--page-bg) 85%)",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
