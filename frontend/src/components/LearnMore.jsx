import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function LearnMore() {
  return (
    <section className="relative lg:h-[70vh] bg-[#ccfd06] text-black flex items-center px-15 py-8 overflow-hidden">

      {/* subtle background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 blur-3xl" />

      {/* TEXT */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="w-1/2 max-lg:w-full space-y-8 relative z-10"
      >
        <h2 className="text-6xl max-lg:text-4xl font-extrabold tracking-tight leading-tight">
          Built for
          <span className="block text-black/80 italic">
            Strength. Focus. Results.
          </span>
        </h2>

        <p className="text-xl max-lg:text-lg text-black/80 leading-relaxed">
          BB GYM is on a mission to help you achieve your fitness goals,
          build confidence, and live a powerful, healthy lifestyle.
        </p>

        {/* 🔥 EXPLORE BUTTON */}
        <button
          className="
            group inline-flex items-center gap-3
            bg-black text-[#ccfd06]
            px-8 py-4
            font-extrabold uppercase tracking-widest
            border-2 border-black
            transition-all duration-300 ease-out
            hover:bg-transparent hover:text-black
            active:scale-95
          "
        >
          Explore
          <span
            className="
              text-xl
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </motion.div>
    </section>
  );
}
