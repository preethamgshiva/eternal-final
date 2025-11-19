import { useEffect, useRef, useState } from "react";
import LogoImage from "../assets/logo.png";
import Image from "../assets/hand.png";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

const LandingSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
            <a href="#" className="hover:opacity-60 transition-opacity">
              Products
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              Science
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              About
            </a>
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
          <div className="max-w-4xl">
            <h1 className="text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-bold mb-12 leading-[0.85] tracking-tight lowercase">
              feel
              <br />
              better
            </h1>
            <p className="text-base lg:text-lg text-gray-700 mb-10 leading-relaxed max-w-lg">
              we have used plants for thousands of years in our search for
              better wellness— sofi is charting the future of plant-based
              remedies
            </p>
            <button className="px-10 py-4 bg-black text-white text-sm rounded-full hover:bg-gray-900 transition-colors">
              shop sofi
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex items-center justify-end overflow-hidden lg:pr-0">
          <div className="relative w-full h-screen" style={imageTransform}>
            <img
              src={Image}
              alt="Eternal Fragrance"
              className="w-full h-full object-cover object-left scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [showThirdSection, setShowThirdSection] = useState(false);

  const handleSecondSectionComplete = () => {
    setShowThirdSection(true);
  };

  return (
    <div className="bg-white">
      <LandingSection />
      <SecondSection onAnimationComplete={handleSecondSectionComplete} />
      <div 
        style={{ 
          opacity: showThirdSection ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: showThirdSection ? 'auto' : 'none'
        }}
      >
        <ThirdSection />
      </div>
    </div>
  );
};

export default Home;
