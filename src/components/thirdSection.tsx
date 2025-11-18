import { useRef } from "react";
import BlurText from "./BlurText";
import VariableProximity from "./VariableProximity";
import ScrollFrameAnimation from "./ScrollFrameAnimation";

const ThirdSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} className="relative z-30 bg-white">
      {/* Scroll Frame Animation */}
      <section className="bg-black">
        <ScrollFrameAnimation
          totalFrames={175}
          frameBasePath="/reel"
          frameExtension="jpg"
        />
      </section>

      {/* How It Works */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <BlurText
            text="How it works"
            delay={80}
            animateBy="letters"
            direction="bottom"
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

      {/* Testimonials */}
      <section className="min-h-screen flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div ref={testimonialsRef} className="mb-20">
            <VariableProximity
              label="What people say"
              fromFontVariationSettings="'wght' 200, 'wdth' 75"
              toFontVariationSettings="'wght' 900, 'wdth' 125"
              containerRef={testimonialsRef}
              radius={220}
              falloff="exponential"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 200,
                color: "#000000",
                fontFamily: '"Roboto Flex", sans-serif',
                lineHeight: 1.2,
                textAlign: "center",
                display: "block",
              }}
            />
          </div>

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
            delay={60}
            animateBy="letters"
            direction="bottom"
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
