type Name = "controller" | "heart" | "cursor" | "dice" | "arrow" | "star" | "ship" | "bubble" | "bar" | "grid";
const S = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function Doodle({ name, className = "", label }: { name: Name; className?: string; label?: string }) {
  const p: Record<Name, JSX.Element> = {
    controller: (<><path {...S} d="M20 40c-6 4-14 30-8 36 5 5 14-4 20-14h56c6 10 15 19 20 14 6-6-2-32-8-36-8-6-20-8-30-6H50c-10-2-22 0-30 6z" /><path {...S} d="M38 46v18M29 55h18" /><circle {...S} cx="90" cy="50" r="4" /><circle {...S} cx="100" cy="60" r="4" /></>),
    heart: (<path {...S} d="M60 95C20 65 14 38 32 28c12-6 24 2 28 12 4-10 16-18 28-12 18 10 12 37-28 67z" />),
    cursor: (<path {...S} d="M30 18l8 78 18-22 28 6z" />),
    dice: (<><path {...S} d="M24 28l62-4 6 62-62 6z" /><circle cx="42" cy="44" r="4" fill="currentColor" /><circle cx="60" cy="62" r="4" fill="currentColor" /><circle cx="76" cy="80" r="4" fill="currentColor" /></>),
    arrow: (<path {...S} d="M8 70c30-50 70-56 98-30M92 28l16 12-20 8" />),
    star: (<path {...S} d="M60 12v34M60 74v34M12 60h34M74 60h34M28 28l22 22M70 70l22 22" />),
    ship: (<><path {...S} d="M12 74h96l-14 20H28zM58 74V24l28 40H58M52 40L34 70h18" /><path {...S} d="M8 106c10-6 18-6 28 0s18 6 28 0 18-6 28 0 12 4 20 0" /></>),
    bubble: (<path {...S} d="M14 24c30-10 66-10 92 0 6 20 6 36 0 50-26 10-50 8-64 6L22 100l4-22C14 60 8 40 14 24z" />),
    bar: (<><rect {...S} x="8" y="46" width="104" height="26" rx="4" /><path {...S} d="M16 59h60" strokeWidth={14} /></>),
    grid: (<path {...S} d="M20 20h80v80H20zM47 20v80M73 20v80M20 47h80M20 73h80" />),
  };
  return (
    <svg viewBox="0 0 120 120" className={`doodle ${className}`} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} focusable="false">
      {p[name]}
    </svg>
  );
}
