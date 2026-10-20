"use client";

import { useState } from "react";
import { EVENT_CONFIG } from "@/constants/eventConfig";
import { KonohaLeafSymbol, KunaiIcon, ShurikenIcon, UzumakiSpiral } from "./NarutoSymbols";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    teamName: "",
    player1Name: "",
    player2Name: "",
    email: "",
    college: "Sardar Patel Institute of Technology",
  });
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "BD-DUO-" + Math.floor(1000 + Math.random() * 9000);
    setPassId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "520px", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
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

        {!submitted ? (
          <div>
            <div style={{ marginBottom: "18px" }}>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
                <span className="chip chip-orange" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <KunaiIcon size={12} color="var(--action-primary)" />
                  <span>Duo ONLY (Teams of 2)</span>
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
                  marginTop: "6px",
                  lineHeight: 1.15,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Claim Shinobi Duo Pass</span>
                <ShurikenIcon size={20} color="var(--action-primary)" />
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px", lineHeight: 1.5 }}>
                Registrations are open till <strong>{EVENT_CONFIG.registrationDeadline}</strong>. 
                Event on <strong>{EVENT_CONFIG.date} (Starts 5:00 PM Onwards)</strong> at SPIT Mumbai.
              </p>
            </div>

            {/* Prominent Unstop Link Box */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(249, 109, 46, 0.16) 0%, rgba(74, 147, 203, 0.12) 100%)",
                border: "1.5px solid var(--action-primary)",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                Official Registration on Unstop
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "12px" }}>
                Complete your duo submission on Unstop before 27 October 2026.
              </p>
              <a
                href={EVENT_CONFIG.unstopRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: "100%",
                  height: "44px",
                  fontSize: "13px",
                  justifyContent: "center",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Register via Unstop Portal
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            <div style={{ position: "relative", textAlign: "center", margin: "16px 0" }}>
              <div style={{ height: "1px", background: "var(--border-subtle)", width: "100%" }} />
              <span
                style={{
                  position: "relative",
                  top: "-10px",
                  background: "var(--surface)",
                  padding: "0 12px",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Or Generate Shinobi Duo Pass
              </span>
            </div>

            {/* Quick Duo Pass Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Team Duo Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Team 7 Ninjas"
                  className="input-field"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Duo Ninja 1 *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Player 1"
                    className="input-field"
                    value={formData.player1Name}
                    onChange={(e) => setFormData({ ...formData, player1Name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px" }}>
                    Duo Ninja 2 *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Player 2"
                    className="input-field"
                    value={formData.player2Name}
                    onChange={(e) => setFormData({ ...formData, player2Name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px" }}>
                  Contact Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="duo@spit.ac.in"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px" }}>
                  College (First Year Students Only) *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Sardar Patel Institute of Technology"
                  className="input-field"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                />
              </div>

              <div style={{ marginTop: "6px" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", height: "46px", fontSize: "13.5px" }}
                >
                  Generate Shinobi Duo Pass →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(249, 109, 46, 0.15)",
                border: "2px solid var(--action-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
                fontSize: "26px",
              }}
            >
              📜
            </div>

            <span className="chip chip-orange" style={{ marginBottom: "8px" }}>
              Duo Pass Generated
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              Welcome to Brain Drain!
            </h3>

            <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", marginTop: "6px", lineHeight: 1.5 }}>
              Squad <strong>{formData.teamName}</strong> ({formData.player1Name} & {formData.player2Name}), 
              your preliminary pass has been recorded!
            </p>

            {/* Shinobi Pass Card with Uzumaki watermark */}
            <div
              style={{
                marginTop: "16px",
                padding: "18px",
                borderRadius: "16px",
                background: "var(--surface-raised)",
                border: "1px dashed var(--action-primary)",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", right: "-10px", bottom: "-10px", opacity: 0.1, pointerEvents: "none" }}>
                <UzumakiSpiral size={110} color="var(--action-primary)" />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "11px", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>
                  Shinobi Duo Pass ID
                </span>
                <span style={{ fontSize: "14px", fontFamily: "var(--font-display)", color: "var(--action-primary)" }}>
                  {passId}
                </span>
              </div>
              <div style={{ fontSize: "15px", color: "var(--text-primary)", fontWeight: 700 }}>
                {formData.teamName}
              </div>
              <div style={{ fontSize: "12px", color: "var(--color-primary-400)", marginTop: "3px" }}>
                Ninjas: {formData.player1Name} & {formData.player2Name}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>
                {formData.college} · FE ONLY · 28 OCT (5:00 PM ONWARDS)
              </div>
            </div>

            {/* Unstop Reminder Button */}
            <div style={{ marginTop: "16px" }}>
              <a
                href={EVENT_CONFIG.unstopRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: "100%",
                  height: "44px",
                  fontSize: "13px",
                  justifyContent: "center",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Complete Duo Registration on Unstop ↗
              </a>
            </div>

            <button
              onClick={handleReset}
              className="link-secondary"
              style={{ marginTop: "14px", background: "none", border: "none", cursor: "pointer", fontSize: "12px" }}
            >
              Done / Return to Arena
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
