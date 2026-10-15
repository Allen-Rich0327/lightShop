document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const isHome = header && header.dataset.header === 'home';

  /* Mobile nav */
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Header scroll state */
  function updateHeader() {
    if (!header) return;
    if (isHome) {
      if (window.scrollY > 40) {
        header.classList.add('is-solid');
        header.classList.remove('is-transparent');
      } else {
        header.classList.remove('is-solid');
        header.classList.add('is-transparent');
      }
    } else {
      header.classList.toggle('is-solid', window.scrollY > 10);
    }
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* Hero carousel */
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const prevBtn = document.querySelector('[data-hero="prev"]');
  const nextBtn = document.querySelector('[data-hero="next"]');
  let slideIndex = 0;
  let slideTimer;

  function goToSlide(index) {
    if (!slides.length) return;
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === slideIndex);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === slideIndex);
    });
  }

  function nextSlide() { goToSlide(slideIndex + 1); }
  function prevSlide() { goToSlide(slideIndex - 1); }

  function startCarousel() {
    stopCarousel();
    if (slides.length < 2) return;
    slideTimer = setInterval(nextSlide, 6500);
  }

  function stopCarousel() {
    if (slideTimer) clearInterval(slideTimer);
  }

  if (slides.length) {
    if (prevBtn) prevBtn.addEventListener('click', function () { prevSlide(); startCarousel(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { nextSlide(); startCarousel(); });
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goToSlide(Number(dot.dataset.heroDot) || 0);
        startCarousel();
      });
    });

    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopCarousel);
      carousel.addEventListener('mouseleave', startCarousel);
    }
    startCarousel();
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Product filter + search */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');
  const searchInput = document.getElementById('productSearch');
  const emptyState = document.getElementById('emptyState');
  let activeFilter = 'all';

  function applyProductFilters() {
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visible = 0;

    productCards.forEach(function (card) {
      const category = card.dataset.category;
      const text = card.textContent.toLowerCase();
      const matchFilter = activeFilter === 'all' || category === activeFilter;
      const matchSearch = !keyword || text.includes(keyword);
      const show = matchFilter && matchSearch;

      card.classList.toggle('is-hidden', !show);
      if (show) visible += 1;
    });

    if (emptyState) {
      emptyState.classList.toggle('is-show', visible === 0);
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';
      applyProductFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyProductFilters);
  }

  /* Gallery thumbs */
  const mainImage = document.querySelector('.main-image');
  const thumbs = document.querySelectorAll('.thumb');

  if (mainImage && thumbs.length) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        const bg = thumb.style.backgroundImage;
        if (!bg) return;

        mainImage.classList.add('is-switching');
        setTimeout(function () {
          mainImage.style.backgroundImage = bg;
          mainImage.classList.remove('is-switching');
        }, 180);

        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      });
    });
  }

  /* Float sales panel */
  const floatToggle = document.getElementById('floatContactToggle');
  const floatPanel = document.getElementById('floatSalesPanel');
  if (floatToggle && floatPanel) {
    floatToggle.addEventListener('click', function () {
      const open = floatPanel.hasAttribute('hidden');
      if (open) {
        floatPanel.removeAttribute('hidden');
        floatToggle.classList.add('is-open');
        floatToggle.setAttribute('aria-expanded', 'true');
      } else {
        floatPanel.setAttribute('hidden', '');
        floatToggle.classList.remove('is-open');
        floatToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', function (e) {
      if (!floatToggle.contains(e.target) && !floatPanel.contains(e.target)) {
        floatPanel.setAttribute('hidden', '');
        floatToggle.classList.remove('is-open');
        floatToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* FAQ: only one open at a time */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });
});
