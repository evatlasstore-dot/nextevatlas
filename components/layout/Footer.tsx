"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import ProductPageFooter from "@/components/product/ProductPageFooter";

const trackWhatsApp = () => {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "click_whatsapp" } }));
};

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=12%20Rue%20Mustapha%20Manfalouti%2C%20Gauthier%20-%20RDC%2C%20Casablanca%2020053";

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/nos-produits/autel-maxicharger") return <ProductPageFooter />;

  return (
    <footer className="site-footer footer-standard">
      <div className="container footer-standard-grid">
        <div className="footer-standard-brand">
          <Image src="/images/evatlas-logo.png" alt="EVAtlas" width={190} height={52} />
          <p>La recharge électrique connectée, installée avec soin et pensée pour le Maroc.</p>
          <div className="footer-standard-social" aria-label="Contacter EVAtlas">
            <a href="https://wa.me/212786376294" aria-label="WhatsApp EVAtlas" onClick={trackWhatsApp}><Icon name="whatsapp" size={18} /></a>
            <a href="mailto:evatlas.store@gmail.com" aria-label="E-mail EVAtlas">@</a>
          </div>
          <div className="footer-standard-networks" aria-label="Réseaux sociaux EVAtlas">
            <p>Réseaux sociaux</p>
            <div role="list" aria-label="Profils sociaux en cours de configuration">
              <span role="listitem" title="LinkedIn — profil à confirmer" aria-label="LinkedIn — profil à confirmer"><Icon name="linkedin" size={17} /></span>
              <span role="listitem" title="Instagram — profil à confirmer" aria-label="Instagram — profil à confirmer"><Icon name="instagram" size={17} /></span>
              <span role="listitem" title="Facebook — profil à confirmer" aria-label="Facebook — profil à confirmer"><Icon name="facebook" size={17} /></span>
            </div>
            <small>Profils à confirmer</small>
          </div>
        </div>
        <nav className="footer-standard-links" aria-label="Navigation du pied de page">
          <p>Navigation</p>
          <TrackedLink href="/">Accueil</TrackedLink>
          <ProductRouteLink>Nos produits</ProductRouteLink>
          <TrackedLink href="/simulateur">Simulateur</TrackedLink>
          <TrackedLink href="/a-propos">À propos</TrackedLink>
          <TrackedLink href="/faq">FAQ</TrackedLink>
          <TrackedLink href="/blog" eventName="click_blog">Guides</TrackedLink>
        </nav>
        <address className="footer-standard-contact">
          <p>Contact</p>
          <span>12 Rue Mustapha Manfalouti,<br />Gauthier – RDC, Casablanca 20053</span>
          <a href="mailto:evatlas.store@gmail.com">evatlas.store@gmail.com</a>
          <a href="tel:+212694592374">+212 6 94 59 23 74</a>
          <a href="https://wa.me/212786376294" onClick={trackWhatsApp}>WhatsApp +212 786 376 294</a>
        </address>
        <a className="footer-standard-map" href={directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir l’itinéraire vers EVAtlas, 12 Rue Mustapha Manfalouti, Gauthier – RDC, Casablanca 20053">
          <span className="footer-standard-map-visual" aria-hidden="true">
            <span className="footer-standard-map-route" />
            <span className="footer-standard-map-pin"><Icon name="pin" size={18} /></span>
            <span className="footer-standard-map-mark">EV</span>
          </span>
          <span className="footer-standard-map-copy">
            <span className="footer-standard-map-label">Nous trouver</span>
            <strong>12 Rue Mustapha Manfalouti,<br />Gauthier – RDC, Casablanca 20053</strong>
            <small>Ouvrir l’itinéraire <Icon name="external" size={13} /></small>
          </span>
        </a>
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
