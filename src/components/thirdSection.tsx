import { useEffect, useRef, useState } from "react";
import BlurText from "./BlurText";

const ThirdSection = () => {
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

  return (
    <div ref={sectionRef} className="relative z-30 bg-white">
      {/* How It Works */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <BlurText
            text="How it works"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl lg:text-6xl font-light mb-20 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                01
              </div>
              <BlurText
                text="Apply"
                delay={80}
                animateBy="letters"
                direction="top"
                className="text-2xl font-light mb-4"
              />
              <BlurText
                text="Apply to pulse points—wrists, neck, behind ears. The warmth activates the fragrance."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-gray-600 leading-relaxed"
              />
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                02
              </div>
              <BlurText
                text="Absorb"
                delay={80}
                animateBy="letters"
                direction="top"
                className="text-2xl font-light mb-4"
              />
              <BlurText
                text="The formula adapts to your unique body chemistry, creating a personalized scent."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-gray-600 leading-relaxed"
              />
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 text-2xl font-light">
                03
              </div>
              <BlurText
                text="Experience"
                delay={80}
                animateBy="letters"
                direction="top"
                className="text-2xl font-light mb-4"
              />
              <BlurText
                text="Feel the mood-enhancing effects throughout your day as the scent evolves."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-gray-600 leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <BlurText
                text="Pure ingredients, powerful results"
                delay={80}
                animateBy="words"
                direction="top"
                className="text-5xl lg:text-6xl font-light mb-8 leading-tight"
              />
              <BlurText
                text="We source only the finest natural ingredients from sustainable farms around the world. No synthetic fillers, no harsh chemicals."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-lg text-gray-600 leading-relaxed mb-6"
              />
              <BlurText
                text="Every bottle is crafted in small batches to ensure the highest quality and potency."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-lg text-gray-600 leading-relaxed"
              />
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-black pl-6">
                <BlurText
                  text="Bergamot"
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className="text-xl font-light mb-2"
                />
                <BlurText
                  text="Uplifting citrus note that reduces stress"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-600"
                />
              </div>
              <div className="border-l-2 border-black pl-6">
                <BlurText
                  text="Sandalwood"
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className="text-xl font-light mb-2"
                />
                <BlurText
                  text="Grounding base that promotes calm"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-600"
                />
              </div>
              <div className="border-l-2 border-black pl-6">
                <BlurText
                  text="Jasmine"
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className="text-xl font-light mb-2"
                />
                <BlurText
                  text="Floral heart that boosts confidence"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-600"
                />
              </div>
              <div className="border-l-2 border-black pl-6">
                <BlurText
                  text="Vetiver"
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className="text-xl font-light mb-2"
                />
                <BlurText
                  text="Earthy depth that enhances focus"
                  delay={40}
                  animateBy="words"
                  direction="top"
                  className="text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <BlurText
            text="What people say"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl lg:text-6xl font-light mb-20 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border border-gray-200 p-8 lg:p-12">
              <BlurText
                text="I've tried countless fragrances, but Eternal is different. It genuinely makes me feel more confident and centered throughout the day."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-lg lg:text-xl text-gray-800 mb-8 leading-relaxed font-light"
              />
              <div>
                <BlurText
                  text="Sarah M."
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className="font-light text-lg"
                />
                <BlurText
                  text="New York, NY"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  className="text-sm text-gray-500"
                />
              </div>
            </div>

            <div className="border border-gray-200 p-8 lg:p-12">
              <BlurText
                text="The science behind this is impressive. I noticed a real difference in my mood and energy levels. Plus, it smells incredible."
                delay={40}
                animateBy="words"
                direction="top"
                className="text-lg lg:text-xl text-gray-800 mb-8 leading-relaxed font-light"
              />
              <div>
                <BlurText
                  text="Michael R."
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className="font-light text-lg"
                />
                <BlurText
                  text="Los Angeles, CA"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  className="text-sm text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center w-full">
          <BlurText
            text="Start feeling better today"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl lg:text-7xl font-light mb-8 leading-tight"
          />
          <BlurText
            text="Free shipping on all orders. 30-day money-back guarantee."
            delay={60}
            animateBy="words"
            direction="top"
            className="text-xl lg:text-2xl text-gray-400 mb-12 font-light"
          />
          <button className="px-12 py-5 bg-white text-black text-sm tracking-wider hover:bg-gray-100 transition-colors">
            SHOP ETERNAL
          </button>
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;
