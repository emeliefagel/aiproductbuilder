import Link from "next/link";
import MyBuild from "@/components/MyBuild";
import Rich from "@/components/Rich";
import { navigate, phases } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">AI Product Builder · Berghs</p>
        <h1>Från problem till produkt och värde.</h1>
        <p className="lead">
          Fem förmågor längs hela resan. Här samlar vi det vi gått igenom under fyra veckor: take-aways, steg,
          uppgifter, resurser och checklistor för varje fas. Kom tillbaka hit varje gång du bygger något nytt.
        </p>
      </section>

      <section className="wrap">
        <ol className="model">
          {phases.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`} className="model-step">
                <span className={`model-icon bg-${p.color}`} aria-hidden>
                  {p.icon}
                </span>
                <span className="model-num">{i + 1}</span>
                <span className="model-name">{p.name}</span>
                <span className="model-q">{p.question}</span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="navigate-bar">
          <strong>Navigate</strong>
          <span>Verktyg, kompetenser, människor och beslut längs vägen.</span>
        </div>
      </section>

      <section className="wrap two-col">
        <MyBuild phases={phases.map((p) => ({ slug: p.slug, name: p.name, total: p.checklist.length, color: p.color }))} />
        <section className="card">
          <h2>Att bygga är enkelt. Att bygga något med värde är svårt.</h2>
          <p className="big-eq">
            <span className="pill bg-discover">Idé</span> ≠ <span className="pill bg-define">Produkt</span> ≠{" "}
            <span className="pill bg-build">Värde</span>
          </p>
          <ul className="quotes">
            {navigate.map((t, i) => (
              <li key={i}>
                <Rich text={t.text} />
                {t.by && <span className="by"> – {t.by}</span>}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
