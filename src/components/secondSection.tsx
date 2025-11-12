import ModelViewer from "./ModelViewer";

const SecondSection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative sticky top-0 z-20">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 text-center lg:text-left">
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-center mb-10 lg:mb-0">
          <ModelViewer
            url="https://raw.githubusercontent.com/preethamgshiva/eternal-final/main/src/assets/final.glb"
            width={500}
            height={500}
            modelXOffset={0}
            modelYOffset={-1}
            defaultZoom={0.5}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            The Next Chapter
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            This new section now scrolls over the top of the landing page,
            creating a clean, overlapping transition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
