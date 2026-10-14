"use client";

import Image from "next/image";

// Gallery uses the hero and mission images we already have.
// In production, these would be real event photos.
const GALLERY_ITEMS = [
  {
    id: "gallery-1",
    src: "/hero-bg.jpg",
    alt: "Shinobi landscape at sunset — cinematic event atmosphere",
    label: "Event Atmosphere",
    span: "wide",
  },
  {
    id: "gallery-2",
    src: "/mission-thumb.jpg",
    alt: "Glowing mission scroll — coding challenge teaser",
    label: "Mission Revealed",
    span: "tall",
  },
  {
    id: "gallery-3",
    src: "/hero-bg.jpg",
    alt: "Mountain silhouettes — the journey begins",
    label: "The Arena",
    span: "normal",
  },
  {
    id: "gallery-4",
    src: "/mission-thumb.jpg",
    alt: "Chakra energy scroll — tech quiz preparation",
    label: "Knowledge Scroll",
    span: "normal",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-label="Event Gallery"
      style={{
        background: "var(--page-bg)",
        padding: "clamp(64px, 9vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <p className="eyebrow" style={{ marginBottom: "12px" }}>
            📸 Gallery
          </p>
          <h2 className="section-heading">
            The{" "}
            <span style={{ color: "var(--action-primary)" }}>World</span>{" "}
            of Brain Drain
          </h2>
          <p
            style={{
              marginTop: "14px",
              fontSize: "15px",
              color: "var(--text-muted)",
            }}
          >
            A glimpse into the atmosphere, energy, and intensity of the event.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gridAutoRows: "220px",
            gap: "14px",
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              id={item.id}
              className="gallery-item"
              style={{
                gridColumn: item.span === "wide" ? "span 2" : "span 1",
                gridRow: item.span === "tall" ? "span 2" : "span 1",
                minHeight: "220px",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.span === "wide" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                style={{
                  objectFit: "cover",
                  objectPosition: i % 2 === 0 ? "center 30%" : "center",
                }}
              />
              <div className="gallery-overlay" />
              {/* Label */}
              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "14px",
                  zIndex: 2,
                }}
              >
                <span className="chip" style={{ fontSize: "10px" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "24px",
            fontSize: "13px",
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          Event photography will be updated after the event. Stay tuned.
        </p>
      </div>
    </section>
  );
}
