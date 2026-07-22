import Image from "next/image";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import styles from "./HomePageSections.module.css";

const solutions = [
  {
    number: "01",
    title: "À domicile",
    description: "Une borne dimensionnée pour votre véhicule, votre tableau électrique et votre rythme de recharge.",
    detail: "Maison · Villa · Place privative",
  },
  {
    number: "02",
    title: "En entreprise",
    description: "Une infrastructure claire pour les collaborateurs, les flottes et les visiteurs, avec contrôle des accès.",
    detail: "Bureaux · Flottes · Hôtels",
  },
  {
    number: "03",
    title: "Dans les lieux partagés",
    description: "Une étude adaptée aux contraintes d’une résidence, d’un parking ou d’un site recevant du public.",
    detail: "Résidences · Parkings · Commerces",
  },
];

const process = [
  ["01", "Échange", "Nous précisons le véhicule, le lieu et vos habitudes."],
  ["02", "Étude technique", "La puissance et les protections sont adaptées au site."],
  ["03", "Installation", "La borne est posée, raccordée et testée avec soin."],
  ["04", "Mise en service", "L’application est configurée et la prise en main expliquée."],
];

export function HomeSolutionsSection() {
  return (
    <section className={`${styles.solutionsSection} section`} aria-labelledby="home-solutions-title">
      <div className={`container ${styles.solutionsIntro}`}>
        <div>
          <p className="eyebrow">Nos solutions</p>
          <h2 id="home-solutions-title">La bonne recharge commence par le bon usage.</h2>
        </div>
        <p>EVAtlas ne propose pas une configuration unique. Chaque projet part du véhicule, du bâtiment et de la façon dont la borne sera réellement utilisée.</p>
      </div>

      <div className={`container ${styles.solutionsLayout}`}>
        <figure className={styles.solutionsMedia}>
          <Image
            src="/images/product/autel-maxicharger/hero-poster.png"
            alt="Borne Autel MaxiCharger installée dans un environnement contemporain"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <figcaption>
            <span>Une installation intégrée au lieu</span>
            <small>Résidentiel et professionnel</small>
          </figcaption>
        </figure>

        <div className={styles.solutionsList}>
          {solutions.map((solution) => (
            <article key={solution.number} className={styles.solutionRow}>
              <span>{solution.number}</span>
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <small>{solution.detail}</small>
              </div>
            </article>
          ))}
          <TrackedLink href="/devis#quote-form" className={styles.inlineLink} eventName="submit_quote_start">
            Parler de mon installation <Icon name="arrow" size={17} />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}

export function HomeProcessSection() {
  return (
    <section className={`${styles.processSection} section`} aria-labelledby="home-process-title">
      <div className={`container ${styles.processHeader}`}>
        <div>
          <p className="eyebrow">L’accompagnement EVAtlas</p>
          <h2 id="home-process-title">De l’étude à la première recharge.</h2>
        </div>
        <div>
          <p>Un interlocuteur local suit votre projet, vérifie les conditions techniques et vous accompagne jusqu’à la prise en main.</p>
          <TrackedLink href="https://wa.me/212786376294" className={styles.whatsappLink} eventName="click_whatsapp" prefetch={false}>
            <Icon name="whatsapp" size={18} /> Échanger sur WhatsApp
          </TrackedLink>
        </div>
      </div>

      <div className={`container ${styles.processTimeline}`}>
        <ol>
          {process.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomeConnectedSection() {
  return (
    <section className={`${styles.connectedSection} section`} aria-labelledby="home-connected-title">
      <div className={`container ${styles.connectedLayout}`}>
        <div className={styles.connectedCopy}>
          <p className="eyebrow">Une recharge qui reste simple</p>
          <h2 id="home-connected-title">Pilotez la borne, sans y penser.</h2>
          <p className={styles.connectedLead}>Depuis l’application Autel Charge, retrouvez l’essentiel pour organiser vos recharges et suivre votre borne au quotidien.</p>
          <ul>
            <li><Icon name="clock" size={19} /><span><b>Programmer les sessions</b><small>Choisissez les horaires qui correspondent à votre routine.</small></span></li>
            <li><Icon name="signal" size={19} /><span><b>Suivre la recharge</b><small>Consultez l’état et l’historique depuis votre téléphone.</small></span></li>
            <li><Icon name="shield" size={19} /><span><b>Gérer les accès</b><small>Gardez la maîtrise de l’utilisation de votre borne.</small></span></li>
          </ul>
          <ProductRouteLink className={styles.inlineLink} eventName="click_product_feature">
            Voir la borne en détail <Icon name="arrow" size={17} />
          </ProductRouteLink>
        </div>

        <div className={styles.appMedia} aria-label="Aperçu de l’application Autel Charge">
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/app/autel-charge-app/app-poster.png">
            <source src="/videos/autel-charge-app.mp4" type="video/mp4" />
          </video>
          <div className={styles.appMediaCaption}>
            <span><i /> Borne connectée</span>
            <p>Votre recharge,<br />à portée de main.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeConversionSection() {
  return (
    <section className={`${styles.conversionSection} section`} aria-labelledby="home-conversion-title">
      <div className={`container ${styles.conversionLayout}`}>
        <div className={styles.conversionCopy}>
          <p className="eyebrow">Votre projet</p>
          <h2 id="home-conversion-title">Vous savez où recharger. Construisons la suite.</h2>
          <p>Recevez une recommandation adaptée à votre véhicule et à votre installation électrique.</p>
          <div className={styles.conversionActions}>
            <TrackedLink href="/devis#quote-form" className="button" eventName="submit_quote_start">Demander un devis <Icon name="arrow" size={17} /></TrackedLink>
            <TrackedLink href="https://wa.me/212786376294" className={styles.secondaryButton} eventName="click_whatsapp" prefetch={false}><Icon name="whatsapp" size={18} /> WhatsApp</TrackedLink>
          </div>
        </div>

        <TrackedLink href="/simulateur" className={styles.simulatorPanel} eventName="click_simulator">
          <span className={styles.simulatorIcon}><Icon name="calculator" size={25} /></span>
          <div>
            <small>Estimation immédiate</small>
            <h3>Vous explorez encore&nbsp;?</h3>
            <p>Estimez le temps de recharge selon votre véhicule, votre batterie et la puissance disponible.</p>
          </div>
          <span className={styles.simulatorArrow}><Icon name="arrow" size={19} /></span>
        </TrackedLink>
      </div>
      <HomeFaqSection />
    </section>
  );
}
