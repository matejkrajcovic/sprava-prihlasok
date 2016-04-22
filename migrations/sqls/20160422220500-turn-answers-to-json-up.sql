ALTER TABLE applicants
    ADD COLUMN name text NOT NULL,
    ADD COLUMN answers jsonb NOT NULL;

DROP TABLE IF EXISTS answers;

DROP TABLE IF EXISTS questions;
