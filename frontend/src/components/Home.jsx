import Navbar from "./Navbar";

import LearnMore from "./LearnMore";
import OurAmenities from "./OurAmenities";
import ClassStudio from "./ClassStudio";
import SuccessStories from "./SuccessStories";
import Footer from "./Footer";

import { motion, useScroll, useTransform } from "framer-motion";

import { LineShadowText } from "@/components/ui/line-shadow-text";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

import { Link } from "react-router-dom";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, 180]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen bg-transparent text-white flex items-center justify-center overflow-hidden">

        {/* SCROLLING TEXT — DESKTOP ONLY */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none opacity-60">
<ScrollVelocityContainer className="absolute overflow-hidden h-full right-0 z-10 pointer-events-none opacity-70"> <div className="h-full items-end w-full translate-x-1/5 text-white rotate-90"> {/* First moving text row */} <ScrollVelocityRow baseVelocity={5} direction={1}> <span className="text-9xl font-extrabold tracking-tight"> BB GYM • NO LIMITS • BB GYM • NO LIMITS </span> </ScrollVelocityRow> {/* Second moving text row (opposite direction) */} <ScrollVelocityRow baseVelocity={8} direction={-1}> <span className="text-9xl font-extrabold tracking-tight"> TRAIN HARD • STAY STRONG • TRAIN HARD </span> </ScrollVelocityRow> </div> </ScrollVelocityContainer>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">

          {/* BRAND */}
          <h1 className="font-extrabold tracking-tighter leading-none
            text-[clamp(3.5rem,12vw,9rem)]">
            <LineShadowText className="italic" shadowColor="white">
              BB&nbsp;GYM
            </LineShadowText>
          </h1>

          {/* CTA */}
          <Link to="/reservation">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="
                px-10 py-4
                bg-[#ccfd06] text-black
                text-xs sm:text-sm
                font-extrabold uppercase tracking-widest
                border-2 border-[#ccfd06]
                transition-all duration-300
                hover:bg-transparent hover:text-[#ccfd06]
              "
            >
              Reserve Your Spot
            </motion.button>
          </Link>
        </div>

        {/* SCROLL INDICATOR — HIDDEN ON SMALL SCREENS */}
        <motion.div
          style={{ rotate }}
          className="absolute bottom-8 z-20 block"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ccfd06"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="opacity-90"
          >
            <path d="M12 4v16" />
            <path d="M5 13l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* SECTIONS */}
      <LearnMore />
      <OurAmenities />
      <ClassStudio />
      <SuccessStories />
      <Footer />
    </>
  );
}
