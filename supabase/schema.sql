-- Run in the Supabase SQL editor.

-- #2: "Open to work" status indicator ------------------------------------
create table if not exists site_status (
  id int primary key default 1,
  label text not null default 'Open to work',
  color text not null default 'green', -- 'green' | 'yellow' | 'gray'
  updated_at timestamptz not null default now(),
  constraint single_row check (id = 1)
);

insert into site_status (id, label, color)
values (1, 'Open to work', 'green')
on conflict (id) do nothing;

alter table site_status enable row level security;

create policy "Public can read status"
  on site_status for select
  using (true);

-- No insert/update policy is added for the anon role, so the site can only
-- read this row. Update the label/color from the Supabase dashboard's table
-- editor, or by signing in as yourself, whenever your availability changes.

-- Contact form -------------------------------------------------------------
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "Public can submit a message"
  on contact_messages for insert
  with check (true);

-- No select policy for anon — messages are only readable from the Supabase
-- dashboard (or an authenticated/service-role context), not from the site.
--
-- The form does client-side rate limiting (1 submission/min/browser) and a
-- honeypot field, but both are bypassable by a determined bot since they run
-- in the browser. For real server-side rate limiting, add a Postgres
-- function + trigger that rejects inserts from the same email/IP within a
-- window, or move inserts behind a Supabase Edge Function that checks a
-- request-count table before writing. Flagging this as a known gap rather
-- than implementing it, since it needs an Edge Function deployment this
-- environment can't do for you.

-- Analytics ------------------------------------------------------------
create table if not exists analytics_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null, -- 'pageview' | 'project_click'
  path text not null,
  meta jsonb,
  created_at timestamptz not null default now()
);

alter table analytics_events enable row level security;

create policy "Public can log an event"
  on analytics_events for insert
  with check (true);

-- No select policy for anon — read your own analytics from the Supabase
-- dashboard's SQL editor or table view, not from the site.