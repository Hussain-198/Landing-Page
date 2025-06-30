import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const features = [
  "✨ Entry Animations",
  "✨ Scroll Reveal Effects",
  "✨ Modular Components",
  "✨ Tailwind CSS Styling",
];

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, transition: { type: "spring", stiffness: 80 } },
};

function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="snap-start h-screen flex items-center justify-center bg-blue-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={listVariants}
        className="max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Features</h2>
        <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 justify-center items-center">
          {features.map((feature, idx) => (
            <motion.li
              key={feature}
              variants={itemVariants}
              className="bg-white rounded-xl px-3 py-5 shadow-md w-60 text-lg text-gray-700 font-medium cursor-pointer hover:shadow-xl transition"
              whileHover={{
                y: 8,
                // scale: 1,
                boxShadow: "0 8px 32px rgba(37,99,235,0.12)",
              }}
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
export default FeaturesSection;
