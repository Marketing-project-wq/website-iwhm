/* ============================================================
   countdown.js — hitung mundur ke race day
   Target diambil dari D.EVENT.raceDayISO (SSOT) — TIDAK di-hardcode di HTML.
   Tanggal sudah pasti (§8) → tampil lugas, tanpa label peringatan,
   tanpa animasi angka berputar (§6.6).
   ============================================================ */
(function () {
  'use strict';

  var LANG = (window.D && window.D.LANG) || 'id';
  var LABELS = {
    id: ['Hari', 'Jam', 'Menit', 'Detik'],
    en: ['Days', 'Hours', 'Min', 'Sec']
  };

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function build(el) {
    el.classList.add('countdown');
    var labels = LABELS[LANG] || LABELS.id;
    var refs = [];
    ['d', 'h', 'm', 's'].forEach(function (k, i) {
      var unit = document.createElement('div');
      unit.className = 'cd-unit';
      var num = document.createElement('span');
      num.className = 'cd-unit__num numeral';
      num.textContent = '00';
      var lab = document.createElement('span');
      lab.className = 'cd-unit__label';
      lab.textContent = labels[i];
      unit.appendChild(num);
      unit.appendChild(lab);
      el.appendChild(unit);
      refs.push(num);
    });
    return refs; // [days, hours, minutes, seconds]
  }

  function render(refs, target) {
    var diff = Math.max(0, target - Date.now());
    var s = Math.floor(diff / 1000);
    var d = Math.floor(s / 86400); s -= d * 86400;
    var h = Math.floor(s / 3600);  s -= h * 3600;
    var m = Math.floor(s / 60);    s -= m * 60;
    refs[0].textContent = String(d);
    refs[1].textContent = pad2(h);
    refs[2].textContent = pad2(m);
    refs[3].textContent = pad2(s);
  }

  function init() {
    var nodes = document.querySelectorAll('[data-countdown]');
    if (!nodes.length) return;
    var fallbackISO = (window.D && window.D.EVENT && window.D.EVENT.raceDayISO) || '';
    nodes.forEach(function (el) {
      var iso = el.getAttribute('data-countdown') || fallbackISO;
      var target = new Date(iso).getTime();
      if (isNaN(target)) return;
      var refs = build(el);
      render(refs, target);
      setInterval(function () { render(refs, target); }, 1000);
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
