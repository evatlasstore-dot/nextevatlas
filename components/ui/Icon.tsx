type IconName =
  | "arrow"
  | "bolt"
  | "signal"
  | "phone"
  | "shield"
  | "menu"
  | "close"
  | "chevron"
  | "whatsapp"
  | "check"
  | "pin"
  | "car"
  | "home"
  | "clock"
  | "calculator"
  | "document"
  | "users"
  | "building"
  | "search"
  | "mail"
  | "calendar"
  | "external"
  | "linkedin"
  | "instagram"
  | "facebook";

export default function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7z" />,
    signal: <><path d="M5 19v-2" /><path d="M9 19v-6" /><path d="M13 19V9" /><path d="M17 19V5" /></>,
    phone: <><rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M10 18.5h4" /></>,
    shield: <path d="M12 3 5.5 6v5.2c0 4.4 2.8 8.4 6.5 9.8 3.7-1.4 6.5-5.4 6.5-9.8V6z" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    whatsapp: <path d="M20.5 11.8A8.4 8.4 0 0 1 8 19.1L3.5 20.5l1.5-4.2A8.4 8.4 0 1 1 20.5 11.8Z M8.4 8.1c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.5.7c-.1.1-.2.2-.1.4.4.8 1.2 1.6 2.1 2 .2.1.3.1.4 0l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.2.3.4 0 .4-.2 1.3-.5 1.6-.3.3-1 .5-1.6.4-1-.2-2.3-.9-3.4-2-1.1-1.1-1.8-2.3-2-3.3-.1-.6 0-1.3.3-1.7Z" />,
    check: <path d="m5 12 4.3 4.3L19 6.7" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.4" /></>,
    car: <><path d="m5 17-1.5-1.5V11l2-5h13l2 5v4.5L19 17" /><path d="M5 11h14" /><circle cx="7" cy="16" r="1.5" /><circle cx="17" cy="16" r="1.5" /></>,
    home: <><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    calculator: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h2m4 0h2m-8 4h2m4 0h2m-8 3h2m4 0h2" /></>,
    document: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M10 12h5m-5 4h5" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 15a5 5 0 0 1 3.5 5" /></>,
    building: <><path d="M4 21V5l8-3v19M12 8h8v13M7 7h2m-2 4h2m-2 4h2m6-3h2m-2 4h2M2 21h20" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
    linkedin: <><path d="M5 9v10" /><path d="M5 5.5v.01" /><path d="M10 19v-5.6a4 4 0 0 1 8 0V19" /><path d="M10 9v10" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    facebook: <path d="M14.5 21v-8h3l.5-3h-3.5V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.3 0-1.2-.1-2.2-.1-2.3 0-3.8 1.4-3.8 4V10H9v3h3v8" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
