import { useEffect, useRef, useState, useMemo } from "react";

interface SecondSectionProps {
  onAnimationComplete?: () => void;
}

const SecondSection = ({ onAnimationComplete }: SecondSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasCompletedRef = useRef(false);
  const scrollStartPositionRef = useRef(0);
  const animationStartPositionRef = useRef(0);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle delay after section enters view
  useEffect(() => {
    if (hasEnteredView && !animationStarted) {
      // Clear any existing timer
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }

      // Set delay timer - animation will start after delay
      delayTimerRef.current = setTimeout(() => {
        const currentScrollY = window.scrollY || window.pageYOffset;
        animationStartPositionRef.current = currentScrollY;
        setAnimationStarted(true);
      }, 800); // 800ms delay before animation starts
    }

    return () => {
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, [hasEnteredView, animationStarted]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const currentScrollY = window.scrollY || window.pageYOffset;
        
        // Check if section has entered view (section top is in viewport or sticky)
        // For sticky sections, check if it's at or near the top of viewport
        const isInView = rect.top <= windowHeight && rect.top >= -10;
        
        if (isInView && !hasEnteredView) {
          setHasEnteredView(true);
          scrollStartPositionRef.current = currentScrollY;
        }

        // Calculate animation progress only after delay has passed and animation has started
        if (hasEnteredView && animationStarted && !hasCompletedRef.current) {
          // Ensure animationStartPosition is set correctly
          if (animationStartPositionRef.current === 0 && currentScrollY > 0) {
            animationStartPositionRef.current = currentScrollY;
          }
          
          // For sticky sections, calculate progress based on scroll distance since animation started
          // Animation progresses as user scrolls while section is sticky
          const scrollDelta = Math.max(0, currentScrollY - animationStartPositionRef.current);
          const sectionHeight = windowHeight; // Use viewport height for consistent progress
          
          // Progress from 0 to 1 as user scrolls through one viewport height
          const progress = Math.max(0, Math.min(1, scrollDelta / sectionHeight));
          
          setAnimationProgress(progress);
          setScrollY(progress);

          // Trigger completion callback when animation reaches 100%
          if (progress >= 1 && !hasCompletedRef.current) {
            hasCompletedRef.current = true;
            if (onAnimationComplete) {
              onAnimationComplete();
            }
          }
        } else if (hasEnteredView && !animationStarted) {
          // Keep values at 0 until animation starts after delay
          setScrollY(0);
          setAnimationProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasEnteredView, animationStarted, onAnimationComplete]);

  const text = "sofi measures the impact\nof plants to improve the\nway we feel & sleep";
  
  // Split text into letters, preserving spaces and line breaks
  const letters = useMemo(() => {
    const chars: Array<{ char: string; isNewLine: boolean; charIndex: number }> = [];
    let charIndex = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '\n') {
        chars.push({ char: '\n', isNewLine: true, charIndex: -1 });
      } else {
        chars.push({ char: text[i], isNewLine: false, charIndex: charIndex++ });
      }
    }
    return chars;
  }, [text]);

  // Calculate how many actual characters (excluding newlines) should be bold based on animation progress
  const totalChars = letters.filter(l => !l.isNewLine).length;
  const boldThreshold = (hasEnteredView && animationStarted) ? Math.floor(animationProgress * totalChars) : 0;

  const textTransform = {
    opacity: 1,
    transform: `translateY(${(1 - scrollY) * 50}px)`,
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative sticky top-0 z-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-400 transition-all duration-700"
          style={textTransform}
        >
          {letters.map((item, index) => {
            if (item.isNewLine) {
              return <br key={index} />;
            }
            const isBold = item.charIndex < boldThreshold;
            return (
              <span
                key={index}
                style={{
                  fontWeight: isBold ? 'bold' : 'normal',
                  transition: 'font-weight 0.1s ease-out',
                }}
              >
                {item.char}
              </span>
            );
          })}
        </h2>
      </div>
    </div>
  );
};

export default SecondSection;
