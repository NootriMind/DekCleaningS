const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open navigation";
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.querySelector(".sr-only").textContent = willOpen ? "Close navigation" : "Open navigation";
    mobileMenu.hidden = !willOpen;
    document.body.classList.toggle("menu-open", willOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

const quoteForm = document.querySelector("#quote-form");
const successPanel = document.querySelector("#form-success");
const resetButton = document.querySelector("#reset-form");
const isPrototype = document.body.dataset.prototype === "true";

if (quoteForm && successPanel && isPrototype) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    quoteForm.hidden = true;
    successPanel.hidden = false;
    successPanel.focus();
  });

  resetButton?.addEventListener("click", () => {
    quoteForm.reset();
    successPanel.hidden = true;
    quoteForm.hidden = false;
    quoteForm.querySelector("input:not([type='hidden'])")?.focus();
  });
}

document.querySelectorAll("[data-service-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const service = link.dataset.serviceLink;
    const select = document.querySelector("select[name='service']");
    if (select && service) select.value = service;
  });
});

document.querySelector("#year").textContent = String(new Date().getFullYear());

const revealTargets = document.querySelectorAll(
  ".section-heading, .service-card, .about-shell, .process-intro, .process-list li, .quote-copy, .quote-card"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((element) => element.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );
  revealTargets.forEach((element) => observer.observe(element));
}
