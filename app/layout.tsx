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
    "Gemini Matrix Consulting builds practical software, AI, and machine learning solutions, and helps teams adopt tools like Copilot, Claude, and Gemini with confidence.",
  icons: {
    icon: "/gemini-matrix-logo.png",
    shortcut: "/gemini-matrix-logo.png",
  },
  openGraph: {
    title: "Gemini Matrix Consulting",
    description:
      "Software development, AI, machine learning, and practical AI adoption strategy grounded in real outcomes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini Matrix Consulting",
    description:
      "Software development, AI, machine learning, and practical AI adoption strategy grounded in real outcomes.",
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

