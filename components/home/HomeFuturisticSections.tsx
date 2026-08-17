import Image from "next/image";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import { WHATSAPP_URL } from "@/data/contact";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import homepage from "@/data/homepage.json";
import styles from "./HomeFuturisticSections.module.css";

const contexts = [
  {
    number: "01",
    label: "Résidentiel",
    title: "À domicile",
    description: "Une recharge dimensionnée pour votre véhicule, votre tableau électrique et votre rythme réel.",
    detail: "Maison · Villa · Place privative",
    icon: "home" as const,
  },
  {
    number: "02",
    label: "Professionnel",
    title: "En entreprise",
    description: "Un dispositif lisible pour les collaborateurs, les flottes et les visiteurs, avec des accès maîtrisés.",
    detail: "Bureaux · Hôtels · Flottes",
    icon: "building" as const,
  },
  {
    number: "03",
    label: "Collectif",
    title: "Dans les lieux partagés",
    description: "Une étude adaptée aux contraintes de résidence, de parking ou de site ouvert au public.",
    detail: "Copropriétés · Commerces · Parkings",
    icon: "users" as const,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Comprendre le lieu",
    copy: "Véhicule, habitudes, distance de stationnement et contraintes du site.",
    icon: "search" as const,
  },
  {
    number: "02",
    title: "Dessiner la solution",
    copy: "Puissance, protections, positionnement et cheminement sont vérifiés.",
    icon: "document" as const,
  },
  {
    number: "03",
    title: "Installer avec précision",
    copy: "La borne est posée, raccordée et contrôlée par notre équipe.",
    icon: "bolt" as const,
  },
  {
    number: "04",
    title: "Mettre en mouvement",
    copy: "L’application est réglée et votre première recharge est accompagnée.",
    icon: "signal" as const,
  },
];

const controlFeatures = [
  {
    number: "01",
    title: "Planifier",
    copy: "Programmez les sessions selon votre quotidien.",
    icon: "clock" as const,
  },
  {
    number: "02",
    title: "Suivre",
    copy: "Gardez une lecture claire de l’état et de l’historique.",
    icon: "signal" as const,
  },
  {
    number: "03",
    title: "Sécuriser",
    copy: "Gérez les accès et l’usage de la borne simplement.",
    icon: "shield" as const,
  },
];

const autelAppStores = [
  {
    label: "App Store",
    prefix: "Télécharger dans",
    href: "https://apps.apple.com/fr/app/autel-charge/id1578454464",
    icon: "/icons/stores/apple.svg",
    eventName: "download_autel_charge_ios_home",
  },
  {
    label: "Google Play",
    prefix: "Disponible sur",
    href: "https://play.google.com/store/apps/details?id=com.autel.charge",
    icon: "/icons/stores/google-play.svg",
    eventName: "download_autel_charge_android_home",
  },
] as const;

export function HomeFuturisticSolutions() {
  return (
    <section className={`${styles.atlasSection} section`} aria-labelledby="home-solutions-title">
      <div className={`container ${styles.atlasShell}`}>
        <header className={styles.sectionHeader}>
          <div>
            <p className="eyebrow">Un système, plusieurs réalités</p>
            <h2 id="home-solutions-title">Choisissez le contexte. Nous dessinons la recharge.</h2>
          </div>
          <p>Chaque installation EVAtlas commence par l’usage. La borne, la puissance et le parcours d’installation s’alignent ensuite sur votre lieu de vie ou de travail.</p>
        </header>

        <div className={styles.atlasWorkspace}>
          <article className={styles.atlasStage}>
            <div className={styles.atlasStageMeta}>
              <span><i aria-hidden="true" /> Système adaptable</span>
              <small>AC · Jusqu’à 22 kW</small>
            </div>
            <div className={styles.atlasObject}>
              <span className={styles.atlasOrbitalOne} aria-hidden="true" />
              <span className={styles.atlasOrbitalTwo} aria-hidden="true" />
              <Image
                className={styles.atlasCharger}
                src="/images/product/autel-maxicharger/exploded-sequence-cutout/step-01-closed.png"
                alt="Autel MaxiCharger 22 kW proposée par EVAtlas au Maroc"
                width={1254}
                height={1254}
                loading="lazy"
                sizes="(max-width: 760px) 88vw, (max-width: 1100px) 50vw, 540px"
              />
            </div>
            <div className={styles.atlasStageFooter}>
              <p>Une même borne.<br />Un projet entièrement personnalisé.</p>
            </div>
          </article>

          <div className={styles.contextList} role="list" aria-label="Contextes d’installation">
            {contexts.map((context) => (
              <article className={styles.contextCard} key={context.number} role="listitem">
                <div className={styles.contextIndex}>
                  <span>{context.number}</span>
                  <Icon name={context.icon} size={19} />
                </div>
                <div>
                  <small>{context.label}</small>
                  <h3>{context.title}</h3>
                  <p>{context.description}</p>
                  <span className={styles.contextDetail}>{context.detail}</span>
                </div>
              </article>
            ))}
            <TrackedLink href="/devis#quote-form" className={styles.atlasLink} eventName="submit_quote_start">
              Demander une étude pour mon installation <Icon name="arrow" size={18} />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFuturisticProcess() {
  return (
    <section className={`${styles.protocolSection} section`} aria-labelledby="home-process-title">
      <div className={`container ${styles.protocolShell}`}>
        <header className={styles.protocolHeader}>
          <div>
            <p className="eyebrow">Le protocole EVAtlas</p>
            <h2 id="home-process-title">Une installation orchestrée, jamais improvisée.</h2>
          </div>
          <div>
            <p>Un interlocuteur local accompagne votre projet du premier échange à la mise en service. Chaque étape a sa fonction, son contrôle et sa place.</p>
            <TrackedLink href={WHATSAPP_URL} className={styles.protocolContact} eventName="click_whatsapp" prefetch={false}>
              <Icon name="whatsapp" size={18} /> Échanger avec un conseiller
            </TrackedLink>
          </div>
        </header>

        <ol className={styles.protocolTimeline}>
          {processSteps.map((step, index) => (
            <li key={step.number}>
              <div className={styles.protocolStepTop}>
                <span>{step.number}</span>
                <Icon name={step.icon} size={19} />
              </div>
              <div>
                <p>Phase {String(index + 1).padStart(2, "0")}</p>
                <h3>{step.title}</h3>
                <span>{step.copy}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.protocolFooter}>
          <span><i aria-hidden="true" /> Parcours clair, réponse adaptée</span>
          <p>Du besoin à la première recharge, sans angle mort technique.</p>
          <TrackedLink href="/a-propos" eventName="click_about">Comprendre l’accompagnement EVAtlas <Icon name="arrow" size={16} /></TrackedLink>
        </div>
      </div>
    </section>
  );
}

export function HomeFuturisticConnected() {
  return (
    <section className={`${styles.controlSection} section`} aria-labelledby="home-connected-title">
      <div className={`container ${styles.controlShell}`}>
        <header className={styles.sectionHeader}>
          <div>
            <p className="eyebrow">L’énergie, à portée de main</p>
            <h2 id="home-connected-title">Le contrôle devient une évidence.</h2>
          </div>
          <p>Autel Charge concentre les gestes utiles dans une interface claire : programmer, suivre et garder la maîtrise de l’accès à votre borne.</p>
        </header>

        <div className={styles.controlBoard}>
          <div className={styles.controlFeatures}>
            {controlFeatures.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>
                <Icon name={feature.icon} size={20} />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </div>
              </article>
            ))}
            <div className={styles.controlDownload}>
              <span>Télécharger Autel Charge</span>
              <div className={styles.controlStoreButtons}>
                {autelAppStores.map((store) => (
                  <TrackedLink
                    aria-label={`${store.prefix} ${store.label}`}
                    className={styles.controlStoreButton}
                    eventName={store.eventName}
                    href={store.href}
                    key={store.label}
                    prefetch={false}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={24} src={store.icon} width={24} />
                    <span><small>{store.prefix}</small><b>{store.label}</b></span>
                    <i aria-hidden="true">↗</i>
                  </TrackedLink>
                ))}
              </div>
            </div>
            <ProductRouteLink className={styles.controlLink} eventName="click_product_feature">
              Découvrir l’application de l’Autel MaxiCharger <Icon name="arrow" size={17} />
            </ProductRouteLink>
          </div>

          <figure className={styles.appDevice} aria-label="Aperçu de l’application Autel Charge">
            <Image
              className={styles.appMockup}
              src="/images/app/autel-charge-app/autel-charge-phone-mockups-cutout.png"
              alt="Application Autel Charge présentée sur trois smartphones"
              width={1162}
              height={1354}
              loading="lazy"
              sizes="(max-width: 760px) 118vw, (max-width: 1100px) 72vw, 640px"
            />
          </figure>

          <aside className={styles.controlReadout} aria-label="Aperçu des fonctions connectées">
            <article>
              <small>État du système</small>
              <strong><i aria-hidden="true" /> Connectée</strong>
              <span>Wi-Fi · Bluetooth · Ethernet</span>
            </article>
            <article>
              <small>À votre rythme</small>
              <strong>Une seule application.</strong>
              <span>Des réglages utiles, sans complexité.</span>
            </article>
            <article className={styles.controlPulse} aria-hidden="true"><span /><span /><span /></article>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function HomeFuturisticConversion() {
  const questions = homepage.faq.slice(0, 4);

  return (
    <section className={`${styles.launchSection} section`} aria-labelledby="home-launch-title">
      <div className={`container ${styles.launchShell}`}>
        <header className={styles.launchHeader}>
          <p className="eyebrow">Votre prochain mouvement</p>
          <h2 id="home-launch-title">Une décision simple. Un projet bien engagé.</h2>
          <p>Choisissez le point de départ qui vous convient. Nous gardons le reste clair, utile et à votre mesure.</p>
        </header>

        <div className={styles.launchChoices}>
          <TrackedLink href="/devis#quote-form" className={styles.launchQuote} eventName="submit_quote_start">
            <span>01</span>
            <div>
              <small>Projet personnalisé</small>
              <h3>Demander un devis d’installation</h3>
              <p>Recevez une recommandation selon votre véhicule, votre puissance disponible et votre site.</p>
            </div>
            <b><Icon name="arrow" size={22} /></b>
          </TrackedLink>
          <TrackedLink href="/simulateur" className={styles.launchSimulator} eventName="click_simulator">
            <span>02</span>
            <div>
              <small>Réponse immédiate</small>
              <h3>Simuler le temps de recharge</h3>
              <p>Estimez votre temps de recharge et découvrez les paramètres qui comptent.</p>
            </div>
            <b><Icon name="calculator" size={24} /></b>
          </TrackedLink>
        </div>

        <div className={styles.faqDock}>
          <div className={styles.faqDockIntro}>
            <span>Avant de choisir</span>
            <h3>Les réponses essentielles, déjà prêtes.</h3>
            <p>Des repères concrets pour avancer sereinement avant l’étude technique.</p>
            <TrackedLink href="/faq" className={styles.faqLink} eventName="click_home_faq">Consulter la FAQ sur la recharge <Icon name="arrow" size={16} /></TrackedLink>
          </div>
          <div className={styles.faqItems}>
            {questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span><b>{item.question}</b><Icon name="chevron" size={18} /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
