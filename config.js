/* COPIE de shared/ — editer shared/ puis sync */
/**
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 *  NHALABENE / AGENCIAS â€” CONFIGURATION PROFESSIONNELLE v1.5.1
 *  PrioritÃ© : AGENCIAS_API_URL dans index.html, sinon API_URL ci-dessous.
 * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
 */
var AGENCIAS_CONFIG = {
  /* â–¼â–¼â–¼  URL API Apps Script (/exec)  â–¼â–¼â–¼ */
  API_URL: (typeof AGENCIAS_API_URL !== 'undefined' && AGENCIAS_API_URL)
    ? AGENCIAS_API_URL
    : 'https://script.google.com/macros/s/AKfycbym0EOCpYVyQQb0DyhxWGbgmfnCbVLhSBcw4b05qEQSG_kUnu0vJ7iiaw3fGkp-qFCv1Q/exec',
  /* â–²â–²â–²â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–²â–²â–² */

  VERSION: '1.5.3',
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
  var url = AGENCIAS_CONFIG.API_URL || '';
  if (!url || /COLLER_URL/i.test(url)) {
    return Promise.reject(new Error('API_URL manquante â€” collez lâ€™URL /exec Apps Script'));
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
          'RÃ©ponse API non-JSON (dÃ©ploiement /exec ?). HTTP ' + r.status +
          (txt ? ' â€” ' + String(txt).slice(0, 80) : '')
        );
      }
      if (!r.ok && (!data || data.success !== true)) {
        throw new Error((data && data.error) || ('HTTP ' + r.status));
      }
      return data || { success: false, error: 'RÃ©ponse vide' };
    });
  }).catch(function (err) {
    if (timer) clearTimeout(timer);
    if (err && (err.name === 'AbortError' || /aborted/i.test(String(err.message || err)))) {
      throw new Error('DÃ©lai dÃ©passÃ© (45s) â€” vÃ©rifiez Apps Script / rÃ©seau');
    }
    throw err;
  });
}

/**
 * Login form â€” attache tÃ´t (avant le reste de lâ€™UI) pour que Entrar / EntrÃ©e marchent toujours.
 * opts: { formId, btnId, msgId, loginId, passId, expectRole, onSuccess }
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
    msg.textContent = (typeof t === 'function' ? t('connecting') : 'â€¦');
    setBusy(true);
    agenciasApi({
      action: 'login',
      login: loginEl.value,
      password: passEl.value
    }).then(function (data) {
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
      /* always unlock â€” sauf si onSuccess a dÃ©jÃ  changÃ© dâ€™Ã©cran */
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

/** RÃ©cupÃ©ration MDP â€” helpers partagÃ©s */
function agenciasBindRecuperationMdp(prefix) {
  prefix = prefix || '';
  var btnAsk = document.getElementById(prefix + 'btnAskReset');
  var btnConfirm = document.getElementById(prefix + 'btnConfirmReset');
  var msg = document.getElementById(prefix + 'resetMsg');
  if (!btnAsk || !btnConfirm || !msg) return;

  btnAsk.onclick = function () {
    msg.className = 'nhb-msg';
    msg.textContent = (typeof t === 'function') ? t('send_code') : 'â€¦';
    agenciasApi({
      action: 'demanderRecuperationMdp',
      login: document.getElementById(prefix + 'reset-login').value.trim()
    }).then(function (data) {
      msg.className = 'nhb-msg ' + (data.success ? 'ok' : 'err');
      msg.textContent = data.success
        ? (data.message + (data.emailMasque ? ' (' + data.emailMasque + ')' : '') +
          (data.userIdHint ? ' â€” login : ' + data.userIdHint : ''))
        : (data.error || ((typeof t === 'function') ? t('fail') : 'Ã‰chec'));
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
    msg.textContent = (typeof t === 'function') ? t('saving') : 'â€¦';
    agenciasApi({
      action: 'confirmerRecuperationMdp',
      userId: document.getElementById(prefix + 'reset-userid').value.trim(),
      code: document.getElementById(prefix + 'reset-code').value.trim(),
      nouveauMotDePasse: document.getElementById(prefix + 'reset-pass').value
    }).then(function (data) {
      msg.className = 'nhb-msg ' + (data.success ? 'ok' : 'err');
      msg.textContent = data.success
        ? (data.message || ((typeof t === 'function') ? t('pwd_updated') : 'OK'))
        : (data.error || ((typeof t === 'function') ? t('fail') : 'Ã‰chec'));
    }).catch(function () {
      msg.className = 'nhb-msg err';
      msg.textContent = (typeof t === 'function') ? t('api_error') : 'API error';
    });
  };
}
