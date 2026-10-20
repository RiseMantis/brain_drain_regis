"use client";

import { useState } from "react";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KonohaLeafSymbol, KunaiIcon, ShurikenIcon, UzumakiSpiral } from "./NarutoSymbols";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type RegType = "duo" | "solo" | null;

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [regType, setRegType] = useState<RegType>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setRegType(null);
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "500px", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            transition: "color 0.15s ease",
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: "22px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
            <span className="chip chip-orange" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <KunaiIcon size={12} color="var(--action-primary)" />
              <span>Solo or Duo</span>
            </span>
            <span className="chip chip-green" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <KonohaLeafSymbol size={12} color="#10b981" />
              <span>First Years Only</span>
            </span>
          </div>
          <h2
            id="modal-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              lineHeight: 1.15,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Register for Brain Drain</span>
            <ShurikenIcon size={20} color="var(--action-primary)" />
          </h2>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "8px", lineHeight: 1.5 }}>
            Registrations close <strong>{EVENT_CONFIG.registrationDeadline}</strong> ·{" "}
            Event on <strong>{EVENT_CONFIG.date} · 5:00 PM Onwards</strong> at SPIT Mumbai.
          </p>
        </div>

        {/* Step 1: Pick registration type */}
        <div style={{ marginBottom: "22px" }}>
          <p style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "12px",
          }}>
            How are you registering?
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* Duo card */}
            <button
              onClick={() => setRegType("duo")}
              style={{
                background: regType === "duo"
                  ? "rgba(249, 109, 46, 0.18)"
                  : "var(--surface-raised)",
                border: regType === "duo"
                  ? "2px solid var(--action-primary)"
                  : "1.5px solid var(--border-default)",
                borderRadius: "14px",
                padding: "18px 14px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.18s ease",
              }}
            >
              <div style={{ fontSize: "26px", marginBottom: "6px" }}>🥷🥷</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                color: regType === "duo" ? "var(--action-primary)" : "var(--text-primary)",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}>
                DUO
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>
                Team of 2 players
              </div>
            </button>

            {/* Solo card */}
            <button
              onClick={() => setRegType("solo")}
              style={{
                background: regType === "solo"
                  ? "rgba(249, 109, 46, 0.18)"
                  : "var(--surface-raised)",
                border: regType === "solo"
                  ? "2px solid var(--action-primary)"
                  : "1.5px solid var(--border-default)",
                borderRadius: "14px",
                padding: "18px 14px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.18s ease",
              }}
            >
              <div style={{ fontSize: "26px", marginBottom: "6px" }}>🥷</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                color: regType === "solo" ? "var(--action-primary)" : "var(--text-primary)",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}>
                SOLO
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>
                Individual player
              </div>
            </button>
          </div>
        </div>

        {/* Unstop redirect — shows once a type is selected */}
        {regType && (
          <div
            style={{
              background: "linear-gradient(135deg, rgba(249, 109, 46, 0.14) 0%, rgba(74, 147, 203, 0.10) 100%)",
              border: "1.5px solid var(--action-primary)",
              borderRadius: "16px",
              padding: "18px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Uzumaki watermark */}
            <div style={{ position: "absolute", right: "-16px", bottom: "-16px", opacity: 0.08, pointerEvents: "none" }}>
              <UzumakiSpiral size={120} color="var(--action-primary)" />
            </div>

            <div style={{ fontSize: "22px", marginBottom: "6px" }}>
              {regType === "duo" ? "🥷🥷" : "🥷"}
            </div>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
              {regType === "duo" ? "Duo Registration" : "Solo Registration"} — via Unstop
            </p>
            <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "14px", lineHeight: 1.5 }}>
              {regType === "duo"
                ? "Register your duo on Unstop before 27 October 2026. Both players play on their own devices."
                : "Register individually on Unstop before 27 October 2026. You'll be paired or compete individually."}
            </p>
            <a
              href={EVENT_CONFIG.unstopRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: "100%",
                height: "46px",
                fontSize: "13.5px",
                justifyContent: "center",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Register on Unstop Portal
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}

        {/* Footer note */}
        <p style={{
          fontSize: "11px",
          color: "var(--text-muted)",
          textAlign: "center",
          marginTop: "16px",
          lineHeight: 1.5,
        }}>
          Prize Pool <strong style={{ color: "var(--action-primary)" }}>{EVENT_CONFIG.prizePool}</strong> ·
          Open to FE students only · 6 Rounds of chaos await 🍃
        </p>
      </div>
    </div>
  );
}
