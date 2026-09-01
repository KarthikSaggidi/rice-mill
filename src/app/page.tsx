import Navbar from "../components/Navbar";
import AboutPreview from "../components/home/AboutPreview";
import Hero from "../components/home/Hero";
import MillingProcess from "../components/home/MillingProcess";
import ProductsPreview from "../components/home/ProductsPreview";
import TrustCTA from "../components/home/TrustCTA";
import WelcomeSection from "../components/home/WelcomeSection";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WelcomeSection />
        <AboutPreview />
        <ProductsPreview />
        <MillingProcess />
      </main>

      <TrustCTA />
    </>
  );
}