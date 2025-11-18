import VariableProximity from "./VariableProximity";
import BlurText from "./BlurText";
import { useRef } from "react";

const thirdSection = () => {
  const ingredientsRef = useRef<HTMLDivElement>(null);
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div ref={ingredientsRef} className="mb-8">
              <VariableProximity
                label="Pure ingredients, powerful results"
                fromFontVariationSettings="'wght' 250, 'wdth' 80"
                toFontVariationSettings="'wght' 800, 'wdth' 120"
                containerRef={ingredientsRef}
                radius={160}
                falloff="linear"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  fontWeight: 250,
                  color: "#000000",
                  fontFamily: '"Roboto Flex", sans-serif',
                  lineHeight: 1.1,
                }}
              />
            </div>
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
  );
};
export default thirdSection;
