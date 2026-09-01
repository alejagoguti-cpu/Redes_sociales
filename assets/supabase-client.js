(function () {
  const SUPABASE_URL = 'https://uobglfexvgxeogedthbh.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_t20trpv9gh1D4l4qz86LyA_U5scsSKq';

  if (!window.supabase || !window.supabase.createClient) {
    console.error('Supabase JS no se pudo cargar.');
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  window.bitaxusSupabase = client;

  function setConnectionStatus(message, kind) {
    document.querySelectorAll('[data-supabase-status]').forEach((element) => {
      element.textContent = message;
      element.dataset.state = kind || 'info';
    });
  }

  window.bitaxusData = {
    client,
    setConnectionStatus,

    async getSession() {
      return client.auth.getSession();
    },

    async signIn(email, password) {
      return client.auth.signInWithPassword({ email, password });
    },

    async signUp(email, password) {
      return client.auth.signUp({ email, password });
    },

    async signOut() {
      return client.auth.signOut();
    },

    async loadMetrics() {
      const { data, error } = await client
        .from('engagement_metrics')
        .select('*')
        .order('metric_date', { ascending: true });
      if (error) throw error;
      return (data || []).map((row) => ({
        id: row.id,
        Date: row.metric_date,
        Platform: row.platform,
        'Post Title': row.post_title,
        'Post Type': row.post_type || '',
        Pillar: row.pillar || '',
        'Engagement (%)': Number(row.engagement_rate || 0),
        Likes: Number(row.likes || 0),
        Comments: Number(row.comments || 0),
        Shares: Number(row.shares || 0),
        Impressions: Number(row.impressions || 0)
      }));
    },

    async insertMetrics(rows) {
      if (!rows.length) return [];
      const payload = rows.map((row) => ({
        metric_date: row.Date,
        platform: row.Platform,
        post_title: row['Post Title'] || 'Untitled post',
        post_type: row['Post Type'] || null,
        pillar: row.Pillar || null,
        engagement_rate: Number(row['Engagement (%)'] || 0),
        likes: Number(row.Likes || 0),
        comments: Number(row.Comments || 0),
        shares: Number(row.Shares || 0),
        impressions: Number(row.Impressions || 0)
      }));
      const { data, error } = await client.from('engagement_metrics').insert(payload).select();
      if (error) throw error;
      return data || [];
    },

    async clearMetrics() {
      const { error } = await client.from('engagement_metrics').delete().not('id', 'is', null);
      if (error) throw error;
    },

    async loadPosts() {
      const { data, error } = await client
        .from('posts')
        .select('*')
        .order('scheduled_date', { ascending: true });
      if (error) throw error;
      return data || [];
    },

    async insertPosts(rows) {
      if (!rows.length) return [];
      const { data, error } = await client.from('posts').insert(rows).select();
      if (error) throw error;
      return data || [];
    },

    async updatePost(id, values) {
      const { data, error } = await client.from('posts').update({ ...values, updated_at: new Date().toISOString() }).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },

    async deletePost(id) {
      const { error } = await client.from('posts').delete().eq('id', id);
      if (error) throw error;
    },

    subscribeToPostChanges(callback) {
      return client
        .channel('public:posts')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, (payload) => {
          callback(payload);
        })
        .subscribe();
    }
  };
})();
