const translations = {
  fa: {
    navHome:"خانه",navAbout:"درباره ما",navServices:"خدمات",navWork:"پروژه‌ها",navContact:"ارتباط",startProject:"شروع همکاری",
    eyebrow:"استودیوی خلاق فناوری و توسعه دیجیتال",heroTitle:'ایده‌ها را به<br><span class="gradient-text">تجربه‌های ماندگار</span><br>تبدیل می‌کنیم.',
    heroDesc:"در STUDIO VOID، طراحی، فناوری و خلاقیت کنار هم قرار می‌گیرند تا محصولات دیجیتال معنادار و آینده‌نگر خلق کنیم.",
    exploreWork:"مشاهده توانمندی‌ها",knowStudio:"با استودیو آشنا شوید",metaOne:"خلاقیت هدفمند",metaTwo:"توسعه هوشمند",metaThree:"نگاه رو به آینده",scroll:"برای کشف بیشتر اسکرول کنید",
    stripLabel:"از ایده تا اجرا",stripText:"ما برای ساختن راه‌حل‌های دیجیتال، مرزهای معمول را به چالش می‌کشیم.",aboutKicker:"هویت ما",
    aboutTitle:'فناوری، وقتی ارزشمند است که <span class="gradient-text">چیزی را ممکن کند.</span>',aboutText:"STUDIO VOID یک استودیوی مستقل در مسیر طراحی و توسعه محصولات دیجیتال است. ما با ترکیب تفکر خلاق، طراحی دقیق و فناوری روز، ایده‌ها را به تجربه‌هایی کاربردی تبدیل می‌کنیم.",
    talkToUs:"درباره همکاری صحبت کنیم",servicesKicker:"چه کاری انجام می‌دهیم",servicesTitle:'توانمندی‌های <span class="gradient-text">استودیو</span>',servicesIntro:"از طراحی تجربه تا توسعه محصول؛ همراه شما در مسیر ساخت.",
    service1:"طراحی و توسعه وب",service1d:"وب‌سایت‌های شرکتی، پلتفرم‌ها و تجربه‌های دیجیتال سریع و واکنش‌گرا.",service2:"توسعه بازی",service2d:"طراحی و ساخت تجربه‌های تعاملی، بازی‌های موبایل و پروژه‌های سه‌بعدی.",service3:"محصولات هوش مصنوعی",service3d:"ایده‌پردازی و توسعه ابزارهای هوشمند برای ساده‌تر و بهتر کردن کارها.",service4:"اپلیکیشن و راهکار دیجیتال",service4d:"طراحی و پیاده‌سازی اپلیکیشن‌ها و سامانه‌های متناسب با نیاز کسب‌وکار.",
    draftNote:"فهرست خدمات اولیه است و از طریق پنل مدیریت در نسخه بعدی قابل ویرایش خواهد بود.",workKicker:"منتخب پروژه‌ها",workTitle:'هر ایده،<br><span class="gradient-text">شروع یک مسیر تازه.</span>',workText:"پروژه‌ها و محصولات رسمی استودیو در این بخش معرفی خواهند شد.",
    contactTitle:'بیایید چیزی<br><span class="gradient-text">متفاوت بسازیم.</span>',contactText:"برای همکاری، پیشنهاد یا دریافت اطلاعات بیشتر با ما در ارتباط باشید.",footerLine:"استودیوی خلاق فناوری و توسعه دیجیتال"
  },
  en: {
    navHome:"Home",navAbout:"About",navServices:"Services",navWork:"Work",navContact:"Contact",startProject:"Start a project",
    eyebrow:"CREATIVE TECHNOLOGY & DIGITAL DEVELOPMENT STUDIO",heroTitle:'Turning ideas into<br><span class="gradient-text">meaningful experiences.</span>',
    heroDesc:"At STUDIO VOID, design, technology and creativity come together to build thoughtful, forward-looking digital products.",
    exploreWork:"Explore what we do",knowStudio:"Get to know the studio",metaOne:"Purposeful creativity",metaTwo:"Smart development",metaThree:"Future-focused thinking",scroll:"Scroll to discover",
    stripLabel:"FROM IDEA TO EXECUTION",stripText:"We challenge the ordinary to create useful digital solutions.",aboutKicker:"WHO WE ARE",
    aboutTitle:'Technology matters when it <span class="gradient-text">makes something possible.</span>',aboutText:"STUDIO VOID is an independent studio focused on the design and development of digital products. We combine creative thinking, considered design and modern technology to turn ideas into useful experiences.",
    talkToUs:"Let's talk about working together",servicesKicker:"WHAT WE DO",servicesTitle:'Studio <span class="gradient-text">capabilities</span>',servicesIntro:"From experience design to product development, we build alongside you.",
    service1:"Web design & development",service1d:"Corporate websites, platforms and fast, responsive digital experiences.",service2:"Game development",service2d:"Interactive experiences, mobile games and 3D projects.",service3:"AI-powered products",service3d:"Conceiving and developing intelligent tools that make work simpler and better.",service4:"Apps & digital solutions",service4d:"Applications and systems tailored to business needs.",
    draftNote:"This is the initial services list. It will become editable through the admin panel in a later release.",workKicker:"SELECTED WORK",workTitle:'Every idea is<br><span class="gradient-text">the start of a new journey.</span>',workText:"Official studio projects and products will be featured here.",
    contactTitle:"Let's build<br><span class=\"gradient-text\">something different.</span>",contactText:"Get in touch for collaborations, proposals or more information.",footerLine:"Creative technology & digital development studio"
  }
};
let currentLang="fa";
const langButton=document.getElementById("langToggle");
function setLanguage(lang){
  currentLang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==="fa"?"rtl":"ltr";
  document.body.dir=lang==="fa"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key];});
  langButton.textContent=lang==="fa"?"EN":"FA";
}
langButton.addEventListener("click",()=>setLanguage(currentLang==="fa"?"en":"fa"));
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".desktop-nav").classList.toggle("open"));
document.querySelectorAll(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
