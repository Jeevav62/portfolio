import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
