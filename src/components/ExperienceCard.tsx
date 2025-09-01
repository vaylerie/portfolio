type Props = {
  title: string;
  subtitle: string;
  cta?: string;
};

export default function ExperienceCard({ title, subtitle, cta = "Learn More" }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50">
      {/* subtle inner glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-3 text-lg font-semibold text-white">{title}</div>
      <p className="mb-6 text-sm text-white/70">{subtitle}</p>
      <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110 hover:shadow-lg hover:shadow-pink-500/50">
        {cta}
      </button>
    </div>
  );
}
