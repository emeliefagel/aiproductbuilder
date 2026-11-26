import type { Metadata } from "next";
import Link from "next/link";
import { phases } from "@/lib/content";
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
          <div className="wrap">AI Product Builder · Berghs School of Communication · 2026</div>
        </footer>
      </body>
    </html>
  );
}
