"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { evBrandLogoByName } from "@/data/ev-brand-logos";
import {
  evVehicleBrandByName,
  evVehicleBrands,
  evVehicleById,
  type EvVehicleBrand,
  type EvVehicleModel,
} from "@/data/ev-vehicles";
import Icon from "@/components/ui/Icon";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import TrackedLink from "@/components/ui/TrackedLink";
import styles from "./ChargingSimulator.module.css";

type ChargingSimulatorProps = {
  product?: string;
};

type SelectedVehicle = EvVehicleModel & { brand: EvVehicleBrand };

const powerOptions = [2.3, 3.7, 7.4, 11, 22];
const capacityPresets = [40, 60, 75, 100];
const chargingEfficiency = 0.9;
const vehicleCount = evVehicleBrands.reduce((total, brand) => total + brand.models.length, 0);

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

const booleanLabel = (value: boolean | null) => value === null ? "Non renseigné" : value ? "Disponible" : "Non disponible";

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
  const duration = isValid && effectivePower > 0 ? gridEnergy / effectivePower : 0;
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

  const experienceStyle = {
    "--accent": activeBrand?.highlight ?? "#b8df83",
    "--brand-colour": activeBrand?.colour ?? "#315b42",
    "--start": `${Math.min(99, Math.max(0, startLevel || 0))}%`,
    "--target": `${Math.min(100, Math.max(1, targetLevel || 1))}%`,
  } as CSSProperties;

  return (
    <section className={styles.section} aria-labelledby="simulator-title">
      <div className={styles.shell}>
        <header className={styles.heading}>
          <div>
            <p className="eyebrow">Simulateur EVAtlas</p>
            <h2 id="simulator-title">Visualisez votre recharge avant de la vivre.</h2>
          </div>
          <div className={styles.headingAside}>
            <p>Un parcours unique qui relie votre véhicule, votre installation et le temps réel nécessaire pour atteindre votre autonomie cible.</p>
            <div>
              <span><b>{vehicleCount}</b> véhicules référencés</span>
              <span><b>{evVehicleBrands.length}</b> marques disponibles</span>
            </div>
          </div>
        </header>

        <div className={styles.experience} style={experienceStyle}>
          <ol className={styles.journey} aria-label="Étapes du simulateur">
            <li className={selectedBrand ? styles.journeyDone : styles.journeyActive}>
              <a href="#sim-vehicle"><span>01</span><b>Véhicule</b><small>Marque et modèle</small></a>
            </li>
            <li className={selectedVehicle ? styles.journeyActive : styles.journeyLocked}>
              <a href="#sim-session"><span>02</span><b>Session</b><small>Niveaux et puissance</small></a>
            </li>
            <li className={isValid ? styles.journeyActive : styles.journeyLocked}>
              <a href="#sim-result"><span>03</span><b>Résultat</b><small>Durée et énergie</small></a>
            </li>
          </ol>

          <div className={styles.workspace}>
            <article className={styles.vehicleStage} aria-label="Scène du véhicule sélectionné">
              <div className={styles.stageHeader}>
                <div><i aria-hidden="true" /><span>{selectedVehicle ? "Configuration synchronisée" : "Studio en attente"}</span></div>
                <span>EV / AC</span>
              </div>

              <div className={styles.stageScene}>
                <span className={styles.horizon} aria-hidden="true" />
                <span className={styles.scanRing} aria-hidden="true" />
                <span className={styles.energyHalo} aria-hidden="true" />

                <div className={styles.vehicleMedia}>
                  {activeBrand?.visual ? (
                    <Image
                      className={styles.vehicleImage}
                      src={activeBrand.visual.src}
                      alt={selectedVehicle ? `Aperçu 3D de la gamme ${activeBrand.name} pour ${selectedVehicle.displayModel}` : activeBrand.visual.alt}
                      fill
                      sizes="(max-width: 760px) 92vw, (max-width: 1100px) 62vw, 610px"
                      priority={Boolean(activeBrand)}
                    />
                  ) : activeBrandLogo ? (
                    <div className={styles.brandObject} aria-label={`Emblème 3D ${activeBrandLogo.name}`}>
                      <span className={styles.brandObjectBack} aria-hidden="true" />
                      <span className={styles.brandObjectFace}>
                        {activeBrandLogo.src ? (
                          <Image src={activeBrandLogo.src} alt="" fill sizes="210px" />
                        ) : (
                          <b>{activeBrandLogo.name}</b>
                        )}
                      </span>
                    </div>
                  ) : (
                    <div className={styles.vehiclePlaceholder} aria-hidden="true"><Icon name="car" size={70} /></div>
                  )}
                </div>

                <dl className={styles.stageTelemetry}>
                  <div><dt>Batterie</dt><dd>{selectedVehicle ? formatCapacity(selectedVehicle.batteryKwh) : "—"}</dd></div>
                  <div><dt>AC maximum</dt><dd>{selectedVehicle ? formatPower(selectedVehicle.maxAcKw) : "—"}</dd></div>
                  <div><dt>Autonomie</dt><dd>{selectedVehicle?.rangeKm ? `${selectedVehicle.rangeKm} km` : "—"}</dd></div>
                </dl>
              </div>

              <footer className={styles.stageFooter}>
                <div>
                  <span>{activeBrand?.name ?? "Votre prochain véhicule"}</span>
                  <h3>{selectedVehicle?.displayModel ?? "Choisissez une marque puis un modèle"}</h3>
                  <p>{selectedVehicle ? `${selectedVehicle.acPort ?? "Port AC"} · ${selectedVehicle.dcPort ?? "Port DC"} · ${selectedVehicle.batteryArchitectureV ? `${selectedVehicle.batteryArchitectureV} V` : "Architecture non renseignée"}` : "Les caractéristiques exactes apparaîtront automatiquement."}</p>
                </div>
                <div className={styles.energyJourney} aria-label={selectedVehicle ? `Recharge de ${startLevel} % à ${targetLevel} %` : "Niveaux de recharge en attente"}>
                  <b>{selectedVehicle ? `${startLevel}%` : "—"}</b>
                  <span><i /></span>
                  <b>{selectedVehicle ? `${targetLevel}%` : "—"}</b>
                </div>
              </footer>
            </article>

            <form className={styles.console} onSubmit={(event) => event.preventDefault()}>
              <section className={styles.consoleSection} id="sim-vehicle">
                <header className={styles.consoleHeader}>
                  <span>01</span>
                  <div><small>Votre véhicule</small><h3>Identifiez votre version.</h3></div>
                </header>

                <div className={styles.selectGrid}>
                  <label htmlFor="sim-brand">
                    <span>Marque</span>
                    <select id="sim-brand" value={selectedBrandName} onChange={(event) => chooseBrand(event.target.value)}>
                      <option value="">Choisissez une marque</option>
                      {evVehicleBrands.map((brand) => <option value={brand.name} key={brand.id}>{brand.name}</option>)}
                    </select>
                  </label>

                  <label htmlFor="sim-model">
                    <span>Modèle</span>
                    <select
                      id="sim-model"
                      value={selectedVehicleId}
                      disabled={!selectedBrand}
                      aria-describedby="sim-model-hint"
                      onChange={(event) => chooseVehicle(event.target.value)}
                    >
                      <option value="">{selectedBrand ? "Choisissez un modèle" : "Marque requise"}</option>
                      {selectedBrand?.models.map((vehicle) => <option value={vehicle.id} key={vehicle.id}>{vehicle.displayModel}</option>)}
                    </select>
                  </label>
                </div>

                <p className={styles.modelHint} id="sim-model-hint">
                  <Icon name="shield" size={15} />
                  {selectedVehicle
                    ? `${selectedVehicle.referenceVariant} — données de référence chargées.`
                    : selectedBrand
                      ? `${selectedBrand.models.length} version${selectedBrand.models.length > 1 ? "s" : ""} disponible${selectedBrand.models.length > 1 ? "s" : ""}.`
                      : "Le choix du modèle se déverrouille après la marque."}
                </p>

                {selectedVehicle && (
                  <dl className={styles.vehicleFacts}>
                    <div><dt>Capacité utile</dt><dd>{formatCapacity(selectedVehicle.batteryKwh)}</dd></div>
                    <div><dt>AC</dt><dd>{formatPower(selectedVehicle.maxAcKw)}</dd></div>
                    <div><dt>DC max.</dt><dd>{selectedVehicle.maxDcKw ? formatPower(selectedVehicle.maxDcKw) : "—"}</dd></div>
                    <div><dt>Préconditionnement</dt><dd>{booleanLabel(selectedVehicle.preconditioningAvailable)}</dd></div>
                  </dl>
                )}
              </section>

              <section className={styles.consoleSection} id="sim-session">
                <header className={styles.consoleHeader}>
                  <span>02</span>
                  <div><small>Votre session</small><h3>Ajustez uniquement l’essentiel.</h3></div>
                </header>

                <fieldset className={`${styles.controlCard} ${styles.capacityCard}`} disabled={!hasVehicle}>
                  <legend>Capacité de la batterie</legend>
                  <label className={styles.numberInput} htmlFor="sim-capacity">
                    <input id="sim-capacity" type="number" min="10" max="200" step="0.1" inputMode="decimal" value={capacity} onChange={(event) => setCapacity(Number(event.target.value))} />
                    <span>kWh</span>
                  </label>
                  <div className={styles.presets}>
                    {capacityPresets.map((value) => <button type="button" className={capacity === value ? styles.presetActive : styles.preset} aria-pressed={capacity === value} onClick={() => setCapacity(value)} key={value}>{value}</button>)}
                  </div>
                </fieldset>

                <div className={styles.levelGrid}>
                  <fieldset className={styles.controlCard} disabled={!hasVehicle}>
                    <legend>Niveau actuel</legend>
                    <label className={styles.numberInput} htmlFor="sim-start">
                      <input id="sim-start" type="number" min="0" max="99" step="1" inputMode="numeric" value={startLevel} onChange={(event) => setStartLevel(Number(event.target.value))} />
                      <span>%</span>
                    </label>
                    <input className={styles.range} type="range" min="0" max="99" step="1" value={Math.min(99, Math.max(0, startLevel || 0))} aria-label="Niveau actuel" onChange={(event) => setStartLevel(Number(event.target.value))} />
                  </fieldset>

                  <fieldset className={styles.controlCard} disabled={!hasVehicle}>
                    <legend>Niveau souhaité</legend>
                    <label className={styles.numberInput} htmlFor="sim-target">
                      <input id="sim-target" type="number" min="1" max="100" step="1" inputMode="numeric" value={targetLevel} onChange={(event) => setTargetLevel(Number(event.target.value))} />
                      <span>%</span>
                    </label>
                    <input className={styles.range} type="range" min="1" max="100" step="1" value={Math.min(100, Math.max(1, targetLevel || 1))} aria-label="Niveau souhaité" onChange={(event) => setTargetLevel(Number(event.target.value))} />
                  </fieldset>
                </div>

                <fieldset className={`${styles.controlCard} ${styles.powerCard}`} disabled={!hasVehicle}>
                  <legend>Puissance disponible</legend>
                  <div className={styles.powerGrid}>
                    {powerOptions.map((value) => (
                      <label className={power === value ? styles.powerActive : styles.powerOption} key={value}>
                        <input type="radio" name="power" value={value} checked={power === value} onChange={() => setPower(value)} />
                        <b>{formatPower(value)}</b>
                        <small>{value <= 3.7 ? "Lente" : value <= 7.4 ? "Maison" : value === 11 ? "Triphasée" : "Maximum"}</small>
                      </label>
                    ))}
                  </div>
                  <p className={isLimitedByVehicle ? styles.limitNotice : styles.compatibilityNotice}>
                    <Icon name={isLimitedByVehicle ? "bolt" : "check"} size={15} />
                    {!selectedVehicle
                      ? "Disponible après le choix du véhicule."
                      : isLimitedByVehicle
                        ? `Calcul limité à ${formatPower(selectedVehicle.maxAcKw)}, la capacité AC réelle du véhicule.`
                        : `Compatible avec la limite AC de ${selectedVehicle.displayModel}.`}
                  </p>
                </fieldset>

                {errors.length > 0 && (
                  <div className={styles.errors} role="alert">
                    <Icon name="shield" size={17} />
                    <ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul>
                  </div>
                )}
              </section>
            </form>
          </div>

          <aside className={styles.resultDeck} id="sim-result" aria-live="polite" aria-label="Résultat de la simulation">
            <header className={styles.resultHero}>
              <span>Temps estimé</span>
              <output>{isValid ? formatDuration(duration) : "—"}</output>
              <p>{isValid ? `${startLevel} % → ${targetLevel} % avec ${formatPower(effectivePower)} effectifs` : "Choisissez un véhicule pour lancer le calcul."}</p>
            </header>

            <dl className={styles.resultMetrics}>
              <div><dt>Énergie batterie</dt><dd>{formatEnergy(batteryEnergy)}</dd><small>énergie réellement stockée</small></div>
              <div><dt>Énergie réseau</dt><dd>{formatEnergy(gridEnergy)}</dd><small>pertes de charge incluses</small></div>
              <div><dt>Puissance effective</dt><dd>{selectedVehicle ? formatPower(effectivePower) : "—"}</dd><small>{isLimitedByVehicle ? "limitée par le véhicule" : "selon votre installation"}</small></div>
            </dl>

            <div className={styles.powerComparison}>
              <div><span>Repères</span><small>Même session, autres puissances</small></div>
              <div>
                {[7.4, 11, 22].map((comparisonPower) => {
                  const comparisonEffectivePower = selectedVehicle ? Math.min(comparisonPower, selectedVehicle.maxAcKw) : 0;
                  return (
                    <span className={power === comparisonPower ? styles.comparisonActive : undefined} key={comparisonPower}>
                      <b>{formatPower(comparisonPower)}</b>
                      <small>{formatDuration(isValid && comparisonEffectivePower > 0 ? gridEnergy / comparisonEffectivePower : 0)}</small>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className={styles.resultActions}>
              <p><Icon name="signal" size={16} /> Estimation incluant 10 % de pertes. La puissance réelle dépend du véhicule et de l’installation.</p>
              {isValid ? (
                <TrackedLink className={styles.resultCta} href={quoteHref} eventName="start_quote_from_simulator">
                  Recevoir une étude avec ce résultat <Icon name="arrow" size={17} />
                </TrackedLink>
              ) : (
                <button className={`${styles.resultCta} ${styles.resultCtaDisabled}`} type="button" disabled>Choisissez un modèle pour continuer</button>
              )}
              <ProductRouteLink className={styles.productLink}>Découvrir l’Autel MaxiCharger <Icon name="arrow" size={14} /></ProductRouteLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
