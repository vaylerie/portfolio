"use client";

import { motion, Variants } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

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

          <p className="text-sm text-white/70">Hey there! I am Vallerie</p>

          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            Think. Code. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-300 bg-clip-text text-transparent">
              and a little magic.
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
      {/* <motion.section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 hover:shadow-pink-500/20 transition-shadow"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50 transition p-8 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            I&apos;m an AI Developer & Researcher
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Exploring the synergy of code, design, and intelligence. I build
            AI-driven solutions, dive deep into research, and craft visuals that
            speak creativity.
          </p>
        </div>
      </motion.section> */}

      {/* ===== WORK EXPERIENCE ===== */}
      <motion.section
        id="work"
        className="mx-auto max-w-6xl px-6 pb-24"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">Work Experience</h3>

        <div className="mt-6 grid gap-6">
          <ExperienceCard
            title="AI Developer"
            subtitle="Versa Digicipta Semesta - Manado, Indonesia"
            year="2023 - Present"
            list={["Integrated a multimodal AI chatbot to recommend personalized artwork via text and image inputs.", 
              "Designed embedding pipelines and vector indexing to support fast and accurate similarity search.",
              "Implemented content-based image retrieval using CLIP and FAISS to support intelligent image search and matching functionality.",
              "Translated user needs into AI-driven features through cross-functional collaboration.",
              "Developed scalable web apps with modern stacks like Next.js and React."]}
          />
        </div>
      </motion.section>

      {/* ===== EDUCATION EXPERIENCE ===== */}
      <motion.section
        id="work"
        className="mx-auto max-w-6xl px-6 pb-24"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">Education</h3>

        <div className="mt-6 grid gap-6">
          <ExperienceCard
            title="Information Systems (Bachelor of Computer Science)"
            subtitle="Universitas Sam Ratulangi - Manado, Indonesia"
            year="Aug 2021 - Mar 2025"
            list={["Graduated with Honors in 3.6 years.",
              "Thesis Project: Web-based Burn Severity Identification using XAI.",
              "Active in research and community projects.",
              "Contributing as teaching assistant."]}
          />
          <ExperienceCard
            title="Machine Learning Cohort - Bangkit Academy"
            subtitle="Google, Gojek, Tokopedia, Traveloka, and Dicoding - Indonesia"
            year="Aug 2023 - Jan 2024"
            list={["Selected as one of 300 out of 10,000+ applicants for intensive training in Machine Learning and Cloud Computing.",
              "Capstone Project: Kawanua - Kawan Untuk Alam, a mobile app utilizing machine learning to identify endangered plant and animal species in Indonesia.",
              "Role: ML Engineer in developing smart model for identifying local endangered species with 99% accuracy."]}
            href="https://www.linkedin.com/feed/update/urn:li:activity:7158998387449593856/"
          />
        </div>
      </motion.section>

      {/* decorative center piece */}
      {/* <motion.section
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
      </motion.section> */}

      {/* ===== PROJECTS ===== */}
      <motion.section
        id="projects"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 space-y-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">Projects & Researches</h3>
        <ProjectCard
          tag="Publication"
          title="Optimizing CNN for burn severity classification using hyperband"
          description="Developed a MobileNet-based CNN optimized with Hyperband to classify burn severity, published in AiTI Journal (SINTA 3 accredited)."
          url="https://ejournal.uksw.edu/aiti/article/view/9916"
        />
        <ProjectCard
          tag="Bangkit Academy Capstone Project"
          title="Kawanua - Kawan Untuk Alam"
          description="Kawanua is a mobile application utilizing machine learning to identify endangered plant and animal species in Indonesia. Its primary objective is to empower users by enabling image capture for species identification, determining whether they fall into endangered categories. Additionally, the app serves as an educational platform, offering comprehensive species information to raise awareness about biodiversity conservation and the crucial role of endangered species in ecosystem balance. I contributed as ML Engineer in developing smart model for identifying local endangered species with 99% accuracy"
        />
        <ProjectCard
          tag="Thesis Project"
          title="Web-based Burn Severity Identification using XAI"
          description="Developed a web application that utilizes a CNN model to classify burn severity from images, incorporating Explainable AI (XAI) techniques like Grad-CAM to enhance model transparency and user trust. The project aims to assist medical professionals in accurately assessing burn severity, thereby improving treatment decisions and patient outcomes."
        />
      </motion.section>

      {/* ===== TECH STACK ===== */}
      <motion.div
        id="skills"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16 space-y-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">Skills</h3>
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
            <Contact />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
