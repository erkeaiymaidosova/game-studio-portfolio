/** Подсвечивает placeholder-текст маркером, чтобы его невозможно было пропустить. */
export function isPh(s: string) {
  return /\[[^\]]*\]|YOUR_/.test(s);
}
export default function Ph({ children }: { children: string }) {
  return isPh(children) ? <mark className="ph">{children}</mark> : <>{children}</>;
}
