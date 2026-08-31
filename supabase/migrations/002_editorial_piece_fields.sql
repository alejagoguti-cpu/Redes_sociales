-- Monday-like editorial fields for each Bitaxus content piece
alter table public.posts
  add column if not exists copy_text text,
  add column if not exists cta text,
  add column if not exists drive_url text,
  add column if not exists owner text,
  add column if not exists priority text not null default 'normal' check (priority in ('low', 'normal', 'high'));

create index if not exists posts_owner_idx on public.posts (owner);
create index if not exists posts_priority_idx on public.posts (priority);
