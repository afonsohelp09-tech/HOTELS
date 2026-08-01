/** Nhalabene ops helpers — toast, WA, calendar, excel, empty state */
function nhbToast(msg, type) {
  type = type || 'default'; // default|ok|err|warn
  var host = document.getElementById('nhbToastHost');
  if (!host) {
    host = document.createElement('div');
    host.id = 'nhbToastHost';
    host.className = 'nhb-toast-host';
    document.body.appendChild(host);
  }
  var el = document.createElement('div');
  el.className = 'nhb-toast ' + type;
  el.textContent = msg;
  host.appendChild(el);
  setTimeout(function () { el.classList.add('show'); }, 10);
  setTimeout(function () {
    el.classList.remove('show');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 280);
  }, 3400);
}

function nhbPhoneDigits(tel) {
  return String(tel || '').replace(/[^\d+]/g, '');
}

function nhbWhatsAppUrl(tel, text) {
  var d = nhbPhoneDigits(tel).replace(/^\+/, '');
  var q = encodeURIComponent(text || '');
  return d ? ('https://wa.me/' + d + '?text=' + q) : ('https://wa.me/?text=' + q);
}

function nhbResaWhatsAppText(r, brand) {
  brand = brand || 'Nhalabene';
  var pax = (typeof t === 'function') ? t('wa_pax') : 'Pax';
  var bags = (typeof t === 'function') ? t('wa_bags') : 'Bags';
  var flight = (typeof t === 'function') ? t('wa_flight') : 'Flight';
  var telL = (typeof t === 'function') ? t('wa_tel') : 'Tel.';
  return brand + ' #' + (r.id || '') + '\n' +
    (r.clientPrenom || '') + ' ' + (r.clientNom || '') + '\n' +
    (r.origine || '') + ' → ' + (r.destination || '') + '\n' +
    (r.dateTransfer || '') + ' ' + (r.heureTransfer || '') + '\n' +
    pax + ': ' + (r.personnes || '') + ' | ' + bags + ': ' + (r.malas || '') +
    (r.numVol ? ('\n' + flight + ': ' + r.numVol) : '') +
    (r.telephone ? ('\n' + telL + ' ' + r.telephone) : '');
}

function nhbCalendarUrl(r) {
  function pad(n){ return ('0'+n).slice(-2); }
  var d = String(r.dateTransfer || '').replace(/-/g,'');
  var hm = String(r.heureTransfer || '12:00').split(':');
  var h = pad(parseInt(hm[0]||12,10));
  var m = pad(parseInt(hm[1]||0,10));
  var start = d + 'T' + h + m + '00';
  var endH = pad((parseInt(h,10)+2)%24);
  var end = d + 'T' + endH + m + '00';
  var cal = (typeof t === 'function') ? t('cal_transfer') : 'Transfer';
  var text = encodeURIComponent(cal + ' ' + (r.id||''));
  var details = encodeURIComponent(nhbResaWhatsAppText(r));
  var loc = encodeURIComponent((r.origine||'') + ' → ' + (r.destination||''));
  return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + text +
    '&dates=' + start + '/' + end + '&details=' + details + '&location=' + loc;
}

function nhbExportResasCsv(rows, filename) {
  rows = rows || [];
  var headers = (typeof t === 'function' && t('csv_headers'))
    ? t('csv_headers').split(';')
    : ['ID','Hotel','Client','Tel','Origin','Destination','Date','Time','Pax','Bags','Flight','Status','Price','Driver','Comments'];
  function cell(v) {
    var s = String(v == null ? '' : v).replace(/"/g, '""');
    return '"' + s + '"';
  }
  var lines = [headers.join(';')];
  rows.forEach(function (r) {
    lines.push([
      r.id, r.hotelId, ((r.clientPrenom||'')+' '+(r.clientNom||'')).trim(),
      r.telephone, r.origine, r.destination, r.dateTransfer, r.heureTransfer,
      r.personnes, r.malas, r.numVol,
      (typeof nhbStatusLabel === 'function' ? nhbStatusLabel(r.statut) : r.statut),
      (r.prixFinal != null ? r.prixFinal : r.prixAuto),
      r.chauffeurId, r.commentaires
    ].map(cell).join(';'));
  });
  var blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename || ('reservas-' + new Date().toISOString().slice(0,10) + '.csv');
  a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
}

function nhbEmptyHtml(title, hint) {
  return '<div class="nhb-empty"><div class="nhb-empty-title">' + title + '</div>' +
    (hint ? '<div class="nhb-empty-hint">' + hint + '</div>' : '') + '</div>';
}

function nhbTodayISO() {
  var d = new Date();
  return d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + ('0'+d.getDate()).slice(-2);
}

function nhbAddDaysISO(iso, days) {
  var p = (iso||nhbTodayISO()).split('-');
  var d = new Date(parseInt(p[0],10), parseInt(p[1],10)-1, parseInt(p[2],10) + (days||0));
  return d.getFullYear() + '-' + ('0'+(d.getMonth()+1)).slice(-2) + '-' + ('0'+d.getDate()).slice(-2);
}

/** Préférences locales (par portail) — clé: nhb_prefs_<scope> */
function nhbPrefsKey(scope) {
  return 'nhb_prefs_' + (scope || 'app');
}
function nhbPrefsGet(scope) {
  try {
    return JSON.parse(localStorage.getItem(nhbPrefsKey(scope)) || '{}') || {};
  } catch (e) { return {}; }
}
function nhbPrefsSet(scope, obj) {
  try {
    localStorage.setItem(nhbPrefsKey(scope), JSON.stringify(obj || {}));
  } catch (e) { /* ignore */ }
}
function nhbApplyPrefs(scope) {
  var p = nhbPrefsGet(scope);
  if (p.lang && typeof setLang === 'function') {
    try { setLang(p.lang); } catch (e) { /* ignore */ }
  }
  document.documentElement.setAttribute('data-density', p.density === 'compact' ? 'compact' : 'comfortable');
  if (p.currency) document.documentElement.setAttribute('data-currency', p.currency);
  return p;
}
function nhbFormatMoney(n, scope) {
  var cur = (nhbPrefsGet(scope).currency) || 'EUR';
  var v = Number(n);
  if (isNaN(v)) return '—';
  var sym = cur === 'USD' ? 'USD' : (cur === 'GBP' ? 'GBP' : 'EUR');
  return v.toFixed(2) + ' ' + sym;
}

/** Pagination client */
function nhbPaginate(list, page, pageSize) {
  list = list || [];
  pageSize = Math.max(5, parseInt(pageSize, 10) || 25);
  var total = list.length;
  var totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
  page = Math.min(Math.max(1, parseInt(page, 10) || 1), totalPages);
  var start = (page - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    page: page,
    pageSize: pageSize,
    total: total,
    totalPages: totalPages
  };
}
function nhbRenderPager(hostId, pageInfo, onChange) {
  var host = document.getElementById(hostId);
  if (!host) return;
  if (!pageInfo || pageInfo.total <= pageInfo.pageSize) {
    host.innerHTML = '';
    host.classList.add('nhb-hidden');
    return;
  }
  host.classList.remove('nhb-hidden');
  var prevL = (typeof t === 'function') ? t('page_prev') : '‹';
  var nextL = (typeof t === 'function') ? t('page_next') : '›';
  var ofL = (typeof t === 'function') ? t('page_of') : '/';
  host.innerHTML =
    '<button type="button" class="nhb-btn ghost" data-pg="-1" aria-label="' + prevL + '"' +
    (pageInfo.page <= 1 ? ' disabled' : '') + '>' + prevL + '</button>' +
    '<span class="nhb-pager-info" role="status">' + pageInfo.page + ' ' + ofL + ' ' + pageInfo.totalPages +
    ' · ' + pageInfo.total + '</span>' +
    '<button type="button" class="nhb-btn ghost" data-pg="1" aria-label="' + nextL + '"' +
    (pageInfo.page >= pageInfo.totalPages ? ' disabled' : '') + '>' + nextL + '</button>';
  host.querySelectorAll('[data-pg]').forEach(function (btn) {
    btn.onclick = function () {
      if (btn.disabled) return;
      onChange(pageInfo.page + parseInt(btn.getAttribute('data-pg'), 10));
    };
  });
}

/** Recherche libre sur une réservation */
function nhbResaMatchesQuery(r, q) {
  q = String(q || '').trim().toLowerCase();
  if (!q) return true;
  var blob = [
    r.id, r.clientNom, r.clientPrenom, r.telephone, r.emailClient,
    r.origine, r.destination, r.numVol, r.numChambre, r.hotelId, r.statut
  ].join(' ').toLowerCase();
  return blob.indexOf(q) >= 0;
}

/** Bandeau hors-ligne */
function nhbBindOfflineBanner() {
  var bar = document.getElementById('nhbOfflineBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'nhbOfflineBar';
    bar.className = 'nhb-offline-bar nhb-hidden';
    bar.setAttribute('role', 'alert');
    bar.setAttribute('aria-live', 'assertive');
    document.body.insertBefore(bar, document.body.firstChild);
  }
  function sync() {
    var offline = !navigator.onLine;
    bar.classList.toggle('nhb-hidden', !offline);
    bar.textContent = offline
      ? ((typeof t === 'function' ? t('offline_banner') : null) ||
        'Connexion perdue — les modifications ne seront pas enregistrées')
      : '';
    document.body.classList.toggle('nhb-is-offline', offline);
  }
  window.addEventListener('online', sync);
  window.addEventListener('offline', sync);
  sync();
}

/** Focus trap simple pour modales */
function nhbTrapFocus(modalEl, triggerEl) {
  if (!modalEl) return function () {};
  var focusables = modalEl.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  focusables = Array.prototype.slice.call(focusables).filter(function (el) {
    return !el.disabled && el.offsetParent !== null;
  });
  var first = focusables[0];
  var last = focusables[focusables.length - 1];
  if (first) first.focus();
  function onKey(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      e.preventDefault();
      if (typeof modalEl._nhbClose === 'function') modalEl._nhbClose();
      return;
    }
    if (e.key !== 'Tab' && e.keyCode !== 9) return;
    if (!focusables.length) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  document.addEventListener('keydown', onKey);
  return function release() {
    document.removeEventListener('keydown', onKey);
    if (triggerEl && typeof triggerEl.focus === 'function') {
      try { triggerEl.focus(); } catch (err) { /* ignore */ }
    }
  };
}

/** Navigateur trop ancien */
function nhbCheckBrowserSupport() {
  if (typeof fetch === 'function' && typeof JSON !== 'undefined') return true;
  var msg = (typeof t === 'function' ? t('browser_unsupported') : null) ||
    'Navigateur non supporté — merci de le mettre à jour (Chrome, Edge, Firefox, Safari récents).';
  document.body.innerHTML = '<div class="nhb-unsupported" role="alert"><p>' + msg + '</p></div>';
  return false;
}

/** aria-live sur toasts */
(function patchToastAria() {
  var orig = nhbToast;
  nhbToast = function (msg, type) {
    orig(msg, type);
    var host = document.getElementById('nhbToastHost');
    if (host) {
      host.setAttribute('role', 'status');
      host.setAttribute('aria-live', 'polite');
    }
  };
})();

