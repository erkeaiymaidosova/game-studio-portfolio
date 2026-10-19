import { content as c } from "@/data/content";
import Doodle from "./Doodle";
import Ph from "./Ph";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="sec services">
      <h2 className="script big">What we do</h2>
      <div className="svc">
        {c.services.map((s, i) => (
          <Reveal key={s.title} className={`svc-i s${i}`}>
            <h3>{s.title}</h3>
            <p><Ph>{s.text}</Ph></p>
          </Reveal>
        ))}
      </div>
      <Doodle name="bubble" className="d d-bubble" />
    </section>
  );
}
