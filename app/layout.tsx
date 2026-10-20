import type { Metadata } from "next";
import "./globals.css";
import { EVENT_CONFIG } from "@/constants/eventConfig";

export const metadata: Metadata = {
  title: `${EVENT_CONFIG.title} — ${EVENT_CONFIG.organizerShort} | Where Logic Meets Chaos!!`,
  description: `${EVENT_CONFIG.title} is a fun, quiz-based competition organized by ${EVENT_CONFIG.organizerShort}. 6 rounds, duos only, unpredictable twists, and ₹4000+ prize pool on ${EVENT_CONFIG.date}.`,
  keywords: [
    "Brain Drain",
    "IEEE-CS SPIT",
    "quiz competition",
    "logic meets chaos",
    "first year students",
    "duo competition",
    "coding quiz",
    "SPIT Mumbai",
    "Unstop",
  ],
  openGraph: {
    title: `${EVENT_CONFIG.title} — ${EVENT_CONFIG.organizerShort}`,
    description: "Where Logic Meets Chaos!! 28 October 2026. Duos only.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
