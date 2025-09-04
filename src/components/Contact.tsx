import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="mt-2 space-y-1 text-sm text-white/70">
      <div className="flex gap-4">
        <a
          className="hover:text-white flex items-center gap-2"
          href="mailto:valleriebritania@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={18} />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://instagram.com/valeriebritania"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://github.com/vaylerie"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/valeriebritania"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
