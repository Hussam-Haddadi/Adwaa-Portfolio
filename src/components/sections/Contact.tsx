"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import XLogo from "@/components/icons/XLogo";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setFormStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Get in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Reach out via email or use the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-400 leading-relaxed">
              You can reach me at the email below, on X, or send a message using the contact form.
            </p>
            <a
              href="mailto:adwaalghamdy@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-space-800/50 border border-white/5 hover:border-neon-blue/30 hover:bg-space-800/80 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
                <Mail className="w-5 h-5 text-neon-blue" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors">
                adwaalghamdy@gmail.com
              </span>
            </a>
            <a
              href="https://x.com/a_xlh7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-space-800/50 border border-white/5 hover:border-neon-blue/30 hover:bg-space-800/80 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
                <XLogo className="w-5 h-5 text-neon-blue" size={20} />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors">
                x.com/a_xlh7
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-space-800/50 border border-white/5 p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-space-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={formStatus === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon-blue text-space-950 font-semibold hover:bg-neon-cyan hover:shadow-lg hover:shadow-neon-blue/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "sending" && <Loader2 className="w-5 h-5 animate-spin" />}
                {formStatus === "sent" ? "Sent!" : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
              {formStatus === "sent" && (
                <p className="text-center text-sm text-neon-blue">
                  Thanks! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
