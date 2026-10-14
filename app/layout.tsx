import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brain Drain — IEEE-CS SPIT | Shinobi Coding Challenge",
  description:
    "Brain Drain is a Naruto-inspired coding competition and technology quiz organized by IEEE-CS SPIT. Outthink the opponent. Outsmart the challenge. Code battles, tech trivia, and twists worthy of a shinobi.",
  keywords: [
    "Brain Drain",
    "IEEE-CS SPIT",
    "coding competition",
    "tech quiz",
    "hackathon",
    "shinobi",
    "Naruto",
  ],
  openGraph: {
    title: "Brain Drain — IEEE-CS SPIT",
    description: "Outthink. Outcode. Outlast. A shinobi coding challenge.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
