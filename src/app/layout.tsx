import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
