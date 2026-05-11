import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./index.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Krishna Modi — MERN Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building modern, performant web applications.",
  keywords: [
    "Krishna Modi",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Full Stack Developer",
    "Ahmedabad",
  ],
  authors: [{ name: "Krishna Modi" }],
  openGraph: {
    title: "Krishna Modi — MERN Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
