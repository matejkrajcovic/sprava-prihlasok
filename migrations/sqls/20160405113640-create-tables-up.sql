CREATE TABLE camps (
       id integer PRIMARY KEY,
       number integer NOT NULL CHECK (number BETWEEN 1 AND 6),
       year date NOT NULL
);

CREATE TABLE applicants (
       id integer PRIMARY KEY,
       campId integer NULL REFERENCES camps,
       accepted boolean NOT NULL DEFAULT false,
       sentMail boolean NOT NULL DEFAULT false,
       createdOn timestamp with time zone NOT NULL
);

CREATE TABLE organizers (
       id integer PRIMARY KEY,
       name text NOT NULL CHECK (name <> ''),
       token text NULL
);

CREATE TABLE organizerCamp (
       organizerId integer NOT NULL REFERENCES organizers,
       campId integer NOT NULL REFERENCES camps,
       role text NOT NULL CHECK (role <> ''),
       CONSTRAINT organizerCampPK PRIMARY KEY (organizerId, campId)
);


CREATE TABLE applicantComments (
       id integer PRIMARY KEY,
       applicantId integer NOT NULL REFERENCES applicants,
       organizerId integer NOT NULL REFERENCES organizers,
       text text NOT NULL CHECK (text <> ''),
       createdOn timestamp with time zone NOT NULL
);

CREATE TABLE nameProposals (
       id integer PRIMARY KEY,
       organizerId integer NOT NULL REFERENCES organizers,
       applicantId integer NOT NULL REFERENCES applicants,
       name text NOT NULL CHECK (name <> ''),
       description text NULL,
       createdOn timestamp with time zone NOT NULL
);

CREATE TABLE nameProposalComment (
       id integer PRIMARY KEY,
       nameProposalId integer NOT NULL REFERENCES nameProposals,
       organizerId integer NOT NULL REFERENCES organizers,
       text text NOT NULL CHECK (text <> ''),
       createdOn timestamp with time zone NOT NULL
);

CREATE TABLE votes (
       id integer PRIMARY KEY,
       nameProposalId integer NOT NULL REFERENCES nameProposals,
       organizerId integer NOT NULL REFERENCES organizers,
       createdOn timestamp with time zone NOT NULL
);

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
