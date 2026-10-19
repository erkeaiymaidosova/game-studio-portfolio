import Link from "next/link";
import { content as c } from "@/data/content";
import Doodle from "./Doodle";
import Ph from "./Ph";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="sec projects">
      <h2 className="script big">Selected work</h2>
      {c.projects.map((p, i) => (
        <Reveal key={p.id} className={`pcard ${i % 2 ? "flip" : ""} ${p.playful ? "playful" : ""}`}>
          <Link href={`/projects/${p.id}`} className="pcard-img rough" aria-label={`View project: ${p.title}`}>
            <img src={p.cover} alt={`${p.title} cover`} loading="lazy" />
            <span className="note hov-note">PLAY →</span>
            <Doodle name={p.doodle} className="d hov-doodle" />
          </Link>
          {p.playful && (<><Doodle name="bubble" className="d pl-bubble" /><Doodle name="star" className="d pl-star" /><span className="note pl-hi">hi!</span></>)}
          <div className="pcard-info">
            <p className="num">Project {p.number}</p>
            <h3>{p.title}</h3>
            <p className="meta">{p.category} · {p.technologies.join(" / ")}</p>
            <p className="hl">{p.highlight}</p>
            <p><Ph>{p.description}</Ph></p>
            <Link href={`/projects/${p.id}`} className="btn">View project</Link>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
