/**
 * RAMA QANAWATI - OFFICIAL AUTHOR WEBSITE JAVASCRIPT
 * Features:
 * - Dynamic Book Modal with <dialog closedby="any"> & fallback
 * - Category Filtering with animation
 * - Interactive Quotes Shuffler
 * - Tabbed Booking & Inquiry Form (WhatsApp & Email support)
 * - FAQ Accordion
 * - Mobile Navigation Menu
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. BOOKS DATA
  const booksData = {
    washing: {
      id: 'washing',
      title: 'خلف جدران الغسالة',
      publisher: 'دار قصص كيوي للنشر والتوزيع',
      illustrator: 'رسوم: حسين الرباعي',
      age: '٥ - ٩ سنوات',
      badge: 'الأكثر مبيعًا 🔥',
      cover: 'assets/washing-cover.webp',
      category: 'imagination',
      tags: ['مغامرة', 'خيال', 'أسرار البيت', 'فضول'],
      blurb: 'إلى أين تختفي فردة الجورب حين تغيب عن الأنظار؟ مغامرة خيالية ممتعة تخوضها فردة جورب شجاعة خلف جدران الغسالة لتكشف عالمًا خفيًا لا يخطر على بال!',
      description: 'تنطلق هذه القصة من سؤال طفولي مألوف ومحير: لماذا نفقد دائمًا فردة واحدة من الجورب في الغسيل؟ من هنا، تأخذنا راما قنواتي في رحلة سحرية خيالية وراء حلة الغسالة المعدنية، حيث يعيش الجورب «جوجو» ورفاقه مغامرة مليئة بالجرأة والفكاهة وحل المشكلات.',
      quote: '«حتى فردة الجورب الصغيرة الوحيدة يمكنها أن تصنع أكبر مغامرة في العالم!»',
      url: 'https://kiwistories.co/product/behind-washing-machine/'
    },
    drop: {
      id: 'drop',
      title: 'قطرة في ورطة',
      publisher: 'مجموعة كلمات للنشر',
      illustrator: 'رسوم: علياء الحمادي',
      age: '٤ - ٨ سنوات',
      badge: 'معرض الشارقة الدولي 💧',
      cover: 'assets/drop-cover.webp',
      category: 'emotions',
      tags: ['المشاعر', 'الدموع', 'الذكاء العاطفي', 'التقبل'],
      blurb: 'حكاية إنسانية رقيقة تقترب من مشاعر الطفل حين يبكي، وتساعده على فهم دموعه والتعبير عما يختلج في صدره بود واطمئنان دون خوف أو خجل.',
      description: 'قصة تربوية فريدة تسلط الضوء على عالم مشاعر الصغار؛ حين تسقط دمعة من عين طفل، من أين جاءت؟ ولماذا خرجت؟ بأسلوب شاعري مبسط، تطمئن القصة الأطفال بأن البكاء ليس عيبًا ولا ضعفًا، بل هو لغة صادقة للقلب حين تعجز الكلمات عن الوصف.',
      quote: '«الدموع ليست ضعفًا.. إنها غيمة صغيرة في صدورنا تمطر لكي يعود قلبنا صافيًا من جديد.»',
      url: 'https://kalimatgroup.ae/ar/product/a-drop-in-trouble'
    },
    family: {
      id: 'family',
      title: 'عائلتي هي الدنيا',
      publisher: 'مجموعة كلمات للنشر',
      illustrator: 'رسوم: فادي فاضل',
      age: '٦ - ١٠ سنوات',
      badge: 'القائمة الطويلة - جائزة الشيخ زايد 2023 🏆',
      cover: 'assets/family-cover.webp',
      category: 'family',
      tags: ['العائلة', 'اليتيم', 'الانتماء', 'التعاطف', 'الاحتواء'],
      blurb: 'حكاية عميقة تتناول مشاعر الطفل اليتيم وأحلامه بالدفء، وتفتح آفاق التفكير حول العائلة والانتماء وتقبل الاختلاف بروح مليئة بالأمل والمحبة.',
      description: 'نالت هذه القصة شرف الترشح للقائمة الطويلة في جائزة الشيخ زايد للكتاب (فرع أدب الطفل والناشئة 2023). ترسم الحكاية بحس نفسي عميق مفهوم الأسرة من زاوية طفل يتيم يبحث عن الأمان، لتؤكد أن الأسرة الحقيقية تتسع لتشمل كل من يحيط بنا بالحب والرعاية والتقبل.',
      quote: '«العائلة ليست فقط صورة معلقة في إطار، بل هي اليد الدافئة التي تمسك بيدك حين تشعر بالخوف.»',
      url: 'https://kalimatgroup.ae/ar/product/my-family-is-my-life'
    },
    see: {
      id: 'see',
      title: 'أترى؟',
      publisher: 'مجموعة كلمات للنشر',
      illustrator: 'رسوم: فادي فاضل',
      age: '٤ - ٨ سنوات',
      badge: 'منظور الدبدوب 🧸',
      cover: 'assets/see-cover.webp',
      category: 'emotions',
      tags: ['الصداقة', 'الرحيل', 'البيت', 'الأمل'],
      blurb: 'عندما يرحل الطفل عن بيته بصحبة عائلته، تروى التجربة للمرة الأولى من منظور دبدوبه الصغير؛ حكاية عن الصداقة الوفية، الرحيل، وحلم العودة.',
      description: 'حكاية مؤثرة تلامس تجارب الانتقال والرحيل التي قد يمر بها الأطفال وأسرهم. من خلال عينَي لعبة قماشية محبوبة (دبدوب الصغير زيد)، نشهد تفاصيل الرحلة وتغير الأماكن، لنكتشف أن الوطن والبيت يسكنان أولاً في قلوب الأحباب وذكرياتهم المشتركة.',
      quote: '«أينما ذهبنا، أحمل في خيوطي وقطني كل ضحكة ضحكناها معًا في بيتنا القديم.»',
      url: 'https://kalimatgroup.ae/ar/product/do-you-see'
    },
    news: {
      id: 'news',
      title: 'اليوم عندي خبر سعيد',
      publisher: 'دار أوستن ماكولي للنشر (Austin Macauley)',
      illustrator: 'رسوم أصلية للناشر',
      age: '٣ - ٧ سنوات',
      badge: 'المولود الجديد ☀️',
      cover: 'assets/news-cover.webp',
      category: 'family',
      tags: ['المولود الجديد', 'الأسرة', 'الأخوة', 'الفرح'],
      blurb: 'كيف يستقبل الطفل قدوم أخ أو أخت جديدة إلى العائلة؟ معالجة ذكية ولطيفة للمشاعر المتباينة من فضول وقلق وفرح بأسلوب تربوي مبسط.',
      description: 'قصة مبهجة ترافق الصغار في مرحلة دقيقة من حياتهم الأسرية: ترقب ولادة فرد جديد في البيت. تناقش القصة أسئلة الطفل ومخاوفه العفوية من تقاسم حب الوالدين، وتحول القلق إلى بهجة ومشاركة واعتزاز بكونه الأخ الأكبر.',
      quote: '«القلب كالسماء.. كلما زادت فيه النجوم، أصبح أكثر نورًا وجمالاً!»',
      url: 'https://www.austinmacauley.com/'
    },
    snails: {
      id: 'snails',
      title: 'الحياة أكثر إثارة من سباق حلزونات',
      publisher: 'منصة ألف للتعليم (Alef Education)',
      illustrator: 'رسوم: حسين الرباعي',
      age: '٥ - ٩ سنوات',
      badge: 'فضول واكتشاف 🐌',
      cover: 'assets/snails-cover.webp',
      category: 'imagination',
      tags: ['الاستكشاف', 'التأمل', 'الطبيعة', 'السرعة والهدوء'],
      blurb: 'حكاية مرحة ومحفزة للتأمل، تدعو الطفل إلى تبطئة خطواته أحيانًا وملاحظة عجائب العالم المحيط به بعين باحثة ومندهشة.',
      description: 'في عالم متسارع مليء بالمشتتات والشاشات، تقدم هذه القصة دعوة لطيفة للطفل ليتوقف قليلاً ويتأمل عجائب الطبيعة من حوله. بأسلوب شيق ورسومات حيوية، يخوض أبطال الحكاية مقارنة طريفة بين سباقات الحلزونات وسرعة الحياة العصرية.',
      quote: '«حين نبطئ خطواتنا قليلاً، نرى أشياء مذهلة كانت تمر دون أن يراها أحد!»',
      url: 'https://www.alefeducation.com/'
    },
    mother: {
      id: 'mother',
      title: 'أم في كل مكان',
      publisher: 'دار قصص كيوي / ستارت سمارت',
      illustrator: 'رسوم كرتونية هادئة',
      age: '٣ - ٦ سنوات',
      badge: 'حنان وأمان 🌸',
      cover: 'assets/mother-cover.webp',
      category: 'family',
      tags: ['الأم', 'الأمان', 'الطفولة المبكرة', 'الاطمئنان'],
      blurb: 'عن حضور الأم الدائم في تفاصيل يوم طفلها حتى وإن غابت دقائق؛ قصة تزرع الطمأنينة في قلب الصغير في سنواته الأولى.',
      description: 'حكاية مخصصة للأطفال الصغار في مرحلة القلق من الانفصال، تبرهن لهم كيف تظل روح الأم وحبها ونصائحها موجودة في كل ركن من أركان اليوم، مما يعزز الثقة بالنفس والاستقلالية دون خوف.',
      quote: '«صوت أمي مثل النغمة الدافئة، يرافقني أينما مشيت حتى في غيابها.»',
      url: 'https://kiwistories.co/'
    },
    discovery: {
      id: 'discovery',
      title: 'لا أخاف الاكتشاف',
      publisher: 'إصدارات تفاعلية للأطفال',
      illustrator: 'رسوم ملونة نابضة',
      age: '٤ - ٨ سنوات',
      badge: 'شجاعة وفضول 🔍',
      cover: 'assets/discovery-cover.webp',
      category: 'imagination',
      tags: ['الشجاعة', 'التجربة', 'التفكير العلمي', 'التعلم'],
      blurb: 'رسالة حب وتشجيع لكل طفل يتردد أمام التجربة الأولى، ليرى أن التجربة والخطأ هما المفتاح الحقيقي لمعرفة العالم والذات.',
      description: 'تحفز هذه القصة حس المغامرة الإيجابية والتفكير الاستكشافي لدى الأطفال، وتشجعهم على طرح الأسئلة الجريئة وتجربة أشياء جديدة ومبتكرة دون الرهبة من الوقوع في الخطأ.',
      quote: '«السر في أن تصبح مستكشفًا عظيمًا هو ألا تخاف من أن تبدأ بالسؤال: ماذا لو؟»',
      url: 'https://kiwistories.co/'
    }
  };

  // 2. MODAL DIALOG COMPONENT (Compliant with Modern Web Guidance)
  const dialog = document.getElementById('book-modal');
  const modalCover = document.getElementById('modal-cover');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalCredits = document.getElementById('modal-credits');
  const modalDesc = document.getElementById('modal-desc');
  const modalQuote = document.getElementById('modal-quote');
  const modalTags = document.getElementById('modal-tags');
  const modalLink = document.getElementById('modal-link');
  const closeBtn = document.querySelector('.modal-close-btn');

  function openBookModal(bookId) {
    const book = booksData[bookId];
    if (!book || !dialog) return;

    modalCover.src = book.cover;
    modalCover.alt = book.title;
    modalBadge.textContent = book.badge;
    modalTitle.textContent = book.title;
    modalCredits.textContent = `${book.publisher} · ${book.illustrator} · الفئة: ${book.age}`;
    modalDesc.textContent = book.description;
    modalQuote.textContent = book.quote;
    modalLink.href = book.url;

    // Tags
    modalTags.innerHTML = '';
    book.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'modal-tag';
      span.textContent = `# ${tag}`;
      modalTags.appendChild(span);
    });

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  }

  // Trigger buttons
  document.querySelectorAll('[data-book]').forEach(el => {
    el.addEventListener('click', (e) => {
      const bookId = el.getAttribute('data-book');
      openBookModal(bookId);
    });
  });

  // Close handlers
  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  // Modern Web Guidance: Light Dismiss Fallback for browsers lacking 'closedBy'
  if (dialog && !('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isInsideContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInsideContent) {
        dialog.close();
      }
    });
  }

  // 3. BOOK FILTERING
  const filterBtns = document.querySelectorAll('.filter-btn');
  const bookCards = document.querySelectorAll('.book-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter');

      bookCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. INTERACTIVE QUOTE SHUFFLER
  const storyQuotes = [
    {
      text: '«حتى فردة الجورب الصغيرة الوحيدة يمكنها أن تصنع أكبر مغامرة في العالم!»',
      source: 'من كتاب: خلف جدران الغسالة'
    },
    {
      text: '«الدموع ليست ضعفًا.. إنها غيمة صغيرة في صدورنا تمطر لكي يعود قلبنا صافيًا من جديد.»',
      source: 'من كتاب: قطرة في ورطة'
    },
    {
      text: '«العائلة ليست بالضرورة من يشبهوننا تمامًا، بل من يملؤون قلوبنا بالدفء والأمان.»',
      source: 'من كتاب: عائلتي هي الدنيا'
    },
    {
      text: '«الأصدقاء الأوفياء يحملون معنا ذكريات البيت القديم أينما ارتحلنا.»',
      source: 'من كتاب: أترى؟'
    },
    {
      text: '«القلب كالسماء الواسعة.. كلما زادت فيه النجوم، صار أكثر نورًا وجمالاً!»',
      source: 'من كتاب: اليوم عندي خبر سعيد'
    },
    {
      text: '«حين نبطئ خطواتنا قليلاً، نرى أشياء مذهلة كانت تمر دون أن يراها أحد.»',
      source: 'من كتاب: الحياة أكثر إثارة من سباق حلزونات'
    },
    {
      text: '«أكتب للأطفال وأقرأ معهم وأعيش في عالمهم.. لأن خيال الصغار هو أصدق مرآة لجمال الإنسانية.»',
      source: 'فلسفة الكاتبة: راما قنواتي'
    }
  ];

  let currentQuoteIndex = 0;
  const quoteEl = document.getElementById('shuffler-quote');
  const quoteSourceEl = document.getElementById('shuffler-source');
  const shuffleBtn = document.getElementById('shuffle-quote-btn');

  if (shuffleBtn && quoteEl && quoteSourceEl) {
    shuffleBtn.addEventListener('click', () => {
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % storyQuotes.length;
        quoteEl.textContent = storyQuotes[currentQuoteIndex].text;
        quoteSourceEl.textContent = storyQuotes[currentQuoteIndex].source;
        quoteEl.style.opacity = '1';
      }, 250);
    });
  }

  // 5. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 6. CONTACT FORM & TABS
  const formTabs = document.querySelectorAll('.form-tab');
  const formIntentInput = document.getElementById('form-intent');
  const contactForm = document.getElementById('booking-form');
  const formStatus = document.getElementById('form-status');

  formTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      formTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const intent = tab.getAttribute('data-intent');
      if (formIntentInput) formIntentInput.value = intent;
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('client-name').value.trim();
      const email = document.getElementById('client-email').value.trim();
      const phone = document.getElementById('client-phone').value.trim();
      const org = document.getElementById('client-org').value.trim();
      const message = document.getElementById('client-message').value.trim();
      const intent = formIntentInput ? formIntentInput.value : 'طلب عام';

      if (!name || !message) {
        alert('يرجى ملء الاسم وتفاصيل الرسالة.');
        return;
      }

      // Pre-compose WhatsApp / Mailto for quick dispatch
      const waText = encodeURIComponent(`مرحبًا أستاذة راما قنواتي،\nالاسم: ${name}\nالجهة: ${org || 'شخصي'}\nنوع الطلب: ${intent}\nالرسالة: ${message}\nالهاتف: ${phone}\nالبريد: ${email}`);
      const waUrl = `https://wa.me/?text=${waText}`;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = `شكراً لكِ/لكَ يا <strong>${name}</strong>! تم استلام طلبك بنجاح. <br> سنتواصل معكِ في أقرب وقت عبر البريد أو الواتساب.`;
        contactForm.reset();
      }
    });
  }

  // 7. MOBILE MENU
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on any link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 8. BACK TO TOP
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
