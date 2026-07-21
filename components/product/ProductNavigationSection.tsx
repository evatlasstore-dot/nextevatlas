import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

export default function ProductNavigationSection() {
  return (
    <section className="handoff-section section" aria-labelledby="product-navigation-title">
      <div className="container handoff-shell">
        <header className="handoff-heading">
          <span className="handoff-product"><i><Icon name="check" size={15} /></i>Autel MaxiCharger sélectionnée</span>
          <h2 id="product-navigation-title">La suite, simplement.</h2>
          <p>Votre produit est choisi. Sélectionnez maintenant la prochaine étape adaptée à votre niveau d’avancement.</p>
        </header>
        <div className="handoff-card">
          <div className="handoff-progress" aria-label="Avancement du projet">
            <div className="is-complete"><span><Icon name="check" size={14} /></span><p><b>Produit</b><small>MaxiCharger</small></p></div>
            <i aria-hidden="true" />
            <div><span>2</span><p><b>Estimation</b><small>Facultative</small></p></div>
            <i aria-hidden="true" />
            <div><span>3</span><p><b>Étude</b><small>Installation</small></p></div>
          </div>
          <div className="handoff-actions">
            <TrackedLink href="/simulateur?product=autel-maxicharger" className="handoff-action" eventName="click_product_simulator">
              <span className="handoff-action-icon"><Icon name="bolt" size={22} /></span>
              <div><p>Je veux encore comparer</p><h3>Faire une simulation.</h3><span>Une estimation immédiate pour mieux comprendre la puissance et le temps de recharge.</span></div>
              <small>Estimation immédiate</small>
              <b><Icon name="arrow" size={19} /></b>
            </TrackedLink>
            <TrackedLink href="/devis?product=autel-maxicharger" className="handoff-action handoff-action-primary" eventName="start_quote_autel">
              <span className="handoff-action-icon"><Icon name="shield" size={22} /></span>
              <div><p>Mon choix est confirmé</p><h3>Préparer mon installation.</h3><span>Nous étudions votre site et vous orientons vers une configuration adaptée.</span></div>
              <small>Étude personnalisée</small>
              <b><Icon name="arrow" size={19} /></b>
            </TrackedLink>
          </div>
          <footer className="handoff-footer"><span><i aria-hidden="true" /> Votre sélection sera conservée dans les deux parcours.</span><nav aria-label="Aide produit"><TrackedLink href="/faq" eventName="click_product_faq">FAQ produit</TrackedLink><TrackedLink href="/blog" eventName="click_blog">Guides</TrackedLink><TrackedLink href="/a-propos">À propos</TrackedLink></nav></footer>
        </div>
      </div>
    </section>
  );
}
