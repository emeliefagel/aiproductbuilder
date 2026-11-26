"use client";

import { useEffect, useState } from "react";
import { checklistKey, read, write } from "@/lib/storage";

export default function Checklist({ slug, items }: { slug: string; items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const saved = read<boolean[]>(checklistKey(slug), []);
    setChecked(items.map((_, i) => Boolean(saved[i])));
  }, [slug, items]);

  const toggle = (i: number) => {
    const next = checked.map((c, j) => (j === i ? !c : c));
    setChecked(next);
    write(checklistKey(slug), next);
  };

  const done = checked.filter(Boolean).length;

  return (
    <div className="checklist">
      <div className="checklist-head">
        <span>
          {done} av {items.length} klara
        </span>
        <div className="bar" aria-hidden>
          <div className="bar-fill" style={{ width: `${(done / items.length) * 100}%` }} />
        </div>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <label className={checked[i] ? "is-done" : ""}>
              <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="muted small">Bockarna sparas i din webbläsare, bara för dig.</p>
    </div>
  );
}
