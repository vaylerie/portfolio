type Project = {
  tag?: string;
  title: string;
  description: string;
  image?: string; // gunakan gambar apa saja; placeholder jika kosong
};

export default function ProjectCard({ tag = "Featured Project", title, description, image }: Project) {
  return (
    <div className="relative grid gap-6 md:grid-cols-2 items-center rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8 backdrop-blur-xl  hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50 transition">
      {/* left */}
      <div className="order-2 md:order-1">
        <div className="text-xs uppercase tracking-widest text-pink-300/80">{tag}</div>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h3>
        <p className="mt-3 text-white/70">{description}</p>
      </div>

      {/* right (image mock) */}
      <div className="order-1 md:order-2 relative">
        <div className="absolute -inset-6 -z-10 rounded-3xl blur-2xl" />
        <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#331a2b] to-[#1a0f17] grid place-items-center">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="text-white/60 text-sm">Project Preview</div>
          )}
        </div>
      </div>
    </div>
  );
}
