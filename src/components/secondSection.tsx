import { useEffect, useRef, useState } from "react";
import BlurText from "./BlurText";
import RotatingText from "./RotatingText";
import ModelViewer from "./ModelViewer";

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

  const modelTransform = {
    opacity: scrollY,
    transform: `scale(${0.5 + scrollY * 0.5}) rotateY(${
      (1 - scrollY) * 45
    }deg)`,
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative sticky top-0 z-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - 3D Model */}
          <div
            className="flex items-center justify-center transition-all duration-700"
            style={modelTransform}
          >
            <ModelViewer
              url="/final.glb"
              width={800}
              height={800}
              autoFrame={true}
              defaultZoom={2}
              modelXOffset={-0.3}
              showScreenshotButton={false}
            />
          </div>

          {/* Right - Description */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight inline-flex items-center gap-3 flex-nowrap">
                <span className="whitespace-nowrap">The science of</span>
                <RotatingText
                  texts={["scent", "aroma", "fragrance"]}
                  mainClassName="inline-flex px-2 py-1 bg-white text-black overflow-hidden rounded-md text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap flex-shrink-0"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h2>
            </div>
            <BlurText
              text="Our proprietary blend combines ancient aromatherapy wisdom with modern neuroscience. Each note is carefully selected to trigger positive emotional responses."
              delay={10}
              animateBy="letters"
              direction="top"
              className="text-2xl mb-8 font-none"
            />
            <BlurText
              text="Developed in partnership with leading fragrance scientists and tested in clinical trials, Eternal is more than a perfume—it's a wellness tool."
              delay={10}
              animateBy="letters"
              direction="top"
              className="text-2xl mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
