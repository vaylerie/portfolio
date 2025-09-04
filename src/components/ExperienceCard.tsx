import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  cta?: string;
  year?: string;
  list?: string[];
  href?: string;
};

export default function ExperienceCard({
  title,
  subtitle,
  cta = "Learn More",
  year,
  list,
  href,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(236,72,153,0.55)] hover:shadow-pink-500/50">
      {/* subtle inner glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex justify-between">
        <div className="mb-3 text-lg font-semibold text-white">{title}</div>
        {year && <p className="text-sm font-semibold mb-1">{year}</p>}
      </div>

      <p className="mb-2 text-sm text-white/70">{subtitle}</p>

      {list && list.length > 0 && (
        <ul className="mb-6 space-y-1">
          {list.map((item) => (
            <li
              key={item}
              className="text-sm text-white/60 before:content-['▹'] before:mr-1 before:text-pink-500"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:brightness-110 hover:shadow-lg hover:shadow-pink-500/50"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}
