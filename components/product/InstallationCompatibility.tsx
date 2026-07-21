import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

const quoteHref = "/devis?product=autel-maxicharger";
const simulatorHref = "/simulateur?product=autel-maxicharger";

const installationSteps = [
  { title: "Analyse du besoin", detail: "Usage, véhicule et puissance disponible" },
  { title: "Vérification technique", detail: "Emplacement, protections et raccordement" },
  { title: "Installation", detail: "Pose soignée et contrôle de conformité" },
  { title: "Mise en service", detail: "Configuration, connexion et prise en main" }
];

export default function InstallationCompatibility() {
  return (
    <section className="product-installation section" aria-labelledby="installation-title">
      <div className="container">
        <header className="product-section-heading"><p className="eyebrow">Installation et compatibilité</p><h2 id="installation-title">Pensée pour votre espace, prête pour votre véhicule.</h2><p>La MaxiCharger est compatible avec les véhicules Type 2 et s’installe au mur ou sur pied selon votre environnement.</p></header>
        <div className="installation-studio">
          <div className="installation-studio-bar">
            <p><i aria-hidden="true" /> EVAtlas Configuration Studio</p>
            <div><span>Type 2</span><span>Jusqu’à 22 kW</span><span>2 configurations</span></div>
          </div>
          <div className="installation-schematic">
            <div className="installation-modes">
              <article className="installation-mode installation-wall">
                <div className="installation-mode-top"><span>01</span><p><i aria-hidden="true" /> Configuration murale</p></div>
                <figure className="installation-visual"><span className="installation-orbit" aria-hidden="true" /><img src="/images/product/autel-maxicharger/installation/wall-mounted.png" width="1024" height="1536" loading="lazy" decoding="async" alt="Autel MaxiCharger en pose murale avec son câble de recharge" /></figure>
                <div className="installation-mode-copy"><h3>Pose murale</h3><p>Une intégration nette, compacte et directement accessible depuis votre stationnement.</p><ul aria-label="Avantages de la pose murale"><li>Gain de place</li><li>Accès direct</li></ul></div>
              </article>
              <article className="installation-mode installation-pedestal">
                <div className="installation-mode-top"><span>02</span><p><i aria-hidden="true" /> Configuration autonome</p></div>
                <figure className="installation-visual"><span className="installation-orbit" aria-hidden="true" /><img src="/images/product/autel-maxicharger/installation/pedestal-mounted.png" width="1024" height="1536" loading="lazy" decoding="async" alt="Autel MaxiCharger installée sur un pied autonome" /></figure>
                <div className="installation-mode-copy"><h3>Pose sur pied</h3><p>Une implantation libre et élégante lorsque le mur n’est pas la bonne option.</p><ul aria-label="Avantages de la pose sur pied"><li>Sans mur</li><li>Implantation libre</li></ul></div>
              </article>
            </div>
            <aside className="installation-flow">
              <header><span className="installation-flow-mark" aria-hidden="true"><i /><i /><i /></span><p className="eyebrow">Méthode EVAtlas</p><h3>De l’étude au premier branchement.</h3><p>Chaque étape est cadrée, vérifiée et expliquée par notre équipe.</p></header>
              <ol>{installationSteps.map((step, index) => <li key={step.title}><b>0{index + 1}</b><span><strong>{step.title}</strong><small>{step.detail}</small></span><i aria-hidden="true" /></li>)}</ol>
              <div className="installation-flow-status"><span><i aria-hidden="true" /> Accompagnement local</span><b>EVAtlas · Casablanca</b></div>
            </aside>
          </div>
        </div>
        <div className="installation-actions"><TrackedLink href={simulatorHref} className="button" eventName="click_product_simulator">Simuler mon temps de recharge <Icon name="arrow" size={17} /></TrackedLink><TrackedLink href={quoteHref} className="text-link" eventName="click_product_quote">Demander une étude d’installation <Icon name="arrow" size={16} /></TrackedLink></div>
      </div>
    </section>
  );
}
