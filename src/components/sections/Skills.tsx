"use client";

import { motion } from "framer-motion";

const skills = [
  "Advanced Mathematical Modeling & Differential Equations",
  "Analytical Problem-Solving & Logical Reasoning",
  "Scientific Programming (Python / Computational Analysis / MATLAB)",
  "Strong Foundation in Classical & Modern Physics & Electromagnetic",
  "Numerical Simulation & System Modeling",
  "Data Analysis & Interpretation",
  "Scientific Research & Technical Writing",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Core Professional </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Skills
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="inline-block px-4 py-2.5 rounded-xl text-sm font-medium border border-neon-blue/40 text-neon-blue bg-neon-blue/5 hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
