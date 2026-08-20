
const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#siteNav");
if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  siteNav.addEventListener("click", e => {
    if (e.target.matches("a")) {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const guideCards = [...document.querySelectorAll("[data-guide-card]")];
const search = document.querySelector("#guideSearch");
const filterWrap = document.querySelector("#guideFilters");
const count = document.querySelector("#guideCount");
if (guideCards.length && search && filterWrap) {
  let active = "All";
  const categories = ["All", ...new Set(guideCards.map(c => c.dataset.category))];

  const drawFilters = () => {
    filterWrap.innerHTML = categories.map(cat =>
      `<button class="filter ${cat === active ? "active" : ""}" type="button" data-filter="${cat}">${cat}</button>`
    ).join("");
  };

  const filterCards = () => {
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    guideCards.forEach(card => {
      const matchesCategory = active === "All" || card.dataset.category === active;
      const matchesText = card.textContent.toLowerCase().includes(q);
      const show = matchesCategory && matchesText;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = `${visible} guide${visible === 1 ? "" : "s"} shown`;
  };

  filterWrap.addEventListener("click", e => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    active = btn.dataset.filter;
    drawFilters();
    filterCards();
  });
  search.addEventListener("input", filterCards);
  drawFilters();
  filterCards();
}
