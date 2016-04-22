ALTER TABLE applicants
    DROP COLUMN text RESTRICT,
    DROP COLUMN answers RESTRICT;

CREATE TABLE questions (
       id integer PRIMARY KEY,
       text text NOT NULL CHECK (text <> '')
);

CREATE TABLE answers (
       id integer PRIMARY KEY,
       applicantId integer NOT NULL REFERENCES applicants,
       questionId integer NOT NULL REFERENCES questions,
       text text NOT NULL
);
