import React from "react";
import { FaBicycle, FaHeartbeat } from "react-icons/fa";
import { GiWeightLiftingUp, GiRunningShoe } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const amenities = [
  {
    icon: <FaHeartbeat />,
    title: "Cardio Zone",
    text:
      "Elite cardio machines engineered for endurance, conditioning, and serious performance.",
    link: "/about",
  },
  {
    icon: <FaBicycle />,
    title: "Cycling Studio",
    text:
      "High-intensity cycling sessions built for power output and mental grit.",
    link: "/about",
  },
  {
    icon: <GiWeightLiftingUp />,
    title: "Weight Zone",
    text:
      "Professional-grade free weights and machines for uncompromising strength training.",
    link: "/about",
  },
  {
    icon: <GiRunningShoe />,
    title: "Class Studio",
    text:
      "Disciplined group training focused on intensity, control, and transformation.",
    link: "/admin",
  },
];

export default function OurAmenities() {
  return (
    <section className="bg-[url(https://images.pexels.com/photos/50597/man-male-boy-a-person-50597.jpeg)] bg-cover bg-center bg-fixed text-white px-6 md:px-10 py-20 overflow-hidden">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl text-right font-extrabold uppercase tracking-tight mb-16"
      >
        Our Amenities
      </motion.h2>

      {/* ================= DESKTOP GRID ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
        className="hidden md:grid grid-cols-4 max-lg:grid-cols-2 gap-10"
      >
        {amenities.map((item, i) => (
          <AmenityCard key={i} item={item} />
        ))}
      </motion.div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="
          md:hidden
          flex gap-6
          overflow-x-auto
          snap-x snap-mandatory
          pb-6
          -mx-6 px-6
          scrollbar-hide
        "
      >
        {amenities.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            className="snap-center min-w-[85%]"
          >
            <AmenityCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ================= CARD ================= */

function AmenityCard({ item }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 25px 60px rgba(204,253,6,0.25)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="
        h-full
        relative
        border border-white/10
        bg-black/70
        p-8
        flex flex-col gap-5
        backdrop-blur-sm
      "
    >
      {/* ICON */}
      <div className="text-[#ccfd06] text-4xl">
        {item.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-extrabold uppercase tracking-widest text-[#ccfd06]">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-400 leading-relaxed text-sm">
        {item.text}
      </p>

      {/* CTA */}
      <Link
        to={item.link}
        className="
          mt-auto inline-flex items-center gap-2
          text-sm font-extrabold uppercase tracking-widest
          text-[#ccfd06]
          border-b-2 border-transparent
          transition-all duration-300
          hover:border-[#ccfd06]
        "
      >
        Learn More →
      </Link>
    </motion.div>
  );
}
