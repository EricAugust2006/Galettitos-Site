"use client";

import { Footer } from "./Components/Footer";
import { GoogleMaps } from "./Components/googleMap";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { InfoCards } from "./Components/InfoCards";
import { Main } from "./Components/Main";
import CustomCursor from "../../GlobalComponents/MouseCustom";
import { AboutSection } from "./Components/AboutSection";

export const HomePage = () => {
  return (
    <>
      <div className="bg-white cursor-none">
        <CustomCursor />
        <Header />
        <HeroSection />
        <InfoCards />
        <AboutSection/>
        {/* <Main /> */}
        <GoogleMaps />
        <Footer />
      </div>
    </>
  );
};
