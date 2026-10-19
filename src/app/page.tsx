import { content as c } from "@/data/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Doodle from "@/components/Doodle";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Gallery />
        <Process />
        <Services />
        <section id="contact" className="sec contact">
          <div>
            <h2 className="script big">{c.contact.title}</h2>
            <Doodle name="bar" className="d d-bar" />
            <p className="note">loading… 87%</p>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
