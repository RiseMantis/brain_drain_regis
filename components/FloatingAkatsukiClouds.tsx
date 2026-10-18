import Image from "next/image";

export default function FloatingAkatsukiClouds() {
  return (
    <div className="akatsuki-cloud-wrapper" aria-hidden="true">
      {/* Cloud 1 — Upper realm near Hero & Mission Briefing */}
      <div
        className="akatsuki-cloud akatsuki-cloud-1"
        style={{ width: "68px", maxWidth: "68px" }}
      >
        <Image
          src="/akatsuki_cloud.png"
          alt=""
          width={68}
          height={68}
          priority
          style={{
            width: "100%",
            maxWidth: "68px",
            height: "auto",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Cloud 2 — Mid realm near Challenge Arena & Shinobi Terminal */}
      <div
        className="akatsuki-cloud akatsuki-cloud-2"
        style={{ width: "54px", maxWidth: "54px" }}
      >
        <Image
          src="/akatsuki_cloud.png"
          alt=""
          width={54}
          height={54}
          style={{
            width: "100%",
            maxWidth: "54px",
            height: "auto",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Cloud 3 — Lower realm near Rewards & Shinobi Gauntlet */}
      <div
        className="akatsuki-cloud akatsuki-cloud-3"
        style={{ width: "62px", maxWidth: "62px" }}
      >
        <Image
          src="/akatsuki_cloud.png"
          alt=""
          width={62}
          height={62}
          style={{
            width: "100%",
            maxWidth: "62px",
            height: "auto",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
