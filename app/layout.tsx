import type { Metadata } from "next";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://evatlas.store"),
  title: {
    default: "EVAtlas — Bornes de recharge au Maroc",
    template: "%s | EVAtlas",
  },
  description:
    "EVAtlas propose des bornes de recharge connectées jusqu’à 22 kW avec installation professionnelle et accompagnement local au Maroc.",
  applicationName: "EVAtlas",
  authors: [{ name: "Équipe EVAtlas", url: "https://evatlas.store/a-propos" }],
  creator: "EVAtlas",
  publisher: "EVAtlas",
  category: "Mobilité électrique",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/images/evatlas-icon-512.png?v=2", sizes: "512x512", type: "image/png" }],
    shortcut: "/images/evatlas-icon-192.png?v=2",
    apple: [{ url: "/images/evatlas-icon-180.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
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
      </head>
      <body><a className="skip-link" href="#main-content">Aller au contenu</a>{children}</body>
    </html>
  );
}
