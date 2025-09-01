"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-lg z-50 hover:shadow-lg hover:shadow-pink-500/30 transition-shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white drop-shadow">Valerie</h1>
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li><Link href="#home" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Home</Link></li>
          <li><Link href="#about" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">About</Link></li>
          <li><Link href="#projects" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Projects</Link></li>
          <li><Link href="#techstack" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Tech Stack</Link></li>
          <li><Link href="#contact" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Contact</Link></li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">☰</button>
      </div>
      {isOpen && (
        <div className="bg-white/10 backdrop-blur-xl p-4 md:hidden text-white hover:shadow-lg hover:shadow-pink-500/30 transition-shadow">
          <ul className="flex flex-col gap-4">
            <li><Link href="#home" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Home</Link></li>
            <li><Link href="#about" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">About</Link></li>
            <li><Link href="#projects" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Projects</Link></li>
            <li><Link href="#techstack" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Tech Stack</Link></li>
            <li><Link href="#contact" className="hover:text-pink-400 hover:shadow-md hover:shadow-pink-500/50 transition-all">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
