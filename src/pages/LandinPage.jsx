import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <motion.main
      className="snap-y snap-mandatory h-screen overflow-y-scroll"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </motion.main>
  );
}
export default LandingPage;
