import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { ChevronRight, CirclePlus, X } from "lucide-react";

function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedIndex]);

  
  const escHandler = useCallback((e) => {
    if (e.key === "Escape") setExpandedIndex(null);
  }, []);
  useEffect(() => {
    if (expandedIndex !== null) {
      window.addEventListener("keydown", escHandler);
      return () => window.removeEventListener("keydown", escHandler);
    }
  }, [expandedIndex, escHandler]);

  const cards = [
    {
      img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
      alt: "product",
      title: "Purpose-built for product development",
      iconSize: 10,
      details: (
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold leading-tight mb-8">
            Purpose-built for
            <br />
            product development
          </h1>
          <p className="text-zinc-500 text-base mb-6 px-12">
            Linear was developed with a specific purpose: to empower product
            teams to do their best work. Every aspect is intentionally designed
            to help teams focus on what they do best: Planning, building, and
            shipping great products.
          </p>
          <p className="text-zinc-500 text-base mb-6 px-12">
            Because of its fit-to-purpose design, Linear is incredibly easy to
            use, but grows more powerful as you scale. It's principled where it
            needs to be, but provides enough flexibility to adapt to your team's
            unique way of working.
          </p>
          <p className="text-zinc-500 text-base mb-10 px-12">
            We believe that this approach creates a better way to build
            products. And more than 10,000 product teams around the globe – from
            early-stage startups to public companies – agree.
          </p>
          <div className="border-t border-b border-zinc-900 py-10 my-10">
            <blockquote className="text-gray-400 text-xl italic text-center mb-4 px-25">
              "We'd tried many tools before Linear but none of them felt like
              they were made for the way we work. Linear was a breath of fresh
              air – speedy, snappy, and a pleasure to use."
            </blockquote>
            <div className="flex justify-center items-center mt-8 hover:cursor-pointer">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
              >
                <polygon points="28,1 50,26 6,26" fill="#8B8E97" />
              </svg>
              <span
                className="text-[#8B8E97] text-4xl tracking-tight mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Vercel
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-10 mb-20">
            <div className="grid grid-cols-2 gap-x-24 gap-y-10 w-full max-w-3xl text-center">
              <div>
                <div className="text-white text-6xl">10k+</div>
                <div className="text-gray-400 text-sm mt-2">
                  Paying customers
                </div>
              </div>
              <div>
                <div className="text-white text-6xl">500k+</div>
                <div className="text-gray-400 text-sm mt-2">Active users</div>
              </div>
              <div>
                <div className="text-white text-6xl">45%</div>
                <div className="text-gray-400 text-sm mt-2">
                  of YC companies build with Linear
                </div>
              </div>
              <div>
                <div className="text-white text-6xl">66%</div>
                <div className="text-gray-400 text-sm mt-2">
                  of the top AI startups use Linear
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5a4ff140-41a2-42dd-0723-e14cccc3e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
      alt: "speed",
      title: "Designed to move fast",
      iconSize: 7,
      details: (
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl font-bold leading-tight mb-8">
            Designed to move fast
          </h1>
          <p className="text-gray-400 text-base mb-6 px-12">
            Linear is built in pursuit of high-performance. With its
            keyboard-first design, realtime sync, and zero-friction workflows,
            it delivers a focused experience ideal for fast-paced development
            environments.
          </p>
          <p className="text-gray-400 text-base mb-6 px-12">
            Linear's obsessive focus on speed not only results in improved
            developer productivity, but also enables teams to move faster.
          </p>
          <p className="text-gray-400 text-base mb-6 px-12">
            Companies that switch to Linear report a significant uplift in newly
            filed tickets, vastly reduced issue closing times, and products that
            ship faster.
          </p>
          <p className="text-gray-400 text-base mb-6 pr-20">
            For us, speed is not just an afterthought. It's our most important
            feature.
          </p>
          <div className="border-t border-b border-zinc-900 py-10 my-10">
            <blockquote className="text-gray-400 text-xl italic text-center mb-4 px-25">
              "Even as we continue to grow, we're moving faster because Linear
              keeps our workflows simple."
            </blockquote>
            <div className="flex justify-center items-center">
              <img
                className="hover:cursor-pointer"
                src="../../src/assets/images/Remote.png"
                alt="remote"
                width={150}
              />
            </div>
          </div>
          <div className=" py-10 flex flex-col items-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-gray-300 text-sm text-center">
                Teams that switch to Linear create more issues and close them
                faster
              </span>
              <svg
                className="ml-2"
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="10" fill="#8B8E97" />
                <text
                  x="10"
                  y="15"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#18191A"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                >
                  i
                </text>
              </svg>
            </div>
            <div className="flex flex-row gap-24 justify-center mb-20">
              <div className="flex flex-col items-center">
                <span className="text-white text-7xl  leading-none">2x</span>
                <span className="text-gray-400 text-sm mt-4">
                  Increase in filed issues
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white text-7xl leading-none">1.6x</span>
                <span className="text-gray-400 text-sm mt-4">
                  Faster issue resolution
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      img: "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0068f657-fe3f-47e9-6819-0ba9e6533900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
      alt: "create",
      title: "Crafted to perfection",
      iconSize: 7,
      details: (
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl font-bold leading-tight mb-8">
            Crafted to perfection
          </h1>
          <p className="text-gray-400 text-base mb-6 px-12">
            We believe that there is a lost art of building software. A
            craftsmanship that yields products of an exceptional, almost
            magical, quality.
          </p>
          <p className="text-gray-400 text-base mb-6 px-12">
            It's difficult to describe this quality with words and impossible to
            measure it in numbers, but you can feel it when it's there. You know
            it when you experience it.
          </p>
          <p className="text-gray-400 text-base mb-6 px-12">
            Achieving this product quality is a function of both the talent of
            its creators and the tools at their disposal. Linear was built in
            pursuit of giving the best product teams a tool that matches their
            skill and ambition.
          </p>
          <p className="text-gray-400 text-base mb-6 px-12">
            A tool with unparalleled speed, precision-engineered robustness, and
            pixel-perfect UI. A tool that abstracts away any impurity that
            stands in the way between the creator and their craft. A tool that
            finally lets product teams focus on what matters most:
          </p>
          <p className="text-gray-400 text-base mb-6 pr-34">
            Bringing back product experiences of the highest level of quality.
          </p>
          <div className="border-t border-zinc-900 pt-10 my-10">
            <blockquote className="text-gray-400 text-xl italic text-center mb-4 px-10">
              "In a world of clunky, slow, and bloated tools, Linear reverses
              the script on all three and adds an unrivaled level of delight and
              polish."
            </blockquote>
            <div className="flex justify-center items-center">
              <img
                className="hover:cursor-pointer"
                src="../../src/assets/images/watershed.png"
                alt="remote"
                width={150}
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-black flex flex-col items-center">
      <div className="flex flex-row justify-between items-start w-full max-w-6xl mb-5 px-15">
        <h1 className="text-white text-6xl leading-tight w-1/2">
          Made for modern
          <br />
          product teams
        </h1>
        <h5 className="text-zinc-400 text-lg w-1/2 pl-12 pt-4">
          Linear is shaped by the practices and principles that distinguish
          world-class product teams from the rest: relentless focus, fast
          execution, and a commitment to the quality of craft.{" "}
          <span className="text-white inline-flex items-center font-semibold cursor-pointer hover:underline">
            Make the switch
            <ChevronRight className="w-4 h-4 ml-1 text-white" />
          </span>
        </h5>
      </div>
      <div className="flex flex-row gap-2 w-full max-w-6xl px-15 pt-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-start justify-between w-1/3 min-w-[320px] max-w-[400px] shadow-lg hover:bg-white/ cursor-pointer transition-colors duration-200"
            onClick={() => setExpandedIndex(idx)}
            style={{ zIndex: expandedIndex === idx ? 50 : 1 }}
          >
            <img
              className="w-full h-auto mb-8 rounded-2xl"
              src={card.img}
              alt={card.alt}
            />
            <div className="flex justify-center items-center gap-10">
              <div className="text-white text-xl font-semibold mb-2">
                {card.title}
              </div>
              <CirclePlus
                className={`text-zinc-600 h-${card.iconSize} w-${card.iconSize}`}
              />
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-zinc-950 rounded-3xl p-8 shadow-2xl max-w-3xl w-full flex flex-col items-center max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedIndex(null)}
                className="sticky top-0 right-0 self-end text-white bg-zinc-800 rounded-full p-2 hover:bg-zinc-700 focus:outline-none z-50 hover:cursor-pointer"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                className="w-full h-auto mb-8 rounded-2xl"
                src={cards[expandedIndex].img}
                alt={cards[expandedIndex].alt}
              />
              <div className="w-full flex flex-col items-center">
                {cards[expandedIndex].details}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
export default FeaturesSection;
