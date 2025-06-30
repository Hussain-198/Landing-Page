import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.7 });
  const controls = useAnimation();
  const [hasMounted, setHasMounted] = useState(false);
  const fullText = "Welcome to the landing page";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      let i = 0;
      setDisplayedText("");
      const type = () => {
        if (i <= fullText.length) {
          setDisplayedText(fullText.slice(0, i));
          i++;
          setTimeout(type, 60);
        }
      };
      type();
    }
  }, [inView]);

  useEffect(() => {
    if (!hasMounted) return;
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -80,
        scale: 0.96,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      });
    }
  }, [inView, controls, hasMounted]);

  return (
    <section
      ref={ref}
      className="snap-start h-screen flex items-center justify-center bg-blue-50"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -80, scale: 0.96 }}
        animate={controls}
      >
        <h1 className="text-5xl font-bold mb-4 text-blue-700 min-h-[3.5rem]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Experience smooth entry animation and scroll reveal effect
        </p>
        <motion.a
          href="#features"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#2563eb",
            boxShadow: "0 4px 24px rgba(37,99,235,0.2)",
          }}
          whileTap={{ scale: 1 }}
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-semibold text-lg transition-colors"
        >
          Explore Features
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
