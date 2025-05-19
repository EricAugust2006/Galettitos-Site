import { Footer } from "./Components/Footer";
import { GoogleMaps } from "./Components/googleMap";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { Main } from "./Components/Main";

export const HomePage = () => {
  return (
    <>
      <div className="min-w-[320px] bg-[url(/BackgroundComponent.svg)] bg-cover bg-fixed bg-no-repeat flex flex-col gap-0 min-h-screen">
        <Header />
        <HeroSection />
        <Main />
        <GoogleMaps />
        <Footer />
      </div>
    </>
  );
};
