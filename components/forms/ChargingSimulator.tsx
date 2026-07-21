"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

type ChargingSimulatorProps = {
  product?: string;
};

const powerOptions = [2.3, 3.7, 7.4, 11, 22];
const capacityPresets = [40, 60, 75, 100];
const chargingEfficiency = 0.9;

const formatDuration = (hours: number) => {
  if (!Number.isFinite(hours) || hours <= 0) return "—";
  const totalMinutes = Math.max(1, Math.round(hours * 60));
  const fullHours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (fullHours === 0) return `${minutes} min`;
  return `${fullHours} h${minutes ? ` ${String(minutes).padStart(2, "0")} min` : ""}`;
};

const formatEnergy = (value: number) => Number.isFinite(value) && value > 0 ? `${value.toFixed(1)} kWh` : "—";

export default function ChargingSimulator({ product = "autel-maxicharger" }: ChargingSimulatorProps) {
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [capacity, setCapacity] = useState(60);
  const [startLevel, setStartLevel] = useState(20);
  const [targetLevel, setTargetLevel] = useState(80);
  const [power, setPower] = useState(7.4);

  useEffect(() => {
    const requestedProduct = new URLSearchParams(window.location.search).get("product");
    if (requestedProduct) setSelectedProduct(requestedProduct);
  }, []);

  const errors = useMemo(() => {
    const nextErrors: string[] = [];
    if (!Number.isFinite(capacity) || capacity < 10 || capacity > 200) nextErrors.push("La capacité doit être comprise entre 10 et 200 kWh.");
    if (!Number.isFinite(startLevel) || startLevel < 0 || startLevel > 99) nextErrors.push("Le niveau de départ doit être compris entre 0 et 99 %.");
    if (!Number.isFinite(targetLevel) || targetLevel < 1 || targetLevel > 100) nextErrors.push("Le niveau cible doit être compris entre 1 et 100 %.");
    if (targetLevel <= startLevel) nextErrors.push("Le niveau cible doit être supérieur au niveau de départ.");
    return nextErrors;
  }, [capacity, startLevel, targetLevel]);

  const isValid = errors.length === 0;
  const levelDifference = isValid ? targetLevel - startLevel : 0;
  const batteryEnergy = isValid ? capacity * levelDifference / 100 : 0;
  const gridEnergy = isValid ? batteryEnergy / chargingEfficiency : 0;
  const duration = isValid ? gridEnergy / power : 0;

  const quoteHref = useMemo(() => {
    const parameters = new URLSearchParams({
      product: selectedProduct,
      source: "simulateur",
      capacity: String(capacity),
      start: String(startLevel),
      target: String(targetLevel),
      power: String(power),
    });
    return `/devis/?${parameters.toString()}`;
  }, [capacity, power, selectedProduct, startLevel, targetLevel]);

  return (
    <section className="sim-section" aria-labelledby="simulator-title">
      <div className="sim-shell">
        <header className="sim-heading">
          <p className="sim-eyebrow">Estimation instantanée</p>
          <h2 id="simulator-title">Combien de temps pour retrouver votre autonomie&nbsp;?</h2>
          <p>Ajustez quatre données. Le résultat se met à jour immédiatement et peut ensuite accompagner votre demande d’étude.</p>
        </header>

        <div className="sim-workspace">
          <form className="sim-controls" onSubmit={(event) => event.preventDefault()}>
            <div className="sim-controls-heading"><span>01</span><div><h3>Votre recharge</h3><p>Utilisez les données de votre véhicule si vous les connaissez.</p></div></div>

            <fieldset className="sim-fieldset">
              <legend>Capacité de la batterie</legend>
              <label className="sim-number-field" htmlFor="sim-capacity">
                <input id="sim-capacity" type="number" inputMode="decimal" min="10" max="200" step="1" value={capacity} aria-describedby="sim-capacity-help" onChange={(event) => setCapacity(Number(event.target.value))} />
                <span>kWh</span>
              </label>
              <p className="sim-field-help" id="sim-capacity-help">La capacité utile figure généralement dans la fiche technique du véhicule.</p>
              <div className="sim-presets" aria-label="Capacités courantes">
                {capacityPresets.map((value) => <button className={capacity === value ? "sim-preset-active" : "sim-preset"} type="button" key={value} aria-pressed={capacity === value} onClick={() => setCapacity(value)}>{value} kWh</button>)}
              </div>
            </fieldset>

            <div className="sim-level-grid">
              <fieldset className="sim-fieldset">
                <legend>Niveau de départ</legend>
                <label className="sim-number-field" htmlFor="sim-start">
                  <input id="sim-start" type="number" inputMode="numeric" min="0" max="99" step="1" value={startLevel} onChange={(event) => setStartLevel(Number(event.target.value))} />
                  <span>%</span>
                </label>
                <input className="sim-range" type="range" min="0" max="99" step="1" value={Math.min(99, Math.max(0, startLevel || 0))} aria-label="Ajuster le niveau de départ" onChange={(event) => setStartLevel(Number(event.target.value))} />
              </fieldset>
              <fieldset className="sim-fieldset">
                <legend>Niveau souhaité</legend>
                <label className="sim-number-field" htmlFor="sim-target">
                  <input id="sim-target" type="number" inputMode="numeric" min="1" max="100" step="1" value={targetLevel} onChange={(event) => setTargetLevel(Number(event.target.value))} />
                  <span>%</span>
                </label>
                <input className="sim-range" type="range" min="1" max="100" step="1" value={Math.min(100, Math.max(1, targetLevel || 1))} aria-label="Ajuster le niveau souhaité" onChange={(event) => setTargetLevel(Number(event.target.value))} />
              </fieldset>
            </div>

            <fieldset className="sim-fieldset">
              <legend>Puissance de recharge disponible</legend>
              <div className="sim-power-grid">
                {powerOptions.map((value) => (
                  <label className={`sim-power ${power === value ? "sim-power-selected" : ""}`} key={value}>
                    <input type="radio" name="power" value={value} checked={power === value} onChange={() => setPower(value)} />
                    <span><b>{value} kW</b><small>{value <= 3.7 ? "Prise ou charge lente" : value <= 7.4 ? "Monophasé courant" : value === 11 ? "Triphasé équilibré" : "Performance maximale"}</small></span>
                  </label>
                ))}
              </div>
            </fieldset>

            {errors.length > 0 && <div className="sim-errors" role="alert"><Icon name="shield" size={18} /><ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul></div>}
          </form>

          <aside className="sim-results" aria-live="polite" aria-label="Résultat de la simulation">
            <div className="sim-results-heading"><span>02</span><p>Votre estimation</p><small>Calcul en direct</small></div>
            <div className="sim-duration">
              <p>Temps de recharge estimé</p>
              <output>{formatDuration(duration)}</output>
              <span>avec une puissance de {power} kW</span>
            </div>
            <dl className="sim-metrics">
              <div><dt>Batterie récupérée</dt><dd>{isValid ? `${levelDifference} %` : "—"}</dd></div>
              <div><dt>Énergie ajoutée</dt><dd>{formatEnergy(batteryEnergy)}</dd></div>
              <div><dt>Énergie réseau estimée</dt><dd>{formatEnergy(gridEnergy)}</dd></div>
            </dl>

            <div className="sim-comparison">
              <h3>Repères de puissance</h3>
              <table>
                <thead><tr><th>Puissance</th><th>Durée estimée</th></tr></thead>
                <tbody>
                  {[7.4, 11, 22].map((comparisonPower) => <tr className={power === comparisonPower ? "sim-comparison-active" : ""} key={comparisonPower}><td>{comparisonPower} kW</td><td>{formatDuration(isValid ? gridEnergy / comparisonPower : 0)}</td></tr>)}
                </tbody>
              </table>
            </div>

            <p className="sim-method"><Icon name="signal" size={16} />Estimation incluant 10 % de pertes de charge. La puissance réelle peut être limitée par le véhicule ou l’installation électrique.</p>
            {isValid ? (
              <TrackedLink className="sim-result-cta" href={quoteHref} eventName="start_quote_from_simulator">Recevoir une étude avec ce résultat <Icon name="arrow" size={18} /></TrackedLink>
            ) : (
              <button className="sim-result-cta sim-result-cta-disabled" type="button" disabled>Corriger les valeurs pour continuer</button>
            )}
            <TrackedLink className="sim-product-link" href="/nos-produits/autel-maxicharger">Découvrir l’Autel MaxiCharger <Icon name="arrow" size={15} /></TrackedLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
