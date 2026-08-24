import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import WelcomeSection from "../components/home/WelcomeSection";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ProductsPreview from "../components/home/ProductsPreview";
import MillingProcess from "../components/home/MillingProcess";
import TrustCTA from "../components/home/TrustCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WelcomeSection />
        <Stats />
        <AboutPreview />
        <ProductsPreview />
        <MillingProcess />
        <TrustCTA />
      </main>

      <Footer />
    </>
  );
}