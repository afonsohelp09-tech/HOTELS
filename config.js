/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  NHALABENE / AGENCIAS — CONFIGURATION
 *  Coller l’URL /exec ICI (ou dans chaque HTML via AGENCIAS_API_URL en tête).
 * ═══════════════════════════════════════════════════════════════════════════
 */
var AGENCIAS_CONFIG = {
  /* ▼▼▼  URL API Apps Script (priorité : AGENCIAS_API_URL dans le HTML)  ▼▼▼ */
  API_URL: (typeof AGENCIAS_API_URL !== 'undefined' && AGENCIAS_API_URL)
    ? AGENCIAS_API_URL
    : 'https://COLLER_URL_APPS_SCRIPT_FOURNISSEUR_ICI/exec',
  /* ▲▲▲──────────────────────────────────────────────────────────────────▲▲▲ */

  VERSION: '1.2.0',
  PRODUCT: 'Nhalabene',
  ASSETS_BASE: './assets/',
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
  return fetch(AGENCIAS_CONFIG.API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body)
  }).then(function (r) { return r.json(); });
}

/** Bloc UI récupération MDP (à coller dans #view-login) — helpers partagés */
function agenciasBindRecuperationMdp(prefix) {
  prefix = prefix || '';
  var btnAsk = document.getElementById(prefix + 'btnAskReset');
  var btnConfirm = document.getElementById(prefix + 'btnConfirmReset');
  var msg = document.getElementById(prefix + 'resetMsg');
  if (!btnAsk || !btnConfirm || !msg) return;

  btnAsk.onclick = function () {
    msg.className = 'nhb-msg';
    msg.textContent = 'Envoi du code…';
    agenciasApi({
      action: 'demanderRecuperationMdp',
      login: document.getElementById(prefix + 'reset-login').value.trim()
    }).then(function (data) {
      msg.className = 'nhb-msg ' + (data.success ? 'ok' : 'err');
      msg.textContent = data.success
        ? (data.message + (data.emailMasque ? ' (' + data.emailMasque + ')' : '') +
          (data.userIdHint ? ' — login : ' + data.userIdHint : ''))
        : (data.error || 'Échec');
      if (data.userIdHint) {
        document.getElementById(prefix + 'reset-userid').value = data.userIdHint;
      }
    }).catch(function () {
      msg.className = 'nhb-msg err';
      msg.textContent = 'API non joignable';
    });
  };

  btnConfirm.onclick = function () {
    msg.className = 'nhb-msg';
    msg.textContent = 'Validation…';
    agenciasApi({
      action: 'confirmerRecuperationMdp',
      userId: document.getElementById(prefix + 'reset-userid').value.trim(),
      code: document.getElementById(prefix + 'reset-code').value.trim(),
      nouveauMotDePasse: document.getElementById(prefix + 'reset-pass').value
    }).then(function (data) {
      msg.className = 'nhb-msg ' + (data.success ? 'ok' : 'err');
      msg.textContent = data.success ? data.message : (data.error || 'Échec');
    }).catch(function () {
      msg.className = 'nhb-msg err';
      msg.textContent = 'API non joignable';
    });
  };
}
