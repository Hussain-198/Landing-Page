import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <section className="min-h-screen bg-black">
      <div ref={ref} className="relative pt-38 mx-48 px-8 flex flex-col gap-7">
        <motion.h1
          initial={{ opacity: 0, x: -80, scale: 0.86, filter: "blur(12px)" }}
          animate={
            inView ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 0.8, ease: [0.5, 1, 0.3, 1], delay: 0.1 }}
          className="text-white text-6xl"
        >
          Linear is a purpose-built tool for planning and building products
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.86, filter: "blur(12px)" }}
          animate={
            inView ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 0.8, ease: [0.5, 1, 0.3, 1], delay: 0.35 }}
          className="text-zinc-400 text-2xl"
        >
          <h3 className="">Meet the system for modern software development.</h3>
          <h3> Streamline issues, projects, and product roadmaps.</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.86, filter: "blur(12px)" }}
          animate={
            inView ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 0.8, ease: [0.5, 1, 0.3, 1], delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <button className="rounded-xl px-5 py-2 bg-gray-100 text-black text-base font-medium hover:bg-gray-200 transition hover:cursor-pointer">
            Start building
          </button>
          <div className="hover:bg-zinc-800 py-2 px-2 rounded-xl">
            <button className="flex items-center ml-2 text-base cursor-pointer bg-transparent bg-clip-text text-transparent font-semibold hover:underline bg-gradient-to-r from-white to-zinc-500">
              <span>Introducing Linear for Agents</span>
              <ChevronRight className="w-5 h-5 ml-1 text-zinc-400" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
