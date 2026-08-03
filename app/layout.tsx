import type { Metadata } from "next";
import MetaPixelPageView from "@/components/analytics/MetaPixelPageView";
import { absolutePageUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EVAtlas — Bornes de recharge au Maroc",
    template: "%s | EVAtlas",
  },
  description:
    "EVAtlas propose des bornes de recharge connectées jusqu’à 22 kW avec installation professionnelle et accompagnement local au Maroc.",
  applicationName: SITE_NAME,
  authors: [{ name: "Équipe EVAtlas", url: absolutePageUrl("/a-propos/") }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Mobilité électrique",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/images/evatlas-icon-512.png?v=2", sizes: "512x512", type: "image/png" }],
    shortcut: "/images/evatlas-icon-192.png?v=2",
    apple: [{ url: "/images/evatlas-icon-180.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-MA">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X43Z4LZK9H"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X43Z4LZK9H');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1594892332266919');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1594892332266919&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaPixelPageView />
        <a className="skip-link" href="#main-content">Aller au contenu</a>
        {children}
      </body>
    </html>
  );
}
