/**
 * NHALABENE / AGENCIAS — CONFIGURATION v1.5.6
 * Priorité : AGENCIAS_API_URL dans index.html, sinon API_URL ci-dessous.
 */
var AGENCIAS_CONFIG = {
  API_URL: (typeof AGENCIAS_API_URL !== 'undefined' && AGENCIAS_API_URL)
    ? AGENCIAS_API_URL
    : 'https://script.google.com/macros/s/AKfycbym0EOCpYVyQQb0DyhxWGbgmfnCbVLhSBcw4b05qEQSG_kUnu0vJ7iiaw3fGkp-qFCv1Q/exec',

  VERSION: '1.6.2',
  PRODUCT: 'Nhalabene',
  ARCHITECTURE: 'option-2-fournisseur',
  ASSETS_BASE: './assets/',
  FETCH_TIMEOUT_MS: 45000,
  BRAND_STANDARD: {
    NOM: 'Nhalabene',
    LOGO_FILE: 'icon_n.svg',
    LOGO_FILE_LG: 'icon_n_512.svg',
    LOGO_HORIZONTAL: 'logo_horizontal_sombre_M.png'
  }
};

var NHB_MONOGRAM_SVG =
  '<svg class="nhb-mono-n" viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">' +
  '<rect width="64" height="64" rx="14" fill="#0d2137"/>' +
  '<text x="32" y="44" text-anchor="middle" font-family="Georgia,serif" font-size="36" font-weight="700" fill="#c9a84c">N</text>' +
  '</svg>';

function agenciasStandardLogoUrl(file) {
  var f = file || AGENCIAS_CONFIG.BRAND_STANDARD.LOGO_FILE;
  return AGENCIAS_CONFIG.ASSETS_BASE + f;
}

function agenciasLogoImgHtml(src, nom) {
  var safeSrc = String(src || '').replace(/"/g, '');
  var safeNom = String(nom || 'Nhalabene').replace(/"/g, '');
  return '<img src="' + safeSrc + '" alt="' + safeNom + '" ' +
    "onerror='this.onerror=null;this.outerHTML=" + JSON.stringify(NHB_MONOGRAM_SVG) + ";' />";
}

function agenciasApplyBranding(brand, opts) {
  opts = opts || {};
  var b = brand || {};
  var mode = String(b.mode || 'standard').toLowerCase();
  var customLogo = (b.logoUrl || '').trim();
  var customNom = (b.nomAffiche || b.nomInterne || '').trim();
  var useStandardVisual = mode === 'standard' ||
    /^assets\//i.test(customLogo) || /icon_carre_/i.test(customLogo) || /icon_n(_|\.)/i.test(customLogo);
  /* Custom sans logo → nom seul (pas de logo Nhalabene) */
  var nameOnly = mode === 'custom' && !customLogo;

  var nom = mode === 'standard'
    ? AGENCIAS_CONFIG.BRAND_STANDARD.NOM
    : (customNom || AGENCIAS_CONFIG.BRAND_STANDARD.NOM);
  var logo = (useStandardVisual && !nameOnly)
    ? agenciasStandardLogoUrl()
    : customLogo;

  if (opts.titleEl) opts.titleEl.textContent = nom;
  if (opts.logoEl) {
    if (nameOnly) {
      opts.logoEl.innerHTML = '<span class="nhb-brand-name">' + String(nom).replace(/</g, '&lt;') + '</span>';
    } else {
      opts.logoEl.innerHTML = agenciasLogoImgHtml(logo, nom);
    }
  }
  if (opts.horizontalEl) {
    if (nameOnly) {
      opts.horizontalEl.innerHTML = '<span class="nhb-brand-name">' + String(nom).replace(/</g, '&lt;') + '</span>';
    } else {
      var hz = useStandardVisual
        ? agenciasStandardLogoUrl(AGENCIAS_CONFIG.BRAND_STANDARD.LOGO_HORIZONTAL)
        : logo;
      opts.horizontalEl.innerHTML = agenciasLogoImgHtml(hz, nom);
    }
  }
  return { nomAffiche: nom, logoUrl: logo, mode: mode, nameOnly: nameOnly, apiUrl: b.apiUrl || '' };
}

/** Callback global optionnel : window.nhbOnSessionInvalid = function(){} */
function agenciasHandleSessionError_(data) {
  var err = data && data.error ? String(data.error) : '';
  if (!/Session invalide|Session expirée|Session expiree|token manquant/i.test(err)) return false;
  try {
    if (typeof nhbToast === 'function') nhbToast(err, 'err');
  } catch (e) { /* ignore */ }
  if (typeof window.nhbOnSessionInvalid === 'function') {
    try { window.nhbOnSessionInvalid(err); } catch (e2) { /* ignore */ }
  }
  return true;
}

function agenciasApi(body) {
  var url = AGENCIAS_CONFIG.API_URL || '';
  if (!url || /COLLER_URL/i.test(url)) {
    return Promise.reject(new Error('API_URL manquante — collez l’URL /exec Apps Script'));
  }
  if (typeof location !== 'undefined' && location.protocol === 'file:') {
    return Promise.reject(new Error(
      'Ouvrez via http:// (outils/OUVRIR-SERVEUR.bat ou GitHub Pages), pas en fichier local file://'
    ));
  }
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
  return fetch(url, opts).then(function (r) {
    if (timer) clearTimeout(timer);
    return r.text().then(function (txt) {
      var data;
      try {
        data = txt ? JSON.parse(txt) : null;
      } catch (e) {
        throw new Error(
          'Réponse API non-JSON (déploiement /exec ?). HTTP ' + r.status +
          (txt ? ' — ' + String(txt).slice(0, 80) : '')
        );
      }
      if (!r.ok && (!data || data.success !== true)) {
        throw new Error((data && data.error) || ('HTTP ' + r.status));
      }
      data = data || { success: false, error: 'Réponse vide' };
      if (data && data.success === false) agenciasHandleSessionError_(data);
      return data;
    });
  }).catch(function (err) {
    if (timer) clearTimeout(timer);
    if (err && (err.name === 'AbortError' || /aborted/i.test(String(err.message || err)))) {
      throw new Error('Délai dépassé (45s) — vérifiez Apps Script / réseau');
    }
    throw err;
  });
}

/**
 * Login form — Entrar / Entrée.
 * opts: { formId, btnId, msgId, loginId, passId, expectRole, wrongRoleKey, portal, onSuccess }
 */
function agenciasBindLoginForm(opts) {
  opts = opts || {};
  var form = document.getElementById(opts.formId || 'loginForm');
  var btn = document.getElementById(opts.btnId || 'btnLogin');
  var msg = document.getElementById(opts.msgId || 'loginMsg');
  var loginEl = document.getElementById(opts.loginId || 'login');
  var passEl = document.getElementById(opts.passId || 'pass');
  if (!btn || !msg || !loginEl || !passEl) return;

  function setBusy(on) {
    btn.classList.toggle('loading', !!on);
    btn.disabled = !!on;
    if (loginEl) loginEl.disabled = !!on;
    if (passEl) passEl.disabled = !!on;
  }

  function doLogin(ev) {
    if (ev) {
      try { ev.preventDefault(); } catch (e) { /* ignore */ }
    }
    if (btn.disabled) return;
    msg.className = 'nhb-msg';
    msg.textContent = (typeof t === 'function' ? t('connecting') : '…');
    setBusy(true);
    var payload = {
      action: 'login',
      login: loginEl.value,
      password: passEl.value
    };
    if (opts.portal) payload.portal = opts.portal;
    agenciasApi(payload).then(function (data) {
      var okRole = !opts.expectRole || (data && data.role === opts.expectRole);
      if (data && data.success && okRole) {
        if (typeof opts.onSuccess === 'function') opts.onSuccess(data);
        else {
          msg.className = 'nhb-msg ok';
          msg.textContent = 'OK';
        }
      } else {
        msg.className = 'nhb-msg err';
        msg.textContent = (data && data.error) ||
          (typeof t === 'function' ? t(opts.wrongRoleKey || 'api_error') : 'Erreur') ||
          'Erreur login';
      }
    }).catch(function (err) {
      msg.className = 'nhb-msg err';
      var detail = err && (err.message || err);
      msg.textContent = detail
        ? String(detail)
        : ((typeof t === 'function' ? t('api_error') : null) || 'API error');
    }).then(function () {
      if (document.body.classList.contains('nhb-on-login')) setBusy(false);
    }, function () { setBusy(false); });
  }

  if (form) {
    form.addEventListener('submit', doLogin);
  } else {
    btn.addEventListener('click', doLogin);
    if (passEl) {
      passEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) doLogin(e);
      });
    }
  }
  return doLogin;
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
