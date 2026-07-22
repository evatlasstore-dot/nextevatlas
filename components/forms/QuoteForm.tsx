"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

type SimulationContext = {
  capacity: number;
  start: number;
  target: number;
  power: number;
};

type QuoteFormProps = {
  initialProduct?: string;
  initialSimulation?: SimulationContext | null;
};

type QuoteFields = {
  customerType: "particulier" | "professionnel";
  organization: string;
  product: "autel-maxicharger" | "a-definir";
  vehicle: string;
  installationType: "maison" | "residence" | "entreprise" | "hotel" | "parking";
  mounting: "murale" | "sur-pied" | "a-definir";
  electricalSupply: "monophase" | "triphase" | "inconnue";
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  contactPreference: "whatsapp" | "telephone" | "email";
  consent: boolean;
};

type QuoteErrors = Partial<Record<keyof QuoteFields, string>>;
type SubmissionState = "idle" | "submitting" | "success" | "error";

const productLabels: Record<QuoteFields["product"], string> = {
  "autel-maxicharger": "Autel MaxiCharger AC Wallbox",
  "a-definir": "Solution à définir avec EVAtlas",
};

const installationLabels: Record<QuoteFields["installationType"], string> = {
  maison: "Maison ou villa",
  residence: "Résidence ou copropriété",
  entreprise: "Entreprise ou bureau",
  hotel: "Hôtel ou établissement d’accueil",
  parking: "Parking ou espace partagé",
};

const mountingLabels: Record<QuoteFields["mounting"], string> = {
  murale: "Pose murale",
  "sur-pied": "Pose sur pied",
  "a-definir": "À déterminer sur place",
};

const supplyLabels: Record<QuoteFields["electricalSupply"], string> = {
  monophase: "Monophasée",
  triphase: "Triphasée",
  inconnue: "Je ne sais pas encore",
};

const preferenceLabels: Record<QuoteFields["contactPreference"], string> = {
  whatsapp: "WhatsApp",
  telephone: "Téléphone",
  email: "E-mail",
};

const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);
const isValidPhone = (value: string) => value.replace(/\D/g, "").length >= 9;

export default function QuoteForm({ initialProduct, initialSimulation = null }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [website, setWebsite] = useState("");
  const [simulation, setSimulation] = useState<SimulationContext | null>(initialSimulation);
  const [fields, setFields] = useState<QuoteFields>({
    customerType: "particulier",
    organization: "",
    product: initialProduct === "autel-maxicharger" ? "autel-maxicharger" : "a-definir",
    vehicle: "",
    installationType: "maison",
    mounting: "a-definir",
    electricalSupply: "inconnue",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    contactPreference: "whatsapp",
    consent: false,
  });

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    const product = parameters.get("product");
    if (product === "autel-maxicharger") {
      setFields((current) => ({ ...current, product }));
    }

    if (parameters.get("source") !== "simulateur") return;
    const rawValues = ["capacity", "start", "target", "power"].map((key) => parameters.get(key));
    if (rawValues.every((value) => value !== null && value.trim() !== "" && Number.isFinite(Number(value)))) {
      const [capacity, start, target, power] = rawValues.map(Number);
      setSimulation({ capacity, start, target, power });
    }
  }, []);

  const updateField = <Key extends keyof QuoteFields>(key: Key, value: QuoteFields[Key]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (submissionState !== "idle") {
      setSubmissionState("idle");
      setSubmissionError("");
    }
  };

  const validateProject = () => {
    const nextErrors: QuoteErrors = {};
    if (fields.vehicle.trim().length < 2) nextErrors.vehicle = "Indiquez votre véhicule, même approximativement.";
    if (fields.customerType === "professionnel" && fields.organization.trim().length < 2) {
      nextErrors.organization = "Indiquez le nom de votre organisation.";
    }
    return nextErrors;
  };

  const validateContact = () => {
    const nextErrors: QuoteErrors = {};
    if (fields.firstName.trim().length < 2) nextErrors.firstName = "Indiquez votre prénom.";
    if (!isValidPhone(fields.phone)) nextErrors.phone = "Saisissez un numéro de téléphone valide.";
    if (fields.email && !isValidEmail(fields.email)) nextErrors.email = "Saisissez une adresse e-mail valide.";
    if (fields.contactPreference === "email" && !fields.email) nextErrors.email = "Indiquez votre adresse e-mail pour être recontacté par e-mail.";
    if (fields.city.trim().length < 2) nextErrors.city = "Indiquez la ville du projet.";
    if (!fields.consent) nextErrors.consent = "Votre accord est nécessaire pour préparer la prise de contact.";
    return nextErrors;
  };

  const handleContinue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = step === 1 ? validateProject() : validateContact();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStep((current) => Math.min(3, current + 1));
  };

  const whatsappUrl = useMemo(() => {
    const message = [
      "Bonjour EVAtlas,",
      "",
      "Je souhaite demander une étude pour mon projet de recharge.",
      "",
      `Solution : ${productLabels[fields.product]}`,
      `Profil : ${fields.customerType === "particulier" ? "Particulier" : "Professionnel"}`,
      ...(fields.organization ? [`Organisation : ${fields.organization}`] : []),
      `Véhicule : ${fields.vehicle || "À préciser"}`,
      `Lieu : ${installationLabels[fields.installationType]}`,
      `Configuration : ${mountingLabels[fields.mounting]}`,
      `Alimentation connue : ${supplyLabels[fields.electricalSupply]}`,
      ...(simulation
        ? [
            "",
            "Simulation réalisée :",
            `${simulation.capacity} kWh · ${simulation.start} % → ${simulation.target} % · ${simulation.power} kW`,
          ]
        : []),
      "",
      `Contact : ${fields.firstName} ${fields.lastName}`.trim(),
      `Ville : ${fields.city}`,
      `Téléphone : ${fields.phone}`,
      ...(fields.email ? [`E-mail : ${fields.email}`] : []),
      `Canal préféré : ${preferenceLabels[fields.contactPreference]}`,
    ].join("\n");
    return `https://wa.me/212786376294?text=${encodeURIComponent(message)}`;
  }, [fields, simulation]);

  const trackFinalization = () => {
    window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "finalize_quote_whatsapp" } }));
  };

  const handleQuoteSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateContact();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmissionError("");
    setSubmissionState("submitting");

    // Opening synchronously keeps the existing WhatsApp handoff available on browsers
    // that otherwise block a new tab after an asynchronous request.
    const whatsappWindow = window.open("", "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...fields,
          simulation,
          website,
        }),
      });

      const payload = await response.json().catch(() => null) as { error?: unknown } | null;
      if (!response.ok) {
        const message = typeof payload?.error === "string" ? payload.error : "L’envoi n’a pas pu être finalisé. Réessayez dans un instant.";
        throw new Error(message);
      }

      setSubmissionState("success");
      trackFinalization();

      if (whatsappWindow && !whatsappWindow.closed) {
        whatsappWindow.location.replace(whatsappUrl);
      }
    } catch (error) {
      if (whatsappWindow && !whatsappWindow.closed) whatsappWindow.close();
      setSubmissionError(error instanceof Error ? error.message : "L’envoi n’a pas pu être finalisé. Réessayez dans un instant.");
      setSubmissionState("error");
    }
  };

  return (
    <section className="quote-section" aria-labelledby="quote-form-title">
      <div className="quote-shell">
        <header className="quote-heading">
          <p className="quote-eyebrow">Votre étude personnalisée</p>
          <h2 id="quote-form-title">Quelques informations, puis un échange humain.</h2>
          <p>Comptez environ deux minutes. Votre demande sera envoyée à EVAtlas, puis un message récapitulatif sera préparé dans WhatsApp.</p>
        </header>

        <div className="quote-workspace">
          <aside className="quote-aside" aria-label="Avancement de la demande">
            <p className="quote-aside-label">Votre progression</p>
            <ol className="quote-steps">
              {[
                [1, "Le projet", "Usage et installation"],
                [2, "Vos coordonnées", "Pour vous recontacter"],
                [3, "Vérification", "Envoi et WhatsApp"],
              ].map(([index, title, detail]) => (
                <li
                  className={`${step === index ? "quote-step-current" : ""} ${step > Number(index) ? "quote-step-complete" : ""}`.trim()}
                  key={title}
                  aria-current={step === index ? "step" : undefined}
                >
                  <span>{step > Number(index) ? <Icon name="check" size={14} /> : `0${index}`}</span>
                  <div><b>{title}</b><small>{detail}</small></div>
                </li>
              ))}
            </ol>
            <div className="quote-aside-note">
              <Icon name="shield" size={19} />
              <p><b>Votre demande est traitée par un conseiller EVAtlas.</b><span>Après l’envoi, vous pouvez aussi poursuivre l’échange dans WhatsApp.</span></p>
            </div>
          </aside>

          <form className="quote-form" noValidate onSubmit={step === 3 ? handleQuoteSubmission : handleContinue}>
            <div className="quote-honeypot" aria-hidden="true">
              <label htmlFor="quote-website">Ne pas remplir ce champ</label>
              <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
            </div>
            {Object.keys(errors).length > 0 && (
              <div className="quote-error-summary" role="alert">
                <Icon name="shield" size={18} />
                <p><b>Quelques informations sont à vérifier.</b><span>Les champs concernés sont indiqués ci-dessous.</span></p>
              </div>
            )}

            {step === 1 && (
              <div className="quote-panel">
                <div className="quote-panel-heading"><span>01</span><div><h3>Parlez-nous de votre projet.</h3><p>Ces réponses nous permettent de cadrer la première recommandation.</p></div></div>

                {simulation && (
                  <div className="quote-imported">
                    <Icon name="bolt" size={19} />
                    <p><b>Votre simulation a bien été reprise.</b><span>{simulation.capacity} kWh · de {simulation.start} % à {simulation.target} % · {simulation.power} kW</span></p>
                  </div>
                )}

                <fieldset className="quote-fieldset">
                  <legend>Vous êtes</legend>
                  <div className="quote-choice-grid">
                    <label className={`quote-choice ${fields.customerType === "particulier" ? "quote-choice-selected" : ""}`}>
                      <input type="radio" name="customerType" value="particulier" checked={fields.customerType === "particulier"} onChange={() => updateField("customerType", "particulier")} />
                      <span><b>Particulier</b><small>Maison, villa ou résidence</small></span>
                    </label>
                    <label className={`quote-choice ${fields.customerType === "professionnel" ? "quote-choice-selected" : ""}`}>
                      <input type="radio" name="customerType" value="professionnel" checked={fields.customerType === "professionnel"} onChange={() => updateField("customerType", "professionnel")} />
                      <span><b>Professionnel</b><small>Entreprise, hôtel ou parking</small></span>
                    </label>
                  </div>
                </fieldset>

                {fields.customerType === "professionnel" && (
                  <label className="quote-field">
                    <span>Nom de l’organisation</span>
                    <input className={errors.organization ? "quote-input-error" : ""} type="text" value={fields.organization} autoComplete="organization" aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "quote-organization-error" : undefined} onChange={(event) => updateField("organization", event.target.value)} />
                    {errors.organization && <small className="quote-field-error" id="quote-organization-error">{errors.organization}</small>}
                  </label>
                )}

                <div className="quote-field-grid">
                  <label className="quote-field">
                    <span>Solution envisagée</span>
                    <select value={fields.product} onChange={(event) => updateField("product", event.target.value as QuoteFields["product"])}>
                      <option value="autel-maxicharger">Autel MaxiCharger AC Wallbox</option>
                      <option value="a-definir">Je souhaite être conseillé</option>
                    </select>
                  </label>
                  <label className="quote-field">
                    <span>Véhicule actuel ou prévu</span>
                    <input className={errors.vehicle ? "quote-input-error" : ""} type="text" value={fields.vehicle} placeholder="Ex. Tesla Model Y, Dacia Spring…" aria-invalid={Boolean(errors.vehicle)} aria-describedby={errors.vehicle ? "quote-vehicle-error" : undefined} onChange={(event) => updateField("vehicle", event.target.value)} />
                    {errors.vehicle && <small className="quote-field-error" id="quote-vehicle-error">{errors.vehicle}</small>}
                  </label>
                  <label className="quote-field">
                    <span>Lieu d’installation</span>
                    <select value={fields.installationType} onChange={(event) => updateField("installationType", event.target.value as QuoteFields["installationType"])}>
                      {Object.entries(installationLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                    </select>
                  </label>
                  <label className="quote-field">
                    <span>Installation électrique</span>
                    <select value={fields.electricalSupply} onChange={(event) => updateField("electricalSupply", event.target.value as QuoteFields["electricalSupply"])}>
                      {Object.entries(supplyLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                    </select>
                  </label>
                </div>

                <fieldset className="quote-fieldset">
                  <legend>Configuration préférée</legend>
                  <div className="quote-choice-grid quote-choice-grid-three">
                    {Object.entries(mountingLabels).map(([value, label]) => (
                      <label className={`quote-choice ${fields.mounting === value ? "quote-choice-selected" : ""}`} key={value}>
                        <input type="radio" name="mounting" value={value} checked={fields.mounting === value} onChange={() => updateField("mounting", value as QuoteFields["mounting"])} />
                        <span><b>{label}</b></span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}

            {step === 2 && (
              <div className="quote-panel">
                <div className="quote-panel-heading"><span>02</span><div><h3>Comment vous joindre&nbsp;?</h3><p>Ces coordonnées permettent à EVAtlas de vous répondre et de préparer votre étude.</p></div></div>
                <div className="quote-field-grid">
                  <label className="quote-field">
                    <span>Prénom</span>
                    <input className={errors.firstName ? "quote-input-error" : ""} type="text" value={fields.firstName} autoComplete="given-name" aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "quote-first-name-error" : undefined} onChange={(event) => updateField("firstName", event.target.value)} />
                    {errors.firstName && <small className="quote-field-error" id="quote-first-name-error">{errors.firstName}</small>}
                  </label>
                  <label className="quote-field">
                    <span>Nom <small>facultatif</small></span>
                    <input type="text" value={fields.lastName} autoComplete="family-name" onChange={(event) => updateField("lastName", event.target.value)} />
                  </label>
                  <label className="quote-field">
                    <span>Téléphone</span>
                    <input className={errors.phone ? "quote-input-error" : ""} type="tel" inputMode="tel" value={fields.phone} placeholder="+212 6…" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "quote-phone-error" : undefined} onChange={(event) => updateField("phone", event.target.value)} />
                    {errors.phone && <small className="quote-field-error" id="quote-phone-error">{errors.phone}</small>}
                  </label>
                  <label className="quote-field">
                    <span>E-mail <small>{fields.contactPreference === "email" ? "requis pour cette préférence" : "facultatif"}</small></span>
                    <input className={errors.email ? "quote-input-error" : ""} type="email" inputMode="email" value={fields.email} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "quote-email-error" : undefined} onChange={(event) => updateField("email", event.target.value)} />
                    {errors.email && <small className="quote-field-error" id="quote-email-error">{errors.email}</small>}
                  </label>
                  <label className="quote-field">
                    <span>Ville du projet</span>
                    <input className={errors.city ? "quote-input-error" : ""} type="text" value={fields.city} autoComplete="address-level2" aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? "quote-city-error" : undefined} onChange={(event) => updateField("city", event.target.value)} />
                    {errors.city && <small className="quote-field-error" id="quote-city-error">{errors.city}</small>}
                  </label>
                </div>

                <fieldset className="quote-fieldset">
                  <legend>Canal de réponse préféré</legend>
                  <div className="quote-choice-grid quote-choice-grid-three">
                    {Object.entries(preferenceLabels).map(([value, label]) => (
                      <label className={`quote-choice ${fields.contactPreference === value ? "quote-choice-selected" : ""}`} key={value}>
                        <input type="radio" name="contactPreference" value={value} checked={fields.contactPreference === value} onChange={() => updateField("contactPreference", value as QuoteFields["contactPreference"])} />
                        <span><b>{label}</b></span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className={`quote-consent ${errors.consent ? "quote-consent-error" : ""}`}>
                  <input type="checkbox" checked={fields.consent} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "quote-consent-error" : undefined} onChange={(event) => updateField("consent", event.target.checked)} />
                  <span>J’accepte que ces informations soient utilisées par EVAtlas pour répondre à ma demande. Si je renseigne mon e-mail, je recevrai une confirmation de prise en charge.</span>
                </label>
                {errors.consent && <small className="quote-field-error" id="quote-consent-error">{errors.consent}</small>}
              </div>
            )}

            {step === 3 && (
              <div className="quote-panel">
                <div className="quote-panel-heading"><span>03</span><div><h3>Tout est prêt.</h3><p>Relisez ce résumé avant d’envoyer votre demande à EVAtlas.</p></div></div>
                <dl className="quote-summary">
                  <div><dt>Solution</dt><dd>{productLabels[fields.product]}</dd></div>
                  <div><dt>Profil</dt><dd>{fields.customerType === "particulier" ? "Particulier" : fields.organization || "Professionnel"}</dd></div>
                  <div><dt>Véhicule</dt><dd>{fields.vehicle}</dd></div>
                  <div><dt>Projet</dt><dd>{installationLabels[fields.installationType]} · {mountingLabels[fields.mounting]}</dd></div>
                  <div><dt>Localisation</dt><dd>{fields.city}</dd></div>
                  <div><dt>Contact</dt><dd>{fields.firstName} {fields.lastName} · {fields.phone}</dd></div>
                  {simulation && <div><dt>Simulation</dt><dd>{simulation.capacity} kWh · {simulation.start} % → {simulation.target} % · {simulation.power} kW</dd></div>}
                </dl>
                <div className="quote-whatsapp-note"><Icon name="whatsapp" size={22} /><p><b>Après l’envoi, poursuivez si vous le souhaitez dans WhatsApp.</b><span>Un message récapitulatif s’ouvrira après la confirmation de votre demande.</span></p></div>

                {submissionState === "success" && (
                  <div className="quote-submission-status quote-submission-success" role="status" aria-live="polite">
                    <Icon name="check" size={20} />
                    <p><b>Votre demande a bien été envoyée.</b><span>Un conseiller EVAtlas vous contactera prochainement. {fields.email ? "Une confirmation a aussi été envoyée à votre adresse e-mail." : "Vous pouvez ajouter votre adresse e-mail lors d’une prochaine demande pour recevoir une confirmation."}</span></p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackFinalization}>Ouvrir WhatsApp à nouveau <Icon name="arrow" size={15} /></a>
                  </div>
                )}

                {submissionState === "error" && (
                  <div className="quote-submission-status quote-submission-error" role="alert">
                    <Icon name="shield" size={20} />
                    <p><b>Votre demande n’a pas été envoyée.</b><span>{submissionError}</span></p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={trackFinalization}>Poursuivre directement sur WhatsApp <Icon name="arrow" size={15} /></a>
                  </div>
                )}
              </div>
            )}

            <footer className="quote-actions">
              {step > 1 ? <button className="quote-back" type="button" onClick={() => { setErrors({}); setSubmissionState("idle"); setSubmissionError(""); setStep((current) => current - 1); }}><span aria-hidden="true">←</span> Revenir</button> : <TrackedLink className="quote-back" href="/simulateur">Faire d’abord une simulation</TrackedLink>}
              {step < 3 ? (
                <button className="quote-next" type="submit">Continuer <Icon name="arrow" size={17} /></button>
              ) : (
                <button className="quote-next quote-whatsapp" type="submit" disabled={submissionState === "submitting"} aria-busy={submissionState === "submitting"}>
                  {submissionState === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"} <Icon name={submissionState === "submitting" ? "bolt" : "whatsapp"} size={19} />
                </button>
              )}
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
}
