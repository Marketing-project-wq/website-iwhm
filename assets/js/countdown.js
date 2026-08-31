/* ============================================================
   countdown.js — hitung mundur ke race day · IWHM 2026
   Tanpa animasi angka berputar (§6.6). Update tiap detik, statis.
   ============================================================ */
(function () {
  'use strict';

  function pad(n) { return String(n).padStart(2, '0'); }

  function render(el, target) {
    var now = new Date();
    var diff = target.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);
    var seconds = Math.floor((diff % 60000) / 1000);

    var dEl = el.querySelector('[data-cd-days]');
    var hEl = el.querySelector('[data-cd-hours]');
    var mEl = el.querySelector('[data-cd-minutes]');
    var sEl = el.querySelector('[data-cd-seconds]');
    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(minutes);
    if (sEl) sEl.textContent = pad(seconds);
  }

  function init() {
    var el = document.querySelector('[data-countdown]');
    if (!el || !window.D) return;
    var target = new Date(window.D.EVENT.raceDayISO);

    render(el, target);
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var interval = reduceMotion ? 60000 : 1000;
    setInterval(function () { render(el, target); }, interval);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
