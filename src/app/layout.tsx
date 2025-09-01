import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valerie — Portfolio",
  description: "Software Engineer & Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen text-white antialiased">
        {/* Global dark gradient + subtle glows (tetap dari atas sampai bawah) */}
        <div className="fixed inset-0 -z-50 bg-gradient-to-b from-black via-[#0b0710] to-[#0a0911]" />
        <div className="pointer-events-none fixed -z-40 inset-0">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-pink-600/20 blur-[120px]" />
          <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-pink-500/10 blur-[120px]" />
        </div>

        {/* Optional: top bar minimal */}
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <div className="font-semibold tracking-wide">Valerie</div>
            <nav className="hidden md:flex gap-8 text-sm text-white/80">
              <a href="#home" className="hover:text-white hover:shadow-md hover:shadow-pink-500/50 transition-all">Home</a>
              <a href="#about" className="hover:text-white hover:shadow-md hover:shadow-pink-500/50 transition-all">About</a>
              <a href="#work" className="hover:text-white hover:shadow-md hover:shadow-pink-500/50 transition-all">Experience</a>
              <a href="#projects" className="hover:text-white hover:shadow-md hover:shadow-pink-500/50 transition-all">Projects</a>
              <a href="#contact" className="hover:text-white hover:shadow-md hover:shadow-pink-500/50 transition-all">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-white/10/20 bg-black/30 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} Valerie - Crafting digital experiences with heart
          </div>
        </footer>
      </body>
    </html>
  );
}
