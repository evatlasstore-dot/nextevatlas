import Icon from "@/components/ui/Icon";
import product from "@/data/autel-maxicharger.json";

export default function TechnicalSpecifications() {
  return (
    <section className="technical-specs section" aria-labelledby="specs-title">
      <div className="container technical-specs-layout"><div className="technical-specs-intro"><p className="eyebrow">Fiche technique</p><h2 id="specs-title">Les données essentielles, sans détour.</h2><p>Les caractéristiques ci-dessous concernent l’Autel MaxiCharger AC Wallbox présentée sur cette page.</p><button type="button" className="button technical-sheet" disabled aria-disabled="true">Fiche technique bientôt disponible <Icon name="arrow" size={17} /></button></div><div className="technical-specs-grid">{product.technicalGroups.map((group) => <section key={group.title}><h3>{group.title}</h3><dl>{group.items.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></section>)}</div></div>
    </section>
  );
}
