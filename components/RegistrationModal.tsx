"use client";

import { useState } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [mode, setMode] = useState<"solo" | "team">("solo");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    college: "",
    teamName: "",
    membersCount: "2",
    track: "algorithms",
  });
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "BD-" + Math.floor(1000 + Math.random() * 9000);
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
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
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
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span className="chip chip-orange" style={{ marginBottom: "8px" }}>
                ⚡ Registration Portal
              </span>
              <h2
                id="modal-title"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  marginTop: "6px",
                  lineHeight: 1.1,
                }}
              >
                Claim Your Shinobi Pass
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px" }}>
                Enter your details to register for Brain Drain 2026 organized by IEEE-CS SPIT.
              </p>
            </div>

            {/* Mode Selector */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                background: "var(--surface-raised)",
                padding: "4px",
                borderRadius: "14px",
                marginBottom: "20px",
              }}
            >
              <button
                type="button"
                onClick={() => setMode("solo")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                  transition: "all 0.15s ease",
                  background: mode === "solo" ? "var(--action-primary)" : "transparent",
                  color: mode === "solo" ? "#fff" : "var(--text-muted)",
                }}
              >
                Solo Shinobi
              </button>
              <button
                type="button"
                onClick={() => setMode("team")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                  transition: "all 0.15s ease",
                  background: mode === "team" ? "var(--action-primary)" : "transparent",
                  color: mode === "team" ? "#fff" : "var(--text-muted)",
                }}
              >
                Team Squad (2-3)
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                  {mode === "solo" ? "Full Name" : "Team Leader Name"}
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Kakashi Hatake"
                  className="input-field"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              {mode === "team" && (
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                    Team Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Team 7"
                    className="input-field"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  />
                </div>
              )}

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                  Official Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="shinobi@spit.ac.in"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                  College / Institution
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

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "6px" }}>
                  Preferred Jutsu / Challenge Track
                </label>
                <select
                  className="input-field"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  style={{ cursor: "pointer" }}
                >
                  <option value="algorithms">Algorithmic Battles (C++, Java, Python)</option>
                  <option value="fullstack">Web Jutsu & Systems</option>
                  <option value="quiz">CS Theory & Tech Trivia Gauntlet</option>
                  <option value="all">All-Rounder (Tri-Track Ninja)</option>
                </select>
              </div>

              <div style={{ marginTop: "12px" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", height: "48px" }}
                >
                  Generate Shinobi Pass →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(249, 115, 22, 0.15)",
                border: "2px solid var(--action-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: "28px",
              }}
            >
              📜
            </div>

            <span className="chip chip-orange" style={{ marginBottom: "8px" }}>
              Pass Issued
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "26px",
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              Welcome to the Gauntlet!
            </h3>

            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "8px", lineHeight: 1.6 }}>
              {mode === "solo" ? formData.fullName : formData.teamName}, your preliminary credentials have been registered with the IEEE-CS SPIT council.
            </p>

            {/* Shinobi Pass Card */}
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "16px",
                background: "var(--surface-raised)",
                border: "1px dashed var(--action-primary)",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "11px", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>
                  Shinobi Pass ID
                </span>
                <span style={{ fontSize: "14px", fontFamily: "var(--font-display)", color: "var(--action-primary)" }}>
                  {passId}
                </span>
              </div>
              <div style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 600 }}>
                {mode === "solo" ? formData.fullName : formData.teamName}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
                {formData.college || "SPIT, Mumbai"} · {formData.track.toUpperCase()}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary"
              style={{ marginTop: "24px", width: "100%" }}
            >
              Done / Return to Arena
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
