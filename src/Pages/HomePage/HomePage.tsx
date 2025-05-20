import { Footer } from "./Components/Footer";
import { GoogleMaps } from "./Components/googleMap";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { Main } from "./Components/Main";
import CustomCursor from "../../GlobalComponents/MouseCustom";

export const HomePage = () => {
  return (
    <>
      <div className="bg-white cursor-none">
        <CustomCursor />
        <Header />
        <HeroSection />
        <Main />
        <GoogleMaps />
        <Footer />
      </div>
    </>
  );
};
