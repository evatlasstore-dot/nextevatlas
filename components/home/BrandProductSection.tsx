import homepage from "@/data/homepage.json";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

export default function BrandProductSection() {
  return (
    <section id="evatlas-borne" className="brand-section section" aria-labelledby="brand-title">
      <div className="container brand-copy reveal">
          <p className="eyebrow">EVAtlas et la borne</p>
          <h2 id="brand-title">Une solution pensée au-delà de la borne</h2>
          <p>EVAtlas accompagne les particuliers et les professionnels au Maroc dans le choix, l’installation, la configuration et le suivi de leur solution de recharge.</p>
          <TrackedLink href="/nos-produits/autel-maxicharger" className="text-link" eventName="click_product_feature">Explorer la MaxiCharger <Icon name="arrow" size={16} /></TrackedLink>
      </div>
      <div className="container product-experience reveal">
        <div className="product-stage" aria-label="Aperçu vidéo de la recharge EVAtlas">
          <video className="watermark-crop" autoPlay muted loop playsInline preload="metadata" poster="/images/evatlas-maxicharger-garage-poster.png">
            <source src="/videos/evatlas-maxicharger-garage.mp4" type="video/mp4" />
          </video>
          <div className="stage-overlay" />
          <div className="stage-kicker"><span className="live-dot" /> MaxiCharger AC · Connectée</div>
          <div className="stage-caption"><span>02</span><p>La recharge devient un geste<br />aussi simple que votre départ.</p></div>
          <div className="charge-orbit" aria-hidden="true"><i /><i /><b>22<small>kW</small></b></div>
        </div>
        <div className="feature-orbit" role="list" aria-label="Caractéristiques de la solution">
          {homepage.brandFeatures.map((feature, index) => (
            <article className={`feature-note feature-${index + 1}`} key={feature.title} role="listitem">
              <div className="feature-icon"><Icon name={feature.icon as "bolt" | "signal" | "phone" | "shield"} size={19} /></div>
              <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
