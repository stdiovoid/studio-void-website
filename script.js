(() => {
  const languageButton = document.querySelector(".language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  let language = "fa";

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-en", next === "en");
    document.querySelectorAll("[data-fa][data-en]").forEach((element) => {
      element.innerHTML = element.dataset[next];
    });
    languageButton.textContent = next === "fa" ? "EN" : "FA";
    languageButton.setAttribute("aria-label", next === "fa" ? "Change language to English" : "تغییر زبان به فارسی");
  }

  languageButton?.addEventListener("click", () => setLanguage(language === "fa" ? "en" : "fa"));
  menuButton?.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));
})();
