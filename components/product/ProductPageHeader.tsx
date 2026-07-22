"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Nos Produits", href: "/nos-produits/autel-maxicharger" },
  { label: "Devis", href: "/devis#quote-form" },
  { label: "Simulateur", href: "/simulateur" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export default function ProductPageHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`site-header product-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner container">
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <TrackedLink key={item.href} href={item.href} className={item.href === "/nos-produits/autel-maxicharger" ? "active" : ""} eventName={item.href.startsWith("/devis") ? "click_header_quote" : undefined}>
              {item.label}
            </TrackedLink>
          ))}
        </nav>
        <TrackedLink href="/" className="brand-logo" aria-label="EVAtlas — Accueil">
          <img src="/images/evatlas-logo.png" alt="EVAtlas" />
        </TrackedLink>
        <TrackedLink href="/devis?product=autel-maxicharger#quote-form" className="header-quote button button-small" eventName="click_header_quote">
          Demander un devis <Icon name="arrow" size={15} />
        </TrackedLink>
        <button className="menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? "close" : "menu"} size={23} />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navigation mobile">
          {navigation.map((item, index) => (
            <TrackedLink key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className={`mobile-nav-link ${item.href === "/nos-produits/autel-maxicharger" ? "active" : ""}`} eventName={item.href.startsWith("/devis") ? "click_header_quote" : undefined}>
              <span>0{index + 1}</span>{item.label}
            </TrackedLink>
          ))}
        </nav>
        <TrackedLink href="/devis?product=autel-maxicharger#quote-form" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="button mobile-quote" eventName="click_header_quote">Demander un devis <Icon name="arrow" size={16} /></TrackedLink>
      </div>
    </header>
  );
}
