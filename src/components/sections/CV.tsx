"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Users,
  Trophy,
  Award,
  Calendar,
  FlaskConical,
} from "lucide-react";

const researchAndProjects = [
  "Scientific Research: Space Debris Analysis, Assessment and Awareness.",
  'Research on "Space-based Solar Power as a Clean Energy Source for the Future," published in Al Yaum newspaper.',
  "Research on Space Debris, affiliated with the Saudi Space Agency.",
  "Ethylene-AI — AI-driven decision-support for citrus harvest and post-harvest management; uses ethylene and environmental data to optimize harvest timing and degreening. Accepted into the FCIT Incubator with Taker.ai.",
];

const leadershipAndMemberships = [
  "Ambassador for Robocon Exhibition (Robotics and Inventions Exhibition 2025).",
  "Ambassador for Ru'ana Student Mentorship Program.",
  "Ambassador for the Smart Learning Path Hackathon, Faculty of Computing at King Abdulaziz University.",
  "Member of the Astronomy and Space Club at King Abdulaziz University.",
  "Member of the Engineering Creativity Club at King Abdulaziz University.",
  "Member of the Physics Club at King Abdulaziz University.",
  "Member of the Manufacturing Club (Modeling Division) at King Abdulaziz University.",
  "Member of DRAQ (Drones Division) at King Abdulaziz University.",
  "IEEE Member at King Abdulaziz University.",
  "Member of LIFTOFF's at King Abdulaziz University.",
  "Member of the Entrepreneurship Club (Development Division) at King Abdulaziz University.",
  "Member of WSW2025 (World Space Week 2025).",
];

const competitionsAndHackathons = [
  "SERB — Award-Winning Project, Best City Impact (NASA Space Apps Challenge): analyzed space datasets for collision-risk insights.",
  "Semifinalist in Saqr Competition, the first engineering competition in Saudi Arabia (Drone Building).",
  "Participated in the Health and Security Forum Hackathon during Hajj.",
  "Participated in the DebriSolver Competition.",
  "Participated in the Aviation Challenge AVITHON 2025.",
];

const certificatesAndTraining = [
  "Recommendation in Modern Physics.",
  "Recommendation in Electromagnetics 1.",
  "Certificate from the Automated Engineer Bootcamp (REC) by Mashura for Research and Innovation.",
  "KAUST Energy Program Certificate.",
  "Robotics Workshop Certificate from the Manufacturing Community.",
  "Professional Workshop in the World of Drones.",
  "3D Design and 3D Printing Bootcamp Certificate.",
  "Certificate of Attendance for the Future Horizons Bootcamp (Technology and Cybersecurity).",
  "Certificate of Attendance for a Post-Graduation Course.",
  "Joined the Third Dimension Program, affiliated with Research and Development Sciences and Misk Foundation.",
  "Coursera Certificate in Introduction to Materials Science.",
  "Coursera Certificate in Mechanics.",
  "Misk Completion Certificates in: Success Skills, Using LinkedIn to Access Career Opportunities, Interview Skills, CV/Resume Writing, Understanding the Job Market, Planning a Successful Career Path, and Searching & Discovering Opportunities.",
];

const conferencesAndEvents = [
  "TEDxKAU 2025.",
  "The First Conference on Innovation and Entrepreneurship.",
  "World Space Week 2025.",
  "KAUST Research Workshop: Future of Semiconductors Forum 2025.",
];

const sections = [
  {
    id: "research",
    title: "Research & Projects",
    icon: FlaskConical,
    color: "neon-blue",
    items: researchAndProjects,
  },
  {
    id: "leadership",
    title: "Leadership & Memberships",
    icon: Users,
    color: "neon-purple",
    items: leadershipAndMemberships,
  },
  {
    id: "competitions",
    title: "Competitions & Hackathons",
    icon: Trophy,
    color: "neon-cyan",
    items: competitionsAndHackathons,
  },
  {
    id: "certificates",
    title: "Certificates & Training",
    icon: Award,
    color: "neon-blue",
    items: certificatesAndTraining,
  },
  {
    id: "conferences",
    title: "Conferences & Events Attended",
    icon: Calendar,
    color: "neon-purple",
    items: conferencesAndEvents,
  },
];

const borderColors: Record<string, string> = {
  "neon-blue": "border-neon-blue/50",
  "neon-purple": "border-neon-purple/50",
  "neon-cyan": "border-neon-cyan/50",
};

const iconColors: Record<string, string> = {
  "neon-blue": "text-neon-blue",
  "neon-purple": "text-neon-purple",
  "neon-cyan": "text-neon-cyan",
};

export default function CV() {
  const [openId, setOpenId] = useState<string | null>("research");

  return (
    <section id="cv" className="relative py-24 overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-800/20 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">CV & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Research, leadership, competitions, and professional development
          </p>
        </motion.div>

        <div className="space-y-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = openId === section.id;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-space-800/50 border border-white/5 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : section.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-white/5 ${iconColors[section.color]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-white">{section.title}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-slate-400 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5"
                    >
                      <ul className="p-5 pt-4 space-y-3">
                        {section.items.map((item, idx) => (
                          <li
                            key={idx}
                            className={`flex gap-3 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 ${borderColors[section.color]}`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
