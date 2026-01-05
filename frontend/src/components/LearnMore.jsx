import eight from "../assets/8.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function LearnMore() {
  return (
    <section className="relative lg:h-[90vh] bg-[#ccfd06] text-black flex items-center justify-center px-6 py-16 overflow-hidden">
      
      {/* subtle background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 blur-3xl" />

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 flex max-lg:flex-col items-center gap-14 w-full max-w-7xl"
      >
        
        {/* IMAGE CARD */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{ rotate: 4, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative w-1/3 max-lg:w-2/3 rounded-2xl overflow-hidden bg-black/80 shadow-[0_0_80px_rgba(0,0,0,0.4)]"
        >
          <img
            src={eight}
            alt="BB Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-white/10" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="w-1/2 max-lg:w-full space-y-6"
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

        </motion.div>
      </motion.div>
    </section>
  );
}
