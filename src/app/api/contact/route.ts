import { NextResponse } from "next/server";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const bad = (status = 400) => NextResponse.json({ ok: false }, { status });

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return bad(); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot: тихо игнорируем ботов

  const name = String(b.name ?? "").trim().slice(0, 100);
  const email = String(b.email ?? "").trim().slice(0, 150);
  const projectType = String(b.projectType ?? "").trim().slice(0, 80);
  const message = String(b.message ?? "").trim().slice(0, 3000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) { console.error("Telegram env variables are not set"); return bad(500); }

  const text =
    `🎮 <b>NEW PROJECT INQUIRY</b>\n\n👤 <b>Name:</b>\n${esc(name)}\n\n📧 <b>Email:</b>\n${esc(email)}\n\n` +
    `🎯 <b>Project type:</b>\n${esc(projectType || "—")}\n\n💬 <b>Message:</b>\n${esc(message)}\n\n🌐 <b>Sent from:</b>\nPortfolio website`;

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    if (!r.ok) { console.error("Telegram error status", r.status); return bad(502); }
    return NextResponse.json({ ok: true });
  } catch { console.error("Telegram request failed"); return bad(502); }
}
