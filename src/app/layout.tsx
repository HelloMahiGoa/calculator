import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebSiteJsonLd } from "@/components/seo/JsonLd";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculators.digital"),
  title: { default: "Calculators.digital – Free Online Calculators", template: "%s | Calculators.digital" },
  description: "Free online calculators for home, office, and students. Basic calculator with real keypad, history, memory, and more. Mobile-first.",
  verification: {
    google: "OEiuZwZ40jvWxVVl-6eSe-45ZMHkEtqZQ-U-5MuOaEM",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jetBrainsMono.variable} ${outfit.variable} min-h-screen antialiased`}>
        <WebSiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
