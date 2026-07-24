"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import TrackedLink from "@/components/ui/TrackedLink";
import {
  evVehicleBrandByName,
  evVehicleBrands,
  evVehicleById,
  type EvVehicleBrand,
  type EvVehicleModel,
} from "@/data/ev-vehicles";
import { evBrandLogoByName } from "@/data/ev-brand-logos";
import styles from "./ChargingSimulator.module.css";

type ChargingSimulatorProps = {
  product?: string;
};

type SelectedVehicle = EvVehicleModel & { brand: EvVehicleBrand };

const powerOptions = [2.3, 3.7, 7.4, 11, 22];
const capacityPresets = [40, 60, 75, 100];
const chargingEfficiency = 0.9;

const formatNumber = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
const formatPower = (value: number) => `${formatNumber(value)} kW`;
const formatCapacity = (value: number) => `${formatNumber(value)} kWh`;
const formatEnergy = (value: number) => Number.isFinite(value) && value > 0 ? `${value.toFixed(1).replace(".", ",")} kWh` : "—";

const formatDuration = (hours: number) => {
  if (!Number.isFinite(hours) || hours <= 0) return "—";
  const totalMinutes = Math.max(1, Math.round(hours * 60));
  const fullHours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (fullHours === 0) return `${minutes} min`;
  return `${fullHours} h${minutes ? ` ${String(minutes).padStart(2, "0")} min` : ""}`;
};

export default function ChargingSimulator({ product = "autel-maxicharger" }: ChargingSimulatorProps) {
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [selectedBrandName, setSelectedBrandName] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [capacity, setCapacity] = useState(60);
  const [startLevel, setStartLevel] = useState(20);
  const [targetLevel, setTargetLevel] = useState(80);
  const [power, setPower] = useState(7.4);

  const selectedBrand = useMemo(
    () => selectedBrandName ? evVehicleBrandByName.get(selectedBrandName) ?? null : null,
    [selectedBrandName],
  );

  const selectedVehicle = useMemo<SelectedVehicle | null>(
    () => selectedVehicleId ? evVehicleById.get(selectedVehicleId) ?? null : null,
    [selectedVehicleId],
  );

  const activeBrand = selectedVehicle?.brand ?? selectedBrand;
  const activeBrandLogo = activeBrand ? evBrandLogoByName.get(activeBrand.name) ?? null : null;

  const chooseBrand = useCallback((brandName: string) => {
    setSelectedBrandName(brandName);
    setSelectedVehicleId("");
    setCapacity(60);
    setPower(7.4);
  }, []);

  const chooseVehicle = useCallback((vehicleId: string) => {
    const vehicle = evVehicleById.get(vehicleId);
    if (!vehicle) return;

    const suggestedPower = powerOptions.find((value) => value >= vehicle.maxAcKw) ?? powerOptions[powerOptions.length - 1];
    setSelectedBrandName(vehicle.brand.name);
    setSelectedVehicleId(vehicle.id);
    setCapacity(vehicle.batteryKwh);
    setPower(suggestedPower);
  }, []);

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    const requestedProduct = parameters.get("product");
    const requestedVehicle = parameters.get("vehicle");
    if (requestedProduct) setSelectedProduct(requestedProduct);
    if (requestedVehicle && evVehicleById.has(requestedVehicle)) chooseVehicle(requestedVehicle);
  }, [chooseVehicle]);

  const errors = useMemo(() => {
    if (!selectedVehicle) return [];

    const nextErrors: string[] = [];
    if (!Number.isFinite(capacity) || capacity < 10 || capacity > 200) nextErrors.push("La capacité doit être comprise entre 10 et 200 kWh.");
    if (!Number.isFinite(startLevel) || startLevel < 0 || startLevel > 99) nextErrors.push("Le niveau de départ doit être compris entre 0 et 99 %.");
    if (!Number.isFinite(targetLevel) || targetLevel < 1 || targetLevel > 100) nextErrors.push("Le niveau cible doit être compris entre 1 et 100 %.");
    if (targetLevel <= startLevel) nextErrors.push("Le niveau cible doit être supérieur au niveau de départ.");
    return nextErrors;
  }, [capacity, selectedVehicle, startLevel, targetLevel]);

  const hasVehicle = Boolean(selectedVehicle);
  const isValid = hasVehicle && errors.length === 0;
  const levelDifference = isValid ? targetLevel - startLevel : 0;
  const batteryEnergy = isValid ? capacity * levelDifference / 100 : 0;
  const gridEnergy = isValid ? batteryEnergy / chargingEfficiency : 0;
  const effectivePower = selectedVehicle ? Math.min(power, selectedVehicle.maxAcKw) : 0;
  const duration = isValid ? gridEnergy / effectivePower : 0;
  const isLimitedByVehicle = Boolean(selectedVehicle && power > selectedVehicle.maxAcKw);

  const quoteHref = useMemo(() => {
    if (!selectedVehicle) return "/devis#quote-form";

    const parameters = new URLSearchParams({
      product: selectedProduct,
      vehicle: selectedVehicle.id,
      vehicleLabel: `${selectedVehicle.brand.name} ${selectedVehicle.model}`,
      source: "simulateur",
      capacity: String(capacity),
      start: String(startLevel),
      target: String(targetLevel),
      power: String(power),
      effectivePower: String(effectivePower),
    });
    return `/devis/?${parameters.toString()}#quote-form`;
  }, [capacity, effectivePower, power, selectedProduct, selectedVehicle, startLevel, targetLevel]);

  const vehicleStyle = {
    "--vehicle-accent": activeBrand?.highlight ?? "#c9dfab",
    "--vehicle-colour": activeBrand?.colour ?? "#315b42",
    "--charge-progress": `${Math.min(100, Math.max(0, targetLevel || 0))}%`,
  } as CSSProperties;

  return (
    <section className={styles.section} aria-labelledby="simulator-title">
      <div className={styles.shell}>
        <header className={styles.heading}>
          <p className="eyebrow">Estimation instantanée</p>
          <h2 id="simulator-title">Combien de temps pour retrouver votre autonomie&nbsp;?</h2>
          <p>Choisissez votre marque, votre modèle puis ajustez votre session. Les données de batterie et de charge AC sont préremplies à partir de la version de référence sélectionnée.</p>
        </header>

        <div className={`${styles.workspace} ${styles.studioWorkspace}`} style={vehicleStyle}>
          <form className={`${styles.controls} ${styles.studioControls}`} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.controlsHeading}>
              <span>01</span>
              <div>
                <p className={styles.kicker}>Votre véhicule et votre session</p>
                <h3>Partons d’un modèle réel.</h3>
                <p>La marque déverrouille les modèles correspondants. La capacité utile et la limite de recharge AC sont ensuite ajustables selon votre version.</p>
              </div>
            </div>

            <fieldset className={styles.vehicleFieldset}>
              <legend>Choisir votre véhicule</legend>
              <div className={styles.selectRow}>
                <label htmlFor="sim-brand" className={styles.selectLabel}>
                  <span>Marque</span>
                  <select id="sim-brand" value={selectedBrandName} onChange={(event) => chooseBrand(event.target.value)}>
                    <option value="">Choisissez une marque</option>
                    {evVehicleBrands.map((brand) => <option value={brand.name} key={brand.id}>{brand.name}</option>)}
                  </select>
                </label>

                <label htmlFor="sim-model" className={styles.selectLabel}>
                  <span>Modèle</span>
                  <select
                    id="sim-model"
                    value={selectedVehicleId}
                    disabled={!selectedBrand}
                    aria-describedby="sim-model-hint"
                    onChange={(event) => chooseVehicle(event.target.value)}
                  >
                    <option value="">{selectedBrand ? "Choisissez un modèle" : "Choisissez d’abord une marque"}</option>
                    {selectedBrand?.models.map((vehicle) => <option value={vehicle.id} key={vehicle.id}>{vehicle.displayModel}</option>)}
                  </select>
                </label>
              </div>

              <p className={styles.selectorHint} id="sim-model-hint">
                <Icon name="shield" size={16} />
                {selectedVehicle
                  ? `Données de référence : ${selectedVehicle.referenceVariant}. Vous pouvez les ajuster pour correspondre exactement à votre version.`
                  : selectedBrand
                    ? `${selectedBrand.models.length} configuration${selectedBrand.models.length > 1 ? "s" : ""} disponible${selectedBrand.models.length > 1 ? "s" : ""} pour ${selectedBrand.name}.`
                    : "Sélectionnez d’abord une marque pour afficher uniquement ses modèles compatibles."}
              </p>

              {selectedVehicle && (
                <dl className={styles.vehicleSpecs} aria-label="Données de recharge du modèle sélectionné">
                  <div><dt>Capacité utile</dt><dd>{formatCapacity(selectedVehicle.batteryKwh)}</dd></div>
                  <div><dt>Recharge AC</dt><dd>{formatPower(selectedVehicle.maxAcKw)}</dd></div>
                  <div><dt>Recharge DC max.</dt><dd>{selectedVehicle.maxDcKw ? formatPower(selectedVehicle.maxDcKw) : "Non renseignée"}</dd></div>
                  <div><dt>Autonomie de référence</dt><dd>{selectedVehicle.rangeKm ? `${selectedVehicle.rangeKm} km` : "Non renseignée"}</dd></div>
                </dl>
              )}
            </fieldset>

            <div className={styles.sessionHeader}>
              <span>02</span>
              <div><b>Votre session de recharge</b><small>{hasVehicle ? "Réglez seulement ce qui varie aujourd’hui." : "Choisissez un modèle pour déverrouiller les réglages."}</small></div>
            </div>

            <div className={styles.sessionGrid}>
              <fieldset className={`${styles.fieldset} ${styles.capacityFieldset}`} disabled={!hasVehicle}>
                <legend>Capacité de la batterie</legend>
                <label className={styles.numberField} htmlFor="sim-capacity">
                  <input id="sim-capacity" type="number" inputMode="decimal" min="10" max="200" step="0.1" value={capacity} aria-describedby="sim-capacity-help" onChange={(event) => setCapacity(Number(event.target.value))} />
                  <span>kWh</span>
                </label>
                <p className={styles.fieldHelp} id="sim-capacity-help">Capacité utile préremplie pour le modèle, modifiable selon votre version.</p>
                <div className={styles.presets} aria-label="Capacités courantes">
                  {capacityPresets.map((value) => <button className={capacity === value ? styles.presetActive : styles.preset} type="button" key={value} aria-pressed={capacity === value} onClick={() => setCapacity(value)}>{value} kWh</button>)}
                </div>
              </fieldset>

              <fieldset className={styles.fieldset} disabled={!hasVehicle}>
                <legend>Niveau de départ</legend>
                <label className={styles.numberField} htmlFor="sim-start">
                  <input id="sim-start" type="number" inputMode="numeric" min="0" max="99" step="1" value={startLevel} onChange={(event) => setStartLevel(Number(event.target.value))} />
                  <span>%</span>
                </label>
                <input className={styles.range} type="range" min="0" max="99" step="1" value={Math.min(99, Math.max(0, startLevel || 0))} aria-label="Ajuster le niveau de départ" onChange={(event) => setStartLevel(Number(event.target.value))} />
              </fieldset>

              <fieldset className={styles.fieldset} disabled={!hasVehicle}>
                <legend>Niveau souhaité</legend>
                <label className={styles.numberField} htmlFor="sim-target">
                  <input id="sim-target" type="number" inputMode="numeric" min="1" max="100" step="1" value={targetLevel} onChange={(event) => setTargetLevel(Number(event.target.value))} />
                  <span>%</span>
                </label>
                <input className={styles.range} type="range" min="1" max="100" step="1" value={Math.min(100, Math.max(1, targetLevel || 1))} aria-label="Ajuster le niveau souhaité" onChange={(event) => setTargetLevel(Number(event.target.value))} />
              </fieldset>
            </div>

            <fieldset className={`${styles.fieldset} ${styles.powerFieldset}`} disabled={!hasVehicle}>
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
                {!selectedVehicle
                  ? "Choisissez un véhicule pour comparer sa limite AC avec votre installation."
                  : isLimitedByVehicle
                    ? `${selectedVehicle.brand.name} ${selectedVehicle.model} accepte jusqu’à ${formatPower(selectedVehicle.maxAcKw)} en AC : le calcul utilise cette limite.`
                    : `La puissance choisie est compatible avec la limite AC de ${selectedVehicle.brand.name} ${selectedVehicle.model}.`}
              </p>
            </fieldset>

            {errors.length > 0 && <div className={styles.errors} role="alert"><Icon name="shield" size={18} /><ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul></div>}
          </form>

          <aside className={styles.vehicleStudio} aria-label="Aperçu immersif du véhicule sélectionné">
            <div className={styles.studioTopline}>
              <span>Jumeau énergétique</span>
              <span><i aria-hidden="true" /> {selectedVehicle ? "Synchro active" : "En attente"}</span>
            </div>

            <div className={styles.studioScene}>
              <div className={styles.studioGrid} aria-hidden="true" />
              <div className={styles.studioOrbital} aria-hidden="true" />
              <div className={styles.studioChargeArc} aria-hidden="true"><span /></div>
              <div className={styles.studioVehicleMedia}>
                {activeBrand?.visual ? (
                  <Image
                    className={styles.studioVehicleImage}
                    src={activeBrand.visual.src}
                    alt={selectedVehicle ? `Aperçu 3D de la gamme ${activeBrand.name} pour ${selectedVehicle.displayModel}` : activeBrand.visual.alt}
                    fill
                    sizes="(max-width: 760px) 88vw, (max-width: 1120px) 56vw, 390px"
                    priority={Boolean(activeBrand)}
                  />
                ) : activeBrandLogo ? (
                  <div className={styles.brandEmblem} aria-hidden="true">
                    <span className={styles.brandEmblemAura} />
                    <span className={styles.brandEmblemPlate}>
                      {activeBrandLogo.src ? (
                        <Image className={styles.brandEmblemLogo} src={activeBrandLogo.src} alt="" fill sizes="220px" />
                      ) : (
                        <span className={styles.brandEmblemMonogram}>{activeBrandLogo.name}</span>
                      )}
                    </span>
                    <span className={styles.brandEmblemName}>{activeBrandLogo.name}</span>
                  </div>
                ) : (
                  <div className={styles.studioFallback} aria-hidden="true"><Icon name="car" size={62} /></div>
                )}
              </div>
              <div className={styles.studioMarker} aria-hidden="true"><span>AC</span><b>{selectedVehicle ? formatPower(selectedVehicle.maxAcKw) : "—"}</b></div>
              <div className={styles.studioBattery} aria-hidden="true"><span>Charge cible</span><b>{selectedVehicle ? `${targetLevel}%` : "—"}</b></div>
            </div>

            <div className={styles.studioCaption}>
              <span>{activeBrand?.name ?? "Configurez votre véhicule"}</span>
              <strong>{selectedVehicle?.displayModel ?? "Votre véhicule apparaîtra ici"}</strong>
              <p>{selectedVehicle ? `${formatCapacity(selectedVehicle.batteryKwh)} utiles · ${selectedVehicle.acPort ?? "Port AC"} · ${selectedVehicle.dcPort ?? "Port DC"}` : "Sélectionnez une marque et un modèle pour activer le jumeau énergétique."}</p>
              {activeBrand?.visual && <small>Rendu 3D de la gamme {activeBrand.name}</small>}
              {!activeBrand?.visual && activeBrandLogo && <small>Emblème 3D de la marque</small>}
            </div>
          </aside>

          <aside className={`${styles.results} ${styles.studioResults}`} aria-live="polite" aria-label="Résultat de la simulation">
            <div className={styles.resultsTopline}>
              <span>Calcul en direct</span>
              <span><i aria-hidden="true" /> {selectedVehicle ? "Données de la version de référence" : "Sélectionnez votre véhicule"}</span>
            </div>

            <div className={styles.durationBlock}>
              <div>
                <p>Temps de recharge estimé</p>
                <output>{isValid ? formatDuration(duration) : "—"}</output>
                <span>{isValid ? `de ${startLevel} % à ${targetLevel} %` : "Disponible après la sélection du modèle."}</span>
              </div>
              <div className={styles.chargeRing} aria-hidden="true"><b>{isValid ? `${targetLevel}%` : "—"}</b><small>cible</small></div>
            </div>

            <dl className={styles.metrics}>
              <div><dt>Énergie à récupérer</dt><dd>{formatEnergy(batteryEnergy)}</dd></div>
              <div><dt>Puissance effective</dt><dd>{selectedVehicle ? formatPower(effectivePower) : "—"}</dd></div>
              <div><dt>Énergie réseau estimée</dt><dd>{formatEnergy(gridEnergy)}</dd></div>
            </dl>

            {selectedVehicle && (
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
            )}

            <p className={styles.method}><Icon name="signal" size={16} />{selectedVehicle ? "Estimation incluant 10 % de pertes de charge. La puissance réelle peut varier selon le véhicule et l’installation électrique." : "Choisissez une marque et un modèle : la capacité utile et la limite AC sont alors intégrées au calcul."}</p>
            {isValid ? (
              <TrackedLink className={styles.resultCta} href={quoteHref} eventName="start_quote_from_simulator">Recevoir une étude avec ce résultat <Icon name="arrow" size={18} /></TrackedLink>
            ) : (
              <button className={`${styles.resultCta} ${styles.resultCtaDisabled}`} type="button" disabled>Choisissez un modèle pour continuer</button>
            )}
            <ProductRouteLink className={styles.productLink}>Découvrir l’Autel MaxiCharger <Icon name="arrow" size={15} /></ProductRouteLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
