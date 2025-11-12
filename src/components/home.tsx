// To add your image from the assets folder:
// 1. Uncomment the line below
// 2. Update the path to your image
import ProductImage from "../assets/home_page.png";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

const LandingSection = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative sticky top-0 z-10 overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 lg:p-10">
        <div className="text-xl font-bold uppercase tracking-widest">
          Eternal
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section (Text) */}
        <div className="flex-1 flex flex-col justify-center p-6 pt-24 md:p-10 lg:p-20 md:w-1.2">
          <h1 className="text-6xl lg:text-8xl xl:text-[10rem] font-extrabold leading-none mb-6">
            feel <br /> better
          </h1>
          <p className="text-lg text-gray-700 max-w-md mb-10">
            we have used plants for thousands of years in our search for better
            wellness—Eternal is charting the future of plant-based remedies
          </p>
          <button className="bg-black text-white px-8 py-4 text-lg font-medium tracking-wide w-fit hover:bg-gray-800 transition-colors">
            shop Eternal
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-0 md:w-1/2 overflow-hidden relative">
          <div className="absolute inset-0"></div>

          <img
            src={ProductImage}
            alt="Product in hand"
            className="w-full h-auto max-w-lg md:max-w-none md:h-[90vh] object-contain relative z-10 scale-110 md:scale-100"
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <LandingSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default Home;
