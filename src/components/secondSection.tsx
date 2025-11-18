import { useEffect, useRef, useState } from "react";

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

  const textTransform = {
    opacity: scrollY,
    transform: `translateY(${(1 - scrollY) * 50}px)`,
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative sticky top-0 z-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-400 transition-all duration-700"
          style={textTransform}
        >
          sofi measures the impact
          <br />
          of plants to improve the
          <br />
          way we feel & sleep
        </h2>
      </div>
    </div>
  );
};

export default SecondSection;
