-- Bitaxus Community Operations: core data model
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  scheduled_date date not null,
  scheduled_time time,
  weekday text,
  platform text not null check (platform in ('LinkedIn', 'Instagram', 'Twitter', 'Blog')),
  pillar text,
  post_type text default 'Post',
  title text not null,
  description text,
  status text not null default 'scheduled' check (status in ('draft', 'scheduled', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_scheduled_date_idx on public.posts (scheduled_date);
create index if not exists posts_platform_idx on public.posts (platform);
create index if not exists posts_status_idx on public.posts (status);

create table if not exists public.engagement_metrics (
  id uuid primary key default gen_random_uuid(),
  metric_date date not null,
  platform text not null check (platform in ('LinkedIn', 'Instagram', 'Twitter')),
  post_title text not null,
  post_type text,
  pillar text,
  engagement_rate numeric(8, 4) not null default 0 check (engagement_rate >= 0),
  likes integer not null default 0 check (likes >= 0),
  comments integer not null default 0 check (comments >= 0),
  shares integer not null default 0 check (shares >= 0),
  impressions integer not null default 0 check (impressions >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists engagement_metrics_date_idx on public.engagement_metrics (metric_date);
create index if not exists engagement_metrics_platform_idx on public.engagement_metrics (platform);

alter table public.posts enable row level security;
alter table public.engagement_metrics enable row level security;

grant select on public.posts to anon, authenticated;
grant select, insert, update, delete on public.posts to authenticated;
grant select on public.engagement_metrics to anon, authenticated;
grant select, insert, update, delete on public.engagement_metrics to authenticated;

create policy "Public can read Bitaxus posts"
on public.posts for select
to anon, authenticated
using (true);

create policy "Authenticated users can manage Bitaxus posts"
on public.posts for all
to authenticated
using (true)
with check (true);

create policy "Public can read Bitaxus metrics"
on public.engagement_metrics for select
to anon, authenticated
using (true);

create policy "Authenticated users can manage Bitaxus metrics"
on public.engagement_metrics for all
to authenticated
using (true)
with check (true);
