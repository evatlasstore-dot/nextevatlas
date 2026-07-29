import { SOCIAL_NETWORKS } from "@/data/contact";

export default function FooterSocialLinks() {
  return (
    <div className="footer-standard-social" role="list" aria-label="Réseaux sociaux officiels EVAtlas">
      {SOCIAL_NETWORKS.map((network) => (
        <a
          key={network.name}
          role="listitem"
          href={network.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${network.name} — ${network.handle}`}
          aria-label={`Suivre EVAtlas sur ${network.name} — ${network.handle}`}
        >
          <img src={network.icon} alt="" width="20" height="20" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
