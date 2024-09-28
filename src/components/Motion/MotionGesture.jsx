import React from "react";
import { motion } from "framer-motion";
export default function MotionGesture(props) {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      {props.children}
    </motion.div>
  );
}
