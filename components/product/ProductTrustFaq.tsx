"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import product from "@/data/autel-maxicharger.json";

export default function ProductTrustFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="product-trust section" aria-labelledby="trust-faq-title"><div className="container product-trust-layout"><div className="product-reviews"><p className="eyebrow">Avis clients</p><h2 id="trust-faq-title">Les retours d’installation arrivent bientôt.</h2><div className="review-empty"><span>EVAtlas</span><p>Cette zone accueillera uniquement des avis réels, accompagnés d’une autorisation de publication.</p></div></div><div className="product-faq"><div className="faq-heading"><p className="eyebrow">FAQ produit</p><TrackedLink href="/faq" className="text-link" eventName="click_product_faq">Voir toute la FAQ <Icon name="arrow" size={15} /></TrackedLink></div>{product.faq.map((item, index) => <div className={`faq-item ${open === index ? "is-open" : ""}`} key={item.question}><h3><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>{item.question}<Icon name="chevron" size={18} /></button></h3><div className="faq-answer"><p>{item.answer}</p></div></div>)}</div></div></section>
  );
}
