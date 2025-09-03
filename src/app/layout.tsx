import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Vallerie — Portfolio",
  description: "Software Engineer | AI Enthusiast",
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

        <Navbar/>

        <main>{children}</main>

        <footer className="mt-24 border-t border-white/10/20 bg-black/30 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
            © {new Date().getFullYear()} Vallerie B
          </div>
        </footer>
      </body>
    </html>
  );
}
