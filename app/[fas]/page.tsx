import Link from "next/link";
import { notFound } from "next/navigation";
import Checklist from "@/components/Checklist";
import CopyBlock from "@/components/CopyBlock";
import Rich from "@/components/Rich";
import { type Block, getPhase, phases } from "@/lib/content";

export function generateStaticParams() {
  return phases.map((p) => ({ fas: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ fas: string }> }) {
  const { fas } = await params;
  const phase = getPhase(fas);
  return { title: phase ? `${phase.name} · AI Product Builder` : "AI Product Builder" };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <Rich text={block.text} />
        </p>
      );
    case "list": {
      const items = block.items.map((t, i) => (
        <li key={i}>
          <Rich text={t} />
        </li>
      ));
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case "table":
      return (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <Rich text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "copy":
      return <CopyBlock label={block.label} text={block.text} />;
  }
}

export default async function PhasePage({ params }: { params: Promise<{ fas: string }> }) {
  const { fas } = await params;
  const phase = getPhase(fas);
  if (!phase) notFound();

  const index = phases.findIndex((p) => p.slug === phase.slug);
  const prev = phases[index - 1];
  const next = phases[index + 1];

  return (
    <article className={`phase theme-${phase.color}`}>
      <section className="phase-hero">
        <div className="wrap">
          <p className="eyebrow">
            Fas {index + 1} av {phases.length} · {phase.week}
          </p>
          <h1>
            <span aria-hidden>{phase.icon}</span> {phase.name}
          </h1>
          <p className="phase-q">{phase.question}</p>
          <p className="lead">{phase.intro}</p>
          <nav className="toc" aria-label="På sidan">
            <a href="#take-aways">Take-aways</a>
            <a href="#steg">Steg</a>
            <a href="#uppgifter">Uppgifter</a>
            <a href="#resurser">Resurser</a>
            <a href="#checklista">Checklista</a>
          </nav>
        </div>
      </section>

      <div className="wrap phase-body">
        <section id="take-aways">
          <h2>Take-aways</h2>
          <ul className="takeaways">
            {phase.takeaways.map((t, i) => (
              <li key={i} className="card">
                <Rich text={t.text} />
                {t.by && <span className="by">{t.by}</span>}
              </li>
            ))}
          </ul>
        </section>

        <div className="two-col">
          <section id="steg" className="card">
            <h2>Steg</h2>
            <ol className="steps">
              {phase.steps.map((s, i) => (
                <li key={i}>
                  <Rich text={s} />
                </li>
              ))}
            </ol>
          </section>
          <section id="uppgifter" className="card">
            <h2>Enkla uppgifter</h2>
            <ul className="tasks">
              {phase.tasks.map((t, i) => (
                <li key={i}>
                  <Rich text={t} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="resurser">
          <h2>Resurser</h2>
          <div className="resources">
            {phase.resources.map((r, i) => (
              <details key={i} className="card resource" open={i === 0}>
                <summary>
                  <span className="resource-title">{r.title}</span>
                  {r.by && <span className="by">{r.by}</span>}
                </summary>
                <div className="resource-body">
                  {r.blocks.map((b, j) => (
                    <BlockView key={j} block={b} />
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="checklista" className="card checklist-card">
          <h2>Checklista</h2>
          <Checklist slug={phase.slug} items={phase.checklist} />
        </section>

        <nav className="pager" aria-label="Nästa och föregående fas">
          {prev ? (
            <Link href={`/${prev.slug}`}>← {prev.name}</Link>
          ) : (
            <Link href="/">← Översikt</Link>
          )}
          {next ? <Link href={`/${next.slug}`}>{next.name} →</Link> : <Link href="/">Översikt →</Link>}
        </nav>
      </div>
    </article>
  );
}
