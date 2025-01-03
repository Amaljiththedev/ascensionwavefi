"use client";

import { motion } from "framer-motion";
import { AppleCardsCarouselDemo } from "@/components/Carsouel";
import DeploymentCard from "@/components/Deployment";
import { Example2 } from "@/components/Example2";
import { FeaturesSectionDemo } from "@/components/Features";
import FeaturesWithHeading from "@/components/FeaturesGrid";
import TwoColumnFooter from "@/components/Footer";
import Heropage from "@/components/Heropage";
import { LogoCarouselDemo } from "@/components/Logo";
import Navbar from "@/components/Navbar";
import { WorldMapDemo } from "@/components/worldmapdemo";

const scrollVariant = {
  hidden: { opacity: 0, y: 50 }, // Start slightly below with opacity 0
  visible: { opacity: 1, y: 0 }, // Animate to original position with full opacity
};

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black via-black to-red-950 text-white animate-gradient bg-[length:200%_200%]">
      {/* Header with Navbar */}
      <header className="sticky top-0 z-50 w-full overflow-hidden">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="max-w-full overflow-hidden -mt-52">
        {/* Hero Section */}
        <section aria-labelledby="hero-section" className="overflow-hidden w-full">
          <Heropage />
        </section>

        {/* Features Section */}
        <motion.section
          aria-labelledby="features-section"
          className="-mt-72 mb-20 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }} // Triggers up and down
          transition={{ duration: 0.4, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <FeaturesWithHeading />
        </motion.section>

        <motion.section
          aria-labelledby="cards-carousel"
          className="-mt-10 mb-20 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <AppleCardsCarouselDemo />
        </motion.section>

        <motion.section
          aria-labelledby="deployment-card"
          className="-mt-10 mb-20 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <DeploymentCard />
        </motion.section>

        <motion.section
          aria-labelledby="features-section-demo"
          id="services-section"
          className="-mt-10 mb-20 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <FeaturesSectionDemo />
        </motion.section>

        <motion.section
          aria-labelledby="logo-carousel"
          className="-mt-10 mb-20 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <LogoCarouselDemo />
        </motion.section>

        <motion.section
          aria-labelledby="book-a-call"
          id="contact-section"
          className="-mt-10 mb-20 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <Example2 />
        </motion.section>

        <motion.section
          aria-labelledby="world-map"
          className="-mt-28 overflow-hidden w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          variants={scrollVariant}
        >
          <WorldMapDemo />
        </motion.section>

        {/* Footer */}
        <footer className="w-full overflow-hidden bg-transparent">
          <TwoColumnFooter />
        </footer>
      </main>
    </div>
  );
}
