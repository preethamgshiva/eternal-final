import ModelViewer from "./ModelViewer";
import BlurText from "./BlurText";

const SecondSection = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="min-h-screen bg-black text-white relative sticky top-0 z-20">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 text-center lg:text-left">
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-center mb-10 lg:mb-0">
          <ModelViewer
            url="https://raw.githubusercontent.com/preethamgshiva/eternal-final/main/src/assets/perfume.glb"
            width={500}
            height={500}
            maxZoomDistance={4}
            autoRotate={false}
            modelXOffset={0}
            modelYOffset={0}
            defaultRotationX={0}
            defaultRotationY={45}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center">
          <BlurText
            text="The Next Chapter"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl lg:text-7xl font-bold mb-6"
          />
          <BlurText
            text="This new section now scrolls over the top of the landing page,
            creating a clean, overlapping transition."
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-xl text-gray-300 max-w-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
