(function () {
  const S = window.SITE, P = window.PROJECTS;
  const page = document.body.dataset.page; // home | project | about | contact
  const $ = (s) => document.querySelector(s);

  /* ---------- Navigation ---------- */
  const links = [
    ["accueil", "index.html", "home"],
    ["projets", "index.html#projets", "project"],
    ["à propos", "about.html", "about"],
    ["contact", "contact.html", "contact"]
  ];
  const nav = document.createElement("nav");
  nav.className = "nav " + (page === "home" ? "big" : "small");
  nav.innerHTML = links
    .map(([l, h, k]) => `<a href="${h}" class="${k === page ? "on" : ""}">${l}</a>.`)
    .join("");
  (page === "home" ? $(".hero") : document.body).prepend(nav);

  /* ---------- Pied de page + horloges ---------- */
  const foot = document.createElement("footer");
  foot.className = "foot";
  foot.innerHTML = `
    <div class="clock" id="c0"></div>
    <div><a href="${S.instagram}" target="_blank" rel="noopener">instagram</a><a href="mailto:${S.email}">mail</a></div>
    <div class="clock" id="c1"></div>`;
  document.body.append(foot);
  function tick() {
    S.clocks.slice(0, 2).forEach((c, i) => {
      const t = new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: c.tz
      }).format(new Date());
      $("#c" + i).innerHTML = `<span>${c.label}</span><span>${t}</span>`;
    });
  }
  tick(); setInterval(tick, 1000);

  /* ---------- Page d'accueil ---------- */
  if (page === "home") {
    $("#wordmark").textContent = S.name;

    // lettres qui flottent autour du nom
    const hero = $(".hero");
    const letters = [...S.name.replace(/\s/g, "").toLowerCase()];
    const floats = letters.map((ch) => {
      const s = document.createElement("span");
      s.className = "float";
      s.textContent = ch;
      const left = Math.random() < 0.5 ? 4 + Math.random() * 22 : 74 + Math.random() * 22;
      s.style.left = left + "%";
      s.style.top = 28 + Math.random() * 55 + "%";
      s.dataset.r = (Math.random() * 60 - 30).toFixed(0);
      s.dataset.k = (Math.random() * 30 + 10).toFixed(0);
      s.style.transform = `rotate(${s.dataset.r}deg)`;
      hero.append(s);
      return s;
    });
    window.addEventListener("mousemove", (e) => {
      const dx = e.clientX / innerWidth - 0.5, dy = e.clientY / innerHeight - 0.5;
      floats.forEach((s) => {
        const k = +s.dataset.k;
        s.style.transform = `translate(${dx * k}px, ${dy * k}px) rotate(${s.dataset.r}deg)`;
      });
    });

    // grille de projets
    const grid = $("#grid");
    grid.innerHTML = P.map((p, i) => {
      const r = (((i * 37) % 11) - 5) * 0.9;
      const y = ((i * 53) % 7) * 18;
      const media = p.cover
        ? `<img src="${p.cover}" alt="${p.title}" loading="lazy">`
        : `<div class="ph" style="--ar:${p.ratio}"></div>`;
      return `<a class="card" href="project.html?p=${p.slug}" data-cat="${p.category}" style="--r:${r}deg;--y:${y}px">
        <figure>${media}<figcaption>${p.title}<br>${p.category}</figcaption></figure></a>`;
    }).join("");

    // filtres par catégorie
    const cats = ["tout", ...new Set(P.map((p) => p.category))];
    const f = $("#filters");
    f.innerHTML = cats.map((c, i) => `<button class="${i === 0 ? "on" : ""}">${c}</button>`).join("");
    f.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
      f.querySelectorAll("button").forEach((b) => b.classList.remove("on"));
      e.target.classList.add("on");
      const c = e.target.textContent;
      grid.querySelectorAll(".card").forEach((el) => (el.hidden = c !== "tout" && el.dataset.cat !== c));
    });
  }

  /* ---------- Page projet ---------- */
  if (page === "project") {
    const slug = new URLSearchParams(location.search).get("p");
    const i = P.findIndex((p) => p.slug === slug);
    const root = $("#project");
    if (i < 0) { root.innerHTML = `<h1>projet introuvable</h1><p class="desc"><a href="index.html#projets">retour aux projets</a></p>`; return; }
    const p = P[i], prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    document.title = `${p.title} — ${S.name}`;
    root.innerHTML = `
      ${p.images.map((im) => im.src
        ? `<img class="media" src="${im.src}" alt="${p.title}" loading="lazy">`
        : `<div class="media" style="--ar:${im.ratio || "3/2"}"></div>`).join("")}
      <h1>${p.title}</h1>
      <p class="meta">${p.category} — ${p.year}</p>
      <p class="desc">${p.description}</p>
      <div class="pager"><a href="project.html?p=${prev.slug}">← ${prev.title}</a><a href="project.html?p=${next.slug}">${next.title} →</a></div>`;
  }
})();
