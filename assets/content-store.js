/* Bitaxus Editorial Hub — shared data layer
 * Local-first today; the same contract can be wired to SUA API later.
 */
(function () {
  const POSTS_KEY = 'bitaxusEditorialPosts';
  const LEGACY_KEY = 'bitaxusPosts';
  const SETTINGS_KEY = 'bitaxusSUASettings';
  const EVENT = 'bitaxus:editorial-updated';

  function read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (_) { return fallback; }
  }

  function normalize(post) {
    return {
      id: post.id || `post_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      date: post.date || new Date().toISOString().slice(0, 10),
      time: post.time || '09:00',
      platform: post.platform || 'LinkedIn',
      format: post.format || 'Post',
      pillar: post.pillar || 'Educación financiera',
      title: post.title || 'Sin título',
      description: post.description || '',
      copy: post.copy || post.description || '',
      objective: post.objective || 'Educación',
      cta: post.cta || '',
      status: post.status || 'Idea',
      owner: post.owner || 'Community Manager',
      source: post.source || 'Centro Editorial',
      tags: Array.isArray(post.tags) ? post.tags : [],
      updatedAt: post.updatedAt || new Date().toISOString()
    };
  }

  function migrate() {
    const current = read(POSTS_KEY, null);
    if (Array.isArray(current)) return current.map(normalize);
    const legacy = read(LEGACY_KEY, []);
    const migrated = Array.isArray(legacy) ? legacy.map(normalize) : [];
    if (migrated.length) localStorage.setItem(POSTS_KEY, JSON.stringify(migrated));
    return migrated;
  }

  function emit(posts) {
    const payload = posts.map(normalize);
    localStorage.setItem(POSTS_KEY, JSON.stringify(payload));
    // Keep the old key alive so existing dashboards continue to work.
    localStorage.setItem(LEGACY_KEY, JSON.stringify(payload));
    window.dispatchEvent(new CustomEvent(EVENT, { detail: payload }));
  }

  window.BitaxusEditorial = {
    EVENT,
    getPosts: () => migrate(),
    savePosts: emit,
    upsert: post => { const posts = migrate(); const item = normalize(post); const index = posts.findIndex(p => p.id === item.id); index >= 0 ? posts.splice(index, 1, item) : posts.unshift(item); emit(posts); return item; },
    remove: id => emit(migrate().filter(post => post.id !== id)),
    getSettings: () => read(SETTINGS_KEY, { workspace: 'Bitaxus', connected: false, endpoint: '' }),
    saveSettings: settings => localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)),
    buildSUAPayload: () => ({ source: 'Bitaxus Centro Editorial', version: 1, exportedAt: new Date().toISOString(), posts: migrate() })
  };
})();
