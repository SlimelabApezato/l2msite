-- L2M Financial Solutions — schema completo para colar no SQL Editor do Supabase
create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$'),
  company text check (company is null or char_length(company) <= 160),
  message text not null check (char_length(trim(message)) between 10 and 4000),
  source_path text not null default '/jeito-l2m',
  status text not null default 'new' check (status in ('new','in_review','closed','spam')),
  ip_hash text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_status_idx on public.contact_submissions (status);
create index if not exists contact_submissions_email_idx on public.contact_submissions (lower(email));

alter table public.contact_submissions enable row level security;

revoke all on public.contact_submissions from anon, authenticated;
grant insert (name, email, company, message, source_path) on public.contact_submissions to anon;

drop policy if exists "public can submit contact form" on public.contact_submissions;
create policy "public can submit contact form"
  on public.contact_submissions
  for insert
  to anon
  with check (
    char_length(trim(name)) between 2 and 120
    and email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$'
    and char_length(trim(message)) between 10 and 4000
    and status = 'new'
  );

-- Leitura, atualização e exclusão devem ser feitas somente pelo backend usando a service role.
