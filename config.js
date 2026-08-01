/* COPIE de shared/ � �diter shared/ puis sync */
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  NHALABENE / AGENCIAS — CONFIGURATION PROFESSIONNELLE v1.5.1
 *  Priorité : AGENCIAS_API_URL dans index.html, sinon API_URL ci-dessous.
 * ═══════════════════════════════════════════════════════════════════════════
 */
var AGENCIAS_CONFIG = {
  /* ▼▼▼  URL API Apps Script (/exec)  ▼▼▼ */
  API_URL: (typeof AGENCIAS_API_URL !== 'undefined' && AGENCIAS_API_URL)
    ? AGENCIAS_API_URL
    : 'https://script.google.com/macros/s/AKfycbym0EOCpYVyQQb0DyhxWGbgmfnCbVLhSBcw4b05qEQSG_kUnu0vJ7iiaw3fGkp-qFCv1Q/exec',
  /* ▲▲▲──────────────────────────────────────────────────────────────────▲▲▲ */

  VERSION: '1.5.1',
  PRODUCT: 'Nhalabene',
  ARCHITECTURE: 'option-2-fournisseur',
  ASSETS_BASE: './assets/',
  FETCH_TIMEOUT_MS: 45000,
  BRAND_STANDARD: {
    NOM: 'Nhalabene',
    LOGO_FILE: 'icon_carre_192.png',
    LOGO_FILE_LG: 'icon_carre_512.png',
    LOGO_HORIZONTAL: 'logo_horizontal_sombre_M.png'
  }
};

function agenciasStandardLogoUrl(file) {
  var f = file || AGENCIAS_CONFIG.BRAND_STANDARD.LOGO_FILE;
  return AGENCIAS_CONFIG.ASSETS_BASE + f;
}

function agenciasApplyBranding(brand, opts) {
  opts = opts || {};
  var b = brand || {};
  var mode = String(b.mode || 'standard').toLowerCase();
  var customLogo = (b.logoUrl || '').trim();
  var customNom = (b.nomAffiche || '').trim();
  var useStandardVisual = mode === 'standard' || !customLogo || /^assets\//i.test(customLogo);

  var nom = mode === 'standard'
    ? AGENCIAS_CONFIG.BRAND_STANDARD.NOM
    : (customNom || AGENCIAS_CONFIG.BRAND_STANDARD.NOM);
  var logo = useStandardVisual
    ? agenciasStandardLogoUrl()
    : customLogo;

  if (opts.titleEl) opts.titleEl.textContent = nom;
  if (opts.logoEl) {
    opts.logoEl.innerHTML = '<img src="' + logo.replace(/"/g, '') + '" alt="' + String(nom).replace(/"/g, '') + '" />';
  }
  if (opts.horizontalEl) {
    var hz = useStandardVisual
      ? agenciasStandardLogoUrl(AGENCIAS_CONFIG.BRAND_STANDARD.LOGO_HORIZONTAL)
      : logo;
    opts.horizontalEl.innerHTML = '<img src="' + hz.replace(/"/g, '') + '" alt="' + String(nom).replace(/"/g, '') + '" />';
  }
  return { nomAffiche: nom, logoUrl: logo, mode: mode };
}

function agenciasApi(body) {
  var ctrl = null;
  var timer = null;
  var opts = {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body)
  };
  try {
    if (typeof AbortController !== 'undefined') {
      ctrl = new AbortController();
      opts.signal = ctrl.signal;
      timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, AGENCIAS_CONFIG.FETCH_TIMEOUT_MS || 45000);
    }
  } catch (e) { /* ignore */ }
  return fetch(AGENCIAS_CONFIG.API_URL, opts).then(function (r) {
    if (timer) clearTimeout(timer);
    return r.json();
  }).catch(function (err) {
    if (timer) clearTimeout(timer);
    throw err;
  });
}

/** Récupération MDP — helpers partagés */
function agenciasBindRecuperationMdp(prefix) {
  prefix = prefix || '';
  var btnAsk = document.getElementById(prefix + 'btnAskReset');
  var btnConfirm = document.getElementById(prefix + 'btnConfirmReset');
  var msg = document.getElementById(prefix + 'resetMsg');
  if (!btnAsk || !btnConfirm || !msg) return;

  btnAsk.onclick = function () {
    msg.className = 'nhb-msg';
    msg.textContent = (typeof t === 'function') ? t('send_code') : '…';
    agenciasApi({
      action: 'demanderRecuperationMdp',
      login: document.getElementById(prefix + 'reset-login').value.trim()
    }).then(function (data) {
      msg.className = 'nhb-msg ' + (data.success ? 'ok' : 'err');
      msg.textContent = data.success
        ? (data.message + (data.emailMasque ? ' (' + data.emailMasque + ')' : '') +
          (data.userIdHint ? ' — login : ' + data.userIdHint : ''))
        : (data.error || ((typeof t === 'function') ? t('fail') : 'Échec'));
      if (data.userIdHint) {
        var uid = document.getElementById(prefix + 'reset-userid');
        if (uid) uid.value = data.userIdHint;
      }
    }).catch(function () {
      msg.className = 'nhb-msg err';
      msg.textContent = (typeof t === 'function') ? t('api_error') : 'API error';
    });
  };

  btnConfirm.onclick = function () {
    msg.className = 'nhb-msg';
    msg.textContent = (typeof t === 'function') ? t('saving') : '…';
    agenciasApi({
      action: 'confirmerRecuperationMdp',
      userId: document.getElementById(prefix + 'reset-userid').value.trim(),
      code: document.getElementById(prefix + 'reset-code').value.trim(),
      nouveauMotDePasse: document.getElementById(prefix + 'reset-pass').value
    }).then(function (data) {
      msg.className = 'nhb-msg ' + (data.success ? 'ok' : 'err');
      msg.textContent = data.success
        ? (data.message || ((typeof t === 'function') ? t('pwd_updated') : 'OK'))
        : (data.error || ((typeof t === 'function') ? t('fail') : 'Échec'));
    }).catch(function () {
      msg.className = 'nhb-msg err';
      msg.textContent = (typeof t === 'function') ? t('api_error') : 'API error';
    });
  };
}
