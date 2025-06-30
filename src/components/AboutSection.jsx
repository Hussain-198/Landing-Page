import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.7 });
  const controls = useAnimation();
  const [showFact, setShowFact] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, x: -80, scale: 1 });
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="snap-start h-screen flex items-center justify-center bg-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.96 }}
        animate={controls}
        transition={{ duration: 0.9, ease: [0.5, 1, 0.3, 1] }}
        className="max-w-2xl text-center"
      >
        {/* Floating icon animation */}
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex justify-center mb-4"
        >
          <span className="inline-block text-5xl">🚀</span>
        </motion.div>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">About Us</h2>
        <p className="text-gray-700 text-lg mb-4">
          We built animated landing page with React, Framer-motion and Tailwind
          CSS
        </p>
        <button
          onClick={() => setShowFact((v) => !v)}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition mb-2"
        >
          {showFact ? "Hide Fun Fact" : "Show Fun Fact"}
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showFact ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {showFact && (
            <div className="mt-2 text-blue-700 font-medium">
              🎉 Fun Fact: Framer Motion can animate anything in React, not just
              CSS!
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
