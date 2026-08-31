/* ============================================================
   main.js — inject header/footer, nav toggle, language switch,
   register modal · IWHM 2026
   ============================================================ */
(function () {
  'use strict';

  var LANG = (window.D && window.D.LANG) || 'id';

  function includePartials() {
    var nodes = document.querySelectorAll('[data-include]');
    var loads = [];
    nodes.forEach(function (node) {
      var name = node.getAttribute('data-include');
      var url = '/assets/partials/' + name + '-' + LANG + '.html';
      loads.push(
        fetch(url)
          .then(function (res) { return res.ok ? res.text() : ''; })
          .then(function (html) { node.innerHTML = html; })
          .catch(function () { /* partial belum tersedia — biarkan kosong */ })
      );
    });
    return Promise.all(loads);
  }

  function initNavToggle() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function initSubmenuToggles() {
    document.querySelectorAll('.site-nav__group-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      });
    });
  }

  function initRegisterModal() {
    var modal = document.getElementById('register-modal');
    if (!modal) return;
    var openers = document.querySelectorAll('[data-register]');
    var closers = modal.querySelectorAll('[data-modal-close]');
    var registrationUrl = window.D && window.D.REGISTRATION_URL;
    var lastFocused = null;

    function focusableEls() {
      return Array.prototype.slice.call(
        modal.querySelectorAll('a[href], button:not([disabled])')
      );
    }

    function openModal() {
      lastFocused = document.activeElement;
      modal.hidden = false;
      var closeBtn = modal.querySelector('.modal__close');
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      if (modal.hidden) return;
      modal.hidden = true;
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    openers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (registrationUrl) return; // biarkan link keluar berjalan normal
        e.preventDefault();
        openModal();
      });
      if (registrationUrl) {
        btn.setAttribute('href', registrationUrl);
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener');
      }
    });
    closers.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key !== 'Tab') return;
      // — Jebak fokus di dalam modal selagi terbuka —
      var items = focusableEls();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  function bindAppLinks() {
    if (!window.D || !window.D.APP_LINKS) return;
    document.querySelectorAll('[data-app-link]').forEach(function (a) {
      var url = window.D.APP_LINKS[a.getAttribute('data-app-link')];
      if (url) a.setAttribute('href', url);
    });
  }

  function initAccordions() {
    document.querySelectorAll('.accordion-item__trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.accordion-item');
        var open = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', open ? 'false' : 'true');
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
  }

  /* — Language switch: arahkan ke halaman yang sama di bahasa lain, bukan selalu ke beranda — */
  function fixLangSwitchLinks() {
    var currentFile = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.lang-switch a[href]').forEach(function (a) {
      var targetLang = a.getAttribute('href').indexOf('/en/') === 0 ? 'en' : 'id';
      a.setAttribute('href', '/' + targetLang + '/' + currentFile);
    });
  }

  function setFooterYear() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* — data-bind: mengisi teks dari window.D tanpa hardcode fakta di HTML (§1.7) —
     <span data-bind="EVENT.raceDay"></span> → dibaca dari D.EVENT.raceDay,
     otomatis pilih .id/.en kalau nilainya objek dwibahasa. */
  function resolvePath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return (acc && acc[key] !== undefined) ? acc[key] : undefined;
    }, obj);
  }

  function localize(value) {
    if (value && typeof value === 'object' && !Array.isArray(value) && (LANG in value)) {
      return value[LANG];
    }
    return value;
  }

  function bindData() {
    if (!window.D) return;
    document.querySelectorAll('[data-bind]').forEach(function (el) {
      var raw = resolvePath(window.D, el.getAttribute('data-bind'));
      var val = localize(raw);
      if (val === null || val === undefined) return; // biarkan render TBC di tempat lain
      el.textContent = val;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindData();
    includePartials().then(function () {
      initNavToggle();
      initSubmenuToggles();
      initRegisterModal();
      bindAppLinks();
      initAccordions();
      fixLangSwitchLinks();
      setFooterYear();
      document.dispatchEvent(new CustomEvent('partials:ready'));
    });
  });
})();
