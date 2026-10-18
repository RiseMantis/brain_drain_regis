"use client";

import { useState, useEffect } from "react";
import RegistrationModal from "./RegistrationModal";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setModalOpen(true);
    window.addEventListener("open-register-modal", handleOpen);
    return () => window.removeEventListener("open-register-modal", handleOpen);
  }, []);

  return (
    <>
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="contact"
        aria-label="Contact Information"
        style={{
          background: "var(--page-bg)",
          padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Registration CTA */}
          <div
            id="register"
            className="reveal-on-scroll"
            style={{
              background: "linear-gradient(135deg, rgba(249, 109, 46, 0.12) 0%, rgba(74, 147, 203, 0.08) 100%)",
              border: "1px solid rgba(249, 109, 46, 0.25)",
              borderRadius: "24px",
              padding: "clamp(36px, 5vw, 64px)",
              textAlign: "center",
              marginBottom: "60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "14px" }}>
              🚀 Join the Mission
            </p>
            <h2
              className="section-heading"
              style={{ marginBottom: "16px" }}
            >
              Ready to{" "}
              <span style={{ color: "var(--action-primary)" }}>Begin?</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                marginBottom: "32px",
                maxWidth: "520px",
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              Secure your spot in the arena. Solo ninjas and squads welcome.
              Claim your preliminary credentials today.
            </p>
            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn-primary"
                id="contact-register-btn"
                style={{ height: "52px", fontSize: "14px", padding: "0 36px" }}
                onClick={() => setModalOpen(true)}
              >
                Register Now →
              </button>
              <a
                href="#faq"
                className="link-secondary"
                style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 12px" }}
              >
                Read FAQ & Rules
              </a>
            </div>
          </div>

        {/* Contact info + social */}
        <div
          className="reveal-on-scroll"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Organizer info */}
          <div>
            <p
              className="eyebrow"
              style={{ marginBottom: "14px" }}
            >
              Organizer
            </p>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
              IEEE Computer Society
            </p>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "4px" }}>
              SPIT Student Chapter
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              Sardar Patel Institute of Technology, Mumbai
            </p>
          </div>

          {/* Reach us */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "14px" }}>
              Reach Us
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="mailto:ieee-cs@spit.ac.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                ieee-cs@spit.ac.in
              </a>
              <a
                href="https://www.spit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                spit.ac.in
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "14px" }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={`social-${link.id}`}
                  aria-label={link.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--surface)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s ease, border-color 0.15s ease, transform 0.15s ease",
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
}
