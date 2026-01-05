import React from "react";
import { FaBicycle, FaHeartbeat } from "react-icons/fa";
import { GiWeightLiftingUp, GiRunningShoe } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurAmenities() {
  return (
    <section className="bg-black text-white px-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-6xl max-md:text-4xl text-right font-bold tracking-tight mb-16"
      >
        Our Amenities
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
        className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10"
      >
        {[
          {
            icon: <FaHeartbeat />,
            title: "Cardio Zone",
            text:
              "High-end cardio equipment designed to maximize endurance, heart health, and fat loss.",
            link: "/about",
          },
          {
            icon: <FaBicycle />,
            title: "Cycling Studio",
            text:
              "Immersive cycling sessions with performance tracking and elite-level energy.",
            link: "/about",
          },
          {
            icon: <GiWeightLiftingUp />,
            title: "Weight Zone",
            text:
              "Built for strength athletes with professional-grade free weights and machines.",
            link: "/about",
          },
          {
            icon: <GiRunningShoe />,
            title: "Class Studio",
            text:
              "Group classes engineered for intensity, discipline, and real transformation.",
            link: "/admin",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{
              y: -12,
              boxShadow: "0 30px 80px rgba(204,253,6,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="text-[#ccfd06] text-3xl"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-2xl font-bold text-[#ccfd06] uppercase tracking-wide">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {item.text}
            </p>

            <Link
              to={item.link}
              className="mt-auto inline-block w-fit rounded-full border border-[#ccfd06] px-6 py-2 text-sm font-semibold text-[#ccfd06] transition-all hover:bg-[#ccfd06] hover:text-black"
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
