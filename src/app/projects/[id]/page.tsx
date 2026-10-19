import Link from "next/link";
import { notFound } from "next/navigation";
import { content as c } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ph from "@/components/Ph";
import Doodle from "@/components/Doodle";

export function generateStaticParams() { return c.projects.map((p) => ({ id: p.id })); }
export function generateMetadata({ params }: { params: { id: string } }) {
  const p = c.projects.find((x) => x.id === params.id);
  return { title: p ? `${p.title} — ${c.company.name}` : c.seo.title, description: p?.description };
}

const paras = (t: string) => t.split("\n\n").map((x, i) => <p key={i}><Ph>{x}</Ph></p>);

/** Если ссылка ещё не добавлена — показываем спокойную пунктирную метку вместо битой ссылки. */
function Btn({ href, label }: { href: string; label: string }) {
  return href.startsWith("YOUR_")
    ? <span className="btn btn-ph" title="Add this link in src/data/content.ts">{label} link needed</span>
    : <a className="btn" href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const p = c.projects.find((x) => x.id === params.id);
  if (!p) notFound();
  const blocks: [string, string][] = [["Goal", p.goal], ["Gameplay", p.gameplay]];
  if (p.multiplayer) blocks.push(["Multiplayer", p.multiplayer]);
  const h = p.howItWorks;
  return (
    <>
      <Navbar />
      <main className="sec pdetail">
        <Link href="/#work" className="back">← All work</Link>
        <p className="num">Project {p.number}</p>
        <h1 className="script huge">{p.title}</h1>
        <p className="hl big-hl">{p.highlight}</p>
        <figure className="phero rough"><img src={p.cover} alt={`${p.title} cover`} /></figure>
        <span className="note p-note">{p.note}</span>
        <div className="pgrid">
          <div>
            <div className="lead">{paras(p.fullDescription)}</div>
            {p.disclaimer && <p className="disclaimer">{p.disclaimer}</p>}
            {blocks.map(([t, tx]) => (<section key={t}><h2>{t}</h2><p><Ph>{tx}</Ph></p></section>))}
          </div>
          <dl className="facts side">
            <div><dt>Category</dt><dd>{p.category}</dd></div>
            <div><dt>Genre</dt><dd>{p.genre}</dd></div>
            <div><dt>Platform</dt><dd>{p.platform}</dd></div>
            <div><dt>Players</dt><dd>{p.players}</dd></div>
            <div><dt>Year</dt><dd>{p.year}</dd></div>
            <div><dt>My role</dt><dd>{p.role}</dd></div>
            <div><dt>Technologies</dt><dd>{p.technologies.map((t) => <span key={t} className="chip">{t}</span>)}</dd></div>
          </dl>
        </div>
        <div className="btns"><Btn href={p.live} label="Live demo" /><Btn href={p.github} label="GitHub" /></div>
        {h && (
          <section className="how">
            <h2 className="script big">{h.title}</h2>
            <div className="how-grid">
              <ol className="flow" aria-label="Architecture flow">
                {h.flow.map((s, i) => (<li key={i} className="rough">{s}</li>))}
              </ol>
              <div>
                <p className="lead">{h.text}</p>
                <ul className="pts">{h.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
          </section>
        )}
        <h2 className="script big">Screenshots <Doodle name="controller" className="d inl" /></h2>
        <div className="shots">{p.screenshots.map((s, i) => <img key={s} className="rough" src={s} alt={`${p.title} screenshot ${i + 1} (placeholder)`} loading="lazy" />)}</div>
      </main>
      <Footer />
    </>
  );
}
