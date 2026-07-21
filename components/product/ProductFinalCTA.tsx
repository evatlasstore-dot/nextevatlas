import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

export default function ProductFinalCTA() {
  return <section className="product-final-cta section" aria-labelledby="final-cta-title"><div className="container"><p className="eyebrow">Votre projet EVAtlas</p><h2 id="final-cta-title">Passez à une recharge plus simple, plus sûre et plus intelligente.</h2><div><TrackedLink href="/devis?product=autel-maxicharger" className="button" eventName="click_product_quote">Demander un devis <Icon name="arrow" size={17} /></TrackedLink><TrackedLink href="/simulateur?product=autel-maxicharger" className="button button-outline" eventName="click_product_simulator">Simuler mon temps de recharge <Icon name="arrow" size={17} /></TrackedLink></div></div></section>;
}
