// Softsol — interacciones y render dinámico
(function () {
  const { experienciasLaborales, habilidades, proyectos, faqs, proceso, garantias, buckets, resultados, testimonios } = window.SOFTSOL_DATA;

  // Helper: genera enlace de WhatsApp con mensaje pre-rellenado
  const WA_NUMBER = "573155935407";
  const waLink = (texto) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`;

  // ---------- 1. Hero: titular rotativo ----------
  const frases = [
    "Te las automatizamos.",
    "Recuperamos tu tiempo.",
    "Multiplicamos tu facturación.",
    "Escalamos tu operación.",
    "Eliminamos el trabajo manual."
  ];
  const rotator = document.getElementById("rotator");
  let idx = 0;
  if (rotator) {
    rotator.textContent = frases[0];
    setInterval(() => {
      rotator.classList.add("swap");
      setTimeout(() => {
        idx = (idx + 1) % frases.length;
        rotator.textContent = frases[idx];
        rotator.classList.remove("swap");
      }, 400);
    }, 3200);
  }

  // ---------- 1b. Productos · 4 buckets de beneficio ----------
  const bucketsGrid = document.getElementById("buckets-grid");
  if (bucketsGrid && buckets) {
    bucketsGrid.innerHTML = buckets.map(b => {
      const casosHTML = b.casos.map(caseId => {
        const p = proyectos.find(x => x.id === caseId);
        if (!p) return "";
        return `<button type="button" class="case-pill" data-project-id="${p.id}">
          <i class="bi bi-play-circle"></i> ${p.nombre}
        </button>`;
      }).join("");

      const waText = `Hola Oscar, vi la línea "${b.titulo}" en Softsol y quiero saber cómo aplicarla a mi negocio.`;
      return `
        <article class="bucket-card reveal" data-filter-target="${b.filterKey}">
          <div class="bucket-bg bg-gradient-to-br ${b.accent}"></div>
          <div class="bucket-inner">
            <div class="bucket-head">
              <div class="bucket-icon"><i class="bi ${b.icon}"></i></div>
              <h3>${b.titulo}</h3>
            </div>
            <p class="bucket-pitch">${b.pitch}</p>
            <ul class="bucket-benefits">
              ${b.beneficios.map(bf => `<li><i class="bi bi-check2"></i>${bf}</li>`).join("")}
            </ul>
            <div class="bucket-cases">
              <span class="bucket-cases-label">Casos funcionando hoy:</span>
              <div class="bucket-cases-list">${casosHTML}</div>
            </div>
            <a href="${waLink(waText)}" target="_blank" rel="noopener" class="bucket-cta">
              <i class="bi bi-whatsapp"></i> Lo quiero para mi negocio <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </article>
      `;
    }).join("");

    // Click en case-pill → abre modal de ese caso
    bucketsGrid.querySelectorAll(".case-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectModal(pill.dataset.projectId);
      });
    });
  }

  // ---------- 1d. Testimonios · voces de uso ----------
  const testimoniosGrid = document.getElementById("testimonios-grid");
  if (testimoniosGrid && testimonios) {
    testimoniosGrid.innerHTML = testimonios.map(t => `
      <article class="testimonial-card reveal" tabindex="0" role="button" aria-label="Ver caso ${t.caso}" data-project-id="${t.caso}">
        <blockquote>${t.cita}</blockquote>
        <div class="testimonial-footer">
          <div class="testimonial-attr">
            <span class="testimonial-rol">${t.rol}</span>
            <span class="testimonial-sector">${t.sector}</span>
          </div>
          <span class="testimonial-link">Ver caso <i class="bi bi-arrow-right"></i></span>
        </div>
      </article>
    `).join("");

    testimoniosGrid.querySelectorAll(".testimonial-card").forEach(card => {
      const open = () => openProjectModal(card.dataset.projectId);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
  }

  // ---------- 1c. Resultados agregados ----------
  const resultadosGrid = document.getElementById("resultados-grid");
  if (resultadosGrid && resultados) {
    resultadosGrid.innerHTML = resultados.map(r => `
      <div class="result-kpi reveal">
        <div class="kpi-number">${r.k}</div>
        <div class="kpi-label">${r.label}</div>
        <div class="kpi-sub">${r.sub}</div>
      </div>
    `).join("");
  }

  // ---------- 2. Proyectos (Bento Showroom) ----------
  const bento = document.getElementById("bento");
  if (bento) {
    bento.innerHTML = proyectos.map(p => `
      <article class="project-card reveal ${p.featured ? 'featured' : ''}" tabindex="0" role="button" aria-label="Ver resumen del proyecto ${p.nombre}" data-project-id="${p.id}" data-filter-key="${p.filter || 'otros'}">
        <div class="glow"></div>
        <div class="absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80"></div>
        <div class="overlay"></div>
        ${p.nuevo ? `<span class="nuevo-badge"><i class="bi bi-stars"></i> Nuevo · 2025</span>` : ""}
        <span class="open-hint"><i class="bi bi-arrow-up-right"></i> Ver resumen</span>
        <div class="relative h-full flex flex-col justify-between p-6">
          <div class="flex items-start justify-between">
            <span class="text-xs uppercase tracking-widest text-white/80">${p.categoria}</span>
            <span class="text-xs text-white/70">${p.ano}</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-white drop-shadow">${p.nombre}</h3>
            <p class="mt-2 text-sm text-white/85 max-w-prose">${p.descripcion}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              ${p.stack.map(s => `<span class="text-[.7rem] uppercase tracking-wider bg-black/40 border border-white/15 rounded-full px-2.5 py-1">${s}</span>`).join("")}
            </div>
            <div class="stats mt-4 flex gap-5">
              ${p.stats.map(s => `
                <div>
                  <div class="text-2xl font-extrabold text-white">${s.k}</div>
                  <div class="text-[.7rem] uppercase tracking-widest text-white/70">${s.v}</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </article>
    `).join("");

    // --- Click/teclado → abrir modal ---
    bento.querySelectorAll(".project-card").forEach(card => {
      const open = () => openProjectModal(card.dataset.projectId);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });

    // --- Filter pills ---
    const filterBar = document.getElementById("filter-bar");
    const emptyState = document.getElementById("filter-empty");

    const categorias = [
      { key: "all",      label: "Todos",                  icon: "bi-grid-3x3-gap" },
      { key: "whatsapp", label: "Agentes WhatsApp",       icon: "bi-whatsapp" },
      { key: "ops",      label: "Automatización interna", icon: "bi-gear-wide-connected" },
      { key: "web",      label: "Plataformas web",        icon: "bi-globe" }
    ];

    if (filterBar) {
      filterBar.innerHTML = categorias.map(c => {
        const count = c.key === "all"
          ? proyectos.length
          : proyectos.filter(p => p.filter === c.key).length;
        return `
          <button class="filter-pill ${c.key === 'all' ? 'active' : ''}" data-filter="${c.key}" type="button">
            <i class="bi ${c.icon}"></i>
            <span>${c.label}</span>
            <span class="count">${count}</span>
          </button>
        `;
      }).join("");

      filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-pill");
        if (!btn) return;
        const key = btn.dataset.filter;

        filterBar.querySelectorAll(".filter-pill").forEach(p => p.classList.toggle("active", p === btn));

        let visible = 0;
        bento.querySelectorAll(".project-card").forEach(card => {
          const cardFilter = card.dataset.filterKey;
          const match = (key === "all") || (cardFilter === key);
          card.classList.toggle("is-hidden", !match);
          if (match) {
            visible++;
            card.classList.remove("filter-in");
            // force reflow to restart animation
            void card.offsetWidth;
            card.classList.add("filter-in");
          }
        });

        if (emptyState) emptyState.classList.toggle("hidden", visible > 0);
      });
    }
  }

  // ---------- 2b. Modal de resumen del proyecto ----------
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  let lastFocused = null;

  function openProjectModal(id) {
    const p = proyectos.find(x => x.id === id);
    if (!p || !modal || !modalBody) return;

    const waText = encodeURIComponent(
      `Hola Oscar, vi el caso "${p.nombre}" en Softsol y quiero agendar una demo para mi negocio.`
    );
    const waLink = `https://wa.me/573155935407?text=${waText}`;
    const mailLink = `mailto:oscar.diazpt@gmail.com?subject=${encodeURIComponent('Demo de ' + p.nombre)}&body=${waText}`;

    modalBody.innerHTML = `
      <div class="modal-hero bg-gradient-to-br ${p.accent}">
        ${p.nuevo ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 mb-2 rounded-full text-[.7rem] font-bold uppercase tracking-[.18em] text-slate-900 bg-gradient-to-r from-yellow-300 to-cyan-300 shadow"><i class="bi bi-stars"></i> Nuevo · 2025</span><br/>` : ""}
        <span class="text-xs uppercase tracking-[.3em] text-white/90">${p.categoria} · ${p.ano}</span>
        <h3 id="modal-title" class="mt-2 text-3xl md:text-4xl font-extrabold text-white leading-tight">${p.nombre}</h3>
        <p class="mt-3 text-lg text-white/90 max-w-2xl">${p.resumen.headline}</p>
        <div class="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${p.stats.map(s => `
            <div class="bg-black/35 border border-white/15 rounded-xl px-3 py-2">
              <div class="text-xl font-extrabold text-white">${s.k}</div>
              <div class="text-[.65rem] uppercase tracking-widest text-white/80">${s.v}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="modal-body-pad">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-xs uppercase tracking-[.25em] text-rose-300">El problema</h4>
            <p class="mt-2 text-slate-300 leading-relaxed">${p.resumen.problema}</p>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-[.25em] text-cyan-300">La solución</h4>
            <p class="mt-2 text-slate-300 leading-relaxed">${p.resumen.solucion}</p>
          </div>
        </div>

        <h4 class="mt-8 text-xs uppercase tracking-[.25em] text-violet-300">Resultados medibles</h4>
        <ul class="mt-3 grid sm:grid-cols-2 gap-2.5">
          ${p.resumen.resultados.map(r => `
            <li class="result-item text-sm text-slate-200">
              <i class="bi bi-check-circle-fill"></i><span>${r}</span>
            </li>
          `).join("")}
        </ul>

        <div class="mt-6 flex flex-wrap gap-2.5">
          <span class="meta-chip"><i class="bi bi-clock-history"></i>${p.resumen.duracion}</span>
          <span class="meta-chip"><i class="bi bi-bullseye"></i>Ideal para: ${p.resumen.ideal}</span>
        </div>

        <h4 class="mt-8 text-xs uppercase tracking-[.25em] text-slate-400">Stack utilizado</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          ${p.stack.map(s => `<span class="tech-badge"><i class="bi bi-braces text-cyan-300"></i>${s}</span>`).join("")}
        </div>

        <div class="mt-10 p-5 rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h5 class="text-lg font-bold text-white">¿Quieres una demo adaptada a tu negocio?</h5>
              <p class="text-sm text-slate-300 mt-1">Agenda 20 minutos. Te muestro este sistema funcionando y cómo lo ajustaríamos a tu caso.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="${waLink}" target="_blank" rel="noopener" class="btn-neon text-sm">
                <i class="bi bi-whatsapp"></i> Contactar para demo
              </a>
              <a href="${mailLink}" class="btn-ghost text-sm">
                <i class="bi bi-envelope"></i> Correo
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    lastFocused = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    // Enfocar el botón de cierre para accesibilidad
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
    // Reset scroll del panel
    const panel = modal.querySelector(".modal-panel");
    if (panel) panel.scrollTop = 0;
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) closeProjectModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeProjectModal();
    });
  }

  // ---------- 3. Timeline de experiencia ----------
  const tl = document.getElementById("timeline");
  if (tl) {
    tl.innerHTML = experienciasLaborales.map(e => `
      <div class="tl-item reveal">
        <div class="flex flex-wrap items-center gap-3">
          <h4 class="text-lg font-semibold text-white">${e.cargo}</h4>
          <span class="text-[.7rem] uppercase tracking-widest px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">${e.tag}</span>
        </div>
        <p class="text-xs text-slate-400 mt-1">${e.fechas}</p>
        <p class="text-sm text-slate-300 mt-2 leading-relaxed max-w-3xl">${e.funcion}</p>
      </div>
    `).join("");
  }

  // ---------- 4. Tech badges ----------
  const stack = document.getElementById("stack");
  if (stack) {
    stack.innerHTML = habilidades.map(h => `
      <span class="tech-badge" style="--c:${h.color}">
        <i class="bi ${h.icon}" style="color:${h.color}"></i>${h.habilidad}
      </span>
    `).join("");
  }

  // ---------- 5. Proceso ----------
  const procesoEl = document.getElementById("proceso");
  if (procesoEl) {
    procesoEl.innerHTML = proceso.map(p => `
      <div class="step-card reveal">
        <div class="flex items-start justify-between">
          <span class="num">${p.paso}</span>
          <i class="bi ${p.icon} text-2xl text-cyan-300"></i>
        </div>
        <h4 class="mt-3 text-lg font-semibold text-white">${p.titulo}</h4>
        <p class="mt-2 text-sm text-slate-300 leading-relaxed">${p.texto}</p>
      </div>
    `).join("");
  }

  // ---------- 6. Por qué Softsol (antes Garantías) ----------
  const garEl = document.getElementById("garantias");
  if (garEl) {
    garEl.innerHTML = garantias.map(g => `
      <div class="why-card reveal">
        <div class="why-icon"><i class="bi ${g.icon}"></i></div>
        <h5>${g.titulo}</h5>
        <p>${g.texto}</p>
      </div>
    `).join("");
  }

  // ---------- 7. FAQ ----------
  const faqEl = document.getElementById("faq");
  if (faqEl) {
    faqEl.innerHTML = faqs.map(f => `
      <details class="faq-item reveal">
        <summary>
          <span>${f.q}</span>
          <i class="bi bi-plus-lg chev"></i>
        </summary>
        <div class="answer">${f.a}</div>
      </details>
    `).join("");
  }

  // ---------- 8. Scroll reveal (IntersectionObserver) ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .tl-item").forEach(el => io.observe(el));

  // ---------- 9. Año en footer ----------
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---------- 10. Tracking de clicks a WhatsApp ----------
  // Dispara evento "whatsapp_click" a GA4 y Meta Pixel si están cargados.
  // Funciona aunque los pixels no estén activos (los checks evitan errores).
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="https://wa.me/"]');
    if (!link) return;

    // Extrae contexto del CTA: el texto visible del botón o aria-label
    const label = (link.innerText || link.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 80);

    // Identifica la sección padre para saber de dónde convirtió
    const section = link.closest("section");
    const sourceId = section ? (section.id || "unknown") : "footer-or-nav";

    // GA4
    if (typeof gtag === "function") {
      gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: label,
        source_section: sourceId
      });
    }
    // Meta Pixel
    if (typeof fbq === "function") {
      fbq("trackCustom", "WhatsAppClick", { label, source: sourceId });
      fbq("track", "Contact");
    }
    // Fallback console log útil durante desarrollo
    if (window.SOFTSOL_DEBUG) {
      console.log("[wa_click]", { label, source: sourceId, href: link.href });
    }
  });
})();
