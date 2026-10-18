"use client";

import { useEffect, useRef } from "react";

export default function FireBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let retryTimer: number | undefined;
    let isInViewport = false;

    const resumePlayback = () => {
      if (document.visibilityState !== "visible" || !isInViewport) return;
      if (video.ended) video.currentTime = 0;
      if (!video.paused) return;

      void video.play().catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Unable to resume the background video:", error);
      });
    };

    const handlePause = () => {
      window.clearTimeout(retryTimer);
      retryTimer = window.setTimeout(resumePlayback, 100);
    };

    const handleError = () => {
      console.error("The background video failed to load:", video.error);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting;
        if (isInViewport) resumePlayback();
      },
      { rootMargin: "100px 0px" },
    );

    observer.observe(video);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", resumePlayback);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", resumePlayback);
    window.addEventListener("focus", resumePlayback);
    window.addEventListener("pageshow", resumePlayback);

    const playbackWatchdog = window.setInterval(resumePlayback, 3000);
    resumePlayback();

    return () => {
      window.clearTimeout(retryTimer);
      window.clearInterval(playbackWatchdog);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", resumePlayback);
      video.removeEventListener("error", handleError);
      document.removeEventListener("visibilitychange", resumePlayback);
      window.removeEventListener("focus", resumePlayback);
      window.removeEventListener("pageshow", resumePlayback);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="fire-background-video"
      src="/fire-motion.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
