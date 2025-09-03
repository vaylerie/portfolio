"use client";

import { motion, Variants } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Home() {
  return (
    <div className="relative">
      <motion.section
        id="home"
        className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 h-screen flex flex-col justify-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative">
          {/* halo glow */}
          <div className="pointer-events-none absolute -top-14 left-0 right-0 mx-auto h-56 w-56 rounded-full bg-pink-500/20 blur-[80px]" />

          <p className="text-sm text-white/70">Hey there! I am Valerie</p>

          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            Code, Create, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-300 bg-clip-text text-transparent">
              Conquer
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Currently focused on developing intelligent solutions and creative
            systems.
            <br />
            Frontend isn’t my thing, but hey—it works!
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-semibold shadow-lg transition hover:brightness-110 hover:shadow-pink-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 hover:shadow-pink-500/20"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.section>

      {/* ===== ABOUT ===== */}
      <motion.section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 hover:shadow-pink-500/20 transition-shadow"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <div className="rounded-3xl border border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50 transition p-8 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            I&apos;m an AI Developer & Researcher
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Exploring the synergy of code, design, and intelligence. I build
            AI-driven solutions, dive deep into research, and craft visuals that
            speak creativity.
          </p>
        </div> */}
      </motion.section>

      {/* ===== WORK EXPERIENCE ===== */}
      <motion.section
        id="work"
        className="mx-auto max-w-6xl px-6 pb-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">Work Experience</h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ExperienceCard
            title="CIB on the Mobile"
            subtitle="Designing and shipping mobile experiences with a focus on accessibility and performance."
          />
          <ExperienceCard
            title="CIB on the Mobile"
            subtitle="Leading the frontend revamp with design systems and micro-interactions."
          />
          <ExperienceCard
            title="CIB on the Mobile"
            subtitle="Delivering experiments and A/B tests to validate product direction."
          />
          <ExperienceCard
            title="CIB on the Mobile"
            subtitle="Collaborated across functions to ship impactful features at scale."
          />
        </div>
      </motion.section>

      {/* decorative center piece */}
      <motion.section
        className="mx-auto max-w-6xl px-6 py-24 hover:shadow-pink-500/20 transition-shadow"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative grid place-items-center">
          <div className="absolute -z-10 h-72 w-72 rounded-full bg-pink-600/20 blur-[100px]" />
          <div className="rounded-full border border-white/20 bg-white/5 px-6 py-4 text-2xl backdrop-blur-xl shadow-[0_10px_50px_-20px_rgba(236,72,153,0.8)] hover:shadow-pink-500/50 transition-shadow">
            ✧
          </div>
          <p className="mt-4 text-center text-white/60 max-w-xl">
            I’m currently looking to join a cross-functional team that values
            improving people’s lives through accessible design.
          </p>
        </div>
      </motion.section>

      {/* ===== PROJECTS ===== */}
      <motion.section
        id="projects"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 space-y-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectCard
          title="Example Project"
          description="A web app for visualizing personalized data. Create and save new playlists of recommendations based on your patterns."
        />
        <ProjectCard
          title="Design System Starter"
          description="A tiny, themeable system with tokens, primitives and motion—built to scale across products."
        />
      </motion.section>

      {/* ===== TECH STACK ===== */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TechStack />
      </motion.div>

      {/* ===== CONTACT ===== */}
      <motion.section
        id="contact"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Contact</h3>
            <p className="mt-3 text-white/70">
              Have a project in mind or want to say hi? Let’s connect.
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/70">
              <div>valleriebritania@gmail.com</div>
              <div className="flex gap-4 pt-2">
                <a href="https://instagram.com" className="hover:text-white">
                  IG
                </a>
                <a href="https://github.com" className="hover:text-white">
                  GitHub
                </a>
                <a href="https://linkedin.com" className="hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
