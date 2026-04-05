"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: 0% - 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: 20% - 50%
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.5], [100, -100]);

  // Section 3: 50% - 80%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.85], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 max-w-[100vw] overflow-hidden">
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full px-6 flex justify-center text-center items-center h-full"
      >
        <div>
           <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">Aditya Raj</h1>
           <p className="text-xl md:text-3xl text-gray-300 font-light">Creative Developer.</p>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full px-6 md:px-24 flex justify-start items-center h-full max-w-7xl mx-auto left-0 right-0"
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-white max-w-2xl leading-tight">I build digital experiences.</h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full px-6 md:px-24 flex justify-end items-center h-full max-w-7xl mx-auto left-0 right-0"
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-white max-w-2xl text-right leading-tight tracking-wide">Bridging design and engineering.</h2>
      </motion.div>
    </div>
  );
}
