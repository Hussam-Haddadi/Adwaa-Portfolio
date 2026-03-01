"use client";

import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import XLogo from "@/components/icons/XLogo";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#prototypes", label: "Prototypes" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-space-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-2 text-neon-blue font-semibold">
            <Rocket className="w-5 h-5" />
            <span>Adwaa Saeed Alghamdi</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-neon-blue transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="mailto:adwaalghamdy@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-neon-blue transition-colors p-2"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/a_xlh7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-slate-400 hover:text-neon-blue transition-colors p-2"
            >
              <XLogo className="w-5 h-5" size={20} />
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-slate-500 text-sm"
        >
          © {new Date().getFullYear()} Adwaa Saeed Alghamdi. Built with Next.js & Framer Motion.
        </motion.p>
      </div>
    </footer>
  );
}
