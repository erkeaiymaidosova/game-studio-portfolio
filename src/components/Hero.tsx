import { content as c } from "@/data/content";
import Doodle from "./Doodle";
import Ph from "./Ph";

export default function Hero() {
  const tones = ["red", "yellow", "blue", "green"];
  return (
    <section id="top" className="hero">
      <div className="hero-tiles" aria-hidden="true">
        {c.hero.images.map((src, i) => (
          <div key={src} className={`tile tile-${tones[i]}`}><img src={src} alt="" loading="eager" /></div>
        ))}
      </div>
      <h1 className="hero-title">
        <span className="grot">{c.company.heroLine1}</span>
        <span className="script">{c.company.heroScript}</span>
        <span className="grot">{c.company.heroLine3}</span>
      </h1>
      <Doodle name="controller" className="d d-ctrl" />
      <Doodle name="heart" className="d d-heart" />
      <Doodle name="cursor" className="d d-cursor" />
      <Doodle name="arrow" className="d d-arrow" />
      <span className="note d-play">{c.company.handNote}</span>
      <div className="hero-bottom">
        <p className="lead"><Ph>{c.company.heroText}</Ph></p>
        <div className="btns">
          <a className="btn" href="#work">View our work</a>
          <a className="btn btn-alt" href="#contact">Start a project</a>
        </div>
      </div>
    </section>
  );
}
