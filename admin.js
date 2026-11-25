(() => {
  const KEY = "studioVoidAdminDraftV1";
  const defaults = {
    heroTitle: "ایده‌ها را به تجربه‌های واقعی تبدیل می‌کنیم.",
    heroDescription: "از طراحی وب‌سایت و اپلیکیشن تا بازی و راهکارهای هوشمند؛ ما برای ساختن آینده دیجیتال، کنار شما هستیم.",
    aboutTitle: "ما فقط نمی‌سازیم؛ مسیر تازه‌ای خلق می‌کنیم.",
    aboutDescription: "STUDIO VOID یک مجموعه مستقل در حوزه فناوری و خلاقیت دیجیتال است. تمرکز ما ترکیب طراحی دقیق، فناوری کاربردی و تجربه‌ای متمایز برای ساخت محصولات معنادار است.",
    contactTitle: "ایده‌ای در ذهن دارید؟ با ما شروع کنید.",
    contactDescription: "برای گفتگو، پیشنهاد همکاری یا دنبال‌کردن تازه‌ترین خبرها، از راه‌های ارتباطی رسمی ما استفاده کنید.",
    projectTitle: "هر پروژه، شروع یک امکان تازه است.",
    projectDescription: "این بخش به‌مرور با معرفی پروژه‌ها، محصولات و دستاوردهای استودیو تکمیل می‌شود.",
    projectTag: "STUDIO VOID / LAB",
    telegramUrl: "https://t.me/stdiovoid",
    rubikaUrl: "https://rubika.ir/Studivoid",
    services: [
      ["طراحی و توسعه وب","وب‌سایت‌های مدرن، سریع و واکنش‌گرا برای برندها و کسب‌وکارها."],
      ["طراحی و ساخت بازی","تجربه‌های تعاملی و بازی‌های دوبعدی و سه‌بعدی."],
      ["راهکارهای هوش مصنوعی","ابزارها و دستیارهای هوشمند برای ساده‌تر کردن کارها."],
      ["اپلیکیشن و محصولات دیجیتال","طراحی محصولاتی کاربردی با تمرکز بر تجربه کاربر."]
    ]
  };
  let data = load();
  function load() {
    try { return {...defaults, ...JSON.parse(localStorage.getItem(KEY) || "{}")}; }
    catch { return {...defaults}; }
  }
  function set(id, value) { const el = document.getElementById(id); if (el) el.value = value ?? ""; }
  function get(id) { return document.getElementById(id)?.value.trim() || ""; }
  function renderServices() {
    const host = document.getElementById("services-list");
    host.innerHTML = "";
    data.services.forEach((service, i) => {
      const card = document.createElement("div");
      card.className = "service-item";
      const title = document.createElement("h3"); title.textContent = `خدمت ${i+1}`;
      const titleLabel = document.createElement("label"); titleLabel.textContent = "عنوان خدمت";
      const titleInput = document.createElement("input"); titleInput.value = service[0];
      titleInput.dataset.serviceTitle = i; titleLabel.append(titleInput);
      const descLabel = document.createElement("label"); descLabel.textContent = "توضیحات";
      const descInput = document.createElement("textarea"); descInput.rows = 3; descInput.value = service[1];
      descInput.dataset.serviceDescription = i; descLabel.append(descInput);
      card.append(title, titleLabel, descLabel); host.append(card);
    });
  }
  function fill() {
    ["heroTitle","heroDescription","aboutTitle","aboutDescription","contactTitle","contactDescription","projectTitle","projectDescription","projectTag","telegramUrl","rubikaUrl"].forEach(id => set(id, data[id]));
    renderServices();
  }
  function collect() {
    const next = {};
    ["heroTitle","heroDescription","aboutTitle","aboutDescription","contactTitle","contactDescription","projectTitle","projectDescription","projectTag","telegramUrl","rubikaUrl"].forEach(id => next[id] = get(id));
    next.services = data.services.map((s,i) => [
      document.querySelector(`[data-service-title="${i}"]`)?.value.trim() || "",
      document.querySelector(`[data-service-description="${i}"]`)?.value.trim() || ""
    ]);
    return next;
  }
  function save() {
    data = collect();
    localStorage.setItem(KEY, JSON.stringify(data));
    const msg = document.getElementById("save-message");
    msg.textContent = "تغییرات در همین مرورگر ذخیره شد ✓";
    setTimeout(() => msg.textContent = "", 3500);
  }
  document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b === button));
    document.querySelectorAll(".panel-section").forEach(s => s.classList.toggle("active", s.id === `tab-${button.dataset.tab}`));
  }));
  document.getElementById("save-all").addEventListener("click", save);
  document.getElementById("reset-defaults").addEventListener("click", () => {
    if (!confirm("همه فیلدها به مقادیر اولیه برگردند؟")) return;
    data = structuredClone(defaults); fill(); save();
  });
  fill();
})();