import Link from "next/link";
import MyBuild from "@/components/MyBuild";
import Rich from "@/components/Rich";
import { COURSE_URL, course, navigate, phases } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero-yellow">
        <div className="wrap">
          <p className="eyebrow">Berghs · AI Product Builder · Hösten 2026</p>
          <h1 className="display">
            Från problem
            <br />
            till produkt
            <br />
            och värde.
          </h1>
          <p className="hero-sub">
            <span className="marker">Fem förmågor längs hela resan.</span> Allt vi gått igenom under fyra veckor, samlat
            som ett verktyg du kan komma tillbaka till varje gång du bygger något nytt.
          </p>
        </div>
      </section>

      <section className="wrap model-section">
        <ol className="model">
          {phases.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`} className="model-step">
                <span className="model-top">
                  <span className={`model-icon bg-${p.color}`} aria-hidden>
                    {p.icon}
                  </span>
                  <span className="model-num">0{i + 1}</span>
                </span>
                <span className="model-name">{p.name}</span>
                <span className="model-q">{p.question}</span>
                <span className="model-go">Öppna →</span>
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
        <section className="card card-black">
          <h2 className="display-sm">
            Att bygga är enkelt.
            <br />
            <span className="yellow">Att bygga något med värde är svårt.</span>
          </h2>
          <p className="big-eq">
            <span className="pill">Idé</span> ≠ <span className="pill">Produkt</span> ≠ <span className="pill">Värde</span>
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

      <section className="wrap about" id="om-kursen">
        <div className="about-grid">
          <div>
            <p className="eyebrow">Om kursen</p>
            <h2 className="display-sm">Från idé till produkt på fyra veckor</h2>
            <p className="lead">{course.lead}</p>
            <ul className="highlights">
              {course.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <dl className="facts">
              {course.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <a className="btn btn-yellow" href={COURSE_URL} target="_blank" rel="noopener noreferrer">
              Läs mer om kursen på berghs.se ↗
            </a>
          </div>
          <div className="schedule">
            <table>
              <thead>
                <tr>
                  <th>Vecka</th>
                  <th>Fokus</th>
                  <th>Resultat</th>
                </tr>
              </thead>
              <tbody>
                {course.weeks.map(([w, f, r]) => (
                  <tr key={w}>
                    <td>{w}</td>
                    <td>
                      <strong>{f}</strong>
                    </td>
                    <td>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
