/* COPIE de shared/ — editer shared/ puis sync */
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

/** Liens WA depuis prefs (numéros + groupe) */
function nhbWaOpsLinksHtml(scope, text) {
  if (!nhbWaActive(scope)) return '';
  var p = nhbPrefsGet(scope) || {};
  var html = '';
  var nums = String(p.waNumbers || '').split(/[\n,;]+/).map(function (s) { return s.trim(); }).filter(Boolean);
  var lbl = (typeof t === 'function') ? t('whatsapp') : 'WhatsApp';
  nums.forEach(function (n, i) {
    html += '<a class="nhb-btn ghost" href="' + nhbWhatsAppUrl(n, text) +
      '" target="_blank" rel="noopener">' + lbl + (nums.length > 1 ? ' ' + (i + 1) : '') + '</a>';
  });
  var g = String(p.waGroup || '').trim();
  if (g && /chat\.whatsapp\.com|wa\.me/i.test(g)) {
    var gl = (typeof t === 'function') ? t('whatsapp_group') : 'Grupo WA';
    html += '<a class="nhb-btn ghost" href="' + g.replace(/"/g, '') + '" target="_blank" rel="noopener">' + gl + '</a>';
  }
  return html;
}

/** Dialogue confirm (remplace confirm natif) */
function nhbConfirm(message, onOk, onCancel) {
  var existing = document.getElementById('nhbDialogOverlay');
  if (existing) existing.parentNode.removeChild(existing);
  var ov = document.createElement('div');
  ov.id = 'nhbDialogOverlay';
  ov.className = 'nhb-dialog-overlay';
  ov.innerHTML =
    '<div class="nhb-dialog" role="dialog" aria-modal="true">' +
      '<p class="nhb-dialog-msg"></p>' +
      '<div class="nhb-dialog-actions">' +
        '<button type="button" class="nhb-btn ghost" data-act="no"></button>' +
        '<button type="button" class="nhb-btn" data-act="yes"></button>' +
      '</div>' +
    '</div>';
  ov.querySelector('.nhb-dialog-msg').textContent = message;
  ov.querySelector('[data-act="no"]').textContent = (typeof t === 'function') ? t('cancel') : 'Cancel';
  ov.querySelector('[data-act="yes"]').textContent = (typeof t === 'function') ? t('confirm_ok') : 'OK';
  function close() { if (ov.parentNode) ov.parentNode.removeChild(ov); }
  ov.querySelector('[data-act="no"]').onclick = function () { close(); if (onCancel) onCancel(); };
  ov.querySelector('[data-act="yes"]').onclick = function () { close(); if (onOk) onOk(); };
  ov.addEventListener('click', function (e) { if (e.target === ov) { close(); if (onCancel) onCancel(); } });
  document.body.appendChild(ov);
  ov.querySelector('[data-act="yes"]').focus();
}

/** Dialogue prompt texte (remplace prompt natif) */
function nhbPrompt(title, opts, onOk) {
  opts = opts || {};
  var existing = document.getElementById('nhbDialogOverlay');
  if (existing) existing.parentNode.removeChild(existing);
  var ov = document.createElement('div');
  ov.id = 'nhbDialogOverlay';
  ov.className = 'nhb-dialog-overlay';
  ov.innerHTML =
    '<div class="nhb-dialog" role="dialog" aria-modal="true">' +
      '<p class="nhb-dialog-msg"></p>' +
      '<input class="nhb-input" id="nhbPromptInput" type="' + (opts.type || 'text') + '" autocomplete="off" />' +
      '<div class="nhb-dialog-actions">' +
        '<button type="button" class="nhb-btn ghost" data-act="no"></button>' +
        '<button type="button" class="nhb-btn" data-act="yes"></button>' +
      '</div>' +
    '</div>';
  ov.querySelector('.nhb-dialog-msg').textContent = title || '';
  var inp = ov.querySelector('#nhbPromptInput');
  inp.placeholder = opts.placeholder || '';
  if (opts.value) inp.value = opts.value;
  ov.querySelector('[data-act="no"]').textContent = (typeof t === 'function') ? t('cancel') : 'Cancel';
  ov.querySelector('[data-act="yes"]').textContent = (typeof t === 'function') ? t('confirm_ok') : 'OK';
  function close() { if (ov.parentNode) ov.parentNode.removeChild(ov); }
  function submit() {
    var v = inp.value;
    var min = opts.minLength != null ? opts.minLength : 0;
    if (min && String(v).length < min) {
      nhbToast((typeof t === 'function') ? t('owner_pass_min') : 'Min length', 'err');
      return;
    }
    close();
    if (onOk) onOk(v);
  }
  ov.querySelector('[data-act="no"]').onclick = function () { close(); };
  ov.querySelector('[data-act="yes"]').onclick = submit;
  inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
  document.body.appendChild(ov);
  setTimeout(function () { inp.focus(); }, 30);
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
  if (p.lang && typeof nhbSetLang === 'function') {
    try { nhbSetLang(p.lang); } catch (e) { /* ignore */ }
  } else if (p.lang && typeof setLang === 'function') {
    try { setLang(p.lang); } catch (e2) { /* ignore */ }
  }
  document.documentElement.setAttribute('data-density', p.density === 'compact' ? 'compact' : 'comfortable');
  document.documentElement.setAttribute('data-text-size', p.textSize === 'large' ? 'large' : 'normal');
  if (p.currency) document.documentElement.setAttribute('data-currency', p.currency);

  /* Fond de travail (style Staff Plan B) — hors écran login */
  var bg = (p.workBg || '').trim();
  if (bg && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(bg)) {
    document.documentElement.style.setProperty('--nhb-work-bg', bg);
    document.body.classList.add('nhb-has-work-bg');
  } else {
    document.documentElement.style.removeProperty('--nhb-work-bg');
    document.body.classList.remove('nhb-has-work-bg');
  }
  return p;
}

/** Lit les champs Paramètres étendus (#pref-*) */
function nhbReadPrefsForm(scope) {
  var p = nhbPrefsGet(scope) || {};
  var el = function (id) { return document.getElementById(id); };
  if (el('pref-lang')) p.lang = el('pref-lang').value;
  if (el('pref-density')) p.density = el('pref-density').value;
  if (el('pref-currency')) p.currency = 'EUR';
  else p.currency = 'EUR';
  if (el('pref-text-size')) p.textSize = el('pref-text-size').value;
  if (el('pref-work-bg')) p.workBg = el('pref-work-bg').value || '';
  if (el('pref-wa-numbers')) p.waNumbers = el('pref-wa-numbers').value.trim();
  if (el('pref-wa-group')) p.waGroup = el('pref-wa-group').value.trim();
  if (el('pref-wa-active')) p.waActive = !!el('pref-wa-active').checked;
  if (el('pref-email-new-resa')) p.emailNewResa = !!el('pref-email-new-resa').checked;
  if (el('pref-email-confirm')) p.emailConfirm = !!el('pref-email-confirm').checked;
  return p;
}

function nhbFillPrefsForm(scope) {
  var p = nhbPrefsGet(scope) || {};
  var el = function (id) { return document.getElementById(id); };
  if (el('pref-lang')) el('pref-lang').value = p.lang || (typeof NHB_LANG !== 'undefined' ? NHB_LANG : 'pt');
  if (el('pref-density')) el('pref-density').value = p.density === 'compact' ? 'compact' : 'comfortable';
  if (el('pref-currency')) el('pref-currency').value = 'EUR';
  if (el('pref-currency-label')) el('pref-currency-label').textContent = 'Euro (€)';
  if (el('pref-text-size')) el('pref-text-size').value = p.textSize === 'large' ? 'large' : 'normal';
  if (el('pref-work-bg')) el('pref-work-bg').value = p.workBg || '';
  if (el('pref-work-bg-hex')) el('pref-work-bg-hex').value = p.workBg || '#0b1623';
  if (el('pref-wa-numbers')) el('pref-wa-numbers').value = p.waNumbers || '';
  if (el('pref-wa-group')) el('pref-wa-group').value = p.waGroup || '';
  if (el('pref-wa-active')) el('pref-wa-active').checked = p.waActive !== false;
  if (el('pref-email-new-resa')) el('pref-email-new-resa').checked = p.emailNewResa !== false;
  if (el('pref-email-confirm')) el('pref-email-confirm').checked = p.emailConfirm !== false;
}

/** HTML blocs Paramètres communs (fond, texte, WA, email) */
function nhbExtraSettingsHtml() {
  return (
    '<div class="nhb-row2">' +
      '<div><label class="nhb-label" for="pref-text-size" data-i18n="settings_text_size">Taille du texte</label>' +
      '<select class="nhb-select" id="pref-text-size">' +
        '<option value="normal" data-i18n="settings_text_normal">Normal</option>' +
        '<option value="large" data-i18n="settings_text_large">Grand</option>' +
      '</select></div>' +
      '<div><label class="nhb-label" for="pref-work-bg" data-i18n="settings_work_bg">Couleur de fond (travail)</label>' +
      '<div class="nhb-bg-row">' +
        '<input type="color" id="pref-work-bg-hex" value="#0b1623" aria-label="Couleur" />' +
        '<input class="nhb-input" id="pref-work-bg" placeholder="#0b1623 ou vide" />' +
        '<button type="button" class="nhb-btn ghost" id="pref-work-bg-reset" data-i18n="settings_bg_reset">Reset</button>' +
      '</div>' +
      '<div class="nhb-bg-presets" id="pref-work-bg-presets" role="group">' +
        '<button type="button" class="nhb-bg-swatch" data-bg="#0b1623" title="Navy"></button>' +
        '<button type="button" class="nhb-bg-swatch" data-bg="#152031" title="Slate"></button>' +
        '<button type="button" class="nhb-bg-swatch" data-bg="#1a2332" title="Blue gray"></button>' +
        '<button type="button" class="nhb-bg-swatch" data-bg="#EEF2F7" title="Clair"></button>' +
        '<button type="button" class="nhb-bg-swatch" data-bg="#0d2137" title="Brand navy"></button>' +
      '</div></div>' +
    '</div>' +
    '<h3 class="nhb-settings-h" data-i18n="settings_wa_title">WhatsApp</h3>' +
    '<label class="nhb-check"><input type="checkbox" id="pref-wa-active" checked /> <span data-i18n="settings_wa_active">Activer WhatsApp</span></label>' +
    '<label class="nhb-label" for="pref-wa-numbers" data-i18n="settings_wa_numbers">Numéros (un par ligne)</label>' +
    '<textarea class="nhb-textarea" id="pref-wa-numbers" rows="2" placeholder="+3519…"></textarea>' +
    '<label class="nhb-label" for="pref-wa-group" data-i18n="settings_wa_group">Lien groupe (chat.whatsapp.com)</label>' +
    '<input class="nhb-input" id="pref-wa-group" placeholder="https://chat.whatsapp.com/…" />' +
    '<h3 class="nhb-settings-h" data-i18n="settings_email_title">Notifications email</h3>' +
    '<label class="nhb-check"><input type="checkbox" id="pref-email-new-resa" checked /> <span data-i18n="settings_email_new">Recevoir / envoyer email nouvelle réservation</span></label>' +
    '<label class="nhb-check"><input type="checkbox" id="pref-email-confirm" checked /> <span data-i18n="settings_email_confirm">Notifier par email à la confirmation</span></label>'
  );
}

function nhbBindExtraSettings(scope) {
  var hex = document.getElementById('pref-work-bg-hex');
  var txt = document.getElementById('pref-work-bg');
  var reset = document.getElementById('pref-work-bg-reset');
  var presets = document.getElementById('pref-work-bg-presets');
  if (hex && txt) {
    hex.oninput = function () { txt.value = hex.value; };
    txt.oninput = function () {
      if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(txt.value.trim())) hex.value = txt.value.trim();
    };
  }
  if (reset) {
    reset.onclick = function () {
      if (txt) txt.value = '';
      nhbApplyPrefs(scope);
    };
  }
  if (presets) {
    presets.querySelectorAll('[data-bg]').forEach(function (b) {
      b.style.background = b.getAttribute('data-bg');
      b.onclick = function () {
        var c = b.getAttribute('data-bg');
        if (txt) txt.value = c;
        if (hex) hex.value = c;
      };
    });
  }
}

/** Prefs email pour actions résa (défaut true) */
function nhbWantEmailNotify(scope, key) {
  var p = nhbPrefsGet(scope) || {};
  if (key === 'confirm') return p.emailConfirm !== false;
  return p.emailNewResa !== false;
}

function nhbWaActive(scope) {
  var p = nhbPrefsGet(scope) || {};
  return p.waActive !== false;
}
/** Affichage monétaire — Euro uniquement (pas de FX) */
function nhbFormatMoney(n, scope) {
  var v = Number(n);
  if (isNaN(v)) return '—';
  try {
    return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(v);
  } catch (e) {
    return v.toFixed(2).replace('.', ',') + ' €';
  }
}

/** Force devise locale = EUR (compat prefs anciennes USD/GBP) */
function nhbEnsureEuroPrefs(scope) {
  var p = nhbPrefsGet(scope) || {};
  if (p.currency !== 'EUR') {
    p.currency = 'EUR';
    nhbPrefsSet(scope, p);
  }
  return p;
}

/** Sync prefs vers backend (best-effort) */
function nhbSyncPrefsToServer(scope, token) {
  if (!token || typeof agenciasApi !== 'function') return Promise.resolve();
  var p = nhbPrefsGet(scope) || {};
  p.currency = 'EUR';
  return agenciasApi({ action: 'sauverPrefs', token: token, prefs: p, scope: scope })
    .then(function (r) { return r; })
    .catch(function () { return null; });
}

function nhbLoadPrefsFromServer(scope, token) {
  if (!token || typeof agenciasApi !== 'function') return Promise.resolve(null);
  return agenciasApi({ action: 'chargerPrefs', token: token, scope: scope })
    .then(function (r) {
      if (r && r.success && r.prefs && typeof r.prefs === 'object') {
        r.prefs.currency = 'EUR';
        nhbPrefsSet(scope, Object.assign({}, nhbPrefsGet(scope), r.prefs));
        nhbApplyPrefs(scope);
        return r.prefs;
      }
      return null;
    })
    .catch(function () { return null; });
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

