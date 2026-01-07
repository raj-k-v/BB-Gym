import React from "react";
import logo from "../assets/logo.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 md:px-20 py-20 overflow-hidden">

      {/* TOP STRIP */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#ccfd06]" />

      {/* LOGO */}
      <motion.img
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        src={logo}
        alt="BB GYM"
        className="w-20 mb-14 invert mx-auto md:mx-0"
      />

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left">

        {/* LOCATION */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-widest mb-5 text-[#ccfd06]">
            Location
          </h4>
          <p className="text-sm text-white/70">North Fortberry</p>
          <p className="text-sm text-white/70">123 Anywhere St.</p>
          <p className="text-sm text-white/70 mb-3">Any City, ST 12345</p>
          <p className="text-sm font-bold">(123) 456-7890</p>
          <p className="text-sm">hello@bbgym.com</p>
        </motion.div>

        {/* HOURS */}
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-widest mb-5 text-[#ccfd06]">
            Club Hours
          </h4>
          <p className="text-sm text-white/70">Tue – Sat</p>
          <p className="text-sm font-bold mb-3">6:00 AM – 10:00 PM</p>
          <p className="text-sm text-white/70">Sunday</p>
          <p className="text-sm font-bold">8:00 AM – 9:00 PM</p>
          <p className="text-xs text-white/40 mt-4 uppercase tracking-wider">
            Closed Mondays
          </p>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <h4 className="text-lg md:text-xl font-extrabold uppercase tracking-widest mb-5 text-[#ccfd06]">
            Stay Connected
          </h4>

          <ul className="flex flex-row md:flex-col justify-center md:justify-start gap-6 md:gap-3">
            <li className="text-sm font-extrabold uppercase tracking-widest hover:text-[#ccfd06] transition cursor-pointer">
              Instagram
            </li>
            <li className="text-sm font-extrabold uppercase tracking-widest hover:text-[#ccfd06] transition cursor-pointer">
              Twitter
            </li>
            <li className="text-sm font-extrabold uppercase tracking-widest hover:text-[#ccfd06] transition cursor-pointer">
              Facebook
            </li>
          </ul>
        </motion.div>

      </div>

      {/* BOTTOM LINE */}
      <div className="mt-16 pt-6 border-t border-white/10 text-xs uppercase tracking-widest text-white/40 text-center md:text-left">
        © {new Date().getFullYear()} BB GYM — No Limits
      </div>
    </footer>
  );
};

export default Footer;
