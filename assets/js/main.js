/* ═══════════════════════════════════════════════════════════════════════════
   NURUK — comportamentul filei de registru
   Regula: pagina este completă și lizibilă fără JS. Tot ce urmează adaugă
   mișcare peste o stare deja vizibilă, și se retrage la prefers-reduced-motion.
   ═════════════════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const OPEN_HOUR = 9;
  const CLOSE_HOUR = 18;

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ── Registrul: data, ceasul, starea reală a tejghelei ─────────────────── */
  const LUNI = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
                "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    const now = new Date();
    const h = now.getHours(), m = now.getMinutes();
    const open = h >= OPEN_HOUR && h < CLOSE_HOUR;

    const dateEl = $("[data-today]");
    if (dateEl) dateEl.textContent = `${pad(now.getDate())} ${LUNI[now.getMonth()]} ${now.getFullYear()}`;

    const clockEl = $("[data-clock]");
    if (clockEl) clockEl.textContent = `${pad(h)}:${pad(m)}`;

    const stateEl = $("[data-open-state]");
    if (stateEl) {
      stateEl.textContent = open
        ? `Deschis până la ${CLOSE_HOUR}:00`
        : (h < OPEN_HOUR ? `Închis. Deschidem la 0${OPEN_HOUR}:00` : "Închis. Revenim mâine la 09:00");
    }

    $$("[data-open-label]").forEach(el => {
      el.textContent = open ? `Deschis acum · până la ${CLOSE_HOUR}:00` : "Program 09–18";
    });
    $$("[data-open-dot]").forEach(el => {
      el.setAttribute("data-state", open ? "open" : "closed");
    });

    const stamp = $("[data-year]");
    if (stamp) stamp.textContent = `Nuruk · Constanța · ${now.getFullYear()}`;

    positionNowMarker(now);
  }

  /* ── Linia zilei: marcajul „acum” interpolat între coloanele reale ─────── */
  function positionNowMarker(now) {
    const marker = $("[data-now-marker]");
    const strip  = $(".strip");
    if (!marker || !strip) return;
    if (window.innerWidth < 992) { marker.hidden = true; return; }

    const steps = $$(".strip__steps li");
    if (!steps.length) return;

    const hours = steps.map(li => Number(li.dataset.hour));
    const decimal = now.getHours() + now.getMinutes() / 60;
    const stripBox = strip.getBoundingClientRect();

    const centerOf = (li) => {
      const b = li.getBoundingClientRect();
      return b.left - stripBox.left + 1; // ancoră pe linia coloanei, nu pe mijloc
    };

    let x;
    if (decimal <= hours[0]) {
      x = centerOf(steps[0]);
    } else if (decimal >= hours[hours.length - 1]) {
      x = centerOf(steps[steps.length - 1]);
    } else {
      let i = 0;
      while (i < hours.length - 1 && decimal > hours[i + 1]) i++;
      const t = (decimal - hours[i]) / (hours[i + 1] - hours[i]);
      x = centerOf(steps[i]) + (centerOf(steps[i + 1]) - centerOf(steps[i])) * t;
    }

    // x este deja măsurat față de marginea .strip, care este containing block
    marker.hidden = false;
    marker.style.left = `${x}px`;
    const label = $("[data-now-label]", marker);
    if (label) label.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }

  tick();
  setInterval(tick, 30_000);
  window.addEventListener("resize", () => positionNowMarker(new Date()), { passive: true });

  /* ── Secvența ambientală din erou ──────────────────────────────────────── */
  function ambientSequence() {
    const frames = $$("[data-ambient]");
    if (frames.length < 2 || REDUCED) return;
    let i = 0;
    setInterval(() => {
      frames[i].removeAttribute("data-ambient-on");
      i = (i + 1) % frames.length;
      frames[i].setAttribute("data-ambient-on", "");
    }, 6400);
  }
  ambientSequence();

  /* ── Bara de sus ───────────────────────────────────────────────────────── */
  const topbar = $("#topbar");
  function updateTopbar() {
    if (topbar) topbar.dataset.solid = String(window.scrollY > 80);
  }
  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive: true });

  /* ── De aici încolo, totul cere GSAP ───────────────────────────────────── */
  function boot() {
    if (!window.gsap || !window.ScrollTrigger) return;
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    /* Momentum scrolling */
    if (window.Lenis && !REDUCED) {
      const lenis = new window.Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
      document.documentElement.classList.add("lenis");
      window.__lenis = lenis;

      $$('a[href^="#"]').forEach(a => {
        a.addEventListener("click", (e) => {
          const target = document.querySelector(a.getAttribute("href"));
          if (!target) return;
          e.preventDefault();
          lenis.scrollTo(target, { offset: -10, duration: 1.4 });
        });
      });
    }

    if (REDUCED) return;

    /* eroul */
    const heroBits = [".hero .ledgerhead", ".hero .clockblock", ".hero .display",
                      ".hero .lede", ".hero__actions"].map(s => $(s)).filter(Boolean);
    gsap.from(heroBits, {
      yPercent: 14, opacity: 0, duration: 1.25, ease: "expo.out", stagger: 0.09, delay: 0.15,
    });
    const heroPlate = $("[data-plate] .plate__frame");
    if (heroPlate) {
      gsap.from(heroPlate, {
        clipPath: "inset(0% 0% 100% 0%)", duration: 1.6, ease: "expo.out", delay: 0.3,
      });
    }

    /* O singură gramatică pentru tot ce este rând de registru — meniu, rânduri
       rezervate, tejghele: linia se scrie de sus în jos. Nimic altceva nu intră
       cu fade; restul paginii este pur și simplu acolo. */
    $$("[data-row], [data-counter]").forEach((row) => {
      gsap.from(row, {
        clipPath: "inset(0% 0% 100% 0%)", yPercent: 5, opacity: 0,
        duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: row, start: "top 90%", once: true },
      });
    });

    /* probele din galerie */
    const specimens = $$(".specimen");
    if (specimens.length) {
      gsap.from(specimens, {
        clipPath: "inset(0% 0% 100% 0%)", duration: 1.1, ease: "expo.out", stagger: 0.07,
        scrollTrigger: { trigger: ".specimens", start: "top 85%", once: true },
      });
    }

    /* ── Paralaxă de adâncime ────────────────────────────────────────────── */
    $$("[data-parallax]").forEach((img) => {
      const depth = parseFloat(img.dataset.parallax) || 0.1;
      gsap.to(img, {
        yPercent: depth * 100,
        ease: "none",
        scrollTrigger: { trigger: img.closest("figure") || img, start: "top bottom", end: "bottom top", scrub: 0.6 },
      });
    });

    /* ── Curba de fermentație: desenată de scroll ────────────────────────── */
    const path = $("[data-curve]");
    const dot  = $("[data-curve-dot]");
    const stops = $$(".curve__stops li");
    let activeStop = -1;

    /* proba lipită în filă urmează etapa activă */
    const proofImg = $("[data-proof-img]");
    const proofCap = $("[data-proof-cap]");
    function showProof(li) {
      if (!proofImg || !li) return;
      const src = li.dataset.proof;
      // ștampila de oră stă deja pe titlu; eticheta probei numește etapa
      const label = $(".stop__head h3", li)?.textContent?.trim();
      if (proofCap && label) proofCap.textContent = `Proba etapei · ${label}`;
      if (!src || proofImg.getAttribute("src") === src) return;
      gsap.to(proofImg, {
        opacity: 0, duration: 0.28, ease: "power2.in",
        onComplete: () => {
          proofImg.src = src;
          gsap.to(proofImg, { opacity: 1, duration: 0.5, ease: "power2.out" });
        },
      });
    }

    if (path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      ScrollTrigger.create({
        trigger: ".process",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(path, { strokeDashoffset: len * (1 - p) });

          if (dot) {
            const pt = path.getPointAtLength(len * p);
            gsap.set(dot, { attr: { cx: pt.x, cy: pt.y } });
          }

          if (stops.length) {
            const idx = Math.min(stops.length - 1, Math.floor(p * stops.length));
            if (idx !== activeStop) {
              activeStop = idx;
              stops.forEach((li, i) => li.toggleAttribute("data-active", i === idx));
              showProof(stops[idx]);
            }
          }
        },
      });
    }
    if (stops.length) { stops[0].setAttribute("data-active", ""); showProof(stops[0]); }

    /* ── Linia zilei: pașii se aprind pe măsură ce treci prin ea ─────────── */
    ScrollTrigger.create({
      trigger: ".daystrip",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        const steps = $$(".strip__steps li");
        const upTo = Math.round(self.progress * steps.length);
        steps.forEach((li, i) => li.toggleAttribute("data-lit", i < upTo));
      },
    });

    ScrollTrigger.refresh();
  }

  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot);
})();
