"use client";

import Image from "next/image";
import { ShurikenIcon, KonohaLeafSymbol } from "./NarutoSymbols";

/**
 * 📸 GALLERY PHOTOS PATH:
 * Place your event / last year photos inside:
 *   /public/gallery/photo1.jpg
 *   /public/gallery/photo2.jpg
 *   /public/gallery/photo3.jpg
 *   /public/gallery/photo4.jpg
 *
 * You can easily replace the files in `public/gallery/` or add more items to this array.
 */
const GALLERY_ITEMS = [
  {
    id: "gallery-1",
    src: "/gallery/photo1.jpg",
    alt: "Brain Drain Event Atmosphere",
    label: "Leaf Village Arena · Naruto Uzumaki",
    span: "wide",
  },
  {
    id: "gallery-2",
    src: "/gallery/photo2.jpg",
    alt: "Brain Drain Coding & Tech Quiz",
    label: "Ninjutsu Scroll Tracing · Shikamaru",
    span: "tall",
  },
  {
    id: "gallery-3",
    src: "/gallery/photo3.jpg",
    alt: "Participants Battle in Duo Squads",
    label: "Sync Trial · Kakashi & Team 7",
    span: "normal",
  },
  {
    id: "gallery-4",
    src: "/gallery/photo4.jpg",
    alt: "Tech Quiz and Chaos Protocol",
    label: "Speed Strategy Battle · Minato",
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
        <div style={{ marginBottom: "44px" }}>
          <p className="eyebrow" style={{ marginBottom: "12px", color: "var(--action-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
            <ShurikenIcon size={14} color="var(--action-primary)" />
            <span>Shinobi Archives</span>
          </p>
          <h2 className="section-heading">
            Glimpses of{" "}
            <span style={{ color: "var(--action-primary)" }}>Brain Drain</span>
          </h2>
          <p
            style={{
              marginTop: "12px",
              fontSize: "15px",
              color: "var(--text-secondary)",
              maxWidth: "540px",
            }}
          >
            Memories of past editions, intense quiz showdowns, and high-energy shinobi chaos at SPIT.
          </p>
        </div>

        {/* Clean Responsive Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gridAutoRows: "230px",
            gap: "16px",
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              id={item.id}
              className={`gallery-item ${item.span === "wide" ? "gallery-span-wide" : ""} ${item.span === "tall" ? "gallery-span-tall" : ""} reveal-on-scroll`}
              style={{
                minHeight: "230px",
                borderRadius: "16px",
                border: "1px solid var(--border-subtle)",
                transitionDelay: `${i * 90}ms`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.span === "wide" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
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
                <span className="chip chip-orange" style={{ fontSize: "11px", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <KonohaLeafSymbol size={12} color="#fff" />
                  <span>{item.label}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "24px",
            padding: "14px 20px",
            background: "var(--surface)",
            borderRadius: "12px",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "12.5px", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
            <ShurikenIcon size={12} color="var(--action-primary)" />
            <span>Gallery image folder path: <code style={{ color: "var(--action-primary)", background: "rgba(249,109,46,0.1)", padding: "2px 6px", borderRadius: "4px" }}>public/gallery/</code></span>
          </span>
          <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
            Replace <code>photo1.jpg</code> to <code>photo4.jpg</code> anytime to update past photos!
          </span>
        </div>
      </div>
    </section>
  );
}
