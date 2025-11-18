import BlurText from "./BlurText";

interface Product {
  name: string;
  latinName: string;
  benefit: string;
  bottleColor: string;
  targetState: string;
  impact: string;
}

const products: Product[] = [
  {
    name: "valerian",
    latinName: "valeriana officinalis",
    benefit: "relax",
    bottleColor: "#ffb3ba",
    targetState: "sleep",
    impact: "≈51%"
  },
  {
    name: "passiflora",
    latinName: "passiflora incarnata",
    benefit: "rest",
    bottleColor: "#c7b3ff",
    targetState: "calm + sleep",
    impact: "2.1x"
  },
  {
    name: "ashwagandha",
    latinName: "withania somnifera",
    benefit: "balance",
    bottleColor: "#d4a574",
    targetState: "calm",
    impact: ">95%"
  }
];

const FourthSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Three Product Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center min-h-screen justify-between py-12">
              {/* Product Name */}
              <div className="text-center mb-8 w-full">
                <BlurText
                  text={product.name}
                  delay={60}
                  animateBy="letters"
                  direction="bottom"
                  className="text-5xl lg:text-6xl xl:text-7xl font-light mb-4 uppercase"
                />
                
                {/* Latin Name and Benefit */}
                <div className="flex items-center justify-center gap-4 text-sm lg:text-base text-gray-400 mb-8 flex-wrap">
                  <span>lat.// {product.latinName}</span>
                  <span className="text-white">{product.benefit}</span>
                </div>

                {/* Product Bottle */}
                <div className="relative h-96 lg:h-[500px] w-32 mx-auto mb-8 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundColor: product.bottleColor,
                      width: "60px",
                      height: "100%",
                      margin: "0 auto",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    {/* Bottle Design Elements */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-black text-xs font-medium rotate-90 whitespace-nowrap">
                      sofi
                    </div>
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-black text-xl lg:text-2xl font-bold rotate-90 whitespace-nowrap">
                      {product.name}
                    </div>
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-black text-[8px] rotate-90 whitespace-nowrap text-center w-32">
                      plant extract // oral spray<br />
                      10ml e 0.33 fl.oz.
                    </div>
                    {/* Bottle Cap */}
                    <div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-6 rounded-t-lg"
                      style={{ backgroundColor: "#1a1a1a" }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Metrics */}
              <div className="w-full border-t border-gray-700 pt-6 mt-auto">
                <div className="flex justify-between items-center text-sm lg:text-base">
                  <span className="text-gray-400">target state: {product.targetState}</span>
                  <div className="flex items-center gap-2">
                    <span>
                      {index === 0 && "impact"}
                      {index === 1 && "sleep improvement"}
                      {index === 2 && "confidence"}
                      {": "}
                      {product.impact}
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
