import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const stories = [
  { img: one, text: "Dropped 18kg. Zero excuses. Never looked back." },
  { img: two, text: "Six months of discipline. Body rebuilt from scratch." },
  { img: three, text: "From weak habits to ruthless consistency." },
  { img: four, text: "Pain paid off. Strength stayed." },
];

export default function SuccessStories() {
  return (
    <section className="relative bg-black text-white px-20 py-16 overflow-hidden max-lg:px-10">

      {/* TITLE */}
      <motion.h2
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="
          text-4xl max-md:text-3xl
          font-extrabold uppercase tracking-tight
          mb-10
        "
      >
        Proof.
        <span className="text-[#ccfd06] ml-2">Not Promises.</span>
      </motion.h2>

      {/* INFINITE CAROUSEL */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {/* DUPLICATED CONTENT FOR LOOP */}
          {[...stories, ...stories].map((item, i) => (
            <div
              key={i}
              className="
                relative flex flex-col gap-4
                border-l-4 border-[#ccfd06]
                pl-4
                min-w-[280px] sm:min-w-[320px]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="
                    h-[200px] w-full object-cover
                    grayscale contrast-125
                    transition-all duration-500
                    hover:grayscale-0
                  "
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* TEXT */}
              <p className="text-sm font-extrabold uppercase tracking-wide leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
