"use client";
import { useState, FormEvent } from "react";
import { content as c } from "@/data/content";
import Doodle from "./Doodle";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "fail">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = { name: String(fd.get("name") || "").trim(), email: String(fd.get("email") || "").trim(), projectType: String(fd.get("projectType") || ""), message: String(fd.get("message") || "").trim(), website: String(fd.get("website") || "") };
    const er: Errors = {};
    if (!v.name) er.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) er.email = "Enter a valid email, like name@example.com.";
    if (!v.message) er.message = "Tell us a bit about your idea.";
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("loading");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
      setStatus(r.ok ? "done" : "fail");
    } catch { setStatus("fail"); }
  }

  if (status === "done")
    return (
      <div className="thanks rough" role="status">
        <Doodle name="heart" className="d" />
        <p className="script big">Thank you!</p>
        <p>Your message is on its way.</p>
      </div>
    );

  return (
    <form className="form rough" onSubmit={submit} noValidate>
      <label>Name
        <input name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby="e-name" />
        <span id="e-name" className="err" role="alert">{errors.name}</span>
      </label>
      <label>Email
        <input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby="e-email" />
        <span id="e-email" className="err" role="alert">{errors.email}</span>
      </label>
      <label>Project type
        <select name="projectType">{c.contact.projectTypes.map((t) => <option key={t}>{t}</option>)}</select>
      </label>
      <label>Message
        <textarea name="message" rows={5} aria-invalid={!!errors.message} aria-describedby="e-msg" />
        <span id="e-msg" className="err" role="alert">{errors.message}</span>
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {status === "fail" && <p className="err" role="alert">Something went wrong. Please try again.</p>}
      <button className="btn" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send project idea →"}</button>
    </form>
  );
}
