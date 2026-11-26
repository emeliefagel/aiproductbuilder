"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CHANGE_EVENT, PRODUCT_KEY, checklistKey, read, remove, write } from "@/lib/storage";

type Item = { slug: string; name: string; total: number; color: string };

export default function MyBuild({ phases }: { phases: Item[] }) {
  const [product, setProduct] = useState("");
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [confirming, setConfirming] = useState(false);

  const load = () => {
    setProduct(read<string>(PRODUCT_KEY, ""));
    const c: Record<string, number> = {};
    for (const p of phases) c[p.slug] = read<boolean[]>(checklistKey(p.slug), []).filter(Boolean).length;
    setCounts(c);
  };

  useEffect(() => {
    load();
    window.addEventListener(CHANGE_EVENT, load);
    return () => window.removeEventListener(CHANGE_EVENT, load);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reset = () => {
    remove(PRODUCT_KEY);
    for (const p of phases) remove(checklistKey(p.slug));
    setConfirming(false);
    load();
  };

  return (
    <section className="card mybuild">
      <h2 className="display-sm">Mitt bygge</h2>
      <p className="muted">
        Använd sidan som ett verktyg varje gång du bygger något nytt. Ge produkten ett namn och bocka av stegen i varje
        fas.
      </p>
      <label className="field">
        <span>Vad bygger du?</span>
        <input
          type="text"
          value={product}
          placeholder="Produktens namn"
          onChange={(e) => {
            setProduct(e.target.value);
            write(PRODUCT_KEY, e.target.value);
          }}
        />
      </label>
      <ul className="progress-list">
        {phases.map((p) => {
          const n = counts[p.slug] ?? 0;
          return (
            <li key={p.slug}>
              <Link href={`/${p.slug}`}>
                <span className={`dot bg-${p.color}`} />
                <span className="progress-name">{p.name}</span>
                <span className="bar" aria-hidden>
                  <span className="bar-fill" style={{ width: `${(n / p.total) * 100}%` }} />
                </span>
                <span className="muted small">
                  {n}/{p.total}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {confirming ? (
        <div className="confirm">
          <span>Rensa namnet och alla bockar?</span>
          <button type="button" className="btn" onClick={reset}>
            Ja, börja om
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setConfirming(false)}>
            Avbryt
          </button>
        </div>
      ) : (
        <button type="button" className="btn btn-ghost" onClick={() => setConfirming(true)}>
          Starta en ny produkt
        </button>
      )}
    </section>
  );
}
