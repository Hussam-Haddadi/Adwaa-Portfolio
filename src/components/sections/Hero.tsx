"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap } from "lucide-react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#0a0a0f]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a28] to-[#0d0d14]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-2 ring-neon-blue/50 ring-offset-4 ring-offset-space-950 shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:shadow-[0_0_60px_rgba(0,212,255,0.35)] hover:ring-neon-blue transition-all duration-500">
            {!imgError ? (
              <Image
                src="/profile.png"
                alt="Adwaa Saeed Alghamdi"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, 224px"
                priority
                onError={() => setImgError(true)}
              />
            ) : null}
            {imgError && (
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-4xl font-bold text-neon-blue/60">
                AS
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            <span>Adwaa Saeed </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Alghamdi
            </span>
          </h1>

          <ul className="mt-8 space-y-3 text-slate-300">
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <MapPin className="w-5 h-5 text-neon-blue flex-shrink-0" />
              <span>Jeddah</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <Mail className="w-5 h-5 text-neon-blue flex-shrink-0" />
              <a href="mailto:adwaalghamdy@gmail.com" className="hover:text-neon-blue transition-colors">
                adwaalghamdy@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <GraduationCap className="w-5 h-5 text-neon-blue flex-shrink-0" />
              <span>Major: Physics</span>
            </li>
          </ul>

          <div className="mt-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-blue text-space-950 font-semibold hover:bg-neon-cyan hover:shadow-lg hover:shadow-neon-blue/30 transition-all"
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
