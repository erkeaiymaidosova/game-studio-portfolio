import { content as c } from "@/data/content";
import Doodle from "./Doodle";
import Ph from "./Ph";

export default function Footer() {
  const s = c.socialLinks;
  const link = (label: string, href: string) =>
    href.startsWith("YOUR_") ? <span key={label} className="ph" title="Placeholder link">{label}</span> : <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
  return (
    <footer className="foot">
      <div>
        <strong><Ph>{c.company.name}</Ph></strong>
        <p className="note">{c.company.footerNote}</p>
        <p>{c.company.tagline}</p>
      </div>
      <nav aria-label="Social links">
        {link("GitHub", s.github)}{link("Instagram", s.instagram)}{link("LinkedIn", s.linkedin)}
        {c.company.email.startsWith("YOUR_") ? <span className="ph" title="Placeholder email">Email</span> : <a href={`mailto:${c.company.email}`}>Email</a>}
      </nav>
      <small>© {new Date().getFullYear()} <Ph>{c.company.name}</Ph></small>
      <Doodle name="heart" className="d d-fheart" />
    </footer>
  );
}
