/* ============================================================
   main.js — inject partials, nav, language switch, modal,
             dan render komponen data-* dari data.js (SSOT).
   ============================================================ */
(function () {
  'use strict';

  var D = window.D || {};
  var LANG = D.LANG || 'id';
  var OTHER = (LANG === 'en') ? 'id' : 'en';

  var STR = {
    id: {
      modalTitle: 'Pendaftaran Segera Dibuka',
      modalBody: 'Pendaftaran IWHM 2026 dibuka pada Agustus 2026. Tautan pendaftaran resmi akan tampil di sini begitu tersedia.',
      modalClose: 'Tutup',
      soon: 'Segera diumumkan',
      tbc: 'Menunggu konfirmasi',
      off: 'diskon',
      viewAll: 'Selengkapnya',
      partnersSoon: 'Ruang mitra — segera diumumkan',
      women: 'pelari perempuan',
      cats: 'kategori: 5K · 10K · HM',
      comm: 'komunitas lari mitra',
      age: 'rentang usia'
    },
    en: {
      modalTitle: 'Registration Opening Soon',
      modalBody: 'IWHM 2026 registration opens in August 2026. The official registration link will appear here as soon as it is available.',
      modalClose: 'Close',
      soon: 'To be announced',
      tbc: 'To be confirmed',
      off: 'off',
      viewAll: 'View all',
      partnersSoon: 'Partner space — to be announced',
      women: 'women runners',
      cats: 'categories: 5K · 10K · HM',
      comm: 'partner running communities',
      age: 'age range'
    }
  };
  var S = STR[LANG] || STR.id;

  function t(o) { return o ? (o[LANG] != null ? o[LANG] : (o.id != null ? o.id : '')) : ''; }
  function elm(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function fmtNum(n) {
    if (n == null) return '';
    return LANG === 'id' ? n.toLocaleString('id-ID') : n.toLocaleString('en-US');
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectPartials().then(function () {
      buildNav();
      wireBurger();
      wireDropdowns();
      wireLangSwitch();
      markActive();
      bindEventStrings();
      renderFactStrip();
      renderCategoryCards();
      renderWeekend();
      renderTicketPreview();
      renderNews();
      renderPartners();
      setYear();
      buildModal();
      wireRegister();
    });
  });

  /* ---- Partials ---- */
  function injectPartials() {
    var jobs = [];
    document.querySelectorAll('[data-partial]').forEach(function (ph) {
      var name = ph.getAttribute('data-partial');
      jobs.push(
        fetch('../assets/partials/' + name + '-' + LANG + '.html')
          .then(function (r) { return r.ok ? r.text() : ''; })
          .then(function (html) { ph.innerHTML = html; })
          .catch(function () {})
      );
    });
    return Promise.all(jobs);
  }

  /* ---- Navigation ---- */
  function buildNav() {
    var list = document.querySelector('.nav__list');
    if (!list || !D.NAV) return;
    D.NAV.forEach(function (item) {
      var li = elm('li', item.children ? 'has-menu' : '');
      if (item.children) {
        var id = 'menu-' + item.key;
        var btn = elm('button', 'nav__toggle');
        btn.type = 'button';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', id);
        btn.innerHTML = esc(t(item.label)) + '<span class="nav__caret" aria-hidden="true"></span>';
        var sub = elm('ul', 'nav__menu');
        sub.id = id;
        item.children.forEach(function (c) {
          var cli = elm('li');
          cli.innerHTML = '<a href="' + esc(c.href) + '">' + esc(t(c.label)) + '</a>';
          sub.appendChild(cli);
        });
        li.appendChild(btn);
        li.appendChild(sub);
      } else {
        li.innerHTML = '<a class="nav__link" href="' + esc(item.href) + '">' + esc(t(item.label)) + '</a>';
      }
      list.appendChild(li);
    });
  }

  function wireBurger() {
    var burger = document.querySelector('.nav__burger');
    var nav = document.querySelector('.nav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      burger.setAttribute('aria-expanded', String(!open));
    });
  }

  function wireDropdowns() {
    var toggles = document.querySelectorAll('.nav__toggle');
    toggles.forEach(function (btn) {
      var parent = btn.closest('.has-menu');
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = parent.getAttribute('data-open') === 'true';
        closeAllMenus();
        parent.setAttribute('data-open', String(!open));
        btn.setAttribute('aria-expanded', String(!open));
      });
    });
    document.addEventListener('click', closeAllMenus);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAllMenus(); closeModal(); }
    });
  }
  function closeAllMenus() {
    document.querySelectorAll('.has-menu[data-open="true"]').forEach(function (p) {
      p.setAttribute('data-open', 'false');
      var b = p.querySelector('.nav__toggle');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  function wireLangSwitch() {
    var path = location.pathname;
    var otherPath = path.indexOf('/' + LANG + '/') !== -1
      ? path.replace('/' + LANG + '/', '/' + OTHER + '/')
      : path;
    document.querySelectorAll('[data-lang]').forEach(function (a) {
      var lang = a.getAttribute('data-lang');
      if (lang === LANG) {
        a.setAttribute('aria-current', 'true');
        a.setAttribute('href', path + location.hash);
      } else {
        a.removeAttribute('aria-current');
        a.setAttribute('href', otherPath + location.search + location.hash);
      }
    });
  }

  function markActive() {
    var file = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__list a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === file) {
        a.setAttribute('aria-current', 'page');
        var menu = a.closest('.nav__menu');
        if (menu) {
          var tg = document.querySelector('[aria-controls="' + menu.id + '"]');
          if (tg) tg.classList.add('is-active-parent');
        }
      }
    });
  }

  /* ---- Bind EVENT strings (no facts hardcoded in HTML, §1.7) ---- */
  function bindEventStrings() {
    var E = D.EVENT || {};
    var map = {
      heroHeadline: t(E.heroHeadline),
      heroHeadlineAlt: t(E.heroHeadlineAlt),
      heroSub: t(E.heroSub),
      raceDay: t(E.raceDay),
      venue: t(E.venue),
      hours: t(E.hours),
      description: t(E.description),
      theme: t(E.theme),
      hashtag: E.hashtag || '',
      hashtagAlt: E.hashtagAlt || ''
    };
    document.querySelectorAll('[data-bind]').forEach(function (n) {
      var key = n.getAttribute('data-bind');
      if (map[key] != null && map[key] !== '') n.textContent = map[key];
    });
  }

  /* ---- Fact strip ---- */
  function renderFactStrip() {
    var host = document.querySelector('[data-fact-strip]');
    if (!host) return;
    var E = D.EVENT || {};
    var facts = [
      { num: fmtNum(E.quota), label: S.women },
      { num: String((D.CATEGORIES || []).length || 3), label: S.cats },
      { num: E.communities || '45++', label: S.comm },
      { num: E.ageRange || '', label: S.age }
    ];
    facts.forEach(function (f) {
      var item = elm('div', 'fact');
      item.innerHTML = '<span class="fact__num numeral">' + esc(f.num) + '</span>' +
                       '<span class="fact__label">' + esc(f.label) + '</span>';
      host.appendChild(item);
    });
  }

  /* ---- Category cards (petal berbeda per kategori, §6.4) ---- */
  function renderCategoryCards() {
    var host = document.querySelector('[data-category-cards]');
    if (!host || !D.CATEGORIES) return;
    D.CATEGORIES.forEach(function (c) {
      var card = elm('article', 'cat-card');
      var media = '<div class="cat-card__media media-placeholder ' + esc(c.petal) + '">' +
                    '<span class="media-placeholder__tag">Foto ' + esc(c.name) + ' menyusul</span>' +
                  '</div>';
      var distance = (c.name === 'HM') ? 'Half Marathon' : c.name;
      card.innerHTML =
        media +
        '<h3 class="cat-card__name">' + esc(c.name) + '</h3>' +
        '<!-- DRAFT-COPY: menunggu approval klien (§9.5 one-liner) -->' +
        '<p class="cat-card__tag">' + esc(t(c.tagline)) + '</p>' +
        '<p class="cat-card__desc">' + esc(t(c.desc)) + '</p>' +
        '<a class="cat-card__link" href="categories.html">Kategori & Podium</a>';
      host.appendChild(card);
    });
  }

  /* ---- Race weekend (subset TIMELINE: item November) ---- */
  function renderWeekend() {
    var host = document.querySelector('[data-weekend]');
    if (!host || !D.TIMELINE) return;
    D.TIMELINE.filter(function (i) { return i.dateISO.indexOf('2026-11') === 0; }).forEach(function (i) {
      var card = elm('article', 'wk-card' + (i.highlight ? ' wk-card--hot' : ''));
      var place = t(i.place);
      var hours = t(i.hours);
      card.innerHTML =
        '<span class="wk-card__kicker">' + esc(t(i.when)) + '</span>' +
        '<h3 class="wk-card__title">' + esc(t(i.title)) + '</h3>' +
        (hours ? '<p class="wk-card__date">' + esc(hours) + '</p>' : '') +
        (place ? '<p class="wk-card__place">' + esc(place) + '</p>' : '');
      host.appendChild(card);
    });
  }

  /* ---- Ticket preview (sembunyikan hidden:true) ---- */
  function renderTicketPreview() {
    var host = document.querySelector('[data-ticket-preview]');
    if (!host || !D.TICKETS) return;
    D.TICKETS.filter(function (tk) { return !tk.hidden; }).forEach(function (tk) {
      var card = elm('article', 'tk-card');
      var priceHtml = (tk.price == null)
        ? '<span>' + esc(S.soon) + '</span> <span class="badge badge--tbc">' + esc(S.tbc) + '</span>'
        : esc(tk.price);
      var aud = t(tk.audience);
      card.innerHTML =
        '<span class="tk-card__disc numeral">' + (tk.discount ? '-' + tk.discount + '%' : '0%') + '</span>' +
        '<h3 class="tk-card__name">' + esc(t(tk.name)) + '</h3>' +
        (aud ? '<p class="tk-card__aud">' + esc(aud) + '</p>' : '') +
        '<p class="tk-card__price">' + priceHtml + '</p>';
      host.appendChild(card);
    });
  }

  /* ---- News ---- */
  function renderNews() {
    var host = document.querySelector('[data-news]');
    if (!host || !D.NEWS) return;
    D.NEWS.slice(0, 2).forEach(function (n) {
      var card = elm('article', 'news-card');
      card.innerHTML =
        '<span class="news-card__date">' + esc(t(n.date)) + '</span>' +
        '<h3 class="news-card__title">' + esc(t(n.title)) + '</h3>' +
        '<p class="news-card__excerpt">' + esc(t(n.excerpt)) + '</p>';
      host.appendChild(card);
    });
  }

  /* ---- Partners (kosong sampai dikonfirmasi) ---- */
  function renderPartners() {
    var host = document.querySelector('[data-partners]');
    if (!host) return;
    if (!D.PARTNERS || !D.PARTNERS.length) {
      for (var i = 0; i < 4; i++) {
        host.appendChild(elm('div', 'partner-slot', esc(S.partnersSoon)));
      }
    }
  }

  function setYear() {
    document.querySelectorAll('[data-year]').forEach(function (n) {
      n.textContent = String(new Date().getFullYear());
    });
  }

  /* ---- Register modal (§1.5 — modal info, BUKAN form) ---- */
  var modal, lastFocus;
  function buildModal() {
    modal = elm('div', 'modal');
    modal.hidden = true;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'reg-modal-title');
    modal.innerHTML =
      '<button class="modal__backdrop" tabindex="-1" aria-label="' + esc(S.modalClose) + '"></button>' +
      '<div class="modal__dialog">' +
        '<button class="modal__close" aria-label="' + esc(S.modalClose) + '">&times;</button>' +
        '<h2 id="reg-modal-title">' + esc(S.modalTitle) + '</h2>' +
        '<p>' + esc(S.modalBody) + '</p>' +
      '</div>';
    document.body.appendChild(modal);
    modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
  }
  function openModal() {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.querySelector('.modal__close').focus();
  }
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function wireRegister() {
    var url = D.REGISTRATION_URL;
    document.querySelectorAll('[data-register]').forEach(function (node) {
      if (url) {
        if (node.tagName === 'A') {
          node.setAttribute('href', url);
          node.setAttribute('target', '_blank');
          node.setAttribute('rel', 'noopener');
        }
      } else {
        node.setAttribute('aria-haspopup', 'dialog');
        if (node.tagName === 'A') node.setAttribute('href', '#');
        node.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
      }
    });
  }
})();
