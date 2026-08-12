import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Eajaz Ahmed — AI Engineer & Software Developer",
  description:
    "Portfolio of Mohammed Eajaz Ahmed, a Computer Science Engineering student specializing in Artificial Intelligence and Data Science. Building intelligent systems, machine learning pipelines, and scalable software products.",
  keywords: [
    "Mohammed Eajaz Ahmed",
    "Eajaz Ahmed",
    "AI Engineer",
    "Software Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "KL University",
    "SentinelAI",
    "Full-Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mohammed Eajaz Ahmed" }],
  creator: "Mohammed Eajaz Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eajaz.dev",
    title: "Mohammed Eajaz Ahmed — AI Engineer & Software Developer",
    description:
      "Computer Science Engineering student specializing in Artificial Intelligence & Data Science. Explore selected work, machine learning systems, and enterprise engineering projects.",
    siteName: "Mohammed Eajaz Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Eajaz Ahmed — AI Engineer & Software Developer",
    description:
      "Computer Science Engineering student specializing in Artificial Intelligence & Data Science.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans bg-[#070708] text-[#f4f4f6] min-h-screen antialiased selection:bg-zinc-700 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
