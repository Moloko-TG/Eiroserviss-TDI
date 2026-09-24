/* ================================================================
   1. I18N DATA
   ================================================================ */
const I18N = {
  lv:{
    tagline:'Auto serviss Rīgā',
    nav_services:'Pakalpojumi',nav_calc:'Cenas',nav_gallery:'Galerija',nav_contact:'Kontakti',
    nav_about:'Par mums',nav_reviews:'Atsauksmes',nav_blog:'Blogs',
    cta_book:'Pieteikties',cta_call:'Zvanīt tagad',
    hero_eyebrow:'Kopš 2005. gada',
    hero_title:'Uzticams auto serviss Rīgā',
    hero_sub:'Diagnostika, remonts un apkope visu marku auto. Godīgas cenas, garantija darbiem.',
    stat_years:'gadu pieredze',stat_cars:'remontētu auto',stat_warranty:'garantija',

    services_eyebrow:'Pakalpojumi',services_title:'Mūsu pakalpojumi',services_sub:'Plašs pakalpojumu klāsts par godīgām cenām',

    about_eyebrow:'Par mums',
    about_title:'Mūsu stāsts',
    about_sub:'Kopš 2005. gada palīdzam Rīgas autovadītājiem uzturēt viņu auto drošus un uzticamus.',
    about_heading:'Profesionāļi ar aizrautību',
    about_p1:'Mūsu komandā strādā sertificēti mehāniķi ar vairāk nekā 20 gadu pieredzi. Mēs specializējamies visu marku auto diagnostikā, remontā un apkopē.',
    about_p2:'Katrs darbs tiek veikts ar rūpību un atbildību. Mēs izmantojam tikai oriģinālās vai augstas kvalitātes alternatīvās detaļas.',
    about_image_alt:'Eiroserviss TDI komanda darbnīcā',
    about_timeline:[
      {year:'2005', text:'Servisa atvēršana Rīgā'},
      {year:'2012', text:'Jaunas diagnostikas iekārtas iegāde'},
      {year:'2018', text:'Servisa paplašināšana — 6 darba vietas'},
      {year:'2024', text:'5000+ apkalpotu auto'}
    ],

    calc_eyebrow:'Cenas',calc_title:'Cenu kalkulators',calc_sub:'Aprēķiniet aptuveno cenu dažu sekunžu laikā',
    calc_service:'Pakalpojums',calc_extras:'Papildu opcijas',calc_total:'Kopā',calc_note:'* Precīza cena tiek noteikta pēc konsultācijas',

    reviews_eyebrow:'Atsauksmes',
    reviews_title:'Ko saka mūsu klienti',
    reviews_sub:'Reālas atsauksmes no mūsu klientiem Rīgā un Jūrmalā',
    review_texts:[
      'Ātri un profesionāli. Atrada problēmu, par kuru citi servisi pat nezināja.',
      'Godīgas cenas un kvalitatīvs darbs. Tagad tikai šeit remontēju savu auto.',
      'Labi speciālisti, bet reizēm jāgaida rindā. Ieteicu draugiem.'
    ],

    book_eyebrow:'Rezervācija',book_title:'Pieteikšanās',book_sub:'Aizpildiet formu, un mēs ar Jums sazināsimies',
    book_name:'Jūsu vārds',book_phone:'Tālrunis',book_email:'E-pasts',book_service:'Pakalpojums',
    book_date:'Datums',book_time:'Laiks',book_notes:'Piezīmes',book_submit:'Nosūtīt pieteikumu',
    book_success:'Paldies! Mēs sazināsimies ar Jums tuvākajā laikā.',
    book_error:'Kļūda. Lūdzu, mēģiniet vēlreiz vai zvaniet mums.',
    consent_text:'Piekrītu savu personas datu apstrādei saskaņā ar',
    consent_link:'privātuma politiku',
    consent_hint:'Lūdzu, atzīmējiet piekrišanu, lai varētu nosūtīt pieteikumu',
    toast_success_title:'Pieteikums nosūtīts!',
    toast_error_title:'Neizdevās nosūtīt',
    toast_consent_title:'Nepieciešama piekrišana',

    gallery_eyebrow:'Galerija',gallery_title:'Mūsu darbi',gallery_sub:'Ritini ar peles ritenīti, lai apskatītu galeriju',
    gallery_hint:'Ritini ar peles ritenīti • Pēc galerijas beigām lapa ritinās tālāk',

    contact_eyebrow:'Kontakti',contact_title:'Sazinies ar mums',
    contact_address:'Adrese',contact_hours:'Darba laiks',

    footer_desc:'Uzticams auto serviss Rīgā kopš 2005. gada.',
    footer_nav:'Navigācija',footer_legal:'Informācija',footer_contact:'Kontakti',
    footer_privacy:'Privātuma politika',footer_terms:'Noteikumi',
    footer_rights:'Visas tiesības aizsargātas.',

    services:[
      {name:'Datordiagnostika',desc:'Pilna auto sistēmu pārbaude',price:25},
      {name:'Dzinēja remonts',desc:'Kapitālais un kārtējais remonts',price:180},
      {name:'Bremžu sistēma',desc:'Kluču un disku nomaiņa',price:60},
      {name:'Eļļas maiņa',desc:'Eļļa + filtrs, 30 min',price:35}
    ],
    gallery:['Diagnostikas centrs','Dzinēja remonts','Bremžu serviss','Riepu montāža','Auto mazgāšana']
  },
  en:{
    tagline:'Auto service in Riga',
    nav_services:'Services',nav_calc:'Pricing',nav_gallery:'Gallery',nav_contact:'Contact',
    nav_about:'About',nav_reviews:'Reviews',nav_blog:'Blog',
    cta_book:'Book now',cta_call:'Call now',
    hero_eyebrow:'Since 2005',
    hero_title:'Reliable auto service in Riga',
    hero_sub:'Diagnostics, repair and maintenance for all car brands. Fair prices, warranty on all work.',
    stat_years:'years experience',stat_cars:'cars repaired',stat_warranty:'warranty',

    services_eyebrow:'Services',services_title:'Our services',services_sub:'Wide range of services at fair prices',

    about_eyebrow:'About us',
    about_title:'Our story',
    about_sub:'Since 2005 we have been helping Riga drivers keep their cars safe and reliable.',
    about_heading:'Professionals with passion',
    about_p1:'Our team consists of certified mechanics with over 20 years of experience. We specialize in diagnostics, repair and maintenance of all car brands.',
    about_p2:'Every job is done with care and responsibility. We use only original or high-quality alternative parts.',
    about_image_alt:'Eiroserviss TDI team at the workshop',
    about_timeline:[
      {year:'2005', text:'Service opened in Riga'},
      {year:'2012', text:'Purchase of new diagnostic equipment'},
      {year:'2018', text:'Service expansion — 6 work bays'},
      {year:'2024', text:'5000+ cars serviced'}
    ],

    calc_eyebrow:'Pricing',calc_title:'Price calculator',calc_sub:'Get an estimated price in seconds',
    calc_service:'Service',calc_extras:'Additional options',calc_total:'Total',calc_note:'* Final price confirmed after consultation',

    reviews_eyebrow:'Reviews',
    reviews_title:'What our clients say',
    reviews_sub:'Real reviews from our clients in Riga and Jūrmala',
    review_texts:[
      'Fast and professional. Found a problem that other services did not even know about.',
      'Fair prices and quality work. Now I only repair my car here.',
      'Good specialists, though sometimes you have to wait in line. Recommended to friends.'
    ],

    book_eyebrow:'Booking',book_title:'Online booking',book_sub:'Fill the form and we will contact you',
    book_name:'Your name',book_phone:'Phone',book_email:'Email',book_service:'Service',
    book_date:'Date',book_time:'Time',book_notes:'Notes',book_submit:'Send request',
    book_success:'Thank you! We will contact you shortly.',
    book_error:'Error. Please try again or call us.',
    consent_text:'I agree to the processing of my personal data in accordance with the',
    consent_link:'privacy policy',
    consent_hint:'Please tick the consent box to submit the request',
    toast_success_title:'Request sent!',
    toast_error_title:'Could not send',
    toast_consent_title:'Consent required',

    gallery_eyebrow:'Gallery',gallery_title:'Our work',gallery_sub:'Scroll with mouse wheel to explore the gallery',
    gallery_hint:'Scroll with mouse wheel • After the gallery ends the page scrolls normally',

    contact_eyebrow:'Contact',contact_title:'Get in touch',
    contact_address:'Address',contact_hours:'Working hours',

    footer_desc:'Reliable auto service in Riga since 2005.',
    footer_nav:'Navigation',footer_legal:'Legal',footer_contact:'Contact',
    footer_privacy:'Privacy Policy',footer_terms:'Terms',
    footer_rights:'All rights reserved.',

    services:[
      {name:'Computer diagnostics',desc:'Full vehicle systems check',price:25},
      {name:'Engine repair',desc:'Major and minor repairs',price:180},
      {name:'Brake system',desc:'Pads and discs replacement',price:60},
      {name:'Oil change',desc:'Oil + filter, 30 min',price:35}
    ],
    gallery:['Diagnostics center','Engine repair','Brake service','Tire fitting','Car wash']
  },
  ru:{
    tagline:'Автосервис в Риге',
    nav_services:'Услуги',nav_calc:'Цены',nav_gallery:'Галерея',nav_contact:'Контакты',
    nav_about:'О нас',nav_reviews:'Отзывы',nav_blog:'Блог',
    cta_book:'Записаться',cta_call:'Позвонить',
    hero_eyebrow:'С 2005 года',
    hero_title:'Надёжный автосервис в Риге',
    hero_sub:'Диагностика, ремонт и обслуживание авто всех марок. Честные цены, гарантия на работы.',
    stat_years:'лет опыта',stat_cars:'отремонтированных авто',stat_warranty:'гарантия',

    services_eyebrow:'Услуги',services_title:'Наши услуги',services_sub:'Широкий спектр услуг по честным ценам',

    about_eyebrow:'О нас',
    about_title:'Наша история',
    about_sub:'С 2005 года мы помогаем рижским водителям поддерживать их автомобили в безопасности и надёжности.',
    about_heading:'Профессионалы с увлечением',
    about_p1:'В нашей команде работают сертифицированные механики с более чем 20-летним опытом. Мы специализируемся на диагностике, ремонте и обслуживании автомобилей всех марок.',
    about_p2:'Каждая работа выполняется с тщательностью и ответственностью. Мы используем только оригинальные или качественные альтернативные запчасти.',
    about_image_alt:'Команда Eiroserviss TDI в мастерской',
    about_timeline:[
      {year:'2005', text:'Открытие сервиса в Риге'},
      {year:'2012', text:'Покупка нового диагностического оборудования'},
      {year:'2018', text:'Расширение сервиса — 6 рабочих мест'},
      {year:'2024', text:'5000+ обслуженных автомобилей'}
    ],

    calc_eyebrow:'Цены',calc_title:'Калькулятор цен',calc_sub:'Рассчитайте примерную стоимость за пару секунд',
    calc_service:'Услуга',calc_extras:'Дополнительные опции',calc_total:'Итого',calc_note:'* Точная цена — после консультации',

    reviews_eyebrow:'Отзывы',
    reviews_title:'Что говорят наши клиенты',
    reviews_sub:'Реальные отзывы от наших клиентов в Риге и Юрмале',
    review_texts:[
      'Быстро и профессионально. Нашли проблему, о которой другие сервисы даже не знали.',
      'Честные цены и качественная работа. Теперь ремонтирую машину только здесь.',
      'Хорошие специалисты, хотя иногда приходится ждать в очереди. Рекомендовал друзьям.'
    ],

    book_eyebrow:'Запись',book_title:'Онлайн-запись',book_sub:'Заполните форму, и мы с вами свяжемся',
    book_name:'Ваше имя',book_phone:'Телефон',book_email:'Email',book_service:'Услуга',
    book_date:'Дата',book_time:'Время',book_notes:'Примечания',book_submit:'Отправить заявку',
    book_success:'Спасибо! Мы свяжемся с вами в ближайшее время.',
    book_error:'Ошибка. Попробуйте ещё раз или позвоните нам.',
    consent_text:'Даю согласие на обработку персональных данных в соответствии с',
    consent_link:'политикой конфиденциальности',
    consent_hint:'Отметьте согласие, чтобы отправить заявку',
    toast_success_title:'Заявка отправлена!',
    toast_error_title:'Не удалось отправить',
    toast_consent_title:'Нужно согласие',

    gallery_eyebrow:'Галерея',gallery_title:'Наши работы',gallery_sub:'Прокрутите колесом мыши, чтобы посмотреть галерею',
    gallery_hint:'Крутите колесо мыши • После галереи страница прокручивается вниз',

    contact_eyebrow:'Контакты',contact_title:'Свяжитесь с нами',
    contact_address:'Адрес',contact_hours:'Часы работы',

    footer_desc:'Надёжный автосервис в Риге с 2005 года.',
    footer_nav:'Навигация',footer_legal:'Информация',footer_contact:'Контакты',
    footer_privacy:'Политика конфиденциальности',footer_terms:'Условия',
    footer_rights:'Все права защищены.',

    services:[
      {name:'Компьютерная диагностика',desc:'Полная проверка систем авто',price:25},
      {name:'Ремонт двигателя',desc:'Капитальный и текущий ремонт',price:180},
      {name:'Тормозная система',desc:'Замена колодок и дисков',price:60},
      {name:'Замена масла',desc:'Масло + фильтр, 30 мин',price:35}
    ],
    gallery:['Диагностический центр','Ремонт двигателя','Тормозной сервис','Шиномонтаж','Мойка авто']
  }
};

/* ================================================================
   2. SITE CONFIG
   ================================================================ */
const SITE = {
  id:'eiroserviss',
  phone:'+371 29 214 115',
  email:'info@eiroserviss.lv',
  extras:[
    {lv:'Avārijas izsaukums',en:'Emergency call-out',ru:'Срочный выезд',price:35},
    {lv:'Auto nomaiņa uz laiku',en:'Replacement car',ru:'Подменный автомобиль',price:25}
  ],
  reviews:[
    {init:'A', name:'Andris B.', city:'Rīga',    stars:5},
    {init:'M', name:'Marika K.', city:'Jūrmala', stars:5},
    {init:'J', name:'Jānis P.',  city:'Rīga',    stars:4}
  ]
};

/* ================================================================
   3. SERVICE ICONS
   ================================================================ */
const SERVICE_ICONS = [
  /* 1. COMPUTER DIAGNOSTIC */
  `<svg viewBox="0 0 80 62" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="74" height="48" rx="2"/><path d="M32 51 L28 58"/><path d="M48 51 L52 58"/><line x1="24" y1="58" x2="56" y2="58"/><path d="M9 16 L34 16 L38 20 L38 42 L9 42 Z"/><circle cx="17" cy="42" r="3.5"/><circle cx="30" cy="42" r="3.5"/><line x1="9" y1="28" x2="38" y2="28"/><rect x="44" y="12" width="26" height="7"/><line x1="44" y1="26" x2="70" y2="26"/><line x1="44" y1="32" x2="70" y2="32"/><line x1="44" y1="38" x2="70" y2="38"/><line x1="44" y1="44" x2="70" y2="44"/></svg>`,

  /* 2. ENGINE WITH GEAR */
  `<svg viewBox="0 0 82 56" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M33 5 L49 5"/><path d="M41 5 L41 11"/><path d="M15 21 L19 11 L63 11 L67 21 L67 39 L63 47 L19 47 L15 39 Z"/><path d="M15 25 L4 25 L4 35 L15 35"/><path d="M67 25 L78 25 L78 35 L67 35"/><circle cx="41" cy="29" r="11"/><circle cx="41" cy="29" r="3.4"/><path d="M41 18 L41 21.5 M41 36.5 L41 40 M30 29 L33.5 29 M48.5 29 L52 29 M33.2 21.2 L35.6 23.6 M46.4 34.4 L48.8 36.8 M33.2 36.8 L35.6 34.4 M46.4 23.6 L48.8 21.2"/></svg>`,

  /* 3. CHASSIS / BRAKE */
  `<svg viewBox="0 0 82 52" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="14" height="6" rx="1"/><rect x="2" y="44" width="14" height="6" rx="1"/><rect x="66" y="2" width="14" height="6" rx="1"/><rect x="66" y="44" width="14" height="6" rx="1"/><line x1="9" y1="8" x2="9" y2="44"/><line x1="73" y1="8" x2="73" y2="44"/><rect x="2" y="19" width="78" height="14"/><rect x="6" y="22" width="16" height="8"/><line x1="6" y1="26" x2="22" y2="26"/><line x1="22" y1="26" x2="68" y2="26"/><circle cx="68" cy="26" r="4.2"/><line x1="68" y1="19" x2="68" y2="33"/></svg>`,

  /* 4. OIL + TIRE + SPARK PLUG */
  `<svg viewBox="0 0 82 74" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="26" width="24" height="46" rx="2"/><path d="M10 26 L10 19 L18 19 L18 26"/><line x1="6" y1="34" x2="22" y2="34"/><line x1="6" y1="40" x2="18" y2="40"/><path d="M14 48 Q9 55 14 60 Q19 55 14 48 Z"/><circle cx="52" cy="26" r="18"/><circle cx="52" cy="26" r="8"/><line x1="52" y1="18" x2="52" y2="34"/><line x1="44" y1="26" x2="60" y2="26"/><line x1="46.4" y1="20.4" x2="57.6" y2="31.6"/><line x1="46.4" y1="31.6" x2="57.6" y2="20.4"/><rect x="70" y="4" width="8" height="10" rx="1"/><path d="M71.5 14 L76.5 14 L75.8 18 L72.2 18 Z"/><line x1="74" y1="18" x2="74" y2="24"/></svg>`
];

/* ================================================================
   4. STATE
   ================================================================ */
let currentLang = localStorage.getItem('lang') || 'lv';
const t = () => I18N[currentLang];

/* ================================================================
   5. TOAST ICONS (SVG, no emoji)
   ================================================================ */
const TOAST_ICONS = {
  success:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12.5 10 17.5 19 7"/></svg>`,
  error:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>`,
  warning:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="6" x2="12" y2="13"/><circle cx="12" cy="17.5" r="1" fill="currentColor"/></svg>`,
  info:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="7" x2="12" y2="14"/><circle cx="12" cy="17.5" r="1" fill="currentColor"/></svg>`
};

/* ================================================================
   6. TOAST FUNCTION
   ================================================================ */
function toast(type, title, message, duration = 5000){
  const stack = document.getElementById('toastStack');
  if(!stack) return;

  const el = document.createElement('div');
  el.className = 'toast toast--' + type;
  el.setAttribute('role', type === 'error' ? 'alert' : 'status');

  el.innerHTML = `
    <div class="toast__icon" aria-hidden="true">${TOAST_ICONS[type] || TOAST_ICONS.info}</div>
    <div class="toast__body">
      <div class="toast__title"></div>
      <div class="toast__msg"></div>
    </div>
    <button class="toast__close" aria-label="Close">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
    </button>
    <div class="toast__progress" style="animation-duration:${duration}ms"></div>
  `;

  el.querySelector('.toast__title').textContent = title || '';
  el.querySelector('.toast__msg').textContent   = message || '';

  stack.appendChild(el);

  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>el.classList.add('show'));
  });

  let hideTimer = setTimeout(()=>hide(), duration);

  function hide(){
    clearTimeout(hideTimer);
    el.classList.remove('show');
    el.classList.add('hide');
    el.addEventListener('transitionend', ()=>el.remove(), {once:true});
    setTimeout(()=>el.remove(), 500);
  }

  el.querySelector('.toast__close').addEventListener('click', hide);
  el.addEventListener('mouseenter', ()=>clearTimeout(hideTimer));
  el.addEventListener('mouseleave', ()=>{ hideTimer = setTimeout(hide, 1500); });

  return el;
}

/* ================================================================
   7. STAR SVG HELPER
   ================================================================ */
function starSVG(filled){
  return `<svg class="${filled ? '' : 'star--empty'}" viewBox="0 0 24 24" aria-hidden="true">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>`;
}

/* ================================================================
   8. RENDER
   ================================================================ */
function render(){
  const L = t();
  document.documentElement.lang = currentLang;

  /* Text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(L[key]) el.textContent = L[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.dataset.i18nPh;
    if(L[key]) el.placeholder = L[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
    const key = el.dataset.i18nAlt;
    if(L[key]) el.alt = L[key];
  });

  /* Services */
  document.getElementById('services-list').innerHTML = L.services.map((sv, i)=>
    `<div class="card">
      <div class="card-icon">${SERVICE_ICONS[i % SERVICE_ICONS.length]}</div>
      <h3>${sv.name}</h3>
      <p>${sv.desc}</p>
      <div class="price">no €${sv.price}</div>
    </div>`
  ).join('');

  /* About timeline */
  document.getElementById('aboutTimeline').innerHTML = L.about_timeline.map(item=>
    `<div class="tl-item">
      <div class="tl-year">${item.year}</div>
      <div class="tl-text">${item.text}</div>
    </div>`
  ).join('');

  /* Calculator service select */
  document.getElementById('calc-service').innerHTML = L.services.map((sv,i)=>
    `<option value="${i}">${sv.name} — €${sv.price}</option>`
  ).join('');

  /* Calculator extras */
  document.getElementById('calc-extras').innerHTML = SITE.extras.map((e,i)=>
    `<label><input type="checkbox" data-extra="${i}" data-price="${e.price}" onchange="calculate()"> ${e[currentLang]} (+€${e.price})</label>`
  ).join('');

  /* Reviews */
  document.getElementById('reviews-list').innerHTML = SITE.reviews.map((r, i)=>{
    const stars = Array.from({length:5}, (_,k)=> starSVG(k < r.stars)).join('');
    const text  = (L.review_texts && L.review_texts[i]) || '';
    return `<article class="review-card">
      <div class="review-stars" role="img" aria-label="${r.stars} / 5">${stars}</div>
      <p class="review-text">${text}</p>
      <div class="review-author">
        <div class="review-avatar" aria-hidden="true">${r.init}</div>
        <div>
          <b>${r.name}</b>
          <span>${r.city}</span>
        </div>
      </div>
    </article>`;
  }).join('');

  /* Booking service select */
  document.getElementById('book-service').innerHTML = L.services.map(sv=>
    `<option>${sv.name}</option>`
  ).join('');

  /* Gallery */
  document.getElementById('galleryTrack').innerHTML = L.gallery.map((g,i)=>
    `<div class="gallery-item">
      <img src="https://picsum.photos/seed/${SITE.id}-gal-${i}/600/400" alt="${g}" loading="lazy" draggable="false">
      <span>${g}</span>
    </div>`
  ).join('');

  /* Active language button */
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===currentLang));

  calculate();
  document.querySelectorAll('.js-autogrow').forEach(autoGrow);
}

/* ================================================================
   9. CALCULATOR
   ================================================================ */
function calculate(){
  const L = t();
  const idx = +document.getElementById('calc-service').value || 0;
  let total = L.services[idx] ? L.services[idx].price : 0;
  document.querySelectorAll('[data-extra]:checked').forEach(c=>{ total += +c.dataset.price; });
  document.getElementById('calc-result').textContent = '€' + total;
}

/* ================================================================
   10. TEXTAREA AUTO-GROW
   ================================================================ */
function autoGrow(el){
  if(!el) return;
  el.style.height = 'auto';
  const maxH = parseInt(getComputedStyle(el).maxHeight, 10) || 340;
  el.style.height = Math.min(el.scrollHeight, maxH) + 'px';
}

document.querySelectorAll('.js-autogrow').forEach(el=>{
  el.addEventListener('input', ()=>autoGrow(el));
  autoGrow(el);
});

let resizeTimer;
window.addEventListener('resize', ()=>{
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(()=>{
    document.querySelectorAll('.js-autogrow').forEach(autoGrow);
  }, 150);
});

/* ================================================================
   11. CONSENT + SUBMIT
   ================================================================ */
const bookingForm  = document.getElementById('booking-form');
const consentCheck = document.getElementById('consentCheck');
const consentLabel = document.getElementById('consentLabel');
const consentHint  = document.getElementById('consentHint');
const submitBtn    = document.getElementById('submitBtn');

function updateSubmitState(){
  const ok = consentCheck.checked;
  submitBtn.disabled = !ok;
  consentLabel.classList.toggle('checked', ok);
  if(ok) consentHint.classList.remove('visible','warn');
}

consentCheck.addEventListener('change', updateSubmitState);

submitBtn.addEventListener('click', e=>{
  if(submitBtn.disabled){
    e.preventDefault();
    consentHint.classList.add('visible','warn');
    consentCheck.focus();
  }
});

consentLabel.addEventListener('click', e=>{
  if(e.target.tagName === 'A') return;
  if(e.target === consentCheck) return;
  e.preventDefault();
  consentCheck.checked = !consentCheck.checked;
  consentCheck.dispatchEvent(new Event('change', {bubbles:true}));
});

updateSubmitState();

bookingForm.addEventListener('submit', async function(e){
  e.preventDefault();

  if(!consentCheck.checked){
    consentHint.classList.add('visible','warn');
    toast('warning',
      I18N[currentLang].toast_consent_title,
      I18N[currentLang].consent_hint);
    return;
  }

  const L = t();
  const btn = submitBtn;
  const originalHTML = btn.innerHTML;

  btn.disabled = true;
  btn.textContent = '...';

  try{
    const res = await fetch('https://api.web3forms.com/submit', {
      method:'POST',
      body: new FormData(this),
      headers:{ 'Accept':'application/json' }
    });

    if(!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();

    if(data.success){
      toast('success', L.toast_success_title, L.book_success);
      this.reset();
      document.querySelectorAll('.js-autogrow').forEach(autoGrow);
      updateSubmitState();
    } else {
      throw new Error(data.message || 'Submit failed');
    }
  }catch(err){
    console.error(err);
    toast('error', L.toast_error_title, L.book_error);
  }finally{
    btn.innerHTML = originalHTML;
    updateSubmitState();
  }
});

/* ================================================================
   12. HORIZONTAL GALLERY — smooth rAF + viewport-aware
   ================================================================ */
(function(){
  const track = document.getElementById('galleryTrack');
  if(!track) return;

  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  let targetScroll = track.scrollLeft;
  let rafId = null;

  function animate(){
    const diff = targetScroll - track.scrollLeft;
    if(Math.abs(diff) < 0.5){
      track.scrollLeft = targetScroll;
      rafId = null;
      return;
    }
    track.scrollLeft += diff * 0.18;
    rafId = requestAnimationFrame(animate);
  }

  function scrollToX(x){
    const maxScroll = track.scrollWidth - track.clientWidth;
    targetScroll = Math.max(0, Math.min(x, maxScroll));
    if(!rafId) rafId = requestAnimationFrame(animate);
  }

  function stopAnimation(){
    if(rafId){
      cancelAnimationFrame(rafId);
      rafId = null;
      targetScroll = track.scrollLeft;
    }
  }

  function isGalleryInFocus(){
    const rect = track.getBoundingClientRect();
    const vh = window.innerHeight;
    if(rect.bottom < 0 || rect.top > vh) return false;
    const center = rect.top + rect.height / 2;
    return center > vh * 0.25 && center < vh * 0.75;
  }

  track.addEventListener('wheel', function(e){
    if(track.scrollWidth <= track.clientWidth + 5) return;
    if(!isGalleryInFocus()) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft <= 1 && targetScroll <= 1;
    const atEnd   = track.scrollLeft >= maxScroll - 1 && targetScroll >= maxScroll - 1;
    const goingRight = e.deltaY > 0;
    const goingLeft  = e.deltaY < 0;

    if((goingRight && atEnd) || (goingLeft && atStart)) return;

    e.preventDefault();

    let delta = e.deltaY;
    if(e.deltaMode === 1) delta *= 16;
    else if(e.deltaMode === 2) delta *= 400;

    scrollToX(targetScroll + delta * 1.6);
  }, { passive:false });

  prev.addEventListener('click', ()=>{
    scrollToX(targetScroll - track.clientWidth * 0.8);
  });
  next.addEventListener('click', ()=>{
    scrollToX(targetScroll + track.clientWidth * 0.8);
  });

  let isDown = false, startX = 0, startScroll = 0;

  track.addEventListener('mousedown', e=>{
    isDown = true;
    track.classList.add('active');
    stopAnimation();
    startX = e.pageX;
    startScroll = track.scrollLeft;
  });

  window.addEventListener('mouseup', ()=>{
    if(!isDown) return;
    isDown = false;
    track.classList.remove('active');
    targetScroll = track.scrollLeft;
  });

  track.addEventListener('mouseleave', ()=>{
    if(!isDown) return;
    isDown = false;
    track.classList.remove('active');
    targetScroll = track.scrollLeft;
  });

  track.addEventListener('mousemove', e=>{
    if(!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    track.scrollLeft = startScroll - dx;
    targetScroll = track.scrollLeft;
  });

  track.setAttribute('tabindex','0');
  track.setAttribute('role','region');
  track.setAttribute('aria-label','Gallery');
  track.addEventListener('keydown', e=>{
    if(e.key === 'ArrowLeft'){  e.preventDefault(); prev.click(); }
    if(e.key === 'ArrowRight'){ e.preventDefault(); next.click(); }
  });

  window.addEventListener('resize', ()=>{
    stopAnimation();
    targetScroll = track.scrollLeft;
  });
})();

/* ================================================================
   13. LANGUAGE SWITCH
   ================================================================ */
document.querySelectorAll('.lang-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    currentLang = b.dataset.lang;
    localStorage.setItem('lang', currentLang);
    render();
  });
});

/* ================================================================
   14. MOBILE MENU
   ================================================================ */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

function toggleMenu(force){
  const open = typeof force === 'boolean' ? force : !navLinks.classList.contains('open');
  navLinks.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
}

burger.addEventListener('click', ()=>toggleMenu());
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', ()=>toggleMenu(false));
});
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') toggleMenu(false);
});
window.addEventListener('resize', ()=>{
  if(window.innerWidth > 900) toggleMenu(false);
});

/* ================================================================
   15. INIT
   ================================================================ */
document.getElementById('year').textContent = new Date().getFullYear();
render();
