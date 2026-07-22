"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import ProductPageHeader from "@/components/product/ProductPageHeader";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Nos produits", href: "/nos-produits/autel-maxicharger", productRoute: true },
  { label: "Devis", href: "/devis#quote-form" },
  { label: "Simulateur", href: "/simulateur" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export default function Header({ productMode = false }: { productMode?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isProductContext = productMode || pathname.startsWith("/nos-produits/autel-maxicharger");
  const isActive = (href: string) => {
    const pathnameHref = href.split("#", 1)[0];
    return pathnameHref === "/" ? pathname === "/" : pathname === pathnameHref || pathname.startsWith(`${pathnameHref}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (productMode) return <ProductPageHeader />;

  return (
    <header className={`site-header ${productMode ? "product-header" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner container">
        <TrackedLink href="/" className="brand-logo" aria-label="EVAtlas — Accueil">
          <Image src="/images/evatlas-logo.png" alt="EVAtlas" width={190} height={52} priority />
        </TrackedLink>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => {
            const active = isActive(item.href);
            if (item.productRoute) {
              return <ProductRouteLink key={item.href} href={item.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>{item.label}</ProductRouteLink>;
            }
            return <TrackedLink key={item.href} href={item.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined} eventName={item.href.startsWith("/devis") ? "click_header_quote" : undefined}>{item.label}</TrackedLink>;
          })}
        </nav>
        <TrackedLink href={isProductContext ? "/devis?product=autel-maxicharger#quote-form" : "/devis#quote-form"} className="header-quote button button-small" eventName="click_header_quote">
          Demander un devis <Icon name="arrow" size={15} />
        </TrackedLink>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? "close" : "menu"} size={23} />
        </button>
      </div>
      <div ref={menuRef} id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open} role="dialog" aria-modal="true" aria-label="Menu principal">
        <nav aria-label="Navigation mobile">
          {navigation.map((item, index) => {
            const active = isActive(item.href);
            if (item.productRoute) {
              return <ProductRouteLink key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className={`mobile-nav-link ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}><span>0{index + 1}</span>{item.label}</ProductRouteLink>;
            }
            return <TrackedLink key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className={`mobile-nav-link ${active ? "active" : ""}`} aria-current={active ? "page" : undefined} eventName={item.href.startsWith("/devis") ? "click_header_quote" : undefined}><span>0{index + 1}</span>{item.label}</TrackedLink>;
          })}
        </nav>
        <TrackedLink href={isProductContext ? "/devis?product=autel-maxicharger#quote-form" : "/devis#quote-form"} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="button mobile-quote" eventName="click_header_quote">Demander un devis <Icon name="arrow" size={16} /></TrackedLink>
      </div>
    </header>
  );
}
