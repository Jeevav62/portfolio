import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevarathinam V | AI / ML Engineer",
  description:
    "AI / ML Engineer specializing in production Voice AI, LLM fine-tuning, retrieval-augmented systems, and open-source AI. Building intelligent systems at F22 Labs.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "NLP",
    "Speech AI",
    "Voice AI",
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
      "AI / ML Engineer specializing in production Voice AI, LLM fine-tuning, and retrieval-augmented systems.",
    siteName: "Jeevarathinam V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevarathinam V | AI / ML Engineer",
    description:
      "AI / ML Engineer specializing in production Voice AI, LLM fine-tuning, and retrieval-augmented systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-[#09090b]`}
      >
        {children}
      </body>
    </html>
  );
}
