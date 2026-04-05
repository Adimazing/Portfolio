"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { id: 1, title: "Lumina UI", desc: "A robust design system pushing boundaries.", link: "#" },
  { id: 2, title: "Echo", desc: "Real-time communication architecture.", link: "#" },
  { id: 3, title: "Nova", desc: "Generative AI explorer and visualization.", link: "#" },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-32 px-6 md:px-24 max-w-7xl mx-auto relative z-20 bg-[#121212]">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white text-center md:text-left tracking-tight">Selected Work</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
                <motion.div 
                    key={proj.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-panel rounded-2xl p-8 flex flex-col h-80 group relative overflow-hidden cursor-pointer"
                >
                    <div className="absolute top-8 right-8 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-2xl font-semibold text-white mb-2">{proj.title}</h3>
                        <p className="text-gray-400 font-light">{proj.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}
