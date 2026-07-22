"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import TrackedLink from "@/components/ui/TrackedLink";
import styles from "./ChargingSimulator.module.css";

type ChargingSimulatorProps = {
  product?: string;
};

type Vehicle = {
  id: string;
  brand: string;
  model: string;
  batteryKwh: number;
  maxAcKw: number;
  colour: string;
  highlight: string;
  image: string;
};

const vehicles: Vehicle[] = [
  { id: "tesla-model-y", brand: "Tesla", model: "Model Y", batteryKwh: 75, maxAcKw: 11, colour: "#1d394a", highlight: "#a7d879", image: "/images/simulator/vehicles/tesla-model-y.png" },
  { id: "dacia-spring", brand: "Dacia", model: "Spring", batteryKwh: 27, maxAcKw: 6.6, colour: "#355c45", highlight: "#d6e9a8", image: "/images/simulator/vehicles/dacia-spring.png" },
  { id: "renault-megane-e-tech", brand: "Renault", model: "Mégane E-Tech", batteryKwh: 60, maxAcKw: 22, colour: "#344d63", highlight: "#b9d5b7", image: "/images/simulator/vehicles/renault-megane-e-tech.png" },
  { id: "byd-atto-3", brand: "BYD", model: "ATTO 3", batteryKwh: 61, maxAcKw: 11, colour: "#465448", highlight: "#d2ea9e", image: "/images/simulator/vehicles/byd-atto-3.png" },
  { id: "peugeot-e-208", brand: "Peugeot", model: "e-208", batteryKwh: 51, maxAcKw: 11, colour: "#554d6a", highlight: "#c9d4f0", image: "/images/simulator/vehicles/peugeot-e-208.png" },
  { id: "hyundai-kona-electric", brand: "Hyundai", model: "KONA Electric", batteryKwh: 65, maxAcKw: 11, colour: "#4c5f66", highlight: "#c8df9c", image: "/images/simulator/vehicles/hyundai-kona-electric.png" },
];

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
const formatPower = (value: number) => `${Number.isInteger(value) ? value : value.toFixed(1).replace(".", ",")} kW`;

export default function ChargingSimulator({ product = "autel-maxicharger" }: ChargingSimulatorProps) {
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [selectedVehicleId, setSelectedVehicleId] = useState(vehicles[0].id);
  const [capacity, setCapacity] = useState(vehicles[0].batteryKwh);
  const [startLevel, setStartLevel] = useState(20);
  const [targetLevel, setTargetLevel] = useState(80);
  const [power, setPower] = useState(7.4);

  const selectedVehicle = useMemo(
    () => vehicles.find((vehicle) => vehicle.id === selectedVehicleId) ?? vehicles[0],
    [selectedVehicleId],
  );

  const chooseVehicle = useCallback((vehicleId: string) => {
    const vehicle = vehicles.find((candidate) => candidate.id === vehicleId) ?? vehicles[0];
    const suggestedPower = powerOptions.find((value) => value >= vehicle.maxAcKw) ?? powerOptions[powerOptions.length - 1];
    setSelectedVehicleId(vehicle.id);
    setCapacity(vehicle.batteryKwh);
    setPower(suggestedPower);
  }, []);

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    const requestedProduct = parameters.get("product");
    const requestedVehicle = parameters.get("vehicle");
    if (requestedProduct) setSelectedProduct(requestedProduct);
    if (requestedVehicle && vehicles.some((vehicle) => vehicle.id === requestedVehicle)) chooseVehicle(requestedVehicle);
  }, [chooseVehicle]);

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
  const effectivePower = Math.min(power, selectedVehicle.maxAcKw);
  const duration = isValid ? gridEnergy / effectivePower : 0;
  const isLimitedByVehicle = power > selectedVehicle.maxAcKw;

  const quoteHref = useMemo(() => {
    const parameters = new URLSearchParams({
      product: selectedProduct,
      vehicle: selectedVehicle.id,
      source: "simulateur",
      capacity: String(capacity),
      start: String(startLevel),
      target: String(targetLevel),
      power: String(power),
    });
    return `/devis/?${parameters.toString()}#quote-form`;
  }, [capacity, power, selectedProduct, selectedVehicle.id, startLevel, targetLevel]);

  const vehicleStyle = {
    "--vehicle-accent": selectedVehicle.highlight,
    "--vehicle-colour": selectedVehicle.colour,
    "--charge-progress": `${Math.min(100, Math.max(0, targetLevel || 0))}%`,
  } as CSSProperties;

  return (
    <section className={styles.section} aria-labelledby="simulator-title">
      <div className={styles.shell}>
        <header className={styles.heading}>
          <p className="eyebrow">Estimation instantanée</p>
          <h2 id="simulator-title">Combien de temps pour retrouver votre autonomie&nbsp;?</h2>
          <p>Ajustez quatre données. Le résultat se met à jour immédiatement et peut ensuite accompagner votre demande d’étude.</p>
        </header>

        <div className={styles.workspace}>
          <form className={styles.controls} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.controlsHeading}>
              <span>01</span>
              <div>
                <p className={styles.kicker}>Votre véhicule et votre session</p>
                <h3>Partons d’un modèle réel.</h3>
                <p>La batterie et la limite de charge AC du véhicule sont préremplies, puis restent ajustables.</p>
              </div>
            </div>

            <fieldset className={styles.vehicleFieldset}>
              <legend>Choisir votre véhicule</legend>
              <div className={styles.selectRow}>
                <label htmlFor="sim-vehicle" className={styles.selectLabel}>
                  <span>Modèle</span>
                  <select id="sim-vehicle" value={selectedVehicle.id} onChange={(event) => chooseVehicle(event.target.value)}>
                    {vehicles.map((vehicle) => <option value={vehicle.id} key={vehicle.id}>{vehicle.brand} {vehicle.model}</option>)}
                  </select>
                </label>
                <p><Icon name="shield" size={16} /> Valeurs modifiables à tout moment.</p>
              </div>
              <div className={styles.vehicleGrid} aria-label="Modèles proposés">
                {vehicles.map((vehicle) => (
                  <button
                    className={`${styles.vehicleOption} ${vehicle.id === selectedVehicle.id ? styles.vehicleOptionActive : ""}`}
                    type="button"
                    aria-pressed={vehicle.id === selectedVehicle.id}
                    onClick={() => chooseVehicle(vehicle.id)}
                    key={vehicle.id}
                  >
                    <span className={styles.vehicleOptionMark} style={{ "--option-accent": vehicle.highlight, "--option-colour": vehicle.colour } as CSSProperties}><Icon name="car" size={17} /></span>
                    <span><b>{vehicle.brand}</b><small>{vehicle.model}</small></span>
                    <em>{vehicle.batteryKwh} kWh</em>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className={styles.sessionHeader}>
              <span>02</span>
              <div><b>Votre session de recharge</b><small>Réglez seulement ce qui varie aujourd’hui.</small></div>
            </div>

            <div className={styles.sessionGrid}>
              <fieldset className={`${styles.fieldset} ${styles.capacityFieldset}`}>
                <legend>Capacité de la batterie</legend>
                <label className={styles.numberField} htmlFor="sim-capacity">
                  <input id="sim-capacity" type="number" inputMode="decimal" min="10" max="200" step="1" value={capacity} aria-describedby="sim-capacity-help" onChange={(event) => setCapacity(Number(event.target.value))} />
                  <span>kWh</span>
                </label>
                <p className={styles.fieldHelp} id="sim-capacity-help">Valeur indicative du modèle, ajustable selon votre version.</p>
                <div className={styles.presets} aria-label="Capacités courantes">
                  {capacityPresets.map((value) => <button className={capacity === value ? styles.presetActive : styles.preset} type="button" key={value} aria-pressed={capacity === value} onClick={() => setCapacity(value)}>{value} kWh</button>)}
                </div>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>Niveau de départ</legend>
                <label className={styles.numberField} htmlFor="sim-start">
                  <input id="sim-start" type="number" inputMode="numeric" min="0" max="99" step="1" value={startLevel} onChange={(event) => setStartLevel(Number(event.target.value))} />
                  <span>%</span>
                </label>
                <input className={styles.range} type="range" min="0" max="99" step="1" value={Math.min(99, Math.max(0, startLevel || 0))} aria-label="Ajuster le niveau de départ" onChange={(event) => setStartLevel(Number(event.target.value))} />
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>Niveau souhaité</legend>
                <label className={styles.numberField} htmlFor="sim-target">
                  <input id="sim-target" type="number" inputMode="numeric" min="1" max="100" step="1" value={targetLevel} onChange={(event) => setTargetLevel(Number(event.target.value))} />
                  <span>%</span>
                </label>
                <input className={styles.range} type="range" min="1" max="100" step="1" value={Math.min(100, Math.max(1, targetLevel || 1))} aria-label="Ajuster le niveau souhaité" onChange={(event) => setTargetLevel(Number(event.target.value))} />
              </fieldset>
            </div>

            <fieldset className={`${styles.fieldset} ${styles.powerFieldset}`}>
              <legend>Puissance de recharge disponible</legend>
              <div className={styles.powerGrid}>
                {powerOptions.map((value) => (
                  <label className={`${styles.powerOption} ${power === value ? styles.powerOptionSelected : ""}`} key={value}>
                    <input type="radio" name="power" value={value} checked={power === value} onChange={() => setPower(value)} />
                    <span><b>{formatPower(value)}</b><small>{value <= 3.7 ? "Prise ou charge lente" : value <= 7.4 ? "Monophasé courant" : value === 11 ? "Triphasé équilibré" : "Performance maximale"}</small></span>
                  </label>
                ))}
              </div>
              <p className={isLimitedByVehicle ? styles.limitNotice : styles.compatibilityNotice}>
                <Icon name={isLimitedByVehicle ? "bolt" : "check"} size={16} />
                {isLimitedByVehicle
                  ? `${selectedVehicle.brand} ${selectedVehicle.model} accepte jusqu’à ${formatPower(selectedVehicle.maxAcKw)} en AC : le calcul utilise cette limite.`
                  : `La puissance choisie est compatible avec la limite AC de ${selectedVehicle.brand} ${selectedVehicle.model}.`}
              </p>
            </fieldset>

            {errors.length > 0 && <div className={styles.errors} role="alert"><Icon name="shield" size={18} /><ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul></div>}
          </form>

          <aside className={styles.results} aria-live="polite" aria-label="Résultat de la simulation" style={vehicleStyle}>
            <div className={styles.resultsTopline}>
              <span>Calcul en direct</span>
              <span><i aria-hidden="true" /> À partir de votre modèle</span>
            </div>

            <figure className={styles.vehiclePreview}>
              <div className={styles.vehicleOrbital} aria-hidden="true" />
              <div className={styles.vehicleMedia}>
                <Image
                  className={styles.vehicleImage}
                  src={selectedVehicle.image}
                  alt={`${selectedVehicle.brand} ${selectedVehicle.model}`}
                  fill
                  sizes="(max-width: 760px) 88vw, (max-width: 1040px) 620px, 480px"
                />
              </div>
              <figcaption>
                <span>{selectedVehicle.brand}</span>
                <strong>{selectedVehicle.model}</strong>
                <small>{selectedVehicle.batteryKwh} kWh · jusqu’à {formatPower(selectedVehicle.maxAcKw)} AC</small>
              </figcaption>
            </figure>

            <div className={styles.durationBlock}>
              <div>
                <p>Temps de recharge estimé</p>
                <output>{formatDuration(duration)}</output>
                <span>de {startLevel} % à {targetLevel} %</span>
              </div>
              <div className={styles.chargeRing} aria-hidden="true"><b>{isValid ? `${targetLevel}%` : "—"}</b><small>cible</small></div>
            </div>

            <dl className={styles.metrics}>
              <div><dt>Énergie à récupérer</dt><dd>{formatEnergy(batteryEnergy)}</dd></div>
              <div><dt>Puissance effective</dt><dd>{formatPower(effectivePower)}</dd></div>
              <div><dt>Énergie réseau estimée</dt><dd>{formatEnergy(gridEnergy)}</dd></div>
            </dl>

            <div className={styles.comparison}>
              <div><h3>Repères de puissance</h3><small>pour cette session</small></div>
              <table>
                <thead><tr><th>Puissance</th><th>Durée estimée</th></tr></thead>
                <tbody>
                  {[7.4, 11, 22].map((comparisonPower) => {
                    const comparisonEffectivePower = Math.min(comparisonPower, selectedVehicle.maxAcKw);
                    return <tr className={power === comparisonPower ? styles.comparisonActive : ""} key={comparisonPower}><td>{formatPower(comparisonPower)}</td><td>{formatDuration(isValid ? gridEnergy / comparisonEffectivePower : 0)}</td></tr>;
                  })}
                </tbody>
              </table>
            </div>

            <p className={styles.method}><Icon name="signal" size={16} />Estimation incluant 10 % de pertes de charge. La puissance réelle peut varier selon le véhicule et l’installation électrique.</p>
            {isValid ? (
              <TrackedLink className={styles.resultCta} href={quoteHref} eventName="start_quote_from_simulator">Recevoir une étude avec ce résultat <Icon name="arrow" size={18} /></TrackedLink>
            ) : (
              <button className={`${styles.resultCta} ${styles.resultCtaDisabled}`} type="button" disabled>Corriger les valeurs pour continuer</button>
            )}
            <ProductRouteLink className={styles.productLink}>Découvrir l’Autel MaxiCharger <Icon name="arrow" size={15} /></ProductRouteLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
