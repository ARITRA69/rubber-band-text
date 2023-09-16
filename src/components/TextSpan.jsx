"use client";
import { motion, transform } from "framer-motion";

const RubberBand = ({ children }) => {
  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    };
  };

  return (
    <motion.span whileHover={() => rubberBand()} className="inline-block">
      {children}
    </motion.span>
  );
};

export default RubberBand;
