import { content as c } from "@/data/content";
import Doodle from "./Doodle";
import Reveal from "./Reveal";

const notes = ["PLAY", "BUILD", "TEST", "SHIP"];
export default function Process() {
  return (
    <section id="process" className="sec process">
      <h2 className="script big outline">How we work</h2>
      <ol className="steps">
        {c.process.map((s, i) => (
          <Reveal key={s.title} className="step">
            <li>
              <span className="circ">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < c.process.length - 1 && <Doodle name="arrow" className="d step-arrow" />}
              {i % 2 === 1 && <span className="note step-note">{notes[(i - 1) / 2 % 4 | 0]}</span>}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
