import { content as c } from "@/data/content";
import Doodle from "./Doodle";
import Ph from "./Ph";
import Reveal from "./Reveal";

const paras = (t: string) => t.split("\n\n").map((x, i) => <p key={i}><Ph>{x}</Ph></p>);

export default function About() {
  const f = c.founder;
  return (
    <section id="about" className="sec about">
      <Reveal className="about-photo">
        <figure className="polaroid rough"><img src={f.image} alt={f.imageAlt} loading="lazy" /></figure>
        <span className="note n-ship">SHIP IT</span>
        <Doodle name="dice" className="d d-dice" />
      </Reveal>
      <Reveal className="about-text">
        <h2 className="script big">{c.company.aboutTitle}</h2>
        {paras(c.company.description)}
      </Reveal>
      <Reveal className="about-me">
        <h3 className="script med">About me</h3>
        <p className="role">{f.role}</p>
        {paras(f.bio)}
        <dl className="facts">
          <div><dt>Name</dt><dd><Ph>{f.name}</Ph></dd></div>
          <div><dt>Born</dt><dd>{f.born}</dd></div>
          <div><dt>Education</dt><dd>{f.education}</dd></div>
          <div><dt>Program</dt><dd>{f.program}</dd></div>
          <div><dt>Focus</dt><dd>{f.focus}</dd></div>
          <div><dt>Based in</dt><dd><Ph>{c.company.location}</Ph></dd></div>
        </dl>
      </Reveal>
      <Reveal className="about-words">
        <div className="wordsearch rough" role="img" aria-label={`Word search containing: ${f.wordSearchWords.join(", ")}`}>
          {f.wordSearchRows.map((r, y) => r.split("").map((ch, x) => <b key={`${y}-${x}`} className={(x + y) % 5 === 0 ? "dk" : ""}>{ch}</b>))}
        </div>
        <ol className="skills note">{f.skills.map((s) => <li key={s}>{s}</li>)}<li className="and">and more!!!</li></ol>
      </Reveal>
    </section>
  );
}
