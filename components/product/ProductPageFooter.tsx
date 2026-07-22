"use client";

import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ProductRouteLink from "@/components/ui/ProductRouteLink";

const trackWhatsApp = () => {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "click_whatsapp" } }));
};

export default function ProductPageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer footer-standard">
      <div className="container footer-standard-grid">
        <div className="footer-standard-brand">
          <img src="/images/evatlas-logo.png" alt="EVAtlas" />
          <p>La recharge électrique connectée, installée avec soin et pensée pour le Maroc.</p>
          <div className="footer-standard-social" aria-label="Contacter EVAtlas">
            <a href="https://wa.me/212786376294" aria-label="WhatsApp EVAtlas" onClick={trackWhatsApp}><Icon name="whatsapp" size={18} /></a>
            <a href="mailto:evatlas.store@gmail.com" aria-label="E-mail EVAtlas">@</a>
          </div>
        </div>
        <nav className="footer-standard-links" aria-label="Navigation du pied de page">
          <p>Navigation</p>
          <TrackedLink href="/">Accueil</TrackedLink>
          <ProductRouteLink>Nos solutions</ProductRouteLink>
          <TrackedLink href="/simulateur">Simulateur</TrackedLink>
          <TrackedLink href="/blog" eventName="click_blog">Guides</TrackedLink>
        </nav>
        <address className="footer-standard-contact">
          <p>Contact</p>
          <span>12 Rue Mustapha Manfalouti,<br />Gauthier – RDC, Casablanca 20053</span>
          <a href="mailto:evatlas.store@gmail.com">evatlas.store@gmail.com</a>
          <a href="tel:+212694592374">+212 6 94 59 23 74</a>
          <a href="https://wa.me/212786376294" onClick={trackWhatsApp}>WhatsApp +212 786 376 294</a>
        </address>
      </div>
      <div className="container footer-standard-bottom">
        <span>© {year} EVAtlas. Tous droits réservés.</span>
        <div>
          <TrackedLink href="/mentions-legales">Mentions légales</TrackedLink>
          <TrackedLink href="/politique-de-confidentialite">Confidentialité</TrackedLink>
          <TrackedLink href="/cookies">Cookies</TrackedLink>
          <TrackedLink href="/conditions-generales">Conditions générales</TrackedLink>
        </div>
      </div>
      <a href="https://wa.me/212786376294" className="whatsapp-float" aria-label="Contacter EVAtlas sur WhatsApp" onClick={trackWhatsApp}><Icon name="whatsapp" size={25} /></a>
    </footer>
  );
}
