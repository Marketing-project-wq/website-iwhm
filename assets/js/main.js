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

    openers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (registrationUrl) return; // biarkan link keluar berjalan normal
        e.preventDefault();
        modal.hidden = false;
        var closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) closeBtn.focus();
      });
      if (registrationUrl) {
        btn.setAttribute('href', registrationUrl);
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener');
      }
    });
    closers.forEach(function (btn) {
      btn.addEventListener('click', function () { modal.hidden = true; });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.hidden = true;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) modal.hidden = true;
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
      setFooterYear();
      document.dispatchEvent(new CustomEvent('partials:ready'));
    });
  });
})();
