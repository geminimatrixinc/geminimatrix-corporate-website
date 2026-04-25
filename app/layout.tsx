import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gemini Matrix Consulting",
  description:
    "Gemini Matrix Consulting builds practical software, AI, and machine learning solutions with community-aware strategy and real-world delivery experience.",
  icons: {
    icon: "/gemini-matrix-logo.png",
    shortcut: "/gemini-matrix-logo.png",
  },
  openGraph: {
    title: "Gemini Matrix Consulting",
    description:
      "Software development, AI, machine learning, and data strategy grounded in practical outcomes and community-aware delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini Matrix Consulting",
    description:
      "Software development, AI, machine learning, and data strategy grounded in practical outcomes and community-aware delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

