import type { Metadata } from "next";
import Link from "next/link";
import Rocket from "@/components/Rocket";
import { COURSE_URL, phases } from "@/lib/content";
import "./globals.css";


export const metadata: Metadata = {
  title: "AI Product Builder",
  description: "Från problem till produkt och värde. Kursmaterial för deltagare i AI Product Builder på Berghs.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href="/" className="logo">
              <Rocket className="logo-img" />
              AI Product Builder
            </Link>
            <nav className="phase-nav" aria-label="Faser">
              {phases.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className={`nav-${p.color}`}>
                  {p.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap footer-inner">
            <Rocket className="logo-img" />
            <span>AI Product Builder · Berghs School of Communication · Hösten 2026</span>
            <a href={COURSE_URL} target="_blank" rel="noopener noreferrer">
              Kursen på berghs.se ↗
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
