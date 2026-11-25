/* English <-> Arabic switch for the landing page.
 * The page is rendered by a React runtime, so instead of editing the markup this script
 * swaps text in place (and re-applies it whenever the page changes).
 * To change a translation, edit the matching line in AR below (the key is the English text,
 * lower-case, with spaces collapsed). */
(function () {
  var LRI = '⁦', PDI = '⁩', LRM = '‎';
  var ltr = function (s) { return LRI + s + PDI; };

  var AR = {
    // header / hero
    'about': 'من نحن',
    'services': 'الخدمات',
    'talk to us': 'تواصل معنا',
    'management · it advisory · data analytics · compliance · business setup': 'الإدارة · الاستشارات التقنية · تحليل البيانات · الامتثال · تأسيس الأعمال',
    'where expertise meets': 'حيث تلتقي الخبرة',
    'intelligence.': 'بالذكاء.',
    'a consulting partner for smes, entrepreneurs and growing businesses, combining agile management consulting, data analytics and modern technology into insight-led business outcome.': 'شريكك الاستشاري للمنشآت الصغيرة والمتوسطة ورواد الأعمال والشركات النامية، يجمع بين الاستشارات الإدارية المرنة وتحليل البيانات والتقنيات الحديثة لتحقيق نتائج أعمال قائمة على الرؤى.',
    'book a consultation': 'احجز استشارة',
    'explore our services': 'اكتشف خدماتنا',
    'agile · steadfast · tech-driven': 'مرونة · ثبات · ريادة تقنية',
    'who we help': 'لمن نعمل',
    'smes': 'المنشآت الصغيرة والمتوسطة',
    'entrepreneurs': 'رواد الأعمال',
    'growing businesses': 'الشركات النامية',
    'where we work': 'أين نعمل',
    'bahrain': 'البحرين',
    'ksa': 'السعودية',
    'uae': 'الإمارات',
    // about
    'about us': 'من نحن',
    'business accumen, data analytics and ai, working together': 'الخبرة التجارية وتحليل البيانات والذكاء الاصطناعي، يعملون معًا',
    'our vision': 'رؤيتنا',
    "to be the region's most trusted catalyst for intelligent business transformation, where human expertise, data analytics and ai turn every decision into a competitive edge.": 'أن نكون المحفّز الأكثر ثقة في المنطقة للتحول الذكي للأعمال، حيث تحوّل الخبرة البشرية وتحليل البيانات والذكاء الاصطناعي كل قرار إلى ميزة تنافسية.',
    'data-led intelligence | transform': 'ذكاء قائم على البيانات | تحوّل',
    'our mission': 'مهمتنا',
    'to empower smes and growing enterprises to scale with confidence by combining agile management consulting, data analytics and modern technology into insight-led, dependable solutions that turn data into decisions and decisions into growth.': 'تمكين المنشآت الصغيرة والمتوسطة والشركات النامية من النمو بثقة، من خلال الجمع بين الاستشارات الإدارية المرنة وتحليل البيانات والتقنيات الحديثة في حلول موثوقة قائمة على الرؤى، تحوّل البيانات إلى قرارات والقرارات إلى نمو.',
    'empower | analyse | scale': 'تمكين | تحليل | نمو',
    // services
    'our services': 'خدماتنا',
    'four ways we help your business move forward': 'أربع طرق نساعد بها عملك على التقدم',
    'management consulting': 'الاستشارات الإدارية',
    'practical strategy and structure to help your business run better.': 'استراتيجية وهيكلة عملية لمساعدة عملك على العمل بكفاءة أكبر.',
    'strategy and business planning': 'الاستراتيجية وتخطيط الأعمال',
    'process improvement': 'تحسين العمليات',
    'governance and operating models': 'الحوكمة ونماذج التشغيل',
    'performance and kpi frameworks': 'أطر الأداء ومؤشرات القياس',
    'finance & accounting operational setup': 'إعداد الأنظمة المالية والمحاسبية التشغيلية',
    'it & digital advisory': 'الاستشارات التقنية والرقمية',
    'technology guidance that fits your business and your budget.': 'إرشاد تقني يناسب عملك وميزانيتك.',
    'digital transformation roadmaps': 'خرائط طريق التحول الرقمي',
    'ai-enabled technology advisory': 'استشارات التقنية المدعومة بالذكاء الاصطناعي',
    'data analytics and business intelligence': 'تحليل البيانات وذكاء الأعمال',
    'accounting and business software selection': 'اختيار برامج المحاسبة والأعمال',
    'it systems and technology strategy': 'أنظمة تقنية المعلومات واستراتيجية التقنية',
    'compliance & governance advisory': 'استشارات الامتثال والحوكمة',
    'helping you get ready for, and stay on top of, your obligations.': 'نساعدك على الاستعداد لالتزاماتك والبقاء ملتزمًا بها.',
    'compliance readiness reviews': 'مراجعات الجاهزية للامتثال',
    'gap assessments of financial, tax and operational processes': 'تقييم الفجوات في العمليات المالية والضريبية والتشغيلية',
    'internal control framework design': 'تصميم إطار الرقابة الداخلية',
    'business setup support': 'دعم تأسيس الأعمال',
    'support for entrepreneurs and growing businesses setting up or expanding in the region.': 'دعم لرواد الأعمال والشركات النامية عند التأسيس أو التوسع في المنطقة.',
    'company formation support': 'دعم تأسيس الشركات',
    'entity selection advisory': 'استشارات اختيار الكيان القانوني',
    'market entry and gcc expansion planning': 'دخول الأسواق وتخطيط التوسع في دول الخليج',
    'business plans and feasibility studies': 'خطط الأعمال ودراسات الجدوى',
    'post-registration compliance guidance': 'إرشادات الامتثال بعد التسجيل',
    // statement
    'fast enough to adapt, reliable enough to trust, innovative enough to move businesses forward.': 'سريعون بما يكفي للتكيّف، وموثوقون بما يكفي لتثق بهم، ومبتكرون بما يكفي لدفع الأعمال إلى الأمام.',
    'for smes, entrepreneurs and growing businesses.': 'للمنشآت الصغيرة والمتوسطة ورواد الأعمال والشركات النامية.',
    // contact
    'contact us': 'تواصل معنا',
    'let us talk about your business': 'دعنا نتحدث عن عملك',
    'tell us what you are working on and we will get back to you.': 'أخبرنا بما تعمل عليه وسنعاود الاتصال بك.',
    'phone (bahrain): +973 3778 4440': 'الهاتف (البحرين): ' + ltr('+973 3778 4440'),
    'phone (uae): +971 55 9160149': 'الهاتف (الإمارات): ' + ltr('+971 55 9160149'),
    'email: contactus@aandaistratedge.com': 'البريد الإلكتروني: ' + ltr('contactus@aandaistratedge.com'),
    'whatsapp: +973 3778 4440': 'واتساب: ' + ltr('+973 3778 4440'),
    'instagram: @aaistratedge': 'إنستغرام: ' + ltr('@aaistratedge'),
    'facebook: @aandaistratedge': 'فيسبوك: ' + ltr('@aandaistratedge'),
    'full name': 'الاسم الكامل',
    'your name': 'اسمك',
    'email': 'البريد الإلكتروني',
    'phone / whatsapp': 'الهاتف / واتساب',
    'i am interested in': 'أنا مهتم بـ',
    'not sure yet': 'لست متأكدًا بعد',
    'message': 'الرسالة',
    'how can we help?': 'كيف يمكننا مساعدتك؟',
    'send message': 'إرسال الرسالة',
    'sending...': 'جارٍ الإرسال...',
    'message sent ✓': 'تم إرسال الرسالة ✓',
    'please fill in your name and email.': 'يرجى إدخال اسمك وبريدك الإلكتروني.',
    'please enter a valid email address.': 'يرجى إدخال بريد إلكتروني صحيح.',
    'sorry, we could not send your message. please email us at contactus@aandaistratedge.com or whatsapp us.': 'عذرًا، تعذّر إرسال رسالتك. يرجى مراسلتنا على ' + ltr('contactus@aandaistratedge.com') + ' أو التواصل عبر واتساب.',
    // footer
    'accounting · tax · compliance · business & it advisory': 'المحاسبة · الضرائب · الامتثال · الاستشارات التجارية والتقنية',
    'quick links': 'روابط سريعة',
    'compliance & governance': 'الامتثال والحوكمة',
    'get in touch': 'للتواصل',
    'instagram': 'إنستغرام',
    'facebook': 'فيسبوك',
    '© 2026 a&ai stratedge consulting w.l.l · cr no. 200354-1 · all rights reserved': '© 2026 ' + LRM + 'A&AI StratEdge Consulting W.L.L' + LRM + ' · س.ت ' + ltr('200354-1') + ' · جميع الحقوق محفوظة',
    'back to top ↑': 'العودة للأعلى ↑',
    'chat with us': 'تحدث معنا',
    // aria-labels
    'regions we work in': 'المناطق التي نعمل بها',
    'chat with us on whatsapp': 'تحدث معنا عبر واتساب'
  };

  var ATTRS = ['placeholder', 'aria-label'];
  var lang = 'en';
  var applying = false;
  var orig = new WeakMap();      // text node -> English text it started with
  var origAttr = new WeakMap();  // element -> {attr: English}
  var EN = {};                   // arabic -> english (fallback for text set by scripts)
  Object.keys(AR).forEach(function (k) { if (!(AR[k] in EN)) EN[AR[k]] = k; });

  function norm(s) { return s.replace(/\s+/g, ' ').trim().toLowerCase(); }

  function tText(node) {
    var raw = node.nodeValue;
    if (!raw || !raw.trim()) return;
    var key = norm(raw);
    if (lang === 'ar') {
      var ar = AR[key];
      if (ar !== undefined && raw.trim() !== ar) {
        if (!orig.has(node)) orig.set(node, raw);
        node.nodeValue = raw.replace(raw.trim(), ar);
      }
    } else if (orig.has(node)) {
      node.nodeValue = orig.get(node);
      orig.delete(node);
    } else if (EN[raw.trim()] !== undefined) {
      // text written by a script while Arabic was active, e.g. button label
      var en = EN[raw.trim()];
      node.nodeValue = raw.replace(raw.trim(), en.charAt(0).toUpperCase() + en.slice(1));
    }
  }

  function tAttrs(el) {
    var store = origAttr.get(el) || {};
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      var v = el.getAttribute(a);
      if (lang === 'ar') {
        var ar = AR[norm(v)];
        if (ar !== undefined && v !== ar) { store[a] = store[a] || v; el.setAttribute(a, ar); }
      } else if (store[a]) { el.setAttribute(a, store[a]); delete store[a]; }
    });
    origAttr.set(el, store);
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { tText(root); return; }
    if (root.nodeType !== 1) return;
    var tag = root.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE') return;
    tAttrs(root);
    for (var c = root.firstChild; c; c = c.nextSibling) walk(c);
  }

  // The form posts the option text to the mail function: keep it English so enquiries read the same.
  function pinOptionValues(root) {
    var opts = (root || document).querySelectorAll('select[name=service] option');
    for (var i = 0; i < opts.length; i++) {
      if (!opts[i].hasAttribute('data-en')) {
        opts[i].setAttribute('data-en', '1');
        opts[i].value = opts[i].textContent.trim();
      }
    }
  }

  function apply() {
    if (applying) return;
    applying = true;
    try {
      pinOptionValues();
      var root = document.documentElement;
      root.lang = lang;
      root.dir = lang === 'ar' ? 'rtl' : 'ltr';
      walk(document.body);
      var btn = document.getElementById('lang-toggle');
      if (btn) {
        btn.textContent = lang === 'ar' ? 'English' : 'العربية';
        btn.setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
        btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
      }
    } finally {
      // let queued mutation records from our own edits drain before listening again
      if (mo) mo.takeRecords();
      applying = false;
    }
  }

  function setLang(l) {
    lang = l === 'ar' ? 'ar' : 'en';
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
    apply();
  }
  window.setSiteLang = setLang;

  var mo;
  function start() {
    var q = '';
    try { q = new URLSearchParams(location.search).get('lang') || ''; } catch (e) {}
    var saved = '';
    try { saved = localStorage.getItem('site-lang') || ''; } catch (e) {}
    lang = (q || saved) === 'ar' ? 'ar' : 'en';

    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('#lang-toggle') : null;
      if (t) { e.preventDefault(); setLang(lang === 'ar' ? 'en' : 'ar'); }
    });

    var timer;
    mo = new MutationObserver(function () {
      if (applying) return;
      clearTimeout(timer);
      timer = setTimeout(apply, 30);
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    apply();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
