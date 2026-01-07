import six from "../assets/6.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function ClassStudio() {
  return (
    <section className="relative bg-black text-white flex items-center min-h-[80vh] px-20 max-lg:px-10 overflow-hidden">

      {/* LEFT — TEXT */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="relative z-10 w-1/2 max-lg:w-full flex flex-col gap-10"
      >
        {/* TITLE */}
        <h2 className="text-7xl max-lg:text-5xl max-md:text-4xl font-extrabold uppercase tracking-tight leading-none">
          Class
          <span className="block text-[#ccfd06]">Studio</span>
        </h2>

        {/* DIVIDER */}
        <div className="h-[2px] w-24 bg-[#ccfd06]" />

        {/* COPY */}
        <p className="max-w-md text-gray-400 text-sm leading-relaxed">
          Structured group training built on discipline, intensity,
          and repetition. No excuses. No comfort. Only results.
        </p>

        {/* CTA — COMMAND */}
        <Link to="/reservation">
          <button
            className="
              inline-flex items-center justify-center
              px-10 py-4
              bg-[#ccfd06] text-black
              text-sm font-extrabold uppercase tracking-widest
              border-2 border-[#ccfd06]
              transition-all duration-300
              hover:bg-transparent hover:text-[#ccfd06]
              active:scale-95
            "
          >
            Enter The Class
          </button>
        </Link>
      </motion.div>

      {/* RIGHT — VIDEO */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="absolute right-0 top-0 h-full w-1/2 max-lg:hidden"
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        <video
          src={six}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
