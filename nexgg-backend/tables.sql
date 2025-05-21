
--SQL Postgress - Supabase

-- champions
create table public.champions (
    id           text           primary key,
    name         text           not null,
    title        text,
    species      text,
    region       text,
    position     text[]         default '{}',
    gender       text,
    resource     text,
    range_type   text,
    tags         text[]         default '{}',
    icon_url     text,
    splash_url   text, 
    abilities    jsonb          not null,
    stats        jsonb          not null,
    release_year integer,
    created_at   timestamptz    default now()
);

--runes
create table public.runes (
    id           integer       primary key,           -- ID oficial de Riot
    name         text          not null,              -- Nombre de la runa
    description  text,                             -- Descripción de la runa
    icon_url     text,                             -- URL del icono en Supabase
    style        text,                             -- Rama (e.g. "Domination", "Precision")
    keystone     boolean       default false,        -- ¿Es keystone (clave)?
    created_at   timestamptz   default now()
);

--spells
create table public.summoner_spells (
    id           integer       primary key,           -- ID oficial de Riot
    name         text          not null,              -- Nombre del hechizo
    description  text,                             -- Descripción funcional
    cooldown     jsonb         null,                  -- Cooldown por nivel (array) o null
    icon_url     text,                             -- URL del icono en Supabase
    created_at   timestamptz   default now()
);


-- dynamic champion stats
create table public.champion_dynamic_stats (
    patch         text          not null,                       -- parche, p.ej. "14.10.1"
    champion_id   text          not null references champions(id),
    win_rate      numeric(5,2),                                 -- 0.00–100.00%
    pick_rate     numeric(5,2),                                 -- 0.00–100.00%
    updated_at    timestamptz   default now(),
    primary key(patch, champion_id)
);
