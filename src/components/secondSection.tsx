import SplitText from "./SplitText";
import BlurText from "./BlurText";
import RotatingText from "./RotatingText";
import CountUp from "./CountUp";

const SecondSection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative sticky top-0 z-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Stats/Info */}
          <div>
            <div className="space-y-12">
              <div>
                <div className="text-6xl lg:text-7xl font-light mb-4">
                  <CountUp
                    from={0}
                    to={87}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <SplitText
                  text="of users reported improved mood within 7 days"
                  className="text-xl font-semibold text-center"
                  delay={50}
                  duration={0.3}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
              <div>
                <div className="text-5xl lg:text-7xl font-light mb-4">
                  <CountUp
                    from={0}
                    to={24}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  h
                </div>
                <SplitText
                  text="long-lasting formula that evolves with your body chemistry"
                  className="text-xl font-semibold text-center"
                  delay={30}
                  duration={0.3}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
              <div>
                <div className="text-6xl lg:text-7xl font-light mb-4">
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <SplitText
                  text="natural ingredients, sustainably sourced"
                  className="text-xl font-semibold text-center"
                  delay={30}
                  duration={0.3}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
            </div>
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
              className="text-2xl mb-8"
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
