import { useEffect, useRef, useState } from "react";
import ProductImage from "../assets/home_page.png";
import LogoImage from "../assets/logo.jpeg";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import BlurText from "./BlurText";
import VariableProximity from "./VariableProximity";

const LandingSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / window.innerHeight);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageTransform = {
    transform: `translateY(${scrollY * 20}%)`,
    opacity: Math.max(0, 1 - scrollY * 0.6),
  };

  const textTransform = {
    transform: `translateY(${scrollY * -15}%)`,
    opacity: Math.max(0, 1 - scrollY * 0.8),
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white text-black sticky top-0 z-10"
    >
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <img 
            src={LogoImage} 
            alt="Eternal Logo" 
            className="h-10 lg:h-12 w-auto object-contain"
          />
          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#" className="hover:opacity-60 transition-opacity">Products</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Science</a>
            <a href="#" className="hover:opacity-60 transition-opacity">About</a>
          </nav>
          <button className="text-sm underline underline-offset-4">Shop</button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20">
        {/* Left - Text */}
        <div
          className="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-20 lg:py-0"
          style={textTransform}
        >
          <div className="max-w-xl">
            <div
              ref={containerRef}
              className="mb-8"
              style={{ minHeight: "180px" }}
            >
              <VariableProximity
                label="feel better"
                fromFontVariationSettings="'wght' 300, 'wdth' 75"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                containerRef={containerRef}
                radius={200}
                falloff="exponential"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontWeight: 300,
                  color: "#000000",
                  textTransform: "lowercase",
                  fontFamily: '"Roboto Flex", sans-serif',
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              />
            </div>
            <BlurText
              text="Science-backed fragrance designed to enhance your wellbeing. Clinically proven to improve mood and confidence."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed font-light"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors">
                SHOP NOW
              </button>
              <button className="px-8 py-4 border border-black text-black text-sm tracking-wider hover:bg-black hover:text-white transition-all">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-12 lg:py-0">
          <div className="relative w-full max-w-lg" style={imageTransform}>
            <img
              src={ProductImage}
              alt="Eternal Fragrance"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-white">
      <LandingSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Home;
