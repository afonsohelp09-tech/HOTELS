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
  return brand + ' #' + (r.id || '') + '\n' +
    (r.clientPrenom || '') + ' ' + (r.clientNom || '') + '\n' +
    (r.origine || '') + ' → ' + (r.destination || '') + '\n' +
    (r.dateTransfer || '') + ' ' + (r.heureTransfer || '') + '\n' +
    'Pax: ' + (r.personnes || '') + ' | Bags: ' + (r.malas || '') +
    (r.numVol ? ('\nFlight: ' + r.numVol) : '') +
    (r.telephone ? ('\nTel: ' + r.telephone) : '');
}

function nhbCalendarUrl(r) {
  // Google Calendar template
  function pad(n){ return ('0'+n).slice(-2); }
  var d = String(r.dateTransfer || '').replace(/-/g,'');
  var hm = String(r.heureTransfer || '12:00').split(':');
  var h = pad(parseInt(hm[0]||12,10));
  var m = pad(parseInt(hm[1]||0,10));
  var start = d + 'T' + h + m + '00';
  // +2h end
  var endH = pad((parseInt(h,10)+2)%24);
  var end = d + 'T' + endH + m + '00';
  var text = encodeURIComponent('Transfer ' + (r.id||''));
  var details = encodeURIComponent(nhbResaWhatsAppText(r));
  var loc = encodeURIComponent((r.origine||'') + ' → ' + (r.destination||''));
  return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + text +
    '&dates=' + start + '/' + end + '&details=' + details + '&location=' + loc;
}

function nhbExportResasCsv(rows, filename) {
  rows = rows || [];
  var headers = ['ID','Hotel','Client','Tel','Origine','Destination','Date','Heure','Pax','Malas','Vol','Statut','Prix','Chauffeur','Commentaires'];
  function cell(v) {
    var s = String(v == null ? '' : v).replace(/"/g, '""');
    return '"' + s + '"';
  }
  var lines = [headers.join(';')];
  rows.forEach(function (r) {
    lines.push([
      r.id, r.hotelId, ((r.clientPrenom||'')+' '+(r.clientNom||'')).trim(),
      r.telephone, r.origine, r.destination, r.dateTransfer, r.heureTransfer,
      r.personnes, r.malas, r.numVol, r.statut,
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
