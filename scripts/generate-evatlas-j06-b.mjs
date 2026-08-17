import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outRoot = path.join(root, "public/social/evatlas-j06-b");
const productPath = path.join(root, "public/images/product/autel-maxicharger/exploded-sequence-cutout/step-01-closed.png");
const logoPath = path.join(root, "public/images/evatlas-logo-4k.png");
const backgroundPath = path.join(outRoot, "source/abstract-morocco-background.png");

const [productBuffer, logoBuffer, backgroundBuffer] = await Promise.all([
  fs.readFile(productPath),
  fs.readFile(logoPath),
  fs.readFile(backgroundPath),
]);

const product = `data:image/png;base64,${productBuffer.toString("base64")}`;
const logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;
const background = `data:image/png;base64,${backgroundBuffer.toString("base64")}`;

const colors = {
  forest: "#173426",
  forest2: "#214C37",
  forest3: "#2E6047",
  ivory: "#F5F3E9",
  paper: "#FBFAF4",
  lime: "#CDEA98",
  autel: "#2CFF32",
  sage: "#789164",
  ink: "#153024",
  muted: "#647267",
  line: "#C9D2C2",
  white: "#FFFFFF",
};

const esc = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function defs() {
  return `
    <defs>
      <linearGradient id="dark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${colors.forest}"/>
        <stop offset="1" stop-color="#0E281C"/>
      </linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFFFF" stop-opacity=".22"/>
        <stop offset="1" stop-color="#FFFFFF" stop-opacity=".05"/>
      </linearGradient>
      <radialGradient id="halo">
        <stop offset="0" stop-color="${colors.autel}" stop-opacity=".30"/>
        <stop offset=".5" stop-color="${colors.lime}" stop-opacity=".10"/>
        <stop offset="1" stop-color="${colors.lime}" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="25" stdDeviation="28" flood-color="#06170F" flood-opacity=".28"/>
      </filter>
      <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="18"/>
      </filter>
      <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
        <path d="M72 0H0V72" fill="none" stroke="${colors.sage}" stroke-opacity=".09" stroke-width="1"/>
      </pattern>
    </defs>`;
}

function textBlock(lines, x, y, size, fill, options = {}) {
  const {
    weight = 700,
    lineHeight = Math.round(size * 1.08),
    anchor = "start",
    family = "Montserrat, Arial Black, Arial, sans-serif",
    tracking = 0,
    opacity = 1,
  } = options;
  return `<text x="${x}" y="${y}" fill="${fill}" opacity="${opacity}" font-family="${family}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${tracking}">${lines.map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${esc(line)}</tspan>`).join("")}</text>`;
}

function label(text, x, y, fill = colors.sage, anchor = "start") {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" text-anchor="${anchor}" letter-spacing="3">${esc(text.toUpperCase())}</text>`;
}

function brandHeader(w, index, dark = false) {
  const logoW = Math.min(245, w * .24);
  const logoX = 68;
  const chipFill = dark ? colors.ivory : colors.paper;
  const ink = dark ? colors.ivory : colors.forest;
  return `
    <rect x="48" y="42" width="${logoW + 42}" height="68" rx="34" fill="${chipFill}" fill-opacity="${dark ? .96 : .86}"/>
    <image href="${logo}" x="68" y="61" width="${logoW}" height="37" preserveAspectRatio="xMinYMid meet"/>
    <text x="${w - 68}" y="83" fill="${ink}" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" text-anchor="end" letter-spacing="2.5">${String(index).padStart(2, "0")} / 04</text>`;
}

function footerNote(w, h, dark = false, note = "SELON MODÈLE ET SCHÉMA D’INSTALLATION") {
  const fill = dark ? colors.ivory : colors.muted;
  return `
    <line x1="68" x2="${w - 68}" y1="${h - 84}" y2="${h - 84}" stroke="${dark ? colors.ivory : colors.line}" stroke-opacity=".34"/>
    <text x="68" y="${h - 46}" fill="${fill}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.8">${esc(note)}</text>
    <text x="${w - 68}" y="${h - 46}" fill="${fill}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" text-anchor="end" letter-spacing="1.8">EVATLAS MAROC</text>`;
}

function connector(x1, y1, x2, y2, accent = false) {
  const color = accent ? colors.autel : colors.sage;
  const bend = (x1 + x2) / 2;
  return `<path d="M${x1} ${y1} H${bend} V${y2} H${x2}" fill="none" stroke="${color}" stroke-opacity="${accent ? .88 : .56}" stroke-width="2"/>
    <circle cx="${x2}" cy="${y2}" r="5" fill="${color}"/>
    <circle cx="${x2}" cy="${y2}" r="11" fill="none" stroke="${color}" stroke-opacity=".25"/>`;
}

function callout(text, x, y, w, accent = false) {
  const fill = accent ? colors.forest : colors.paper;
  const ink = accent ? colors.ivory : colors.ink;
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="64" rx="32" fill="${fill}" stroke="${accent ? colors.lime : colors.line}" stroke-opacity=".7"/>
    <circle cx="${x + 28}" cy="${y + 32}" r="7" fill="${accent ? colors.autel : colors.sage}"/>
    <text x="${x + 48}" y="${y + 39}" fill="${ink}" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="700">${esc(text)}</text>
  </g>`;
}

function slide1(w, h) {
  const compact = h <= 1100;
  const titleY = compact ? 155 : 178;
  const productSize = compact ? 590 : 720;
  const productX = w - productSize + (compact ? 22 : 0);
  const productY = compact ? 365 : 420;
  const panelY = compact ? 335 : 395;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${defs()}
    <rect width="${w}" height="${h}" fill="url(#dark)"/>
    <image href="${background}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" opacity=".24"/>
    <rect width="${w}" height="${h}" fill="url(#grid)"/>
    ${brandHeader(w, 1, true)}
    ${label("CE QUI PROTÈGE UNE RECHARGE MODERNE", 68, titleY, colors.lime)}
    ${textBlock(["La sécurité se construit", "à plusieurs niveaux."], 68, titleY + 62, compact ? 58 : 68, colors.ivory, {lineHeight: compact ? 64 : 74})}
    <rect x="68" y="${panelY}" width="410" height="112" rx="28" fill="url(#glass)" stroke="${colors.ivory}" stroke-opacity=".22"/>
    ${textBlock(["BORNE + INSTALLATION"], 98, panelY + 48, 21, colors.lime, {tracking: 1.4})}
    ${textBlock(["Deux niveaux complémentaires."], 98, panelY + 82, 19, colors.ivory, {weight: 500, family: "Inter, Arial, sans-serif"})}
    <ellipse cx="${w * .70}" cy="${h * .66}" rx="330" ry="330" fill="url(#halo)"/>
    <circle cx="${w * .70}" cy="${h * .66}" r="270" fill="none" stroke="${colors.lime}" stroke-opacity=".18" stroke-width="2"/>
    <circle cx="${w * .70}" cy="${h * .66}" r="225" fill="none" stroke="${colors.ivory}" stroke-opacity=".13" stroke-dasharray="8 12"/>
    <image href="${product}" x="${productX}" y="${productY}" width="${productSize}" height="${productSize}" preserveAspectRatio="xMidYMid meet" filter="url(#shadow)"/>
    <rect x="68" y="${h - 185}" width="230" height="56" rx="28" fill="${colors.lime}"/>
    <text x="183" y="${h - 149}" text-anchor="middle" fill="${colors.forest}" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800">JUSQU’À 22 KW</text>
    ${footerNote(w, h, true)}
  </svg>`;
}

function slide2(w, h) {
  const compact = h <= 1100;
  const titleY = 155;
  const productSize = compact ? 490 : 590;
  const productX = (w - productSize) / 2;
  const productY = compact ? 315 : 390;
  const leftX = 60;
  const rightX = w - 330;
  const rows = compact ? [365, 535, 705] : [470, 690, 910];
  const centers = rows.map(y => y + 32);
  const productLeft = productX + 120;
  const productRight = productX + productSize - 100;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${defs()}
    <rect width="${w}" height="${h}" fill="${colors.ivory}"/>
    <rect width="${w}" height="${h}" fill="url(#grid)"/>
    ${brandHeader(w, 2, false)}
    ${label("LES PARAMÈTRES SURVEILLÉS", 68, titleY, colors.sage)}
    ${textBlock(["La borne surveille.", "Le circuit complète."], 68, titleY + 60, compact ? 48 : 56, colors.ink, {lineHeight: compact ? 54 : 62})}
    <ellipse cx="${w / 2}" cy="${productY + productSize * .52}" rx="300" ry="300" fill="url(#halo)"/>
    <image href="${product}" x="${productX}" y="${productY}" width="${productSize}" height="${productSize}" preserveAspectRatio="xMidYMid meet" filter="url(#shadow)"/>
    ${connector(productLeft, centers[0], leftX + 278, centers[0])}
    ${connector(productLeft, centers[1], leftX + 278, centers[1])}
    ${connector(productLeft, centers[2], leftX + 278, centers[2])}
    ${connector(productRight, centers[0], rightX, centers[0])}
    ${connector(productRight, centers[1], rightX, centers[1])}
    ${connector(productRight, centers[2], rightX, centers[2], true)}
    ${callout("Surtension", leftX, rows[0], 278)}
    ${callout("Surintensité", leftX, rows[1], 278)}
    ${callout("Défaut terre · fuite DC", leftX, rows[2], 278)}
    ${callout("Sous-tension", rightX, rows[0], 270)}
    ${callout("Température", rightX, rows[1], 270)}
    ${callout("Protection installation", rightX, rows[2], 270, true)}
    ${footerNote(w, h, false)}
  </svg>`;
}

function circuitIcon(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${colors.lime}" stroke-width="3">
    <rect x="0" y="0" width="168" height="212" rx="18" fill="${colors.forest2}"/>
    <rect x="24" y="28" width="120" height="38" rx="8"/>
    <path d="M42 47h18m14 0h18m14 0h18"/>
    <rect x="24" y="86" width="52" height="84" rx="8"/>
    <rect x="92" y="86" width="52" height="84" rx="8"/>
    <path d="M50 112v32m68-32v32M24 188h120"/>
  </g>`;
}

function itemRow(num, title, body, x, y, w) {
  return `<g>
    <text x="${x}" y="${y + 14}" fill="${colors.sage}" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="800" letter-spacing="2">${num}</text>
    <text x="${x + 64}" y="${y + 14}" fill="${colors.ink}" font-family="Montserrat, Arial Black, Arial, sans-serif" font-size="22" font-weight="800">${esc(title)}</text>
    <text x="${x + 64}" y="${y + 44}" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="500">${esc(body)}</text>
    <line x1="${x}" x2="${x + w}" y1="${y + 75}" y2="${y + 75}" stroke="${colors.line}"/>
  </g>`;
}

function slide3(w, h) {
  const compact = h <= 1100;
  const titleY = 155;
  const panelY = compact ? 360 : 430;
  const panelH = compact ? 570 : 700;
  const leftW = 410;
  const rowGap = compact ? 118 : 138;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${defs()}
    <rect width="${w}" height="${h}" fill="${colors.paper}"/>
    <image href="${background}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" opacity=".07"/>
    ${brandHeader(w, 3, false)}
    ${label("LE SECOND NIVEAU", 68, titleY, colors.sage)}
    ${textBlock(["Le tableau complète", "la protection."], 68, titleY + 60, compact ? 50 : 58, colors.ink, {lineHeight: compact ? 56 : 64})}
    <rect x="50" y="${panelY}" width="${w - 100}" height="${panelH}" rx="42" fill="${colors.ivory}" stroke="${colors.line}"/>
    <rect x="50" y="${panelY}" width="${leftW}" height="${panelH}" rx="42" fill="url(#dark)"/>
    <rect x="${50 + leftW - 40}" y="${panelY}" width="40" height="${panelH}" fill="url(#dark)"/>
    ${circuitIcon(160, panelY + (compact ? 95 : 150), 1.14)}
    ${textBlock(["CIRCUIT DÉDIÉ"], 255, panelY + (compact ? 410 : 495), 18, colors.lime, {anchor: "middle", tracking: 1.8})}
    ${textBlock(["Dimensionné pour le site."], 255, panelY + (compact ? 449 : 538), 17, colors.ivory, {anchor: "middle", weight: 500, family: "Inter, Arial, sans-serif"})}
    ${itemRow("01", "Protection adaptée", "Calibrée selon le circuit.", 510, panelY + 90, 500)}
    ${itemRow("02", "Terre vérifiée", "Continuité et schéma contrôlés.", 510, panelY + 90 + rowGap, 500)}
    ${itemRow("03", "Conducteurs dimensionnés", "Section adaptée au besoin.", 510, panelY + 90 + rowGap * 2, 500)}
    ${itemRow("04", "Pose validée", "Par un professionnel qualifié.", 510, panelY + 90 + rowGap * 3, 500)}
    ${footerNote(w, h, false, "À VALIDER SELON LE SITE ET LES RÈGLES APPLICABLES")}
  </svg>`;
}

function plusMark(x, y) {
  return `<circle cx="${x}" cy="${y}" r="32" fill="${colors.lime}"/><path d="M${x - 12} ${y}h24M${x} ${y - 12}v24" stroke="${colors.forest}" stroke-width="5" stroke-linecap="round"/>`;
}

function slide4(w, h) {
  const compact = h <= 1100;
  const titleY = 155;
  const objectY = compact ? 405 : 500;
  const productSize = compact ? 390 : 460;
  const productX = 70;
  const boardX = compact ? 700 : 710;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${defs()}
    <rect width="${w}" height="${h}" fill="url(#dark)"/>
    <image href="${background}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" opacity=".18"/>
    ${brandHeader(w, 4, true)}
    ${label("LE BON RÉFLEXE", 68, titleY, colors.lime)}
    ${textBlock(["Deux niveaux.", "Une installation cohérente."], 68, titleY + 60, compact ? 50 : 60, colors.ivory, {lineHeight: compact ? 56 : 66})}
    <ellipse cx="270" cy="${objectY + 200}" rx="250" ry="250" fill="url(#halo)"/>
    <image href="${product}" x="${productX}" y="${objectY}" width="${productSize}" height="${productSize}" preserveAspectRatio="xMidYMid meet" filter="url(#shadow)"/>
    ${plusMark(555, objectY + 190)}
    ${circuitIcon(boardX, objectY + 75, 1.25)}
    <text x="${boardX + 105}" y="${objectY + 385}" fill="${colors.ivory}" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="700" text-anchor="middle" letter-spacing="1.4">TABLEAU ADAPTÉ</text>
    <rect x="68" y="${h - (compact ? 230 : 270)}" width="${w - 136}" height="118" rx="32" fill="${colors.ivory}"/>
    ${textBlock(["Enregistrez ce schéma et faites valider", "votre installation."], 100, h - (compact ? 184 : 222), compact ? 25 : 28, colors.ink, {lineHeight: compact ? 31 : 35})}
    <circle cx="${w - 125}" cy="${h - (compact ? 172 : 210)}" r="30" fill="${colors.lime}"/>
    <path d="M${w - 139} ${h - (compact ? 172 : 210)}h27m-11-11 11 11-11 11" fill="none" stroke="${colors.forest}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    ${footerNote(w, h, true, "CONTRIBUE À PROTÉGER · N’ÉLIMINE PAS TOUT RISQUE")}
  </svg>`;
}

function cover(w, h, type) {
  const landscape = w > h;
  const titleSize = landscape ? 46 : (h > 1600 ? 74 : 58);
  const titleX = landscape ? 80 : 72;
  const titleY = landscape ? 185 : 260;
  const productSize = landscape ? 560 : (h > 1600 ? 980 : 700);
  const productX = landscape ? w - 565 : (w - productSize) / 2 + 90;
  const productY = landscape ? 35 : (h > 1600 ? 670 : 470);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${defs()}
    <rect width="${w}" height="${h}" fill="url(#dark)"/>
    <image href="${background}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" opacity=".23"/>
    <rect width="${w}" height="${h}" fill="url(#grid)"/>
    <rect x="${titleX}" y="64" width="${landscape ? 300 : 330}" height="76" rx="38" fill="${colors.ivory}"/>
    <image href="${logo}" x="${titleX + 24}" y="84" width="${landscape ? 250 : 280}" height="39" preserveAspectRatio="xMinYMid meet"/>
    ${label("CE QUI PROTÈGE UNE RECHARGE MODERNE", titleX, titleY, colors.lime)}
    ${textBlock(["La sécurité se construit", "à plusieurs niveaux."], titleX, titleY + 65, titleSize, colors.ivory, {lineHeight: Math.round(titleSize * 1.08)})}
    <ellipse cx="${landscape ? w * .77 : w * .55}" cy="${landscape ? h * .58 : h * .63}" rx="${landscape ? 260 : 390}" ry="${landscape ? 260 : 390}" fill="url(#halo)"/>
    <image href="${product}" x="${productX}" y="${productY}" width="${productSize}" height="${productSize}" preserveAspectRatio="xMidYMid meet" filter="url(#shadow)"/>
    <rect x="${titleX}" y="${h - 162}" width="232" height="58" rx="29" fill="${colors.lime}"/>
    <text x="${titleX + 116}" y="${h - 124}" text-anchor="middle" fill="${colors.forest}" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800">JUSQU’À 22 KW</text>
    <text x="${titleX}" y="${h - 63}" fill="${colors.ivory}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.8">SELON MODÈLE ET SCHÉMA D’INSTALLATION</text>
    <text x="${w - titleX}" y="${h - 63}" fill="${colors.ivory}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" text-anchor="end" letter-spacing="1.8">${esc(type)}</text>
  </svg>`;
}

async function render(svg, outputPath) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(outputPath);
}

const slides = [slide1, slide2, slide3, slide4];
for (let index = 0; index < slides.length; index += 1) {
  const n = String(index + 1).padStart(2, "0");
  await render(slides[index](1080, 1350), path.join(outRoot, "feed", `EVATLAS-J06-B-slide-${n}-1080x1350.png`));
  await render(slides[index](1080, 1080), path.join(outRoot, "square", `EVATLAS-J06-B-slide-${n}-1080x1080.png`));
}

await render(cover(1080, 1920, "STORY · REEL COVER"), path.join(outRoot, "exports/EVATLAS-J06-B-story-1080x1920.png"));
await render(cover(1200, 627, "LINKEDIN · FACEBOOK"), path.join(outRoot, "exports/EVATLAS-J06-B-landscape-1200x627.png"));
await render(cover(1000, 1500, "PINTEREST"), path.join(outRoot, "exports/EVATLAS-J06-B-pinterest-1000x1500.png"));

const thumbs = [];
for (let index = 0; index < 4; index += 1) {
  const n = String(index + 1).padStart(2, "0");
  const input = path.join(outRoot, "feed", `EVATLAS-J06-B-slide-${n}-1080x1350.png`);
  const thumb = await sharp(input).resize(432, 540).toBuffer();
  thumbs.push({ input: thumb, left: index * 432, top: 0 });
}
await sharp({ create: { width: 1728, height: 540, channels: 4, background: colors.ivory } })
  .composite(thumbs)
  .png({ compressionLevel: 9 })
  .toFile(path.join(outRoot, "EVATLAS-J06-B-contact-sheet.png"));

console.log(`Generated EVATLAS-J06-B assets in ${outRoot}`);
