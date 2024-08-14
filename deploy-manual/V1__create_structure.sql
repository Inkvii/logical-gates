begin;

create extension if not exists "uuid-ossp";

create table if not exists relegates.public.author
(
    email varchar primary key
);

create table if not exists relegates.public.logic_gate_schema
(
    name    varchar primary key,
    payload json not null,
    author  varchar
        constraint fk_author references author (email)
);

commit;