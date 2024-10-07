import { FaqSimple } from "./components/HomePage/FAQ/FaqSimple";
import { FeaturesGrid } from "./components/HomePage/Features/FeaturesGrid";
import { HeroText } from "./components/HomePage/Hero/HeroText";

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-center h-[100vh]">
        <HeroText />
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col justify-center items-center h-[100vh]">
        <FeaturesGrid />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="">
        <FaqSimple />
      </section>
    </div>
  );
};

export default HomePage;
