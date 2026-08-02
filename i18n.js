/* COPIE de shared/ — editer shared/ puis sync */
/**
 * Nhalabene AGENCIAS — i18n PT / EN / FR / ES
 * Usage: data-i18n="key" | data-i18n-placeholder="key" | data-i18n-title="key"
 * JS: t('key') | nhbSetLang('pt')
 */
var NHB_I18N = {
  pt: {
    lang_name: 'Português',
    brand: 'Nhalabene',
    hub_title: 'Nhalabene',
    hub_lead: 'Plataforma de transferências para agências — código e base no fornecedor. Identidade Nhalabene em modo padrão; logo e nome próprios se configurados para a agência.',
    hub_supplier: 'Fornecedor',
    hub_supplier_desc: 'Agências, identidade visual (padrão Nhalabene ou personalizado), controlo global.',
    hub_agency: 'Portal agência',
    hub_agency_desc: 'Hotéis, preços, motoristas, equipa, confirmação de reservas.',
    hub_hotel: 'Portal hotel',
    hub_hotel_desc: 'Criar reservas para clientes — ver apenas as suas.',
    theme_dark: 'Escuro',
    theme_light: 'Claro',
    language: 'Idioma',
    hub: 'Início',
    logout: 'Terminar sessão',
    login: 'Entrar',
    login_id: 'Identificador (ID)',
    password: 'Palavra-passe',
    forgot_title: 'Palavra-passe esquecida',
    forgot_hint: 'Um código é enviado para o email da conta. Um admin também pode repor a palavra-passe.',
    forgot_login_email: 'ID ou email da conta',
    send_code: 'Receber código por email',
    code_received: 'Código recebido',
    new_password: 'Nova palavra-passe',
    validate_password: 'Validar nova palavra-passe',
    old_password: 'Palavra-passe atual',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    create: 'Criar',
    refresh: 'Atualizar',
    search: 'Pesquisar',
    actions: 'Ações',
    status: 'Estado',
    loading: 'A carregar…',
    api_error: 'API inacessível — verifique a URL /exec',
    success: 'Sucesso',
    error: 'Erro',
    // tabs
    tab_reservations: 'Reservas',
    tab_hotels: 'Hotéis',
    tab_prices: 'Preços',
    tab_drivers: 'Motoristas',
    tab_team: 'Equipa',
    tab_historique: 'Histórico',
    tab_password: 'Palavra-passe',
    tab_agencies: 'Agências',
    tab_mine: 'As minhas reservas',
    tab_new: 'Nova reserva',
    // agency
    agency_portal: 'Portal agência',
    agency_login_hint: 'Início de sessão da equipa (OWNER / ADMIN / STAFF) — ID + palavra-passe.',
    hotel_portal: 'Portal hotel',
    hotel_login_hint: 'Crie reservas para os seus clientes. A agência confirma depois. ID do hotel + palavra-passe.',
    supplier_portal: 'Fornecedor',
    supplier_login_hint: 'Administração do sistema — criação e identidade visual das agências.',
    confirm: 'Confirmar',
    cancel_resa: 'Cancelar',
    done: 'Realizado',
    assign_driver: 'Atribuir motorista',
    reset_pwd: 'Repor palavra-passe',
    block: 'Bloquear',
    deactivate: 'Desativar',
    new_hotel: 'Novo hotel',
    new_member: 'Novo membro',
    edit_member: 'Editar membro',
    save_member: 'Guardar membro',
    member_updated: 'Membro atualizado',
    password_keep: 'Deixar vazio para manter a palavra-passe atual',
    historique_hint: 'Últimas ações registadas no sistema.',
    th_action: 'Ação',
    th_user: 'Utilizador',
    th_details: 'Detalhes',
    none_historique: 'Nenhum registo',
    new_price: 'Novo tarifário',
    new_driver: 'Novo motorista',
    email_required: 'Email * (recuperação)',
    password_initial: 'Palavra-passe inicial *',
    permissions: 'Permissões (principalmente STAFF):',
    create_account: 'Criar conta',
    client_name: 'Apelido do cliente *',
    client_first: 'Nome',
    phone: 'Telefone',
    email: 'Email',
    origin: 'Origem *',
    destination: 'Destino *',
    date: 'Data',
    time: 'Hora',
    passengers: 'Pessoas',
    bags: 'Malas',
    flight: 'N.º voo',
    room: 'Quarto',
    comments: 'Comentários',
    create_resa: 'Criar reserva',
    price_auto: 'Preço automático',
    all: 'Todos',
    pendente: 'Pendente',
    confirmado: 'Confirmado',
    cancelado: 'Cancelado',
    realizado: 'Realizado',
    nav_menu: 'Menu',
    close: 'Fechar',
    th_id: 'ID',
    th_hotel: 'Hotel',
    th_client: 'Cliente',
    th_trip: 'Trajeto',
    th_date: 'Data',
    th_price: 'Preço',
    th_name: 'Nome',
    th_tel: 'Tel.',
    th_role: 'Função',
    th_login: 'ID de acesso',
    th_display: 'Exibição',
    th_mode: 'Modo',
    th_internal: 'Nome interno',
    th_contact: 'Contacto',
    th_from: 'De',
    th_to: 'Para',
    th_base: 'Base €',
    th_pax: 'Pessoas',
    th_bags: 'Malas',
    th_surcharge: 'Sobretaxa',
    th_vehicle: 'Veículo',
    detail: 'Detalhe',
    none_resas: 'Nenhuma reserva',
    none_agencies: 'Nenhuma agência',
    connecting: 'A ligar…',
    saving: 'A guardar…',
    creating: 'A criar…',
    calculating: 'A calcular…',
    count_resas: '{n} reserva(s)',
    pwd_updated: 'Palavra-passe atualizada',
    account_created: 'Conta criada',
    hotel_only: 'Acesso só para hotéis',
    agency_only: 'Acesso só para agências',
    supplier_only: 'Acesso só fornecedor (SYS_ADMIN)',
    price_hint: 'Indique origem, destino, pessoas e malas.',
    price_need_od: 'Indique origem e destino.',
    price_found: 'Tarifa encontrada.',
    price_approx: 'Sem tarifa exata — preço indicativo.',
    price_none: 'Não encontrado',
    price_none_hint: 'Sem tarifa correspondente. A agência poderá ajustar.',
    price_fail: 'Impossível calcular',
    resa_created: 'Reserva criada: {id}',
    fail: 'Falha',
    new_agency: 'Nova agência',
    edit_agency: 'Editar — {id}',
    agency_updated: 'Agência atualizada',
    agency_created: 'Agência criada',
    brand_mode_hint: 'Modo <strong>padrão</strong> → identidade <span id="stdName">Nhalabene</span> (ícone N). Modo <strong>personalizado</strong> → nome / logo da agência.',
    brand_standard: 'Padrão — Nhalabene',
    brand_custom: 'Personalizado — nome e/ou logo',
    display_name: 'Nome apresentado (marca)',
    logo_url: 'URL do logo',
    logo_fallback: 'Campo vazio → usa o padrão para este campo.',
    owner_login: 'ID OWNER *',
    owner_pass: 'Palavra-passe OWNER *',
    owner_email: 'Email OWNER * (recuperação)',
    owner_sent: 'As credenciais OWNER são enviadas por email na criação.',
    agency_email: 'Email da agência *',
    agency_name: 'Nome interno (organização)',
    supplier_pwd: 'Palavra-passe fornecedor',
    change_pwd: 'Alterar a minha palavra-passe',
    filter_status: 'Filtrar por estado',
    initial_pendente: 'Estado inicial:',
    price_calc: 'Preço calculado (indicativo)',
    name: 'Nome *',
    address: 'Morada',
    active_yes: 'Sim',
    active_no: 'Não',
    active: 'Ativo',
    notes: 'Notas',
    team_hint: 'Criar contas STAFF / ADMIN e definir permissões.',
    member_hint: 'Na criação: ID de acesso + palavra-passe + email. As credenciais são enviadas por email.',
    reset_form: 'Repor',
    hotel_email: 'Email * (acesso + recuperação)',
    pass_on_create: 'obrigatória na criação',
    leave_blank: 'deixar vazio = sem alteração',
    auto_id: 'auto se vazio',
    hotel_access_only: 'Acesso só hotel',
    new_rate: 'Novo tarifário',
    edit_item: 'Editar — {id}',
    rate_updated: 'Tarifa atualizada',
    rate_created: 'Tarifa criada',
    driver_updated: 'Motorista atualizado',
    driver_created: 'Motorista criado',
    hotel_updated: 'Hotel atualizado',
    hotel_created: 'Hotel criado',
    email_agency_req: 'Email da agência obrigatório',
    owner_pass_min: 'Palavra-passe OWNER: mínimo 6 caracteres',
    drivers: 'Motoristas',
    rates: 'Tarifas',
    hotels: 'Hotéis',
    team: 'Equipa',
    reservations: 'Reservas',
    agency_email_req: 'Email da agência *',
    back_login: 'Voltar ao início de sessão',
    forgot_link: 'Esqueci a palavra-passe',
    login_sub_agency: 'Lisboa · Portal agência',
    login_sub_hotel: 'Lisboa · Portal hotel',
    login_sub_supplier: 'Sistema · Fornecedor',
    upcoming: 'Próximas',
    today: 'Hoje',
    export_excel: 'Exportar Excel',
    whatsapp: 'WhatsApp',
    calendar: 'Calendário',
    edit_price: 'Editar preço',
    save_price: 'Guardar preço',
    filter_hotel: 'Filtrar hotel',
    filter_from: 'De (data)',
    filter_to: 'Até (data)',
    quick_today: 'Hoje',
    quick_7d: '7 dias',
    quick_all: 'Todas',
    empty_resas_hint: 'Nenhuma reserva corresponde aos filtros.',
    pending_badge: 'Pendente',
    create_resa_agency: 'Nova reserva (agência)',
    sheet_close: 'Fechar',
    copied: 'Copiado',
    call: 'Ligar',
    relay_url: 'URL do relay',
    relay_token: 'Token do relay',
    relay_hint: 'URL e token para integração externa.',
    cancel_own: 'Cancelar (própria)',
    points_from_prices: 'Pontos calculados a partir dos preços',
    new_resa_tab: 'Nova reserva',
    ops_toolbar: 'Ferramentas',
    login_footer: 'Nhalabene',
    doc_title_supplier: 'Nhalabene — Admin fornecedor',
    doc_title_agency: 'Nhalabene — Portal agência',
    doc_title_hotel: 'Nhalabene — Portal hotel',
    agency_id: 'ID da agência',
    hotel_id: 'ID do hotel',
    driver_id: 'ID do motorista',
    price_base: 'Preço base (€) *',
    pax_min: 'Pessoas mín.',
    pax_max: 'Pessoas máx.',
    bags_min: 'Malas mín.',
    bags_max: 'Malas máx.',
    status_actif: 'Ativo',
    status_inactif: 'Inativo',
    login_blocked: 'bloqueado',
    relay_ok: 'Relay ativo',
    ui_error: 'Erro de interface: ',
    mode_standard: 'padrão',
    mode_custom: 'personalizado',
    perm_voir_resas: 'Ver reservas',
    perm_creer_resas: 'Criar reservas',
    perm_confirmer_resas: 'Confirmar',
    perm_modifier_resas: 'Editar reservas',
    perm_annuler_resas: 'Cancelar',
    perm_voir_prix: 'Ver preços',
    perm_modifier_prix: 'Editar preços',
    perm_gerer_hotels: 'Gerir hotéis',
    perm_gerer_chauffeurs: 'Gerir motoristas',
    perm_gerer_equipe: 'Gerir equipa',
    perm_voir_finance: 'Ver finanças',
    wa_pax: 'Pessoas',
    wa_bags: 'Malas',
    wa_flight: 'Voo',
    wa_tel: 'Tel.',
    cal_transfer: 'Transferência',
    csv_headers: 'ID;Hotel;Cliente;Tel.;Origem;Destino;Data;Hora;Pessoas;Malas;Voo;Estado;Preço;Motorista;Comentários',
    tab_settings: 'Parâmetros',
    settings_title: 'Preferências',
    settings_lang: 'Idioma',
    settings_density: 'Densidade',
    settings_density_comfortable: 'Confortável',
    settings_density_compact: 'Compacto',
    settings_currency: 'Moeda',
    settings_saved: 'Preferências guardadas',
    settings_text_size: 'Tamanho do texto',
    settings_text_normal: 'Normal',
    settings_text_large: 'Grande',
    settings_work_bg: 'Cor de fundo (trabalho)',
    settings_bg_reset: 'Repor',
    settings_wa_title: 'WhatsApp',
    settings_wa_active: 'Ativar WhatsApp',
    settings_wa_numbers: 'Números (um por linha)',
    settings_wa_group: 'Link do grupo (chat.whatsapp.com)',
    settings_email_title: 'Notificações email',
    settings_email_new: 'Email em novas reservas',
    settings_email_confirm: 'Notificar por email na confirmação',
    notify_email: 'Notificar por email',
    session_expired: 'Sessão inválida ou expirada — volte a entrar',
    whatsapp_driver: 'WhatsApp motorista',
    offline_banner: 'Ligação perdida — as alterações não serão guardadas',
    page_prev: 'Anterior',
    page_next: 'Seguinte',
    page_of: 'de',
    search_resa_ph: 'Pesquisar reserva…',
    filter_status: 'Estado',
    stats_period: 'Período das estatísticas',
    stats_from: 'De',
    stats_to: 'Até',
    stats_apply: 'Aplicar',
    stats_export: 'Exportar estatísticas',
    tab_overview: 'Visão geral',
    overview_title: 'Visão geral do sistema',
    browser_unsupported: 'Navegador não suportado — atualize (Chrome, Edge, Firefox, Safari recentes).',
    confirm_cancel_resa: 'Cancelar esta reserva?',
    page_size: 'Por página',
    aria_language: 'Idioma',
    aria_theme: 'Tema',
    vehicle_ph: 'Sedan / Van',
    tab_more: 'Mais',
    confirm_ok: 'OK',
    print_voucher: 'Imprimir',
    currency_euro: 'Euro (€)',
    whatsapp_group: 'Grupo WhatsApp',
    empty_hotels: 'Nenhum hotel',
    empty_hotels_hint: 'Crie o primeiro hotel parceiro.',
    empty_prix: 'Nenhum preço',
    empty_prix_hint: 'Adicione tarifas por trajeto.',
    empty_chauffeurs: 'Nenhum motorista',
    empty_chauffeurs_hint: 'Adicione motoristas para atribuir transfers.',
    empty_equipe: 'Nenhum membro',
    empty_equipe_hint: 'Convide a sua equipa.',
    empty_historique: 'Sem histórico',
    empty_historique_hint: 'As ações aparecerão aqui.',
    empty_agences: 'Nenhuma agência',
    empty_agences_hint: 'Crie a primeira agência.',
    search_agences_ph: 'Pesquisar agência…',
    hist_from: 'De',
    hist_to: 'Até',
    hist_search_ph: 'Pesquisar histórico…',
    hist_apply: 'Filtrar',
    ca_label: 'CA (€)',
    overview_by_agency: 'Por agência',
    export_csv: 'Exportar CSV',
    prefs_synced: 'Preferências sincronizadas'
  },
  en: {
    lang_name: 'English',
    brand: 'Nhalabene',
    hub_title: 'Nhalabene',
    hub_lead: 'Transfer platform for agencies — code and database with the provider. Nhalabene identity in standard mode; custom logo and name if configured for the agency.',
    hub_supplier: 'Provider',
    hub_supplier_desc: 'Agencies, branding (standard Nhalabene or custom), global control.',
    hub_agency: 'Agency portal',
    hub_agency_desc: 'Hotels, prices, drivers, team, reservation confirmation.',
    hub_hotel: 'Hotel portal',
    hub_hotel_desc: 'Create guest reservations — see only your own.',
    theme_dark: 'Dark',
    theme_light: 'Light',
    language: 'Language',
    hub: 'Hub',
    logout: 'Log out',
    login: 'Sign in',
    login_id: 'Login ID',
    password: 'Password',
    forgot_title: 'Forgot password',
    forgot_hint: 'A code is sent to the account email. An admin can also reset the password.',
    forgot_login_email: 'Account login or email',
    send_code: 'Send code by email',
    code_received: 'Code received',
    new_password: 'New password',
    validate_password: 'Set new password',
    old_password: 'Current password',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    create: 'Create',
    refresh: 'Refresh',
    search: 'Search',
    actions: 'Actions',
    status: 'Status',
    loading: 'Loading…',
    api_error: 'API unreachable — check /exec URL',
    success: 'Success',
    error: 'Error',
    tab_reservations: 'Reservations',
    tab_hotels: 'Hotels',
    tab_prices: 'Prices',
    tab_drivers: 'Drivers',
    tab_team: 'Team',
    tab_historique: 'History',
    tab_password: 'Password',
    tab_agencies: 'Agencies',
    tab_mine: 'My reservations',
    tab_new: 'New reservation',
    agency_portal: 'Agency portal',
    agency_login_hint: 'Team login (OWNER / ADMIN / STAFF) — ID + password.',
    hotel_portal: 'Hotel portal',
    hotel_login_hint: 'Create reservations for your guests. The agency confirms next. Login = hotel ID + password.',
    supplier_portal: 'Provider',
    supplier_login_hint: 'System admin — create agencies and branding.',
    confirm: 'Confirm',
    cancel_resa: 'Cancel',
    done: 'Completed',
    assign_driver: 'Assign driver',
    reset_pwd: 'Reset password',
    block: 'Block',
    deactivate: 'Deactivate',
    new_hotel: 'New hotel',
    new_member: 'New member',
    edit_member: 'Edit member',
    save_member: 'Save member',
    member_updated: 'Member updated',
    password_keep: 'Leave blank to keep current password',
    historique_hint: 'Latest actions recorded in the system.',
    th_action: 'Action',
    th_user: 'User',
    th_details: 'Details',
    none_historique: 'No records',
    new_price: 'New rate',
    new_driver: 'New driver',
    email_required: 'Email * (recovery)',
    password_initial: 'Initial password *',
    permissions: 'Permissions (mainly for STAFF):',
    create_account: 'Create account',
    client_name: 'Guest last name *',
    client_first: 'First name',
    phone: 'Phone',
    email: 'Email',
    origin: 'Origin *',
    destination: 'Destination *',
    date: 'Date',
    time: 'Time',
    passengers: 'Passengers',
    bags: 'Bags',
    flight: 'Flight no.',
    room: 'Room',
    comments: 'Comments',
    create_resa: 'Create reservation',
    price_auto: 'Auto price',
    all: 'All',
    pendente: 'Pending',
    confirmado: 'Confirmed',
    cancelado: 'Cancelled',
    realizado: 'Completed',
    nav_menu: 'Menu',
    close: 'Close',
    th_id: 'ID',
    th_hotel: 'Hotel',
    th_client: 'Guest',
    th_trip: 'Trip',
    th_date: 'Date',
    th_price: 'Price',
    th_name: 'Name',
    th_tel: 'Phone',
    th_role: 'Role',
    th_login: 'Login',
    th_display: 'Display',
    th_mode: 'Mode',
    th_internal: 'Internal name',
    th_contact: 'Contact',
    th_from: 'From',
    th_to: 'To',
    th_base: 'Base €',
    th_pax: 'Pax',
    th_bags: 'Bags',
    th_surcharge: 'Surcharge',
    th_vehicle: 'Vehicle',
    detail: 'Detail',
    none_resas: 'No reservations',
    none_agencies: 'No agencies',
    connecting: 'Signing in…',
    saving: 'Saving…',
    creating: 'Creating…',
    calculating: 'Calculating…',
    count_resas: '{n} reservation(s)',
    pwd_updated: 'Password updated',
    account_created: 'Account created',
    hotel_only: 'Hotel access only',
    agency_only: 'Agency access only',
    supplier_only: 'Provider access only (SYS_ADMIN)',
    price_hint: 'Enter origin, destination, passengers and bags.',
    price_need_od: 'Enter origin and destination.',
    price_found: 'Rate found.',
    price_approx: 'No exact rate — indicative price.',
    price_none: 'Not found',
    price_none_hint: 'No matching rate. The agency can adjust.',
    price_fail: 'Unable to calculate',
    resa_created: 'Reservation created: {id}',
    fail: 'Failed',
    new_agency: 'New agency',
    edit_agency: 'Edit — {id}',
    agency_updated: 'Agency updated',
    agency_created: 'Agency created',
    brand_mode_hint: 'Mode <strong>standard</strong> → product identity <span id="stdName">Nhalabene</span> (N icon). Mode <strong>custom</strong> → agency name / logo.',
    brand_standard: 'Standard — Nhalabene',
    brand_custom: 'Custom — name and/or logo',
    display_name: 'Display name (brand)',
    logo_url: 'Logo URL',
    logo_fallback: 'Empty field → falls back to standard for this field.',
    owner_login: 'OWNER login (ID) *',
    owner_pass: 'OWNER password *',
    owner_email: 'OWNER email * (recovery)',
    owner_sent: 'OWNER credentials are emailed on creation.',
    agency_email: 'Agency email *',
    agency_name: 'Internal name (organisation)',
    supplier_pwd: 'Provider password',
    change_pwd: 'Change my password',
    filter_status: 'Filter by status',
    initial_pendente: 'Initial status:',
    price_calc: 'Calculated price (indicative)',
    name: 'Name *',
    address: 'Address',
    active_yes: 'Yes',
    active_no: 'No',
    active: 'Active',
    notes: 'Notes',
    team_hint: 'Create STAFF / ADMIN accounts and set permissions.',
    member_hint: 'On create: login (ID) + password + email. Credentials are emailed.',
    reset_form: 'Reset',
    hotel_email: 'Email * (login + recovery)',
    pass_on_create: 'required on create',
    leave_blank: 'leave blank = unchanged',
    auto_id: 'auto if empty',
    hotel_access_only: 'Hotel access only',
    new_rate: 'New rate',
    edit_item: 'Edit — {id}',
    rate_updated: 'Rate updated',
    rate_created: 'Rate created',
    driver_updated: 'Driver updated',
    driver_created: 'Driver created',
    hotel_updated: 'Hotel updated',
    hotel_created: 'Hotel created',
    email_agency_req: 'Agency email required',
    owner_pass_min: 'OWNER password: min. 6 characters',
    drivers: 'Drivers',
    rates: 'Rates',
    hotels: 'Hotels',
    team: 'Team',
    reservations: 'Reservations',
    agency_email_req: 'Agency email *',
    back_login: 'Back to sign in',
    forgot_link: 'Forgot password',
    login_sub_agency: 'Lisbon · Agency portal',
    login_sub_hotel: 'Lisbon · Hotel portal',
    login_sub_supplier: 'System · Provider',
    upcoming: 'Upcoming',
    today: 'Today',
    export_excel: 'Export Excel',
    whatsapp: 'WhatsApp',
    calendar: 'Calendar',
    edit_price: 'Edit price',
    save_price: 'Save price',
    filter_hotel: 'Filter hotel',
    filter_from: 'From (date)',
    filter_to: 'To (date)',
    quick_today: 'Today',
    quick_7d: '7 days',
    quick_all: 'All',
    empty_resas_hint: 'No reservations match the filters.',
    pending_badge: 'Pending',
    create_resa_agency: 'New reservation (agency)',
    sheet_close: 'Close',
    copied: 'Copied',
    call: 'Call',
    relay_url: 'Relay URL',
    relay_token: 'Relay token',
    relay_hint: 'URL and token for external integration.',
    cancel_own: 'Cancel (own)',
    points_from_prices: 'Points calculated from prices',
    new_resa_tab: 'New reservation',
    ops_toolbar: 'Tools',
    login_footer: 'Nhalabene',
    doc_title_supplier: 'Nhalabene — Supplier admin',
    doc_title_agency: 'Nhalabene — Agency portal',
    doc_title_hotel: 'Nhalabene — Hotel portal',
    agency_id: 'Agency ID',
    hotel_id: 'Hotel ID',
    driver_id: 'Driver ID',
    price_base: 'Base price (€) *',
    pax_min: 'Min passengers',
    pax_max: 'Max passengers',
    bags_min: 'Min bags',
    bags_max: 'Max bags',
    status_actif: 'Active',
    status_inactif: 'Inactive',
    login_blocked: 'blocked',
    relay_ok: 'Relay active',
    ui_error: 'Interface error: ',
    mode_standard: 'standard',
    mode_custom: 'custom',
    perm_voir_resas: 'View reservations',
    perm_creer_resas: 'Create reservations',
    perm_confirmer_resas: 'Confirm',
    perm_modifier_resas: 'Edit reservations',
    perm_annuler_resas: 'Cancel',
    perm_voir_prix: 'View prices',
    perm_modifier_prix: 'Edit prices',
    perm_gerer_hotels: 'Manage hotels',
    perm_gerer_chauffeurs: 'Manage drivers',
    perm_gerer_equipe: 'Manage team',
    perm_voir_finance: 'View finance',
    wa_pax: 'Pax',
    wa_bags: 'Bags',
    wa_flight: 'Flight',
    wa_tel: 'Tel.',
    cal_transfer: 'Transfer',
    csv_headers: 'ID;Hotel;Client;Tel;Origin;Destination;Date;Time;Pax;Bags;Flight;Status;Price;Driver;Comments',
    tab_settings: 'Settings',
    settings_title: 'Preferences',
    settings_lang: 'Language',
    settings_density: 'Density',
    settings_density_comfortable: 'Comfortable',
    settings_density_compact: 'Compact',
    settings_currency: 'Currency',
    settings_saved: 'Preferences saved',
    settings_text_size: 'Text size',
    settings_text_normal: 'Normal',
    settings_text_large: 'Large',
    settings_work_bg: 'Work background color',
    settings_bg_reset: 'Reset',
    settings_wa_title: 'WhatsApp',
    settings_wa_active: 'Enable WhatsApp',
    settings_wa_numbers: 'Numbers (one per line)',
    settings_wa_group: 'Group link (chat.whatsapp.com)',
    settings_email_title: 'Email notifications',
    settings_email_new: 'Email on new reservations',
    settings_email_confirm: 'Notify by email on confirmation',
    notify_email: 'Notify by email',
    session_expired: 'Invalid or expired session — please sign in again',
    whatsapp_driver: 'WhatsApp driver',
    offline_banner: 'Connection lost — changes will not be saved',
    page_prev: 'Previous',
    page_next: 'Next',
    page_of: 'of',
    search_resa_ph: 'Search reservation…',
    stats_period: 'Stats period',
    stats_from: 'From',
    stats_to: 'To',
    stats_apply: 'Apply',
    stats_export: 'Export stats',
    tab_overview: 'Overview',
    overview_title: 'System overview',
    browser_unsupported: 'Unsupported browser — please update (recent Chrome, Edge, Firefox, Safari).',
    confirm_cancel_resa: 'Cancel this reservation?',
    page_size: 'Per page',
    aria_language: 'Language',
    aria_theme: 'Theme',
    vehicle_ph: 'Sedan / Van',
    tab_more: 'More',
    confirm_ok: 'OK',
    print_voucher: 'Print',
    currency_euro: 'Euro (€)',
    whatsapp_group: 'WhatsApp group',
    empty_hotels: 'No hotels',
    empty_hotels_hint: 'Create your first partner hotel.',
    empty_prix: 'No prices',
    empty_prix_hint: 'Add fares by route.',
    empty_chauffeurs: 'No drivers',
    empty_chauffeurs_hint: 'Add drivers to assign transfers.',
    empty_equipe: 'No team members',
    empty_equipe_hint: 'Invite your team.',
    empty_historique: 'No history',
    empty_historique_hint: 'Actions will appear here.',
    empty_agences: 'No agencies',
    empty_agences_hint: 'Create the first agency.',
    search_agences_ph: 'Search agency…',
    hist_from: 'From',
    hist_to: 'To',
    hist_search_ph: 'Search history…',
    hist_apply: 'Filter',
    ca_label: 'Revenue (€)',
    overview_by_agency: 'By agency',
    export_csv: 'Export CSV',
    prefs_synced: 'Preferences synced'
  },
  fr: {
    lang_name: 'Français',
    brand: 'Nhalabene',
    hub_title: 'Nhalabene',
    hub_lead: 'Plateforme transferts pour agences — code et base chez le fournisseur. Identité Nhalabene en mode standard ; logo et nom propres si configurés pour l’agence.',
    hub_supplier: 'Fournisseur',
    hub_supplier_desc: 'Agences, branding (standard Nhalabene ou custom), contrôle global.',
    hub_agency: 'Portail agence',
    hub_agency_desc: 'Hôtels, prix, chauffeurs, équipe, confirmation des réservations.',
    hub_hotel: 'Portail hôtel',
    hub_hotel_desc: 'Créer des réservations clients — voir uniquement les siennes.',
    theme_dark: 'Foncé',
    theme_light: 'Clair',
    language: 'Langue',
    hub: 'Hub',
    logout: 'Déconnexion',
    login: 'Se connecter',
    login_id: 'Identifiant (ID)',
    password: 'Mot de passe',
    forgot_title: 'Mot de passe oublié',
    forgot_hint: 'Un code est envoyé à l’email du compte. Un admin peut aussi réinitialiser le mot de passe.',
    forgot_login_email: 'Login ou email du compte',
    send_code: 'Recevoir le code par email',
    code_received: 'Code reçu',
    new_password: 'Nouveau mot de passe',
    validate_password: 'Valider le nouveau mot de passe',
    old_password: 'Mot de passe actuel',
    save: 'Enregistrer',
    cancel: 'Annuler',
    edit: 'Éditer',
    create: 'Créer',
    refresh: 'Actualiser',
    search: 'Rechercher',
    actions: 'Actions',
    status: 'Statut',
    loading: 'Chargement…',
    api_error: 'API non joignable — vérifiez l’URL /exec',
    success: 'Succès',
    error: 'Erreur',
    tab_reservations: 'Réservations',
    tab_hotels: 'Hôtels',
    tab_prices: 'Prix',
    tab_drivers: 'Chauffeurs',
    tab_team: 'Équipe',
    tab_historique: 'Historique',
    tab_password: 'Mot de passe',
    tab_agencies: 'Agences',
    tab_mine: 'Mes réservations',
    tab_new: 'Nouvelle réservation',
    agency_portal: 'Portail agence',
    agency_login_hint: 'Connexion équipe (OWNER / ADMIN / STAFF) — ID + mot de passe.',
    hotel_portal: 'Portail hôtel',
    hotel_login_hint: 'Créez des réservations pour vos clients. L’agence confirme ensuite. Login = ID hôtel + mot de passe.',
    supplier_portal: 'Fournisseur',
    supplier_login_hint: 'Administration système — création et branding des agences.',
    confirm: 'Confirmer',
    cancel_resa: 'Annuler',
    done: 'Réalisé',
    assign_driver: 'Attribuer chauffeur',
    reset_pwd: 'Reset MDP',
    block: 'Bloquer',
    deactivate: 'Désactiver',
    new_hotel: 'Nouvel hôtel',
    new_member: 'Nouveau membre',
    edit_member: 'Modifier membre',
    save_member: 'Enregistrer membre',
    member_updated: 'Membre mis à jour',
    password_keep: 'Laisser vide pour conserver le mot de passe actuel',
    historique_hint: 'Dernières actions enregistrées dans le système.',
    th_action: 'Action',
    th_user: 'Utilisateur',
    th_details: 'Détails',
    none_historique: 'Aucun enregistrement',
    new_price: 'Nouveau tarif',
    new_driver: 'Nouveau chauffeur',
    email_required: 'Email * (récupération)',
    password_initial: 'Mot de passe initial *',
    permissions: 'Permissions (surtout pour STAFF) :',
    create_account: 'Créer le compte',
    client_name: 'Nom du client *',
    client_first: 'Prénom',
    phone: 'Téléphone',
    email: 'Email',
    origin: 'Origine *',
    destination: 'Destination *',
    date: 'Date',
    time: 'Heure',
    passengers: 'Personnes',
    bags: 'Valises',
    flight: 'N° vol',
    room: 'Chambre',
    comments: 'Commentaires',
    create_resa: 'Créer la réservation',
    price_auto: 'Prix automatique',
    all: 'Tous',
    pendente: 'Pendente',
    confirmado: 'Confirmé',
    cancelado: 'Annulé',
    realizado: 'Réalisé',
    nav_menu: 'Menu',
    close: 'Fermer',
    th_id: 'ID',
    th_hotel: 'Hôtel',
    th_client: 'Client',
    th_trip: 'Trajet',
    th_date: 'Date',
    th_price: 'Prix',
    th_name: 'Nom',
    th_tel: 'Tél',
    th_role: 'Rôle',
    th_login: 'Login',
    th_display: 'Affichage',
    th_mode: 'Mode',
    th_internal: 'Nom interne',
    th_contact: 'Contact',
    th_from: 'De',
    th_to: 'Pour',
    th_base: 'Base €',
    th_pax: 'Pax',
    th_bags: 'Malas',
    th_surcharge: 'Surch.',
    th_vehicle: 'Véhicule',
    detail: 'Détail',
    none_resas: 'Aucune réservation',
    none_agencies: 'Aucune agence',
    connecting: 'Connexion…',
    saving: 'Enregistrement…',
    creating: 'Création…',
    calculating: 'Calcul…',
    count_resas: '{n} réservation(s)',
    pwd_updated: 'Mot de passe mis à jour',
    account_created: 'Compte créé',
    hotel_only: 'Accès hôtel uniquement',
    agency_only: 'Accès agence uniquement',
    supplier_only: 'Accès fournisseur uniquement (SYS_ADMIN)',
    price_hint: 'Renseignez origine, destination, personnes et valises.',
    price_need_od: 'Renseignez origine et destination.',
    price_found: 'Tarif trouvé.',
    price_approx: 'Aucun tarif exact — prix indicatif.',
    price_none: 'Non trouvé',
    price_none_hint: 'Aucun tarif correspondant. L’agence pourra ajuster.',
    price_fail: 'Impossible de calculer',
    resa_created: 'Réservation créée : {id}',
    fail: 'Échec',
    new_agency: 'Nouvelle agence',
    edit_agency: 'Modifier — {id}',
    agency_updated: 'Agence mise à jour',
    agency_created: 'Agence créée',
    brand_mode_hint: 'Mode <strong>standard</strong> → identité <span id="stdName">Nhalabene</span> (icône N). Mode <strong>custom</strong> → nom / logo de l’agence.',
    brand_standard: 'Standard — Nhalabene',
    brand_custom: 'Personnalisé — nom et/ou logo',
    display_name: 'Nom affiché (marque)',
    logo_url: 'URL du logo',
    logo_fallback: 'Champ vide → retombe sur le standard pour ce champ.',
    owner_login: 'Login OWNER (ID) *',
    owner_pass: 'Mot de passe OWNER *',
    owner_email: 'Email OWNER * (récupération)',
    owner_sent: 'Les identifiants OWNER sont envoyés par email à la création.',
    agency_email: 'Email agence *',
    agency_name: 'Nom interne (organisation)',
    supplier_pwd: 'Mot de passe fournisseur',
    change_pwd: 'Changer mon mot de passe',
    filter_status: 'Filtrer par statut',
    initial_pendente: 'Statut initial :',
    price_calc: 'Prix calculé (indicatif)',
    name: 'Nom *',
    address: 'Adresse',
    active_yes: 'Oui',
    active_no: 'Non',
    active: 'Actif',
    notes: 'Notes',
    team_hint: 'Créer des comptes STAFF / ADMIN et définir les permissions.',
    member_hint: 'À la création : login (ID) + mot de passe + email. Les identifiants sont envoyés par email.',
    reset_form: 'Réinitialiser',
    hotel_email: 'Email * (login + récupération)',
    pass_on_create: 'requis à la création',
    leave_blank: 'laisser vide = inchangé',
    auto_id: 'auto si vide',
    hotel_access_only: 'Accès hôtel uniquement',
    new_rate: 'Nouveau tarif',
    edit_item: 'Modifier — {id}',
    rate_updated: 'Tarif mis à jour',
    rate_created: 'Tarif créé',
    driver_updated: 'Chauffeur mis à jour',
    driver_created: 'Chauffeur créé',
    hotel_updated: 'Hôtel mis à jour',
    hotel_created: 'Hôtel créé',
    email_agency_req: 'Email agence obligatoire',
    owner_pass_min: 'Mot de passe OWNER : 6 caractères minimum',
    drivers: 'Chauffeurs',
    rates: 'Tarifs',
    hotels: 'Hôtels',
    team: 'Équipe',
    reservations: 'Réservations',
    agency_email_req: 'Email agence *',
    back_login: 'Retour à la connexion',
    forgot_link: 'Mot de passe oublié',
    login_sub_agency: 'Lisbonne · Portail agence',
    login_sub_hotel: 'Lisbonne · Portail hôtel',
    login_sub_supplier: 'Système · Fournisseur',
    upcoming: 'À venir',
    today: 'Aujourd\'hui',
    export_excel: 'Exporter Excel',
    whatsapp: 'WhatsApp',
    calendar: 'Calendrier',
    edit_price: 'Modifier le prix',
    save_price: 'Enregistrer le prix',
    filter_hotel: 'Filtrer hôtel',
    filter_from: 'Du (date)',
    filter_to: 'Au (date)',
    quick_today: 'Aujourd\'hui',
    quick_7d: '7 jours',
    quick_all: 'Toutes',
    empty_resas_hint: 'Aucune réservation ne correspond aux filtres.',
    pending_badge: 'En attente',
    create_resa_agency: 'Nouvelle réservation (agence)',
    sheet_close: 'Fermer',
    copied: 'Copié',
    call: 'Appeler',
    relay_url: 'URL relay',
    relay_token: 'Token relay',
    relay_hint: 'URL et token pour intégration externe.',
    cancel_own: 'Annuler (propre)',
    points_from_prices: 'Points calculés à partir des prix',
    new_resa_tab: 'Nouvelle réservation',
    ops_toolbar: 'Outils',
    login_footer: 'Nhalabene',
    doc_title_supplier: 'Nhalabene — Admin fournisseur',
    doc_title_agency: 'Nhalabene — Portail agence',
    doc_title_hotel: 'Nhalabene — Portail hôtel',
    agency_id: 'ID agence',
    hotel_id: 'ID hôtel',
    driver_id: 'ID chauffeur',
    price_base: 'Prix de base (€) *',
    pax_min: 'Pax min.',
    pax_max: 'Pax max.',
    bags_min: 'Bagages min.',
    bags_max: 'Bagages max.',
    status_actif: 'Actif',
    status_inactif: 'Inactif',
    login_blocked: 'bloqué',
    relay_ok: 'Relay actif',
    ui_error: 'Erreur interface : ',
    mode_standard: 'standard',
    mode_custom: 'personnalisé',
    perm_voir_resas: 'Voir réservations',
    perm_creer_resas: 'Créer réservations',
    perm_confirmer_resas: 'Confirmer',
    perm_modifier_resas: 'Modifier réservations',
    perm_annuler_resas: 'Annuler',
    perm_voir_prix: 'Voir prix',
    perm_modifier_prix: 'Modifier prix',
    perm_gerer_hotels: 'Gérer hôtels',
    perm_gerer_chauffeurs: 'Gérer chauffeurs',
    perm_gerer_equipe: 'Gérer équipe',
    perm_voir_finance: 'Voir finance',
    wa_pax: 'Pers.',
    wa_bags: 'Bagages',
    wa_flight: 'Vol',
    wa_tel: 'Tél.',
    cal_transfer: 'Transfert',
    csv_headers: 'ID;Hôtel;Client;Tél;Origine;Destination;Date;Heure;Pers;Bagages;Vol;Statut;Prix;Chauffeur;Commentaires',
    tab_settings: 'Paramètres',
    settings_title: 'Préférences',
    settings_lang: 'Langue',
    settings_density: 'Densité',
    settings_density_comfortable: 'Confortable',
    settings_density_compact: 'Compact',
    settings_currency: 'Devise',
    settings_saved: 'Préférences enregistrées',
    settings_text_size: 'Taille du texte',
    settings_text_normal: 'Normal',
    settings_text_large: 'Grand',
    settings_work_bg: 'Couleur de fond (travail)',
    settings_bg_reset: 'Reset',
    settings_wa_title: 'WhatsApp',
    settings_wa_active: 'Activer WhatsApp',
    settings_wa_numbers: 'Numéros (un par ligne)',
    settings_wa_group: 'Lien groupe (chat.whatsapp.com)',
    settings_email_title: 'Notifications email',
    settings_email_new: 'Email nouvelles réservations',
    settings_email_confirm: 'Notifier par email à la confirmation',
    notify_email: 'Notifier par email',
    session_expired: 'Session invalide ou expirée — reconnectez-vous',
    whatsapp_driver: 'WhatsApp chauffeur',
    offline_banner: 'Connexion perdue — les modifications ne seront pas enregistrées',
    page_prev: 'Précédent',
    page_next: 'Suivant',
    page_of: 'sur',
    search_resa_ph: 'Rechercher une réservation…',
    stats_period: 'Période des statistiques',
    stats_from: 'Du',
    stats_to: 'Au',
    stats_apply: 'Appliquer',
    stats_export: 'Exporter les stats',
    tab_overview: 'Vue d\'ensemble',
    overview_title: 'Vue d\'ensemble du système',
    browser_unsupported: 'Navigateur non supporté — merci de le mettre à jour (Chrome, Edge, Firefox, Safari récents).',
    confirm_cancel_resa: 'Annuler cette réservation ?',
    page_size: 'Par page',
    aria_language: 'Langue',
    aria_theme: 'Thème',
    vehicle_ph: 'Berline / Van',
    tab_more: 'Plus',
    confirm_ok: 'OK',
    print_voucher: 'Imprimer',
    currency_euro: 'Euro (€)',
    whatsapp_group: 'Groupe WhatsApp',
    empty_hotels: 'Aucun hôtel',
    empty_hotels_hint: 'Créez le premier hôtel partenaire.',
    empty_prix: 'Aucun tarif',
    empty_prix_hint: 'Ajoutez des tarifs par trajet.',
    empty_chauffeurs: 'Aucun chauffeur',
    empty_chauffeurs_hint: 'Ajoutez des chauffeurs pour attribuer.',
    empty_equipe: 'Aucun membre',
    empty_equipe_hint: 'Invitez votre équipe.',
    empty_historique: 'Pas d’historique',
    empty_historique_hint: 'Les actions apparaîtront ici.',
    empty_agences: 'Aucune agence',
    empty_agences_hint: 'Créez la première agence.',
    search_agences_ph: 'Rechercher une agence…',
    hist_from: 'Du',
    hist_to: 'Au',
    hist_search_ph: 'Rechercher l’historique…',
    hist_apply: 'Filtrer',
    ca_label: 'CA (€)',
    overview_by_agency: 'Par agence',
    export_csv: 'Exporter CSV',
    prefs_synced: 'Préférences synchronisées'
  },
  es: {
    lang_name: 'Español',
    brand: 'Nhalabene',
    hub_title: 'Nhalabene',
    hub_lead: 'Plataforma de transfers para agencias — código y base en el proveedor. Identidad Nhalabene en modo estándar; logo y nombre propios si están configurados para la agencia.',
    hub_supplier: 'Proveedor',
    hub_supplier_desc: 'Agencias, branding (estándar Nhalabene o personalizado), control global.',
    hub_agency: 'Portal agencia',
    hub_agency_desc: 'Hoteles, precios, conductores, equipo, confirmación de reservas.',
    hub_hotel: 'Portal hotel',
    hub_hotel_desc: 'Crear reservas para clientes — ver solo las suyas.',
    theme_dark: 'Oscuro',
    theme_light: 'Claro',
    language: 'Idioma',
    hub: 'Hub',
    logout: 'Cerrar sesión',
    login: 'Iniciar sesión',
    login_id: 'Identificador (ID)',
    password: 'Contraseña',
    forgot_title: 'Contraseña olvidada',
    forgot_hint: 'Se envía un código al email de la cuenta. Un admin también puede restablecerla.',
    forgot_login_email: 'Login o email de la cuenta',
    send_code: 'Recibir código por email',
    code_received: 'Código recibido',
    new_password: 'Nueva contraseña',
    validate_password: 'Validar nueva contraseña',
    old_password: 'Contraseña actual',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    create: 'Crear',
    refresh: 'Actualizar',
    search: 'Buscar',
    actions: 'Acciones',
    status: 'Estado',
    loading: 'Cargando…',
    api_error: 'API no disponible — compruebe la URL /exec',
    success: 'Éxito',
    error: 'Error',
    tab_reservations: 'Reservas',
    tab_hotels: 'Hoteles',
    tab_prices: 'Precios',
    tab_drivers: 'Conductores',
    tab_team: 'Equipo',
    tab_historique: 'Historial',
    tab_password: 'Contraseña',
    tab_agencies: 'Agencias',
    tab_mine: 'Mis reservas',
    tab_new: 'Nueva reserva',
    agency_portal: 'Portal agencia',
    agency_login_hint: 'Acceso del equipo (OWNER / ADMIN / STAFF) — ID + contraseña.',
    hotel_portal: 'Portal hotel',
    hotel_login_hint: 'Cree reservas para sus clientes. La agencia confirma después. Login = ID hotel + contraseña.',
    supplier_portal: 'Proveedor',
    supplier_login_hint: 'Administración del sistema — creación y branding de agencias.',
    confirm: 'Confirmar',
    cancel_resa: 'Cancelar',
    done: 'Realizado',
    assign_driver: 'Asignar conductor',
    reset_pwd: 'Restablecer contraseña',
    block: 'Bloquear',
    deactivate: 'Desactivar',
    new_hotel: 'Nuevo hotel',
    new_member: 'Nuevo miembro',
    edit_member: 'Editar miembro',
    save_member: 'Guardar miembro',
    member_updated: 'Miembro actualizado',
    password_keep: 'Dejar vacío para mantener la contraseña actual',
    historique_hint: 'Últimas acciones registradas en el sistema.',
    th_action: 'Acción',
    th_user: 'Usuario',
    th_details: 'Detalles',
    none_historique: 'Sin registros',
    new_price: 'Nueva tarifa',
    new_driver: 'Nuevo conductor',
    email_required: 'Email * (recuperación)',
    password_initial: 'Contraseña inicial *',
    permissions: 'Permisos (sobre todo STAFF):',
    create_account: 'Crear cuenta',
    client_name: 'Apellido del cliente *',
    client_first: 'Nombre',
    phone: 'Teléfono',
    email: 'Email',
    origin: 'Origen *',
    destination: 'Destino *',
    date: 'Fecha',
    time: 'Hora',
    passengers: 'Personas',
    bags: 'Maletas',
    flight: 'N.º vuelo',
    room: 'Habitación',
    comments: 'Comentarios',
    create_resa: 'Crear reserva',
    price_auto: 'Precio automático',
    all: 'Todos',
    pendente: 'Pendiente',
    confirmado: 'Confirmado',
    cancelado: 'Cancelado',
    realizado: 'Realizado',
    nav_menu: 'Menú',
    close: 'Cerrar',
    th_id: 'ID',
    th_hotel: 'Hotel',
    th_client: 'Cliente',
    th_trip: 'Trayecto',
    th_date: 'Fecha',
    th_price: 'Precio',
    th_name: 'Nombre',
    th_tel: 'Tel.',
    th_role: 'Rol',
    th_login: 'Login',
    th_display: 'Visualización',
    th_mode: 'Modo',
    th_internal: 'Nombre interno',
    th_contact: 'Contacto',
    th_from: 'De',
    th_to: 'Para',
    th_base: 'Base €',
    th_pax: 'Pax',
    th_bags: 'Maletas',
    th_surcharge: 'Recargo',
    th_vehicle: 'Vehículo',
    detail: 'Detalle',
    none_resas: 'Ninguna reserva',
    none_agencies: 'Ninguna agencia',
    connecting: 'Conectando…',
    saving: 'Guardando…',
    creating: 'Creando…',
    calculating: 'Calculando…',
    count_resas: '{n} reserva(s)',
    pwd_updated: 'Contraseña actualizada',
    account_created: 'Cuenta creada',
    hotel_only: 'Acceso solo hotel',
    agency_only: 'Acceso solo agencia',
    supplier_only: 'Acceso solo proveedor (SYS_ADMIN)',
    price_hint: 'Indique origen, destino, personas y maletas.',
    price_need_od: 'Indique origen y destino.',
    price_found: 'Tarifa encontrada.',
    price_approx: 'Sin tarifa exacta — precio indicativo.',
    price_none: 'No encontrado',
    price_none_hint: 'Sin tarifa correspondiente. La agencia podrá ajustar.',
    price_fail: 'Imposible calcular',
    resa_created: 'Reserva creada: {id}',
    fail: 'Fallo',
    new_agency: 'Nueva agencia',
    edit_agency: 'Editar — {id}',
    agency_updated: 'Agencia actualizada',
    agency_created: 'Agencia creada',
    brand_mode_hint: 'Modo <strong>standard</strong> → identidad <span id="stdName">Nhalabene</span> (icono N). Modo <strong>custom</strong> → nombre / logo de la agencia.',
    brand_standard: 'Standard — Nhalabene',
    brand_custom: 'Personalizado — nombre y/o logo',
    display_name: 'Nombre mostrado (marca)',
    logo_url: 'URL del logo',
    logo_fallback: 'Campo vacío → usa el estándar para este campo.',
    owner_login: 'Login OWNER (ID) *',
    owner_pass: 'Contraseña OWNER *',
    owner_email: 'Email OWNER * (recuperación)',
    owner_sent: 'Las credenciales OWNER se envían por email al crear.',
    agency_email: 'Email agencia *',
    agency_name: 'Nombre interno (organización)',
    supplier_pwd: 'Contraseña proveedor',
    change_pwd: 'Cambiar mi contraseña',
    filter_status: 'Filtrar por estado',
    initial_pendente: 'Estado inicial:',
    price_calc: 'Precio calculado (indicativo)',
    name: 'Nombre *',
    address: 'Dirección',
    active_yes: 'Sí',
    active_no: 'No',
    active: 'Activo',
    notes: 'Notas',
    team_hint: 'Crear cuentas STAFF / ADMIN y definir permisos.',
    member_hint: 'Al crear: login (ID) + contraseña + email. Las credenciales se envían por email.',
    reset_form: 'Restablecer',
    hotel_email: 'Email * (login + recuperación)',
    pass_on_create: 'obligatoria al crear',
    leave_blank: 'dejar vacío = sin cambio',
    auto_id: 'auto si vacío',
    hotel_access_only: 'Acceso solo hotel',
    new_rate: 'Nueva tarifa',
    edit_item: 'Editar — {id}',
    rate_updated: 'Tarifa actualizada',
    rate_created: 'Tarifa creada',
    driver_updated: 'Conductor actualizado',
    driver_created: 'Conductor creado',
    hotel_updated: 'Hotel actualizado',
    hotel_created: 'Hotel creado',
    email_agency_req: 'Email de agencia obligatorio',
    owner_pass_min: 'Contraseña OWNER: mínimo 6 caracteres',
    drivers: 'Conductores',
    rates: 'Tarifas',
    hotels: 'Hoteles',
    team: 'Equipo',
    reservations: 'Reservas',
    agency_email_req: 'Email agencia *',
    back_login: 'Volver al inicio de sesión',
    forgot_link: 'Olvidé la contraseña',
    login_sub_agency: 'Lisboa · Portal agencia',
    login_sub_hotel: 'Lisboa · Portal hotel',
    login_sub_supplier: 'Sistema · Proveedor',
    upcoming: 'Próximas',
    today: 'Hoy',
    export_excel: 'Exportar Excel',
    whatsapp: 'WhatsApp',
    calendar: 'Calendario',
    edit_price: 'Editar precio',
    save_price: 'Guardar precio',
    filter_hotel: 'Filtrar hotel',
    filter_from: 'Desde (fecha)',
    filter_to: 'Hasta (fecha)',
    quick_today: 'Hoy',
    quick_7d: '7 días',
    quick_all: 'Todas',
    empty_resas_hint: 'Ninguna reserva coincide con los filtros.',
    pending_badge: 'Pendiente',
    create_resa_agency: 'Nueva reserva (agencia)',
    sheet_close: 'Cerrar',
    copied: 'Copiado',
    call: 'Llamar',
    relay_url: 'URL relay',
    relay_token: 'Token relay',
    relay_hint: 'URL y token para integración externa.',
    cancel_own: 'Cancelar (propia)',
    points_from_prices: 'Puntos calculados a partir de precios',
    new_resa_tab: 'Nueva reserva',
    ops_toolbar: 'Herramientas',
    login_footer: 'Nhalabene',
    doc_title_supplier: 'Nhalabene — Admin proveedor',
    doc_title_agency: 'Nhalabene — Portal agencia',
    doc_title_hotel: 'Nhalabene — Portal hotel',
    agency_id: 'ID de agencia',
    hotel_id: 'ID de hotel',
    driver_id: 'ID de conductor',
    price_base: 'Precio base (€) *',
    pax_min: 'Pax mín.',
    pax_max: 'Pax máx.',
    bags_min: 'Maletas mín.',
    bags_max: 'Maletas máx.',
    status_actif: 'Activo',
    status_inactif: 'Inactivo',
    login_blocked: 'bloqueado',
    relay_ok: 'Relay activo',
    ui_error: 'Error de interfaz: ',
    mode_standard: 'estándar',
    mode_custom: 'personalizado',
    perm_voir_resas: 'Ver reservas',
    perm_creer_resas: 'Crear reservas',
    perm_confirmer_resas: 'Confirmar',
    perm_modifier_resas: 'Editar reservas',
    perm_annuler_resas: 'Cancelar',
    perm_voir_prix: 'Ver precios',
    perm_modifier_prix: 'Editar precios',
    perm_gerer_hotels: 'Gestionar hoteles',
    perm_gerer_chauffeurs: 'Gestionar conductores',
    perm_gerer_equipe: 'Gestionar equipo',
    perm_voir_finance: 'Ver finanzas',
    wa_pax: 'Personas',
    wa_bags: 'Maletas',
    wa_flight: 'Vuelo',
    wa_tel: 'Tel.',
    cal_transfer: 'Traslado',
    csv_headers: 'ID;Hotel;Cliente;Tel;Origen;Destino;Fecha;Hora;Personas;Maletas;Vuelo;Estado;Precio;Conductor;Comentarios',
    tab_settings: 'Ajustes',
    settings_title: 'Preferencias',
    settings_lang: 'Idioma',
    settings_density: 'Densidad',
    settings_density_comfortable: 'Cómodo',
    settings_density_compact: 'Compacto',
    settings_currency: 'Moneda',
    settings_saved: 'Preferencias guardadas',
    settings_text_size: 'Tamaño del texto',
    settings_text_normal: 'Normal',
    settings_text_large: 'Grande',
    settings_work_bg: 'Color de fondo (trabajo)',
    settings_bg_reset: 'Restablecer',
    settings_wa_title: 'WhatsApp',
    settings_wa_active: 'Activar WhatsApp',
    settings_wa_numbers: 'Números (uno por línea)',
    settings_wa_group: 'Enlace de grupo (chat.whatsapp.com)',
    settings_email_title: 'Notificaciones email',
    settings_email_new: 'Email en nuevas reservas',
    settings_email_confirm: 'Notificar por email al confirmar',
    notify_email: 'Notificar por email',
    session_expired: 'Sesión inválida o expirada — vuelva a entrar',
    whatsapp_driver: 'WhatsApp conductor',
    offline_banner: 'Conexión perdida — los cambios no se guardarán',
    page_prev: 'Anterior',
    page_next: 'Siguiente',
    page_of: 'de',
    search_resa_ph: 'Buscar reserva…',
    stats_period: 'Período de estadísticas',
    stats_from: 'Desde',
    stats_to: 'Hasta',
    stats_apply: 'Aplicar',
    stats_export: 'Exportar estadísticas',
    tab_overview: 'Vista general',
    overview_title: 'Vista general del sistema',
    browser_unsupported: 'Navegador no compatible — actualice (Chrome, Edge, Firefox, Safari recientes).',
    confirm_cancel_resa: '¿Cancelar esta reserva?',
    page_size: 'Por página',
    aria_language: 'Idioma',
    aria_theme: 'Tema',
    vehicle_ph: 'Sedán / Van',
    tab_more: 'Más',
    confirm_ok: 'OK',
    print_voucher: 'Imprimir',
    currency_euro: 'Euro (€)',
    whatsapp_group: 'Grupo WhatsApp',
    empty_hotels: 'Ningún hotel',
    empty_hotels_hint: 'Cree el primer hotel asociado.',
    empty_prix: 'Sin precios',
    empty_prix_hint: 'Añada tarifas por trayecto.',
    empty_chauffeurs: 'Ningún conductor',
    empty_chauffeurs_hint: 'Añada conductores para asignar.',
    empty_equipe: 'Sin miembros',
    empty_equipe_hint: 'Invite a su equipo.',
    empty_historique: 'Sin historial',
    empty_historique_hint: 'Las acciones aparecerán aquí.',
    empty_agences: 'Ninguna agencia',
    empty_agences_hint: 'Cree la primera agencia.',
    search_agences_ph: 'Buscar agencia…',
    hist_from: 'Desde',
    hist_to: 'Hasta',
    hist_search_ph: 'Buscar historial…',
    hist_apply: 'Filtrar',
    ca_label: 'CA (€)',
    overview_by_agency: 'Por agencia',
    export_csv: 'Exportar CSV',
    prefs_synced: 'Preferencias sincronizadas'
  }
};

var NHB_LANG = 'pt';
var NHB_THEME = 'dark';

function t(key) {
  var pack = NHB_I18N[NHB_LANG] || NHB_I18N.pt;
  if (pack[key] != null) return pack[key];
  if (NHB_I18N.en[key] != null) return NHB_I18N.en[key];
  return key;
}

function tf(key, vars) {
  var s = t(key);
  if (!vars) return s;
  Object.keys(vars).forEach(function (k) {
    s = s.split('{' + k + '}').join(String(vars[k]));
  });
  return s;
}

function nhbStatusLabel(st) {
  var s = String(st || '').toLowerCase();
  if (s === 'pendente' || s === 'confirmado' || s === 'cancelado' || s === 'realizado') return t(s);
  if (s === 'actif' || s === 'ativo' || s === 'active') return t('status_actif');
  if (s === 'inactif' || s === 'inativo' || s === 'inactive') return t('status_inactif');
  return st || '—';
}

function nhbModeLabel(mode) {
  var m = String(mode || 'standard').toLowerCase();
  if (m === 'custom') return t('mode_custom');
  return t('mode_standard');
}

/** Petites icônes navigation (SVG stroke, currentColor) */
function nhbNavIconSvg(name) {
  var p = {
    overview: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>',
    agences: '<path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-6h6v6"/>',
    resas: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>',
    creer: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    nouvelle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    hotels: '<path d="M4 21V7l8-4 8 4v14"/><path d="M9 21v-6h6v6M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/>',
    prix: '<path d="M12 3v18M8 8h5a3 3 0 010 6H8m0 0h6a3 3 0 010 6H8"/>',
    chauffeurs: '<path d="M5 17h14v-5H5v5z"/><path d="M7 12l2-5h6l2 5"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/>',
    equipe: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><path d="M14 19c0-2 2-3.5 4.5-3.5S22 17 22 19"/>',
    historique: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    mdp: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    parametres: '<circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    more: '<circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>'
  };
  var body = p[name] || '<circle cx="12" cy="12" r="3"/>';
  return '<svg class="nhb-nav-svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
}

function nhbNavButtonHtml(iconKey, label) {
  var ico = iconKey
    ? '<span class="nhb-nav-ico" aria-hidden="true">' + nhbNavIconSvg(iconKey) + '</span>'
    : '';
  return ico + '<span class="nhb-nav-lbl">' + label + '</span>';
}

function nhbBindBottomNav(tabsSel, bottomSel) {
  tabsSel = tabsSel || '#mainTabs';
  bottomSel = bottomSel || '#nhbBottomNav';
  var tabs = document.querySelector(tabsSel);
  var bottom = document.querySelector(bottomSel);
  if (!tabs || !bottom) return;
  document.body.classList.add('has-bottom-nav');
  var syncTimer = null;
  var obs = null;
  var moreSheet = document.getElementById('nhbMoreSheet');
  if (!moreSheet) {
    moreSheet = document.createElement('div');
    moreSheet.id = 'nhbMoreSheet';
    moreSheet.className = 'nhb-more-sheet nhb-hidden';
    moreSheet.setAttribute('aria-hidden', 'true');
    document.body.appendChild(moreSheet);
  }
  function closeMore() {
    moreSheet.classList.add('nhb-hidden');
    moreSheet.setAttribute('aria-hidden', 'true');
  }
  function openMore(secondaryBtns) {
    moreSheet.innerHTML = '<h3>' + t('tab_more') + '</h3>';
    secondaryBtns.forEach(function (b) {
      var row = document.createElement('button');
      row.type = 'button';
      var iconKey = b.getAttribute('data-icon') || b.getAttribute('data-tab') || '';
      var label = b.getAttribute('data-i18n') ? t(b.getAttribute('data-i18n')) : b.textContent;
      row.innerHTML = nhbNavButtonHtml(iconKey, label);
      row.onclick = function () {
        closeMore();
        b.click();
        sync();
      };
      moreSheet.appendChild(row);
    });
    var cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.textContent = t('cancel');
    cancel.onclick = closeMore;
    moreSheet.appendChild(cancel);
    moreSheet.classList.remove('nhb-hidden');
    moreSheet.setAttribute('aria-hidden', 'false');
  }
  function syncNow() {
    bottom.innerHTML = '';
    closeMore();
    var visible = [];
    tabs.querySelectorAll('button').forEach(function (b) {
      if (b.classList.contains('nhb-hidden') || b.style.display === 'none') return;
      visible.push(b);
    });
    var useTiers = visible.some(function (b) { return b.getAttribute('data-nav-tier') === 'primary'; });
    var primary = useTiers
      ? visible.filter(function (b) { return b.getAttribute('data-nav-tier') === 'primary'; })
      : visible;
    var secondary = useTiers
      ? visible.filter(function (b) { return b.getAttribute('data-nav-tier') !== 'primary'; })
      : [];
    function addNavBtn(b) {
      var nb = document.createElement('button');
      nb.type = 'button';
      nb.setAttribute('data-tab', b.getAttribute('data-tab'));
      var iconKey = b.getAttribute('data-icon') || b.getAttribute('data-tab') || '';
      if (iconKey) nb.setAttribute('data-icon', iconKey);
      nb.className = b.classList.contains('active') ? 'active' : '';
      var label = b.getAttribute('data-i18n') ? t(b.getAttribute('data-i18n')) : (
        (b.querySelector('.nhb-nav-lbl') && b.querySelector('.nhb-nav-lbl').textContent) || b.textContent
      );
      nb.innerHTML = nhbNavButtonHtml(iconKey, label);
      nb.onclick = function () {
        closeMore();
        b.click();
        document.body.classList.remove('nhb-nav-open');
        sync();
      };
      bottom.appendChild(nb);
    }
    primary.forEach(addNavBtn);
    if (secondary.length) {
      var moreBtn = document.createElement('button');
      moreBtn.type = 'button';
      moreBtn.setAttribute('data-icon', 'more');
      var secActive = secondary.some(function (b) { return b.classList.contains('active'); });
      moreBtn.className = secActive ? 'active' : '';
      moreBtn.innerHTML = nhbNavButtonHtml('more', t('tab_more'));
      moreBtn.onclick = function () {
        if (moreSheet.classList.contains('nhb-hidden')) openMore(secondary);
        else closeMore();
      };
      bottom.appendChild(moreBtn);
    }
  }
  function sync() {
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(function () {
      syncTimer = null;
      if (obs) obs.disconnect();
      try { syncNow(); } finally {
        if (obs) obs.observe(tabs, { attributes: true, subtree: true, attributeFilter: ['class', 'style'] });
      }
    }, 40);
  }
  syncNow();
  document.addEventListener('nhb:lang', sync);
  obs = new MutationObserver(sync);
  obs.observe(tabs, { attributes: true, subtree: true, attributeFilter: ['class', 'style'] });
  return sync;
}

function nhbApplyI18n(root) {
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (!k) return;
    var label = t(k);
    var iconKey = el.getAttribute('data-icon');
    if (iconKey && (el.closest('.nhb-tabs') || el.closest('.nhb-bottom-nav'))) {
      el.innerHTML = nhbNavButtonHtml(iconKey, label);
    } else {
      el.textContent = label;
    }
  });
  root.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var k = el.getAttribute('data-i18n-html');
    if (k) el.innerHTML = t(k);
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var k = el.getAttribute('data-i18n-placeholder');
    if (k) el.setAttribute('placeholder', t(k));
  });
  root.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var k = el.getAttribute('data-i18n-title');
    if (k) el.setAttribute('title', t(k));
  });
  root.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var k = el.getAttribute('data-i18n-aria');
    if (k) el.setAttribute('aria-label', t(k));
  });
  document.documentElement.lang = NHB_LANG === 'pt' ? 'pt' : NHB_LANG;
  var titleKey = document.body.getAttribute('data-i18n-title-doc');
  if (titleKey) document.title = t(titleKey);
}

function nhbSetLang(lang) {
  if (!NHB_I18N[lang]) lang = 'pt';
  NHB_LANG = lang;
  try { localStorage.setItem('nhb_lang', lang); } catch (e) {}
  nhbApplyI18n();
  nhbSyncLangControls();
  document.dispatchEvent(new CustomEvent('nhb:lang', { detail: { lang: lang } }));
}

function nhbSetTheme(theme) {
  theme = theme === 'light' ? 'light' : 'dark';
  NHB_THEME = theme;
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('nhb_theme', theme); } catch (e) {}
  document.querySelectorAll('.nhb-theme-pick').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-theme-pick') === theme);
  });
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b121f' : '#EEF2F7');
  document.dispatchEvent(new CustomEvent('nhb:theme', { detail: { theme: theme } }));
}

function nhbToggleTheme() {
  nhbSetTheme(NHB_THEME === 'light' ? 'dark' : 'light');
}

function nhbSyncLangControls() {
  document.querySelectorAll('.nhb-lp').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-lang') === NHB_LANG);
  });
  document.querySelectorAll('#nhbLangSel, .nhb-lang-select-mobile').forEach(function (sel) {
    if (sel && sel.value !== NHB_LANG) sel.value = NHB_LANG;
  });
}

function nhbChromeMarkup(opts) {
  opts = opts || {};
  var menu = opts.hideMenu
    ? ''
    : '<button type="button" class="nhb-chrome-btn nhb-nav-toggle" id="nhbNavToggle" data-i18n="nav_menu" aria-expanded="false">Menu</button>';
  return (
    '<div class="nhb-lang-pills" role="group" data-i18n-aria="aria_language" aria-label="' + t('aria_language') + '">' +
      '<button type="button" class="nhb-lp" data-lang="pt">PT</button>' +
      '<button type="button" class="nhb-lp" data-lang="en">EN</button>' +
      '<button type="button" class="nhb-lp" data-lang="fr">FR</button>' +
      '<button type="button" class="nhb-lp" data-lang="es">ES</button>' +
    '</div>' +
    '<select class="nhb-lang-select-mobile" id="nhbLangSel" data-i18n-aria="aria_language" aria-label="' + t('aria_language') + '">' +
      '<option value="pt">PT</option><option value="en">EN</option>' +
      '<option value="fr">FR</option><option value="es">ES</option>' +
    '</select>' +
    '<div class="nhb-theme-seg" role="group" data-i18n-aria="aria_theme" aria-label="' + t('aria_theme') + '">' +
      '<button type="button" class="nhb-theme-pick" data-theme-pick="light" data-i18n-title="theme_light" title="' + t('theme_light') + '">☀</button>' +
      '<button type="button" class="nhb-theme-pick" data-theme-pick="dark" data-i18n-title="theme_dark" title="' + t('theme_dark') + '">☾</button>' +
    '</div>' +
    menu
  );
}

function nhbBindChrome(root, opts) {
  if (!root) return;
  root.querySelectorAll('.nhb-lp').forEach(function (b) {
    b.onclick = function () { nhbSetLang(b.getAttribute('data-lang')); };
  });
  var sel = root.querySelector('#nhbLangSel, .nhb-lang-select-mobile');
  if (sel) {
    sel.value = NHB_LANG;
    sel.onchange = function () { nhbSetLang(this.value); };
  }
  root.querySelectorAll('.nhb-theme-pick').forEach(function (b) {
    b.onclick = function () { nhbSetTheme(b.getAttribute('data-theme-pick')); };
  });
  var tog = root.querySelector('#nhbNavToggle');
  if (tog) {
    tog.onclick = function () {
      document.body.classList.toggle('nhb-nav-open');
      tog.setAttribute('aria-expanded', document.body.classList.contains('nhb-nav-open') ? 'true' : 'false');
    };
    if (opts && opts.hideMenu) tog.classList.add('nhb-hidden');
  }
}

function nhbSetAuthScreen(onLogin) {
  document.body.classList.toggle('nhb-on-login', !!onLogin);
  document.body.classList.remove('nhb-nav-open');
}

function nhbShowLoginStep(step) {
  var login = document.getElementById('step-login');
  var reset = document.getElementById('step-reset');
  var p1 = document.getElementById('reset-part1');
  var p2 = document.getElementById('reset-part2');
  if (!login) return;
  if (step === 'login') {
    login.classList.remove('nhb-hidden');
    if (reset) reset.classList.add('nhb-hidden');
  } else {
    login.classList.add('nhb-hidden');
    if (reset) reset.classList.remove('nhb-hidden');
    if (p1) p1.classList.toggle('nhb-hidden', step === 'reset2');
    if (p2) p2.classList.toggle('nhb-hidden', step !== 'reset2');
    document.querySelectorAll('.nhb-step-dots span').forEach(function (d) {
      d.classList.toggle('on', d.getAttribute('data-step') === (step === 'reset2' ? '2' : '1'));
    });
  }
}

function nhbInitChrome(opts) {
  opts = opts || {};
  try {
    NHB_LANG = localStorage.getItem('nhb_lang') || opts.defaultLang || 'pt';
    NHB_THEME = localStorage.getItem('nhb_theme') || opts.defaultTheme || 'dark';
  } catch (e) {
    NHB_LANG = opts.defaultLang || 'pt';
    NHB_THEME = opts.defaultTheme || 'dark';
  }
  if (!NHB_I18N[NHB_LANG]) NHB_LANG = 'pt';

  var hideMenu = !!(opts.hideMenu || !document.querySelector('.nhb-header-actions'));
  var markupOpts = { hideMenu: hideMenu };

  var bar = document.getElementById('nhbChrome');
  if (bar) {
    bar.innerHTML = nhbChromeMarkup(markupOpts);
    nhbBindChrome(bar, markupOpts);
  }
  var loginBar = document.getElementById('nhbLoginChrome');
  if (loginBar) {
    loginBar.innerHTML = nhbChromeMarkup({ hideMenu: true });
    nhbBindChrome(loginBar, { hideMenu: true });
    var loginSel = loginBar.querySelector('#nhbLangSel');
    if (loginSel) {
      loginSel.removeAttribute('id');
      loginSel.classList.add('nhb-lang-select-mobile');
      loginSel.onchange = function () { nhbSetLang(this.value); };
    }
  }

  nhbSetTheme(NHB_THEME);
  nhbApplyI18n();
  nhbSyncLangControls();
}
