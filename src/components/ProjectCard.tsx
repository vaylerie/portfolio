"use client";

import { useState, useRef, useEffect } from "react";

type Project = {
  tag?: string;
  title: string;
  description: string;
  image?: string; // gambar preview
  url?: string;   // link website untuk preview
};

export default function ProjectCard({ 
  tag = "Featured Project", 
  title, 
  description, 
  image, 
  url 
}: Project) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("4.5rem"); // kira-kira 3 baris
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("4.5rem"); // fallback tinggi awal (3 baris teks)
    }
  }, [expanded, description]);

  return (
    <div className="relative grid gap-6 md:grid-cols-2 items-center rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8 backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50 transition">
      {/* left */}
      <div className="order-2 md:order-1">
        <div className="text-xs uppercase tracking-widest text-pink-300/80">{tag}</div>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h3>

        {/* description with smooth expand */}
        <div
          ref={contentRef}
          className="mt-3 text-white/70 overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight }}
        >
          {description}
        </div>

        {/* only show button if description panjang */}
        {description.split(" ").length > 20 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-pink-400 text-sm hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>

      {/* right (image or web preview) */}
      <div className="order-1 md:order-2 relative">
        <div className="absolute -inset-6 -z-10 rounded-3xl blur-2xl" />
        <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#331a2b] to-[#1a0f17]">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : url ? (
            <iframe
              src={url}
              title={title}
              className="h-full w-full rounded-2xl border-0"
              loading="lazy"
            />
          ) : (
            <div className="grid place-items-center h-full text-white/60 text-sm">
              Project Preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
