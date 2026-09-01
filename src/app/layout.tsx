import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mahadal Rice Mill",
    template: "%s | Mahadal Rice Mill",
  },
  description:
    "Mahadal Rice Mill delivers quality rice processed with modern technology, careful quality control and trusted milling practices.",
  keywords: [
    "Mahadal Rice Mill",
    "Rice Mill",
    "Basmati Rice",
    "Sona Masuri Rice",
    "Steam Rice",
    "Raw Rice",
    "Quality Rice",
    "Rice Supplier",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#faf8f0] antialiased">
        {/* =====================================================
            FIXED NAVBAR
        ===================================================== */}
        <Navbar />

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <Footer />
      </body>
    </html>
  );
}