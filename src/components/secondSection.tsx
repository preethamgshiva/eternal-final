import { useEffect, useRef, useState } from "react";
import BlurText from "./BlurText";

const SecondSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / windowHeight)
        );
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    opacity: scrollY,
    transform: `translateY(${(1 - scrollY) * 40}px)`,
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative sticky top-0 z-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Stats/Info */}
          <div style={fadeIn} className="transition-all duration-700">
            <div className="space-y-12">
              <div>
                <BlurText
                  text="87%"
                  delay={80}
                  animateBy="letters"
                  direction="top"
                  className="text-6xl lg:text-7xl font-light mb-4"
                />
                <BlurText
                  text="of users reported improved mood within 7 days"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-400 text-lg"
                />
              </div>
              <div>
                <BlurText
                  text="24h"
                  delay={80}
                  animateBy="letters"
                  direction="top"
                  className="text-6xl lg:text-7xl font-light mb-4"
                />
                <BlurText
                  text="long-lasting formula that evolves with your body chemistry"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-400 text-lg"
                />
              </div>
              <div>
                <BlurText
                  text="100%"
                  delay={80}
                  animateBy="letters"
                  direction="top"
                  className="text-6xl lg:text-7xl font-light mb-4"
                />
                <BlurText
                  text="natural ingredients, sustainably sourced"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-400 text-lg"
                />
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div style={fadeIn} className="transition-all duration-700 delay-150">
            <BlurText
              text="The science of scent"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl lg:text-5xl xl:text-6xl font-light mb-8 leading-tight"
            />
            <BlurText
              text="Our proprietary blend combines ancient aromatherapy wisdom with modern neuroscience. Each note is carefully selected to trigger positive emotional responses."
              delay={40}
              animateBy="words"
              direction="top"
              className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 font-light"
            />
            <BlurText
              text="Developed in partnership with leading fragrance scientists and tested in clinical trials, Eternal is more than a perfume—it's a wellness tool."
              delay={40}
              animateBy="words"
              direction="top"
              className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
