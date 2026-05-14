/* ── Supabase Auth & Progress Sync ── */

const _sb = window.supabase.createClient(
  'https://eiroioegkgbyakzqgeot.supabase.co',
  'sb_publishable_yN2kgQxgkJZ2HAqLrDiG6w_dd2Z6kmT'
);

let currentUser = null;

// ── Init (called after app.js loads) ─────────────────────────────
async function initAuth() {
  const { data: { session } } = await _sb.auth.getSession();
  currentUser = session?.user ?? null;
  renderNavAuth();

  _sb.auth.onAuthStateChange(async (_event, session) => {
    const wasSignedIn = !!currentUser;
    currentUser = session?.user ?? null;
    const isSignedIn = !!currentUser;

    if (isSignedIn && !wasSignedIn) {
      await pullProgressFromCloud();
      if (typeof route === 'function') route();
    }
    if (!isSignedIn && wasSignedIn) {
      if (typeof route === 'function') route();
    }

    renderNavAuth();
    if (typeof updateNavProgress === 'function') updateNavProgress();
  });
}

// ── Auth actions ──────────────────────────────────────────────────
async function signInWithGoogle() {
  await _sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin }
  });
}

async function sbSignOut() {
  await _sb.auth.signOut();
  currentUser = null;
  renderNavAuth();
}

// ── Cloud sync ────────────────────────────────────────────────────
async function pullProgressFromCloud() {
  if (!currentUser) return;
  const { data, error } = await _sb
    .from('user_progress')
    .select('*')
    .eq('user_id', currentUser.id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') pushProgressToCloud(); // no row yet — upload local
    return;
  }
  if (!data) return;

  // Overwrite localStorage with cloud data
  const p = 'osha30_';
  localStorage.setItem(p + 'completed', JSON.stringify(data.completed ?? []));
  localStorage.setItem(p + 'scores',    JSON.stringify(data.scores    ?? {}));
  localStorage.setItem(p + 'exams',     JSON.stringify(data.exams     ?? []));
  localStorage.setItem(p + 'fc_known',  JSON.stringify(data.fc_known  ?? []));
}

async function pushProgressToCloud() {
  if (!currentUser) return;
  const get = k => {
    try { return JSON.parse(localStorage.getItem('osha30_' + k) || 'null'); }
    catch { return null; }
  };
  await _sb.from('user_progress').upsert({
    user_id:    currentUser.id,
    completed:  get('completed')  ?? [],
    scores:     get('scores')     ?? {},
    exams:      get('exams')      ?? [],
    fc_known:   get('fc_known')   ?? [],
    updated_at: new Date().toISOString()
  }, { onConflict: 'user_id' });
}

// ── Nav auth UI ───────────────────────────────────────────────────
function renderNavAuth() {
  const el = document.getElementById('nav-auth');
  if (!el) return;

  if (currentUser) {
    const meta   = currentUser.user_metadata || {};
    const name   = (meta.full_name || meta.name || currentUser.email || 'User').split(' ')[0];
    const avatar = meta.avatar_url || meta.picture || '';
    el.innerHTML = `
      <div class="nav-user">
        ${avatar
          ? `<img src="${avatar}" class="nav-avatar" alt="">`
          : `<div class="nav-avatar-init">${name[0].toUpperCase()}</div>`}
        <span class="nav-user-name">${name}</span>
        <button class="nav-signout" onclick="sbSignOut()">Sign Out</button>
      </div>`;
  } else {
    el.innerHTML = `
      <button class="nav-signin" onclick="signInWithGoogle()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Sign In to Sync
      </button>`;
  }
}
