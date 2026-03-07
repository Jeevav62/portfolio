import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeevarathinam V | AI / ML Engineer",
  description:
    "AI / Machine Learning Engineer specializing in LLMs, Speech AI, NLP, and Agent frameworks. Building intelligent systems at F22 Labs.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "NLP",
    "Speech AI",
    "RAG",
    "AI Agents",
    "Chennai",
    "India",
  ],
  authors: [{ name: "Jeevarathinam V" }],
  creator: "Jeevarathinam V",
  openGraph: {
    type: "website",
    title: "Jeevarathinam V | AI / ML Engineer",
    description:
      "AI / Machine Learning Engineer specializing in LLMs, Speech AI, NLP, and Agent frameworks.",
    siteName: "Jeevarathinam V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevarathinam V | AI / ML Engineer",
    description:
      "AI / Machine Learning Engineer specializing in LLMs, Speech AI, NLP, and Agent frameworks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
