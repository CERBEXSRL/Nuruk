---
name: Nuruk
description: Registrul de fermentație — file de cerneală și hârtie, cifre în Courier, un singur supratipar auriu.
colors:
  ink: "#17110C"
  ink-raised: "#201811"
  paper: "#EDE2CE"
  gold: "#E5C987"
  gold-deep: "#C2A15A"
  gold-on-paper: "#7E5F1C"
  on-ink: "rgba(237, 226, 206, 0.94)"
  on-ink-mid: "rgba(237, 226, 206, 0.68)"
  on-ink-dim: "rgba(237, 226, 206, 0.56)"
  rule-ink: "rgba(237, 226, 206, 0.085)"
  on-paper: "rgba(23, 17, 12, 0.94)"
  on-paper-mid: "rgba(23, 17, 12, 0.70)"
  on-paper-dim: "rgba(23, 17, 12, 0.56)"
  rule-paper: "rgba(23, 17, 12, 0.10)"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(1.9rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  lede:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "clamp(1.05rem, 1rem + 0.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.62
  numeral:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "clamp(2.4rem, 5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.13em"
  hand:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  none: "0"
  focus: "1px"
  dot: "99px"
spacing:
  lead: "32px"
  gutter: "clamp(1.25rem, 4vw, 4.5rem)"
  leaf: "clamp(4.5rem, 9vw, 9rem)"
  measure: "82rem"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.6rem"
  button-gold-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  button-ghost:
    textColor: "{colors.on-ink-mid}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.6rem"
  button-ghost-hover:
    textColor: "{colors.gold}"
  topbar-cta:
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.9rem"
  placeholder-chip:
    textColor: "{colors.gold-on-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0.75rem"
  ledger-row:
    textColor: "{colors.on-paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
  counter-row:
    textColor: "{colors.on-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "clamp(1.6rem, 3vw, 2.4rem) 0"
  specimen-tag:
    backgroundColor: "rgba(23, 17, 12, 0.7)"
    textColor: "{colors.gold}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  now-marker:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
---

# Design System: Nuruk

## Overview

**Creative North Star: "Carnetul de maia"**

Sistemul este un registru de fermentație ținut de mână: file întregi de cerneală-espresso și hârtie caldă care se succed una după alta, liniate la 1px pe un ritm de 32px, cu o linie de margine care coboară pe toată înălțimea filei. Dovada este cifra, nu adjectivul — fiecare oră, temperatură, hidratare și durată este tipărită în Courier Prime, cu cifre tabulare, ca într-un caiet completat la 3 dimineața. Fotografia nu decorează: intră ca probă lipită cu bandă adezivă, ușor rotită, cu umbră proprie.

Densitatea este de registru, nu de broșură: rânduri late până la 82rem, separate de o singură linie de 1px, fără carduri, fără colțuri rotunde, fără casete. Ierarhia se face din contrastul dintre serif (Libre Caslon, în frază, niciodată în capitale) și mono (Courier Prime, în capitale spațiate, pentru tot ce e cap pre-tipărit sau cifră). Auriul de brand apare rar și cu scop: marcajul „acum", acțiunea principală, ștampila de oră, starea „deschis".

Respingerea confirmată de build: eroul de categorie — fotografie full-bleed cu titlu serif centrat deasupra. Pe desktop prima priveliște este fila de registru cu proba lipită în dreapta. Divergență față de intenția inițială, consemnată ca atare: pe ecrane sub 62rem fotografia trece efectiv în spatele filei erou, sub un voal de cerneală de 0.80–0.98, pentru ca prima priveliște mobilă să fie textură și nu tipografie singură — este singurul loc unde fotografia funcționează ca fundal, și rămâne limitat la eroul mobil.

**Key Characteristics:**
- File alternante cerneală/hârtie, niciodată amestecate în aceeași secțiune
- Liniatură de caiet la 1px, pas de 32px, estompată la capete
- Zero raze de colț: tot ce nu e punct sau bulină are colț viu
- Courier Prime pe fiecare cifră, cu `tabular-nums`
- Un singur supratipar auriu, într-o singură nuanță, la două valori
- Fotografia ca probă lipită cu bandă, cu rotație de ±0.9°–1.5°
- Date reale în pagină: ceas viu, dată de azi, stare deschis/închis derivată din 09–18

## Colors

Paleta este bicromă prin construcție — cerneală și hârtie — cu o singură culoare care are voie să strige.

### Primary
- **Auriu de registru** (`{colors.gold}`): supratiparul unic, preluat din logoul furnizat de client. Apare pe acțiunea principală, pe marcajul „acum" al liniei zilei, pe punctul de stare „deschis", pe ștampila de oră, pe curba de fermentație, pe eticheta probei și pe hover-ul linkurilor. Pe filă de cerneală se folosește la valoarea de brand; pe filă de hârtie aceeași nuanță coboară în valoare (`{colors.gold-on-paper}`) ca să treacă pragul de contrast. Este o singură culoare la două lumini, nu două accente.
- **Auriu adâncit** (`{colors.gold-deep}`): folosit exclusiv pentru cursorul de derulare și pentru pragul butonului auriu; nu apare niciodată în text.

### Neutral
- **Cerneală-espresso** (`{colors.ink}`): fundalul filei întunecate, culoarea textului pe auriu, `theme-color` al paginii.
- **Cerneală ridicată** (`{colors.ink-raised}`): fundalul casetei de probă din galerie, vizibil doar cât imaginea încă nu s-a încărcat.
- **Hârtie de registru** (`{colors.paper}`): fundalul filei deschise, peste care se așază textura de hârtie ca imagine reală (`assets/img/paper-texture.jpg`), nu ca gradient.
- **Text pe cerneală** (`{colors.on-ink}` / `{colors.on-ink-mid}` / `{colors.on-ink-dim}`): corp, secundar, etichetă. Aceleași trei trepte, invers, pe hârtie (`{colors.on-paper}` / `{colors.on-paper-mid}` / `{colors.on-paper-dim}`).
- **Liniatura** (`{colors.rule-ink}` / `{colors.rule-paper}`): singurul mijloc de separare între rânduri; nicio bordură nu este mai groasă de 1px.

### Named Rules
**The Single Overprint Rule.** Există un singur accent în tot sistemul, iar el trăiește ca variabilă scoped pe filă: `--accent` este auriul de brand pe `.leaf--ink` și aceeași nuanță coborâtă în valoare pe `.leaf--paper`. Componentele citesc întotdeauna `var(--accent)`, niciodată un hex direct, ca un singur supratipar să supraviețuiască ambelor fundaluri.

**The Alternating Leaf Rule.** Fundalul se schimbă numai la granița de secțiune, ca filă întreagă. Nu se așază niciodată un bloc de hârtie într-o filă de cerneală (sau invers) — nu există „card" de fundal opus.

**The Evidence-Not-Wallpaper Rule.** Fotografia intră lipită într-o ramă cu bandă și umbră. Singura excepție consemnată în build este eroul sub 62rem, unde imaginea devine fundalul filei sub voal de cerneală 0.80–0.98; nicio altă secțiune nu are voie să o repete.

## Typography

**Display Font:** Libre Caslon Display (fallback Georgia, serif)
**Body Font:** Libre Caslon Text (fallback Georgia, serif)
**Label/Mono Font:** Courier Prime (fallback ui-monospace, monospace)
**Hand Font:** Caveat (cursive)

**Character:** Un serif de tipar cald purtând fraza, o mașină de scris purtând fiecare cifră și fiecare cap pre-tipărit, și un scris de mână care apare doar pe marginea filei. Contrastul dintre cele trei este singura ornamentație a paginii.

### Hierarchy
- **Display** (400, `clamp(2.6rem, 6.4vw, 5.4rem)`, lh 0.98, ls -0.022em): titlul eroului, o singură dată pe pagină, cu `text-wrap: balance`.
- **Headline** (400, `clamp(1.9rem, 4vw, 3.25rem)`, lh 1.04): capetele de secțiune și numele tejghelelor (până la `clamp(1.6rem, 3.2vw, 2.4rem)`).
- **Title** (400, `clamp(1.35rem, 2.4vw, 1.8rem)`, lh 1.12): numele de rând din registrul de meniu, titlurile etapelor din curbă, sloturile rezervate din registrul de opinii.
- **Body** (400, `clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)`, lh 1.62): text curent; măsură limitată la 52–60ch pentru descrieri și 46ch pentru notele de secțiune.
- **Lede** (400, `clamp(1.05rem, 1rem + 0.3vw, 1.2rem)`, max 42ch): un singur paragraf, sub titlul eroului.
- **Numeral** (Courier Prime, `tabular-nums`, ls -0.01em; varianta mare `clamp(2.4rem, 5vw, 3.6rem)`, ls -0.03em): ceasul, orele, duratele, procentele, indexul rândurilor, telefoanele.
- **Label** (Courier Prime, 0.66–0.82rem, ls 0.06em–0.18em, uppercase): capete pre-tipărite, navigație, butoane, legende de coloană, etichete de probă, indiciul de derulare.
- **Hand** (Caveat, `clamp(1.35rem, 2.6vw, 1.9rem)`, max 26ch, rotit −1.4°/+1.2°): exclusiv însemnările de margine.

### Named Rules
**The Courier-On-Every-Number Rule.** Orice cifră vizibilă în pagină — oră, temperatură, durată, hidratare, index, număr de telefon — se tipărește în Courier Prime cu `tabular-nums`. Un număr în serif este o eroare de sistem.

**The Mono-Owns-The-Caps Rule.** Capitalele spațiate aparțin exclusiv monoului. Serif-ul apare doar în frază, cu tracking negativ; nu se scrie niciodată cu `text-transform: uppercase` și nu se deschide niciodată tracking-ul pe el. (Divergență consemnată: contractul de direcție prevedea capete în Caslon capitalizat; buildul le-a dat monoului, și buildul este norma.)

**The Margin-Hand Rule.** Caveat apare numai în `.marginalia`, ca observație lipită pe marginea filei, ușor rotită, sub 26ch. Nu intră niciodată în butoane, etichete, titluri sau text curent.

## Layout

Coloana este una singură: `max-width: 82rem`, centrată, cu gutieră fluidă `clamp(1.25rem, 4vw, 4.5rem)`. Fiecare filă respiră vertical cu `clamp(4.5rem, 9vw, 9rem)`. Ritmul de bază este liniatura de caiet: 32px, materializată ca `repeating-linear-gradient` de 1px, mascată la capete ca să nu atingă marginile filei, plus o linie de margine aurie fixă la `clamp(1rem, 3.2vw, 3.6rem)` de stânga.

Praguri reale: 48rem (registrul de meniu trece pe trei coloane 15rem / 1fr / 9rem și își arată legenda), 56rem (mozaicul galeriei trece la 4 coloane cu plasare explicită; rândurile de opinii și tejghele trec pe patru coloane), 62rem (eroul și fila de origine trec pe două coloane; sub acest prag linia zilei devine listă verticală, marcajul „acum" și proba orei dispar, navigația din bară se ascunde, iar textura de hârtie trece de la `100% 100%` la `auto 100%` ca fibra să nu se întindă în dungi verticale).

Două secțiuni sunt sticky-scrub: linia zilei (`min-height: 220vh`) și curba de fermentație (`min-height: 340vh`), fiecare cu un panou lipit la `100svh` care rămâne centrat cât timp derularea avansează starea. Pe mobil, eroul își pune proba fotografică drept fundal de filă și restul rămâne o coloană.

## Elevation & Depth

Sistemul este plat pentru tot ce e text. Nu există card ridicat, nu există umbră sub un rând, un buton fantomă sau un titlu. Adâncimea vine din trei surse materiale: liniatura care coboară sub conținut (`z-index: -1`), granulația fixă peste toată pagina (SVG `feTurbulence`, opacitate 0.5, `mix-blend-mode: overlay`) și umbra lungă și joasă de sub probele fotografice lipite. Bara de sus este singurul plan care se solidifică: peste 80px de derulare capătă fundal `rgba(23,17,12,0.94)` și `backdrop-filter: blur(14px) saturate(1.1)`.

### Shadow Vocabulary
- **Probă lipită** (`box-shadow: 0 30px 70px -34px rgba(0,0,0,0.95), 0 2px 6px -2px rgba(0,0,0,0.6)`): sub rama fotografiei pe filă de cerneală; pe hârtie coboară la `0 26px 60px -32px rgba(23,17,12,0.6)`.
- **Vinietă interioară** (`box-shadow: inset 0 0 60px rgba(23,17,12,0.45)`): pe `::after`-ul ramei, ca fotografia să se stingă în filă în loc să se termine cu muchie.
- **Bandă adezivă** (`drop-shadow(0 2px 3px rgba(0,0,0,0.45))`): bucata de bandă stă cu câțiva milimetri peste hârtie.
- **Puls de stare** (`box-shadow: 0 0 0 0 → 0 0 0 7px rgba(229,201,135,0.5→0)`): singurul halou din sistem, pe punctul „deschis acum".

### Named Rules
**The Plate-Only Shadow Rule.** Umbra este dovada că o fotografie a fost lipită fizic în filă. Suprafețele de text — rânduri, butoane, capete, celule — rămân plate. Dacă o umbră apare sub ceva care nu e hârtie fotografică, este o eroare.

## Shapes

Rază zero peste tot: file, rame de fotografie, butoane, chip-uri, etichete, casete — toate au colț viu. Singurele forme curbe sunt cercurile: punctele de stare de 6px, buline de pas de 5–7px și cursorul de derulare, toate la `border-radius: 99px`. Inelul de focus este singurul care primește 1px, ca să nu taie muchia glifei.

Bordurile sunt întotdeauna de 1px și au trei registre: continuă pentru separatoarele de registru, punctată (`dashed`) pentru tot ce este rezervat sau neconfirmat, și verticală de margine (o pereche 1px/1px la 5px distanță) pentru linia roșie de caiet, aici aurie.

Rotația este a materiei, nu a interfeței: rama fotografiei stă la −1.1°, +0.9° sau +1.5°, banda la ±45°, însemnarea de mână la −1.4° sau +1.2°. Nimic altceva nu se rotește.

## Components

### Buttons
- **Shape:** colț viu (0), fără rază, `display: inline-flex`, gap 0.6rem.
- **Primary (auriu):** fundal auriu de brand pe text cerneală, Courier Prime 0.82rem, uppercase, ls 0.07em, padding `0.95rem 1.6rem`, cu umbră ambientală joasă.
- **Hover / Focus:** ridicare de 2px pe `cubic-bezier(0.16, 1, 0.3, 1)` în 0.45s, umbra ambientală se adâncește. Focus vizibil: contur auriu de 2px, offset 3px.
- **Ghost:** fără fundal, text secundar pe cerneală, subliniat cu o linie de 1px din liniatură; la hover linia și textul devin aurii.
- **CTA din bară:** contur de 1px `rgba(229,201,135,0.32)`, text auriu, 0.76rem; la hover conturul se aprinde și fundalul primește `rgba(229,201,135,0.08)`. Poartă în stânga punctul de stare, care pulsează doar când tejgheaua este deschisă.

### Chips
- **Style:** contur punctat de 1px în `var(--accent-line)`, fără fundal, text în `var(--accent)`, Courier Prime 0.7rem, padding `0.4rem 0.75rem`, precedat de un romb `◇` ca marcaj de listă.
- **State:** un singur rol — semnalarea conținutului neconfirmat („Listă-model, de înlocuit", „Rezervat. Nu inventăm recenzii"). Nu are variantă selectată; nu se folosește niciodată ca filtru sau ca etichetă decorativă.

### Cards / Containers
Nu există. Conținutul se organizează în rânduri de registru separate de o linie de 1px, nu în casete. Singurele containere cu fundal propriu sunt eticheta de trimitere (`rgba(23,17,12,0.86)` + blur 10px, cu bară aurie de 1px pe stânga) și eticheta de probă din galerie (`rgba(23,17,12,0.72)` + blur 6px).

### Navigation
Bară fixă, transparentă la vârf de pagină cu gradient de cerneală spre transparent; peste 80px derulare devine opacă cu blur. Linkurile sunt Courier Prime 0.78rem, uppercase, ls 0.09em, în ton secundar; la hover textul urcă la ton plin și o linie aurie de 1px se desenează de la stânga la dreapta în 0.45s. Sub 62rem navigația dispare complet și rămân marca și CTA-ul de program — telefonul păstrează doar starea și acțiunea.

### Rândul de registru (signature)
Gramatica structurală a paginii, folosită de meniu, de rândurile rezervate și de tejghele: grilă de coloane fixe (`15rem 1fr 9rem` la meniu, `4rem 1fr 1fr 8–12rem` la opinii și tejghele), aliniere pe linia de bază, separator de 1px, hover care ridică fundalul cu 3–3.5% opacitate. Toate rândurile intră la derulare cu aceeași mișcare unică: `clip-path: inset(0% 0% 100% 0%)` spre plin, `expo.out`, 1s, o singură dată — linia se scrie de sus în jos. Nimic altceva din pagină nu intră cu fade.

### Rândul rezervat (signature)
Varianta „neconsemnată" a rândului de registru: separator punctat în loc de continuu, titlu-slot în serif la ton secundar (nu la ton plin), coloană de meta în Courier și o coloană de stare `rând liber` în culoarea accentului. Ține locul recenziilor, presei și distincțiilor fără să le fabrice. Perechea lui la nivel de detaliu este adnotarea `de confirmat`: linie proprie sub valoare, Courier 0.68rem, în culoarea accentului, precedată de `◇`.

### Proba lipită (signature)
Fotografie într-o ramă cu `overflow: hidden`, rotită cu sub 2°, cu umbră lungă și vinietă interioară, prinsă cu două bucăți scurte de bandă (asset PNG cu margini rupte, `clamp(58px, 7vw, 98px)`, rotite la ±45°, prinse pe colț la −12px/−18px, opacitate 0.82). Fotografia primește o gradare constantă: `saturate(0.72–0.92) contrast(1.04–1.07)`. Banda nu se întinde niciodată ca fâșie lată peste imagine. Proba din secțiunea de proces se schimbă odată cu etapa activă a curbei, cu un fade de 0.28s ieșire / 0.5s intrare.

### Marcajul „acum" (signature)
Un fir cu plumb care cade dintr-o ștampilă aurie: eticheta Courier 0.74rem pe fundal auriu, iar sub ea o linie de 1px de 78–108px care se stinge în transparent. Poziția este interpolată între orele reale ale liniei zilei din ceasul sistemului, cu tranziție de 1s. Se ascunde sub 62rem, unde linia zilei devine listă verticală.

### Galeria de probe
Mozaic de 4 coloane cu plasare explicită pe grilă (fără auto-placement), 2 coloane sub 56rem. Imaginile stau la o gradare fixă `saturate(0.85) contrast(1.05) brightness(0.92)` și **nu reacționează la cursor**: nicio gradare, nicio scalare, niciun efect. Eticheta probei (index + nume, Courier uppercase, auriu pe cerneală translucidă cu blur) este permanent vizibilă — conținut, nu răsplată pentru hover.

Decizia este explicită și obligatorie: galeria a purtat o pânză WebGL cu distorsiune de căldură, iar clientul a cerut-o scoasă. Nu se reintroduce niciun efect de hover pe probe fără cerere directă.

## Do's and Don'ts

### Do:
- **Do** folosește `var(--accent)` pentru orice element auriu; culoarea se rezolvă singură pe filă de cerneală și pe filă de hârtie.
- **Do** tipărește fiecare cifră în Courier Prime cu `tabular-nums`.
- **Do** păstrează liniatura la pasul de 32px și toate separatoarele la 1px.
- **Do** intră cu rândurile noi prin `clip-path: inset(0% 0% 100% 0%)` + `expo.out`, ca linia să se scrie de sus în jos.
- **Do** lipește orice fotografie nouă în ramă, cu rotație sub 2° și două bucăți scurte de bandă prinse pe colț.
- **Do** marchează conținutul nefurnizat de client cu chip punctat sau adnotare `de confirmat` în loc să-l inventezi.
- **Do** scrie tot textul în română, inclusiv etichetele și stările.
- **Do** păstrează programul 09:00–18:00 și cele trei adrese din Constanța ca fapte, oriunde apar.
- **Do** lasă pagina lizibilă fără JS și retrage toate animațiile la `prefers-reduced-motion`.

### Don't:
- **Don't** introduce o a doua culoare de accent; auriul are voie la două valori, nu la un partener.
- **Don't** pune rază de colț pe nimic în afară de puncte, buline și cursorul de derulare.
- **Don't** capitaliza sau deschide tracking-ul pe Libre Caslon; capitalele spațiate sunt ale monoului.
- **Don't** folosi Caveat în afara însemnărilor de margine.
- **Don't** pune umbră sub text, rânduri sau butoane fantomă — umbra aparține doar probelor fotografice.
- **Don't** folosi fotografia ca fundal decorativ; singura excepție este eroul sub 62rem, sub voalul de cerneală.
- **Don't** transforma un rând de registru în card cu fundal propriu, chenar sau colț rotunjit.
- **Don't** amesteca hârtia și cerneala în aceeași filă.
- **Don't** întinde banda adezivă ca fâșie lată peste o fotografie.
- **Don't** folosi glife text în locul unei pictograme reale: `◇` este marcaj de listă, iar orice pictogramă adevărată se desenează inline în SVG (ca linia de trimitere a etichetei).
