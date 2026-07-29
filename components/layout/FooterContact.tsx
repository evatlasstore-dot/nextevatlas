import Icon from "@/components/ui/Icon";
import { PHONE_NUMBER, PHONE_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/data/contact";

const address = "12 Rue Mustapha Manfalouti, Gauthier – RDC, Casablanca 20053";

export default function FooterContact({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  return (
    <address className="footer-standard-contact">
      <p>Contact</p>
      <ul className="footer-standard-contact-list">
        <li>
          <span className="footer-standard-contact-icon" aria-hidden="true"><Icon name="pin" size={17} /></span>
          <span>{address}</span>
        </li>
        <li>
          <span className="footer-standard-contact-icon" aria-hidden="true"><Icon name="mail" size={17} /></span>
          <a href="mailto:evatlas.store@gmail.com">evatlas.store@gmail.com</a>
        </li>
        <li>
          <span className="footer-standard-contact-icon" aria-hidden="true"><Icon name="phone" size={17} /></span>
          <a href={PHONE_URL}>{PHONE_NUMBER}</a>
        </li>
        <li>
          <span className="footer-standard-contact-icon footer-standard-contact-icon-whatsapp" aria-hidden="true"><Icon name="whatsapp" size={17} /></span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={onWhatsAppClick}>{WHATSAPP_NUMBER}</a>
        </li>
      </ul>
    </address>
  );
}
