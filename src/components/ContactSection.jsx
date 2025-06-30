import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.7 });
  const controls = useAnimation();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, x: -80, scale: 1 });
    }
  }, [inView, controls]);

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section
      ref={ref}
      className="snap-start h-screen flex items-center justify-center bg-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">
          Contact Us
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Get in touch for your next project
        </p>
        <motion.button
          onClick={handleSend}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#2563eb",
            boxShadow: "0 4px 24px rgba(37,99,235,0.2)",
          }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg"
        >
          Email Us
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          {sent && (
            <div className="text-green-600 font-medium">
              ✅ Thank you! We'll get back to you soon.
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
