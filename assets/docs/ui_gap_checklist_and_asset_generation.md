# UI Gap Checklist And Asset Generation Brief

## Cél

Ez a dokumentum két dolgot fog össze:

1. A jelenlegi Flutter UI és a `docs/mock-up.png` közötti fő eltéréseket.
2. Azokat a képi asseteket, amelyeket érdemes GPT-vel legeneráltatni, hogy a projekt vizuálisan közelebb kerüljön a mockuphoz.

Ez a brief úgy lett megírva, hogy:

- fejlesztési checklistként is használható legyen
- külön asset briefként is működjön
- a GPT számára közvetlenül átadható promptokat tartalmazzon

---

## Általános Vizuális Irány

### A mockup hangulata

- Sötét, prémium, high-tech, cinematic dashboard esztétika
- Üvegpaneles, glow-os, finoman neon-kék kiemelésekkel
- Precíz, feszes elrendezés
- Nem “weboldal sablon”, hanem inkább “product showcase / systems interface”
- Kevés, de nagyon tudatos szín
- Sok helyen valódi képi anyag vagy kész illusztráció hatás, nem pusztán Flutter dobozok

### Amit minden új assetnél tartani kell

- Háttér: sötét navy / midnight blue
- Fő akcentus: elektromos kék
- Másodlagos akcentus: hideg cyan
- Kontraszt: világos, enyhén tört fehér szöveg
- Kerülendő: lila túlsúly, meleg narancs, stock-illusztráció hatás, cartoon stílus, lapos vector startup feeling

---

## Képernyőnkénti UI Gap Checklist

## 1. Home

### Jelenlegi eltérések

- A hero jobb oldali vizuál még mindig inkább komponensekből összerakott placeholder, mint egységes product illusztráció.
- A központi rendszerábra nem olyan részletes és térbeli, mint a mockupban.
- A jobb felső és bal alsó node-ok még különálló paneleknek hatnak, nem egy átgondolt rendszer részének.
- A CTA sor túl hosszú a mockuphoz képest.
- Az alsó stat kártyák túl szövegesek, kevésbé ikonikusak.
- A teljes hero blokk még kevésbé “showcase” és inkább “good Flutter layout” érzetű.

### Javítási checklist

- Hero right visual teljes újrakomponálása valódi assettel
- Központi node és kapcsolatok egységes rendszerdiagramként
- CTA-k számának és hangsúlyának tisztítása
- Stat kártyákhoz ikonok vagy dedikált glyph-ek
- Kiemeltebb glow és mélység a központi ábrán

### Asset szükséges

- Igen, erősen

### Szükséges assetek

- `hero_system_diagram_desktop.png` vagy `hero_system_diagram_desktop.svg`
- opcionálisan külön mobil verzió:
  - `hero_system_diagram_mobile.png`

---

## 2. Projects Lista

### Jelenlegi eltérések

- A mockupban valódi, termékszerű preview képek vannak.
- A jelenlegi kártyák egy része még túl generikus.
- A filter / category sáv kevésbé kifinomult, mint a referenciában.
- A featured projekt kiemelése még nem olyan hangsúlyos, mint a mockupban.

### Javítási checklist

- Minden projekthez valódi thumbnail
- Featured kártya erősebb vizuális előnyben
- Egységes képarány és képkivágás
- Filterek vizuális finomítása

### Asset szükséges

- Igen

### Szükséges assetek

- `project_vendomatiq_thumb.png`
- `project_zenia_thumb.png`
- `project_bolygok_thumb.png`
- opcionálisan:
  - `project_robotics_thumb.png`

---

## 3. Project Detail

### Jelenlegi eltérések

- A mockupban valódi dashboard screenshotok vannak.
- A mostani preview sok helyen még illusztratív / generált.
- A thumbnail sor még nem ad valódi “gallery” érzést.
- Az oldalsó meta panelek jók, de az assetek miatt kevésbé hitelesek.

### Javítási checklist

- Projekt dashboard képernyőképek vagy mockup-képek
- Galéria képsor
- Fő preview compositing egységes asset alapra
- Külön project-specific layout hangulat

### Asset szükséges

- Igen, nagyon

### Szükséges assetek

- Projektként 3-4 kép:
  - `vendomatiq_01.png`
  - `vendomatiq_02.png`
  - `vendomatiq_03.png`
  - `vendomatiq_04.png`
- ugyanez a többi projekthez:
  - `zenia_01.png`
  - `zenia_02.png`
  - `bolygok_01.png`
  - stb.

---

## 4. About

### Jelenlegi eltérések

- A mockup személyesebb és prémiumabb portrait cardot használ.
- A jelenlegi profilkártya jó alap, de a fallback avatar kevésbé hiteles.
- A social/contact ikonok vizuálisan még lehetnek egységesebbek.

### Javítási checklist

- Valódi portré vagy nagyon jó generált portré
- Egységes social / contact ikonok
- Profilkártya vizuális sűrítése

### Asset szükséges

- Igen

### Szükséges assetek

- `profile_photo.png`
- opcionálisan saját social ikoncsomag SVG-ben

---

## 5. Experience

### Jelenlegi eltérések

- A mockup timeline-ja finomabb és elegánsabb.
- A mostani idővonal jó, de kevésbé editorial / visual design szintű.
- A kártyák tartalmi blokkja még lehetne kompozícióban feszesebb.

### Javítási checklist

- Timeline vonal és pont vizuális finomítása
- Lehetőség szerint kis szerepkör-ikonok vagy státuszjelölők
- Szövegsűrűség optimalizálása

### Asset szükséges

- Nem kötelező

### Opcionális asset

- Timeline glyph icon set

---

## 6. Contact

### Jelenlegi eltérések

- A mockupban van egy dekoratív hullámos / dotted / network háttérmotívum.
- A jelenlegi oldal tiszta, de vizuálisan egyszerűbb.
- A bal oldali információs panelben lehetne több brand-jelleg.

### Javítási checklist

- Dekoratív háttérmotívum
- Egységes ikonrendszer
- Bal oldali contact links card vizuális emelése

### Asset szükséges

- Igen, opcionális de erősen ajánlott

### Szükséges assetek

- `contact_wave_lines.svg`
- vagy `contact_wave_lines.png`

---

## 7. Architecture

### Jelenlegi eltérések

- A mockup inkább konkrét diagramot mutat.
- A jelenlegi oldal inkább magyarázó kártyákból áll.
- A flow jelenleg jó, de kevésbé “system map”.

### Javítási checklist

- Valódi architektúra-diagram asset
- Egységes layer dobozok
- Világos dependency-flow

### Asset szükséges

- Igen

### Szükséges assetek

- `architecture_system_diagram.svg`
- fallback:
  - `architecture_system_diagram.png`

---

## 8. Footer / Tech Stack

### Jelenlegi eltérések

- A mockupban valódi technológiai logók jelennek meg.
- A jelenlegi appban ez még nincs teljes mockup-közeli minőségben megoldva.

### Javítási checklist

- Tech logók egységes méretben
- Footer sor összeállítása
- Logók spacing és baseline összehangolása

### Asset szükséges

- Igen

### Szükséges assetek

- `logo_flutter.svg`
- `logo_dart.svg`
- `logo_spring_boot.svg`
- `logo_stm32.svg`
- `logo_cpp.svg`
- `logo_docker.svg`
- `logo_postgresql.svg`
- `logo_firebase.svg`
- `logo_git.svg`
- `logo_linux.svg`

Megjegyzés:
Ha hivatalos brand logókat szeretnél, ezeket inkább ne GPT-vel generáld, hanem hivatalos brand assetből vagy Simple Icons alapból használd.

---

## Asset Prioritás

### Első körben legfontosabb

1. Home hero rendszerdiagram
2. Projekt thumbnail és project detail gallery képek
3. Profilfotó
4. Architecture diagram
5. Contact dekor motif

### Második körben ajánlott

1. Saját ikon/glyph készlet
2. Footer/tech stack ikonrendszer
3. Social preview image

---

## Fájlnevezési Javaslat

### Mappák

- `assets/images/hero/`
- `assets/images/projects/`
- `assets/images/architecture/`
- `assets/images/contact/`
- `assets/profile/`
- `assets/icons/custom/`

### Példák

- `assets/images/hero/hero_system_diagram_desktop.png`
- `assets/images/projects/vendomatiq_01.png`
- `assets/images/architecture/architecture_system_diagram.svg`
- `assets/images/contact/contact_wave_lines.svg`
- `assets/profile/profile_photo.png`

---

## GPT Képgenerálási Instrukciók

## Általános prompt szabályok

Ezt add meg minden asset brief előtt vagy után:

`Create a premium dark-tech UI asset for a software/system engineer portfolio website. The visual style must match a cinematic navy-blue dashboard aesthetic with electric blue and cyan glow accents. Avoid stock illustration style, avoid cartoon style, avoid purple dominance, avoid warm colors, avoid generic startup vector look. Prefer precise, premium, minimal, high-contrast visuals.`

További globális megkötések:

- háttér lehetőleg transzparens, ha az asset külön rétegként kerül be
- ha nem transzparens, akkor sötét navy háttéren működjön
- nagyon éles, tiszta kontúrok
- “UI product render” érzés
- ne legyen szöveg, ha nem muszáj
- ne legyen watermark

---

## Prompt 1: Home Hero System Diagram

### Cél

A Home oldal jobb oldali nagy rendszerillusztrációja.

### Kimenet

- elsődlegesen: `PNG`
- ha a rendszer tudja: `SVG-style vector look`
- ajánlott méret: `1600x1400`

### Prompt

`Create a dark futuristic system architecture hero illustration for a software engineer portfolio website. Show a glowing central processing core or platform node in the middle, connected with thin electric-blue lines to three supporting modules: a top-left analytics/dashboard screen, a top-right backend/cloud UI card with blue chart bars, a bottom-right business logic module with circular data nodes, and a bottom-left embedded hardware module. The composition must feel balanced, premium, precise, and product-grade. Use a dark navy background, subtle grid feel, electric blue glow, cyan highlights, glassy panels, elegant thin outlines, and strong depth. Make it look like a high-end system design mockup, not a cartoon, not a game UI, not a generic abstract tech wallpaper. No text labels baked into the image unless requested separately.`

### Variáns kérés

`Generate 3 variants: one highly minimal, one medium detail, one rich dashboard detail.`

---

## Prompt 2: Project Thumbnail Images

### Cél

A Projects lista kártyák borítóképei.

### Kimenet

- `PNG`
- ajánlott méret: `1200x800`

### VendomatIQ prompt

`Create a premium dark dashboard screenshot-style product cover image for a vending automation platform called VendomatIQ. Show a modern operations dashboard with machine status cards, telemetry, device health, backend orchestration, and embedded-to-cloud workflow hints. The UI should be sleek, dark navy, electric blue, cyan, and very polished. Make it look like a real SaaS control panel and embedded/cloud monitoring product. High contrast, crisp layout, no fake lorem ipsum blocks dominating the screen.`

### Zenia prompt

`Create a premium cross-platform product UI showcase image for a project called Zenia. The visual should present a modern responsive web and mobile interface with elegant cards, structured content, and a dark premium interface. It should feel product-quality, organized, clean, and highly maintainable. Use a dark navy system with cool blue highlights.`

### Bolygok prompt

`Create a premium educational mobile app showcase image for a space-themed interactive application called Bolygok. Show elegant dark UI panels, planetary educational content, orbit-inspired visualization, and polished mobile-first cards. The style should still fit a premium dark tech portfolio and not become childish.`

---

## Prompt 3: Project Detail Gallery Images

### Cél

Project detail oldali galériaképek.

### Kimenet

- `PNG`
- ajánlott méret: `1600x900`

### Prompt sablon

`Create a high-end product detail screenshot for a dark premium software platform. Show one focused dashboard view with realistic panels, widgets, metrics, and strong visual hierarchy. The image should feel like part of the same product family as other screenshots. Use navy background, electric blue highlights, cyan accents, subtle glows, and glass-like panels. Avoid generic stock dashboard patterns; it should feel specific and intentional.`

Kérd projekt-specifikusan:

- admin dashboard nézet
- analytics nézet
- device monitoring nézet
- detail screen nézet

---

## Prompt 4: Architecture Diagram

### Cél

Az Architecture oldal fő vizuálja.

### Kimenet

- elsődleges: `SVG`
- fallback: `PNG 1600x1000`

### Prompt

`Create a clean, premium system architecture diagram for a software engineer portfolio. The diagram should show layered architecture with presentation layer, use cases, repository, engine/service, data source, router, theme, constants, and shared utilities. It should look like a modern dark technical diagram with thin neon-blue outlines, subtle cyan highlights, labeled nodes, elegant connector lines, and a cinematic navy background. It must be easy to read, balanced, and polished, like a presentation-ready engineering architecture visual.`

Megjegyzés:
Ha a GPT nem tud valóban tiszta SVG-t adni, akkor ezt érdemes később kézzel SVG-vé építeni a generált PNG alapján.

---

## Prompt 5: Contact Decorative Background

### Cél

A Contact oldal dekor eleme.

### Kimenet

- elsődleges: `SVG`
- fallback: `PNG` transzparens háttérrel

### Prompt

`Create a subtle decorative wave-line or dotted network ornament for a dark premium contact page. Use thin curved electric-blue lines, small glowing nodes, and a clean minimal composition. The artwork should feel elegant and technical, not noisy, not abstract art, and should work as a supporting UI decoration on a dark navy background.`

---

## Prompt 6: Profile Portrait

### Cél

About oldal profilkép.

### Kimenet

- `PNG`
- ajánlott méret: `1024x1024`

### Prompt

`Create a realistic professional portrait photo of a software and system engineer for a premium dark portfolio website. The portrait should feel confident, approachable, technical, modern, and polished. Neutral expression, clean studio-like lighting, dark or neutral background, strong face clarity, no exaggerated cinematic drama, no cartoon look, no AI fantasy styling.`

Megjegyzés:
Ha valódi portré helyett generált kép készül, azt érdemes külön jelezni, és lehetőleg konzisztensen használni.

---

## Prompt 7: Social Preview Image

### Cél

Megosztási kép `Open Graph / Twitter` célra.

### Kimenet

- `PNG`
- méret: `1200x630`

### Prompt

`Create a premium social preview banner for a software and system engineer portfolio. Use a cinematic dark navy interface style, a central glowing system diagram motif, subtle UI panels, and elegant electric-blue highlights. The composition should be horizontal, clean, highly readable, and suitable for Open Graph and Twitter sharing. Leave safe space for title text overlay if needed.`

---

## Amit nem érdemes GPT-vel generálni

- hivatalos tech brand logók
- GitHub, LinkedIn, email, location ismert ikonok
- túl pontos UI screenshotok, ha később valódi termékképek lesznek

Ezekhez jobb:

- hivatalos brand kit
- Simple Icons
- Material Symbols
- kézzel szerkesztett SVG

---

## Ajánlott Következő Lépés

1. Először generáljuk le a `Home hero system diagram` assetet.
2. Utána a `VendomatIQ`, `Zenia`, `Bolygok` projekt borítókat.
3. Harmadik körben az `architecture_system_diagram` és a `contact_wave_lines`.
4. Végül a profilkép és az OG preview.

Ez adja a legnagyobb vizuális ugrást a mockuphoz képest.
