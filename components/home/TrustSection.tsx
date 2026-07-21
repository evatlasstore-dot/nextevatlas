"use client";

import { useState } from "react";
import homepage from "@/data/homepage.json";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import { ReviewRail } from "@/components/shared/ReviewsSection";

export default function TrustSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="trust-section section" aria-labelledby="trust-title">
      <div className="container trust-layout">
        <div className="reviews-block reveal">
          <div className="trust-title-row">
            <div>
              <p className="eyebrow">Parcours illustratifs</p>
              <h2 id="trust-title">Des besoins qui ressemblent aux vôtres.</h2>
            </div>
            <span className="trust-status"><i /> Accompagnement local</span>
          </div>
          <p className="demo-disclosure">Contenus fictifs de démonstration — à remplacer par des avis vérifiés avant publication commerciale.</p>
          <ReviewRail limit={2} compact />
        </div>
        <div className="trust-proof reveal">
          <p className="trust-panel-label">Votre projet, clairement cadré</p>
          <div className="proof-list" aria-label="Éléments de confiance">
            <div><Icon name="shield" size={22} /><span>Garantie locale</span></div>
            <div><Icon name="phone" size={22} /><span>SAV et assistance</span></div>
            <div><Icon name="pin" size={22} /><span>Étude adaptée au site</span></div>
          </div>
          <div className="faq-preview">
            <div className="faq-heading"><p className="eyebrow">FAQ courte</p><TrackedLink href="/faq" className="text-link" eventName="click_faq">Voir toute la FAQ <Icon name="arrow" size={15} /></TrackedLink></div>
            {homepage.faq.map((item, index) => (
              <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={item.question}>
                <h3><button type="button" id={`home-faq-button-${index}`} aria-expanded={openFaq === index} aria-controls={`home-faq-panel-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{item.question}<Icon name="chevron" size={18} /></button></h3>
                <div className="faq-answer" id={`home-faq-panel-${index}`} role="region" aria-labelledby={`home-faq-button-${index}`} hidden={openFaq !== index}><p>{item.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
