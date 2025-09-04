import { FaReact, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTensorflow, SiPytorch } from "react-icons/si";

const techStack = [
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Database", icon: <FaDatabase className="text-indigo-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export default function TechStack() {
  return (
    <section id="techstack" className="mx-auto max-w-6xl">
      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50 transition">
        <div className="grid grid-cols-3 md:grid-cols-8 gap-6 text-center text-white">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center space-y-2 p-4 rounded-2xl hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-sm">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
