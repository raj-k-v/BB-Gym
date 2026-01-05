import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot() {
  // mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth follow
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  // click scale
  const scale = useMotionValue(1);
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 20 });

  useEffect(() => {
    function move(e) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function down() {
      scale.set(0.6);
    }

    function up() {
      scale.set(1);
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        style={{ x: smoothX, y: smoothY, scale: smoothScale }}
        className="absolute -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#ccfd06]"
      />
    </div>
  );
}
