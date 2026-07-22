"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import product from "@/data/autel-maxicharger.json";

const workflows = [
  { step: "01", title: "Piloter", features: [product.appFeatures[0], product.appFeatures[1], product.appFeatures[4]] },
  { step: "02", title: "Comprendre", features: [product.appFeatures[2], product.appFeatures[3]] },
  { step: "03", title: "Sécuriser", features: [product.appFeatures[5], product.appFeatures[6]] }
];

export default function AutelChargeAppSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let tracked = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !tracked) {
        window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "interact_autel_app" } }));
        tracked = true;
      }
    }, { threshold: .55 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const selectedWorkflow = workflows[activeWorkflow];

  return (
    <section ref={sectionRef} className="charge-app app-command-section section" aria-labelledby="app-title">
      <div className="container app-command-shell">
        <header className="app-command-heading">
          <div><p className="eyebrow">Autel Charge App</p><h2 id="app-title">Votre borne dans votre poche.</h2></div>
          <p>Une interface claire pour agir immédiatement, comprendre chaque recharge et garder le contrôle des accès.</p>
        </header>
        <div className="app-command-grid">
          <figure className="app-command-visual" aria-label="Aperçu de l’application Autel Charge">
            <span className="app-command-orbit app-command-orbit-one" aria-hidden="true" />
            <span className="app-command-orbit app-command-orbit-two" aria-hidden="true" />
            <span className="app-command-signal" aria-hidden="true"><i /><i /><i /></span>
            <Image
              className="app-command-mockup"
              src="/images/app/autel-charge-app/autel-charge-phone-mockups-cutout.png"
              alt="Application Autel Charge présentée sur trois smartphones"
              width={1162}
              height={1354}
              sizes="(max-width: 680px) 108vw, (max-width: 980px) 78vw, 610px"
            />
            <figcaption className="app-command-caption">
              <span><i aria-hidden="true" /> Application connectée</span>
              <b>Autel Charge App</b>
              <p>Pilotage, suivi et contrôle depuis votre téléphone.</p>
            </figcaption>
          </figure>

          <div className="app-command-console">
            <div className="app-command-console-heading"><p>Fonctions essentielles</p><span>07 outils</span></div>
            <div className="app-command-tabs" aria-label="Fonctions de l’application">
              {workflows.map((workflow, index) => {
                const isActive = activeWorkflow === index;
                return (
                  <button
                    aria-pressed={isActive}
                    className={isActive ? "is-active" : undefined}
                    key={workflow.step}
                    onClick={() => setActiveWorkflow(index)}
                    type="button"
                  >
                    <span>{workflow.step}</span><b>{workflow.title}</b><i aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <section className="app-command-detail" aria-live="polite" key={selectedWorkflow.step}>
              <div className="app-command-detail-heading"><span>{selectedWorkflow.step}</span><div><small>Mode sélectionné</small><h3>{selectedWorkflow.title}</h3></div></div>
              <ul>{selectedWorkflow.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="app-command-system"><span><i aria-hidden="true" /> Borne connectée</span><small>Wi‑Fi · Bluetooth · Ethernet</small></div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
