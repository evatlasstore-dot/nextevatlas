import { SITE_URL } from "@/lib/site";

export const EMAIL_SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || SITE_URL).replace(/\/+$/u, "");
export const EMAIL_PRODUCT_URL = `${EMAIL_SITE_URL}/nos-produits/autel-maxicharger/`;
export const EMAIL_QUOTE_URL = `${EMAIL_SITE_URL}/devis/#quote-form`;

const emailLogoUrl = `${EMAIL_SITE_URL}/images/evatlas-logo.png`;
const emailInstagramUrl = "https://www.instagram.com/evatlas.store/";
const emailLinkedInUrl = "https://www.linkedin.com/company/evatlas-maroc";

export type EmailButtonVariant = "primary" | "secondary" | "light";

export type EmailLayoutOptions = {
  preheader: string;
  eyebrow: string;
  title: string;
  introduction: string;
  content: string;
  footerNote: string;
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;")
    .replace(/'/gu, "&#039;");
}

export function emailButton(label: string, href: string, variant: EmailButtonVariant = "primary"): string {
  const variants: Record<EmailButtonVariant, { background: string; border: string; color: string }> = {
    primary: { background: "#173f2b", border: "#173f2b", color: "#ffffff" },
    secondary: { background: "#dff2a5", border: "#dff2a5", color: "#173f2b" },
    light: { background: "#ffffff", border: "#cdd7c9", color: "#173f2b" },
  };
  const colors = variants[variant];

  return `<a class="email-action" href="${escapeHtml(href)}" style="display:inline-block;background:${colors.background};border:1px solid ${colors.border};border-radius:999px;color:${colors.color};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:18px;padding:13px 20px;text-align:center;text-decoration:none">${escapeHtml(label)}&nbsp;&nbsp;→</a>`;
}

export function emailLayout(options: EmailLayoutOptions): string {
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(options.title)}</title>
    <style>
      @media only screen and (max-width:620px) {
        .email-page-pad { padding: 14px 8px !important; }
        .email-card-pad { padding: 28px 20px !important; }
        .email-header-pad { padding: 22px 20px !important; }
        .email-title { font-size: 30px !important; line-height: 35px !important; }
        .email-intro { font-size: 16px !important; line-height: 25px !important; }
        .email-column { display: block !important; width: 100% !important; }
        .email-column-gap { display: none !important; }
        .email-action-cell { display: block !important; width: 100% !important; padding: 0 0 10px !important; }
        .email-action { box-sizing: border-box !important; display: block !important; width: 100% !important; }
        .email-detail-label { width: 42% !important; }
        .email-logo { width: 176px !important; }
      }
    </style>
  </head>
  <body style="background:#eef2e9;margin:0;padding:0;-webkit-text-size-adjust:100%;word-spacing:normal">
    <div style="display:none;font-size:1px;color:#eef2e9;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${escapeHtml(options.preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2e9;border-collapse:collapse">
      <tr>
        <td class="email-page-pad" align="center" style="padding:32px 14px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;max-width:680px">
            <tr>
              <td class="email-header-pad" style="background:#f9faf6;border:1px solid #dbe2d7;border-bottom:0;border-radius:28px 28px 0 0;padding:24px 34px">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">
                  <tr>
                    <td>
                      <a href="${EMAIL_SITE_URL}/" style="text-decoration:none">
                        <img class="email-logo" src="${emailLogoUrl}" width="190" alt="EVAtlas" style="border:0;display:block;height:auto;max-width:100%;outline:none;text-decoration:none">
                      </a>
                    </td>
                    <td align="right" style="color:#718272;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase">Recharge connectée</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-card-pad" style="background:#ffffff;border-left:1px solid #dbe2d7;border-right:1px solid #dbe2d7;padding:42px 44px 18px">
                <p style="color:#688260;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;line-height:18px;margin:0 0 14px;text-transform:uppercase">${escapeHtml(options.eyebrow)}</p>
                <h1 class="email-title" style="color:#102f20;font-family:Arial,Helvetica,sans-serif;font-size:38px;font-weight:700;letter-spacing:-1.2px;line-height:43px;margin:0 0 16px">${escapeHtml(options.title)}</h1>
                <p class="email-intro" style="color:#56675a;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:27px;margin:0">${escapeHtml(options.introduction)}</p>
              </td>
            </tr>
            <tr>
              <td class="email-card-pad" style="background:#ffffff;border-left:1px solid #dbe2d7;border-right:1px solid #dbe2d7;padding:22px 44px 42px">
                ${options.content}
              </td>
            </tr>
            <tr>
              <td style="background:#173f2b;border-radius:0 0 28px 28px;padding:26px 34px">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">
                  <tr>
                    <td class="email-column" style="color:#f5f8f2;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:19px;width:58%">${escapeHtml(options.footerNote)}</td>
                    <td class="email-column" align="right" style="color:#dff2a5;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:19px">
                      <a href="${EMAIL_SITE_URL}/" style="color:#dff2a5;text-decoration:none">evatlas.store</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${emailInstagramUrl}" style="color:#dff2a5;text-decoration:none">Instagram</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${emailLinkedInUrl}" style="color:#dff2a5;text-decoration:none">LinkedIn</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderDetailRows(details: Array<[string, string]>): string {
  return details
    .map(
      ([label, value], index) => `<tr>
        <td class="email-detail-label" style="border-bottom:${index === details.length - 1 ? "0" : "1px solid #e2e7df"};color:#718074;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.7px;line-height:18px;padding:13px 12px;text-transform:uppercase;width:36%">${escapeHtml(label)}</td>
        <td style="border-bottom:${index === details.length - 1 ? "0" : "1px solid #e2e7df"};color:#173322;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:21px;padding:13px 12px">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");
}

export function detailCard(title: string, details: Array<[string, string]>): string {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f7f9f4;border:1px solid #dce4d8;border-collapse:separate;border-radius:18px;margin:0 0 16px;overflow:hidden">
    <tr>
      <td style="border-bottom:1px solid #dce4d8;color:#5e7959;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.6px;padding:15px 16px 11px;text-transform:uppercase">${escapeHtml(title)}</td>
    </tr>
    <tr>
      <td>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">${renderDetailRows(details)}</table>
      </td>
    </tr>
  </table>`;
}
