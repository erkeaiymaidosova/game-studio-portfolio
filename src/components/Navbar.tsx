"use client";
import { useEffect, useState } from "react";
import { content } from "@/data/content";
import Doodle from "./Doodle";
import Ph from "./Ph";

const links = [["work", "Work"], ["about", "About"], ["process", "Process"], ["contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <header className={`nav ${scrolled ? "nav-s" : ""}`}>
        <a href="/#top" className="nav-logo"><Ph>{content.company.name}</Ph><span className="note nav-note">play!</span></a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="menu" className={open ? "open" : ""} aria-label="Main">
          {links.map(([id, l]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <Doodle name="star" className="nav-doodle" />
      </header>
      <a href="#top" className={`totop ${scrolled ? "show" : ""}`} aria-label="Back to top">↑</a>
    </>
  );
}
