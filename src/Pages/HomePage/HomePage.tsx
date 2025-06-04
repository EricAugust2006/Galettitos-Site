"use client";

import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { InfoCards } from "./Components/InfoCards";
import { AboutSection } from "./Components/AboutSection";
import { LocationSection } from "./Components/locationSection";
import { MenuSection } from "./Components/MenuSection";
import { motion } from "framer-motion";
import Navigation from "../../GlobalComponents/Navigation";
export const HomePage = () => {
  const LineSeparation = () => {
    return (
      <motion.div
        className="bg-black h-[1px] flex justify-center align-center "
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 0.8 }}
        exit={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    );
  };
  return (
    <>
      <Navigation>
        <div className="bg-white overflow-x-hidden">
          {/* <CustomCursor /> */}
          <Header />
          <HeroSection />
          <InfoCards />

          {LineSeparation()}

          <AboutSection />
          {LineSeparation()}

          <MenuSection />
          {LineSeparation()}

          <LocationSection />
          <Footer />
        </div>
      </Navigation>
    </>
  );
};
