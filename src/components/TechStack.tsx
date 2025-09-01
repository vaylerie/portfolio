import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Database", icon: <FaDatabase className="text-indigo-600" /> },
];

export default function TechStack() {
  return (
    <section id="techstack" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50 transition">
        <h2 className="text-3xl mb-8">Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-6 text-center text-white">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center space-y-2 p-4 rounded-2xl hover:-translate-y-1 transition-all">
              <div className="text-5xl hover:scale-110 transition-transform">{tech.icon}</div>
              <div className="text-sm">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
