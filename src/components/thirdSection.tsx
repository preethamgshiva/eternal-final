const ThirdSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black relative z-30">
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <h2 className="text-5xl lg:text-7xl font-bold mb-6">Third Section</h2>
        <p className="text-xl text-gray-700 max-w-2xl">This third section</p>
      </div>
      {/* I've added extra space below to show the scroll effect working */}
      <div className="h-screen p-10">
        <h3 className="text-4xl font-bold text-center">More Content Here</h3>
        <p className="text-center text-gray-600 mt-4">content</p>
      </div>
    </div>
  );
};

export default ThirdSection;
