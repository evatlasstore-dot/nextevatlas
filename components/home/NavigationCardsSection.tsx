import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

export default function NavigationCardsSection() {
  return (
    <section className="launchpad-section section" aria-labelledby="navigation-title">
      <div className="container launchpad-shell">
        <header className="launchpad-heading">
          <p className="eyebrow">La prochaine étape</p>
          <h2 id="navigation-title">Avancez à votre rythme.</h2>
          <p>Un conseil humain si votre projet est prêt. Une estimation immédiate si vous souhaitez encore explorer.</p>
        </header>
        <div className="launchpad-board">
          <aside className="launchpad-advice">
            <span><i aria-hidden="true" /> Conseil EVAtlas</span>
            <h3>Vous hésitez entre les deux parcours&nbsp;?</h3>
            <p>Commencez par le simulateur. Votre estimation vous aidera ensuite à mieux cadrer votre demande.</p>
            <div><Icon name="shield" size={18} /><span><b>Accompagnement local</b><small>Une équipe disponible pour reprendre votre projet.</small></span></div>
          </aside>
          <div className="launchpad-options">
            <TrackedLink href="/devis#quote-form" className="launchpad-option launchpad-option-primary" eventName="submit_quote_start">
              <span className="launchpad-number">01</span>
              <div><p>Projet défini</p><h3>Échanger avec un expert.</h3><span>Véhicule, puissance et emplacement&nbsp;: nous préparons une recommandation cohérente.</span><ul aria-label="Contenu de l’étude"><li>Étude personnalisée</li><li>Solution adaptée</li></ul></div>
              <b><Icon name="arrow" size={20} /></b>
            </TrackedLink>
            <TrackedLink href="/simulateur" className="launchpad-option" eventName="click_simulator">
              <span className="launchpad-number">02</span>
              <div><p>Projet à explorer</p><h3>Estimer ma recharge.</h3><span>Obtenez une première lecture de votre besoin à partir de votre véhicule et de vos habitudes.</span><ul aria-label="Contenu de la simulation"><li>Résultat immédiat</li><li>Sans engagement</li></ul></div>
              <b><Icon name="arrow" size={20} /></b>
            </TrackedLink>
          </div>
        </div>
        <nav className="launchpad-resources" aria-label="Ressources utiles"><span>Vous préférez vous informer d’abord&nbsp;?</span><TrackedLink href="/a-propos">Notre approche <Icon name="arrow" size={15} /></TrackedLink><TrackedLink href="/faq" eventName="click_faq">Questions fréquentes <Icon name="arrow" size={15} /></TrackedLink><TrackedLink href="/blog" eventName="click_blog">Guides pratiques <Icon name="arrow" size={15} /></TrackedLink></nav>
      </div>
    </section>
  );
}
