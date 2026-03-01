"use client";

import { motion } from "framer-motion";
import { ExternalLink, Satellite, Sun, Award, Leaf } from "lucide-react";

const prototypes = [
  {
    title: "Serb Dashboard",
    description: "A platform using AI to monitor and track space debris to reduce risks to satellites.",
    url: "http://serb.surge.sh",
    icon: Satellite,
    award: "Best City Impact — NASA Space Apps Challenge",
  },
  {
    title: "Sun Cycle",
    description: "AI-optimized industrial waste heat recovery system — Saudi Vision 2030.",
    url: "https://sun-cycle.vercel.app/",
    icon: Sun,
    award: null as string | null,
  },
  {
    title: "Ethylene-AI",
    description: "Smart agriculture dashboard — AI-driven decision support for citrus harvest timing and post-harvest management. FCIT Incubator with Taker.ai.",
    url: "https://ethylene-ai.vercel.app/",
    icon: Leaf,
    award: null as string | null,
  },
];

export default function Prototypes() {
  return (
    <section id="prototypes" className="relative py-24 overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Hackathon </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Prototypes
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Prototypes from hackathons I participated in
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prototypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group block p-6 rounded-2xl bg-space-800/50 border border-white/5 hover:border-neon-blue/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-neon-blue/10">
                    <Icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-neon-blue transition-colors flex-shrink-0" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                {item.award && (
                  <p className="flex items-center gap-1.5 text-neon-blue/90 text-xs font-medium mb-2">
                    <Award className="w-3.5 h-3.5 flex-shrink-0" />
                    {item.award}
                  </p>
                )}
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
                <span className="text-neon-blue text-sm font-medium group-hover:underline">
                  Open site →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
