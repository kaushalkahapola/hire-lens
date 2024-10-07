import { FaqSimple } from "./components/HomePage/FAQ/FaqSimple"
import { FeaturesGrid } from "./components/HomePage/Features/FeaturesGrid"
import { FooterSimple } from "./components/HomePage/Footer/FooterSimple"
import { HeroText } from "./components/HomePage/Hero/HeroText"

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <HeroText/>
      </section>

      {/* Features Section */}
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <FeaturesGrid/>
      </section>

      {/* FAQ Section */}
      <section className="">
        <FaqSimple/>
      </section>

      {/* Footer Section */}
      <section className="">
        <FooterSimple/>
      </section>
    </div>
  )
}

export default HomePage