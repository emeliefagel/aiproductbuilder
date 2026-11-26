"use client";

import { useState } from "react";

export default function CopyBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* urklipp blockerat: texten går att markera manuellt */
    }
  };

  return (
    <div className="copy">
      <pre>{text}</pre>
      <button type="button" className="btn" onClick={copy}>
        {copied ? "Kopierat ✓" : label}
      </button>
    </div>
  );
}
