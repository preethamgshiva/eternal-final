import { useEffect, useRef, useState } from "react";

interface ScrollFrameAnimationProps {
  totalFrames: number;
  frameBasePath: string;
  frameExtension?: string;
}

const ScrollFrameAnimation = ({
  totalFrames,
  frameBasePath,
  frameExtension = "jpg",
}: ScrollFrameAnimationProps) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload all images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${frameBasePath}/${i}.${frameExtension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [totalFrames, frameBasePath, frameExtension]);

  // Draw current frame on canvas
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[currentFrame - 1];
    if (!img) return;

    // Set canvas size to match image
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }, [currentFrame, imagesLoaded]);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollStart = -rect.height;
      const scrollEnd = window.innerHeight;
      const scrollRange = scrollEnd - scrollStart;
      const progress = Math.max(
        0,
        Math.min(1, (scrollEnd - rect.top) / scrollRange)
      );

      setScrollProgress(progress);

      const frameIndex = Math.floor(progress * (totalFrames - 1)) + 1;
      setCurrentFrame(Math.min(frameIndex, totalFrames));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

  const textOpacity = Math.max(0, 1 - scrollProgress * 2);
  const textTransform = {
    opacity: textOpacity,
    transform: `translateY(${scrollProgress * -100}px) scale(${
      1 - scrollProgress * 0.3
    })`,
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Text Overlay */}
        <div
          className="absolute top-20 left-0 right-0 z-10 text-center px-6 transition-all duration-100"
          style={textTransform}
        >
          <h2 className="text-6xl lg:text-7xl font-semibold text-black mb-4">
            Experience the Journey
          </h2>
          <p className="text-2xl lg:text-2xl text-gray-300 font-semibold text-black max-w-3xl mx-auto">
            Watch as our fragrance comes to life, frame by frame
          </p>
        </div>

        {!imagesLoaded && (
          <div className="text-white text-2xl">Loading frames...</div>
        )}
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-screen object-contain"
          style={{ display: imagesLoaded ? "block" : "none" }}
        />
      </div>
    </div>
  );
};

export default ScrollFrameAnimation;
