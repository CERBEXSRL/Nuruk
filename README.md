# Nuruk — landing page

Patiserie artizanală și cafea de specialitate, Constanța.
Pagină unică, statică, fără build step.

## Rulare

Orice server static servind folderul `nuruk/`:

```bash
npx --yes serve nuruk -l 4321
```

Apoi `http://localhost:4321`. Pentru publicare, urcă folderul `nuruk/` ca atare
(Netlify, Vercel, cPanel, orice hosting simplu). Nu există pas de compilare.

## Structura

```
nuruk/
├─ index.html                  contractul de direcție e primul comentariu din <body>
├─ assets/
│  ├─ css/style.css            jetoane, sistemul de filă, toate secțiunile
│  ├─ js/main.js               ceas real, Lenis, GSAP ScrollTrigger, dezvăluiri, curba
│  ├─ brand/                   logo (alb + variantă cerneală), favicon
│  └─ img/                     fotografie
```

Bibliotecile (GSAP, ScrollTrigger, Lenis) se încarcă din jsDelivr. Dacă vrei
totul local, descarcă-le în `assets/js/vendor/` și schimbă cele trei `src`-uri
din subsolul `index.html`.

**Galeria nu are efect de hover.** A avut o pânză WebGL cu distorsiune de
căldură; a fost scoasă la cererea clientului, împreună cu dependența de
Three.js. Fotografiile stau nemișcate, iar etichetele lor sunt mereu vizibile.
Nu reintroduce efecte pe probe fără cerere directă.

## Ce e real și ce trebuie înlocuit

**Real, confirmat de client — nu atinge fără motiv:**

| | |
|---|---|
| Mircea cel Bătrân | Bd. Mircea cel Bătrân 139 · 0770 711 329 |
| Centru Vechi | Str. Tomis 43 · 0749 342 496 |
| Boema | Str. Tomis 334 · 0748 280 849 |
| Program | zilnic 09:00–18:00 (constanta `OPEN_HOUR` / `CLOSE_HOUR` în `main.js`) |
| Instagram | @nurukconstanta |
| Logo | furnizat de client; auriul `#E5C987` e singura culoare de accent |

**De înlocuit — marcat vizibil în pagină:**

1. **Meniul** (`#meniu`) — cele opt rânduri sunt o listă-model, semnalată cu un
   jeton punctat în capul secțiunii. Înlocuiește denumirile, descrierile și
   coloana de cifre cu meniul real. Coloana a treia e gândită pentru o măsură
   de proces (ore de dospire, foi, secunde de extracție), nu pentru preț; dacă
   vrei prețuri acolo, spune-mi și schimb formatul rândului.
2. **Originea** (`#origine`) — două rânduri poartă `de confirmat`: moara și
   soiul de făină, prăjitoria și originea boabelor. Șterge marcajul `<span class="tbc">`
   după ce completezi.
3. **Registrul de opinii** (`#opinii`) — intenționat gol. Nu am inventat
   recenzii, apariții în presă sau distincții. Trimite surse reale (nume, dată,
   publicație, link) și le trec în registru.
4. **Fotografia** — tot ce e în `assets/img/` este stock documentar de pe
   Unsplash, ales și verificat, descărcat local. Se înlocuiește cu fotografie
   Nuruk. Cadrele cerute: un macro de miez în portret 5:6 pentru erou
   (`crumb-macro-crop.jpg`), o secțiune de croissant, mâini la blat, spațiul
   celor trei tejghele, o extracție de espresso.
5. **Linia zilei** (`#ziua`) și **curba de fermentație** (`#proces`) — cele două
   descriu deliberat lucruri diferite și trebuie să rămână coerente între ele:
   curba este ciclul complet al unei pâini, 31 de ore întinse peste două zile
   (fiecare etapă e ștampilată „Ziua 1” sau „Ziua 2”), iar linia zilei este doar
   dimineața de coacere, ziua a doua. Dacă schimbi orele într-una, corectează-le
   și în cealaltă. Atributul `data-hour` de pe fiecare `<li>` poziționează
   marcajul „acum”, iar `data-proof` alege fotografia-probă a etapei.

## Cum funcționează lucrurile mai puțin evidente

- **Starea tejghelei** din erou și din bara de sus se calculează din ceasul
  vizitatorului față de programul 09–18. Nu e decorativă: la 22:00 scrie
  „Închis. Revenim mâine la 09:00”.
- **Marcajul auriu** de pe linia zilei se așază interpolat între coloanele
  reale, nu proporțional cu timpul, ca să cadă exact între ore.
- **Curba de fermentație** e desenată de scroll (`strokeDashoffset`), iar
  punctul auriu urmărește traseul cu `getPointAtLength`.
- **`prefers-reduced-motion`** oprește Lenis și toate animațiile GSAP, iar
  etapele curbei devin o listă normală. Pagina rămâne completă și fără JS.

## Licența fotografiilor

Unsplash License (folosire comercială permisă, fără atribuire obligatorie).
Fișierele au fost descărcate din `images.unsplash.com`; `crumb-macro-crop.jpg`
este un decupaj făcut local din `crumb-macro.jpg`.
