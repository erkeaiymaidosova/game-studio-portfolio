"use client";
import { useCallback, useEffect, useState } from "react";
import { content as c } from "@/data/content";

export default function Gallery() {
  const items = c.gallery;
  const [i, setI] = useState<number | null>(null);
  const go = useCallback((d: number) => setI((v) => (v === null ? v : (v + d + items.length) % items.length)), [items.length]);
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setI(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [i, go]);
  return (
    <section id="gallery" className="sec">
      <h2 className="script big">Contact sheet</h2>
      <div className="gal">
        {items.map((g, n) => (
          <button key={g.src} className={`gi ${g.size} rough`} onClick={() => setI(n)} aria-label={`Open image: ${g.alt}`}>
            <img src={g.src} alt={g.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setI(null)}>
          <button className="lb-x" aria-label="Close" onClick={() => setI(null)} autoFocus>✕</button>
          <button className="lb-n lb-p" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
          <img src={items[i].src} alt={items[i].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-n lb-nx" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
        </div>
      )}
    </section>
  );
}
