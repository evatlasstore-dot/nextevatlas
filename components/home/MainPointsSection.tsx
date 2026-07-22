import homepage from "@/data/homepage.json";
import Icon from "@/components/ui/Icon";
import ProductRouteLink from "@/components/ui/ProductRouteLink";

export default function MainPointsSection() {
  return (
    <section className="main-points section" aria-labelledby="points-title">
      <div className="container points-intro">
        <p className="eyebrow">L’expertise EVAtlas</p>
        <h2 id="points-title">Un parcours clair, conçu comme un système fiable.</h2>
        <p>Du diagnostic à la mise en service, chaque décision est lisible et adaptée à votre lieu de recharge.</p>
      </div>
      <div className="container expertise-console">
        <article className="console-overview reveal">
          <p className="console-index">01 / PRÉSENCE LOCALE</p>
          <h3>Une équipe au plus près du terrain.</h3>
          <ul className="console-checks">
            <li><Icon name="check" size={16} /> Expertise locale au Maroc</li>
            <li><Icon name="check" size={16} /> Installation professionnelle</li>
            <li><Icon name="check" size={16} /> Conseil et SAV local</li>
          </ul>
          <span className="console-signal" aria-hidden="true"><i /><i /><i /></span>
        </article>
        <article className="console-solutions reveal">
          <p className="console-index">02 / CONFIGURATION</p>
          <h3>Une solution selon votre usage.</h3>
          <div className="console-solution-list">
            <div><span>01</span><p><b>Recharge résidentielle</b><small>Une solution pensée autour de vos habitudes.</small></p></div>
            <div><span>02</span><p><b>Entreprises et hôtels</b><small>Des points de recharge pour accueillir et accompagner.</small></p></div>
            <div><span>03</span><p><b>Résidences et parkings</b><small>Une approche adaptée aux lieux partagés.</small></p></div>
          </div>
          <ProductRouteLink className="console-link">Explorer les solutions <Icon name="arrow" size={16} /></ProductRouteLink>
        </article>
        <article className="console-product reveal">
          <p className="console-index">03 / PRODUIT VEDETTE</p>
          <div className="product-chip">AUTEL · MAXICHARGER</div>
          <h3>La borne qui s’intègre à votre quotidien.</h3>
          <p>Une recharge AC connectée, discrète et prête pour les usages d’aujourd’hui.</p>
          <ul className="console-specs">
            {homepage.productBenefits.map((benefit, index) => <li key={benefit}><span>0{index + 1}</span>{benefit}</li>)}
          </ul>
          <ProductRouteLink className="console-product-link" eventName="click_product_feature">Découvrir la borne <Icon name="arrow" size={16} /></ProductRouteLink>
        </article>
      </div>
    </section>
  );
}
