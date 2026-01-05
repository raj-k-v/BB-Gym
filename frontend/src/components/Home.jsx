// ================= IMPORTS =================

// Navbar at the top of the page
import Navbar from "./Navbar";


// Section components rendered after hero
import LearnMore from "./LearnMore";
import OurAmenities from "./OurAmenities";
import ClassStudio from "./ClassStudio";
import SuccessStories from "./SuccessStories";
import Footer from "./Footer";

// Framer Motion hooks for animation + scroll-based transforms
import { motion, useScroll, useTransform } from "framer-motion";

// Custom UI components
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Meteors } from "@/components/ui/meteors";

// Scroll-based moving text components
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

// Router link for navigation
import { Link } from "react-router-dom";

export default function Home() {
  // Gives scroll progress value from 0 → 1
  const { scrollYProgress } = useScroll();

  // Rotates arrow from 0° to 180° as user scrolls first 25% of page
  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, 180]);

  return (
    <>

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center">
        
        {/* ===== Vertical scrolling background text (decorative) ===== */}
        <ScrollVelocityContainer className="absolute overflow-hidden h-full right-0 z-10 pointer-events-none opacity-70">
          <div className="h-full items-end w-full translate-x-1/5 text-white rotate-90">
            
            {/* First moving text row */}
            <ScrollVelocityRow baseVelocity={5} direction={1}>
              <span className="text-9xl font-extrabold tracking-tight">
                BB GYM • NO LIMITS • BB GYM • NO LIMITS
              </span>
            </ScrollVelocityRow>

            {/* Second moving text row (opposite direction) */}
            <ScrollVelocityRow baseVelocity={8} direction={-1}>
              <span className="text-9xl font-extrabold tracking-tight">
                TRAIN HARD • STAY STRONG • TRAIN HARD
              </span>
            </ScrollVelocityRow>
          </div>
        </ScrollVelocityContainer>

        {/* ===== Meteor animation background ===== */}
        <Meteors className="absolute inset-0 z-0" />

        {/* ===== Center content (logo + CTA) ===== */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-8">
          
          {/* Main brand heading */}
          <h1 className="text-9xl font-bold tracking-tighter">
            <LineShadowText className="italic" shadowColor="white">
              BB&nbsp;GYM
            </LineShadowText>
          </h1>

          {/* CTA button → navigates to reservation page */}
          <Link to="/reservation">
            <motion.button
              // Slight scale on hover
              whileHover={{ scale: 1.05 }}
              // Press animation
              whileTap={{ scale: 0.95 }}
              className="
                px-10 py-4 rounded-full
                bg-white text-black
                text-lg font-bold tracking-wide
                hover:bg-[#ccfd06]
                cursor-pointer
                transition-all duration-300
                shadow-lg
              "
            >
              RESERVE YOUR SPOT
            </motion.button>
          </Link>
        </div>

        {/* ===== Scroll indicator arrow ===== */}
        <motion.div
          // Rotation controlled by scroll position
          style={{ rotate }}
          className="absolute bottom-8 z-20 flex items-center justify-center"
        >
          {/* arrow svg */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          >
            {/* Vertical line */}
            <path d="M12 5v14" />
            {/* Arrow head */}
            <path d="M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ================= REST OF PAGE SECTIONS ================= */}
      <LearnMore />
      <OurAmenities />
      <ClassStudio />
      <SuccessStories />
      <Footer />
    </>
  );
}
