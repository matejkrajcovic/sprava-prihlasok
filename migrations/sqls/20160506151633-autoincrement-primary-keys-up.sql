CREATE SEQUENCE camps_id_seq;
ALTER TABLE camps ALTER COLUMN id SET DEFAULT nextval('camps_id_seq');
SELECT setval('camps_id_seq', (SELECT max(id) FROM camps));

CREATE SEQUENCE applicants_id_seq;
ALTER TABLE applicants ALTER COLUMN id SET DEFAULT nextval('applicants_id_seq');
SELECT setval('applicants_id_seq', (SELECT max(id) FROM applicants));

CREATE SEQUENCE organizers_id_seq;
ALTER TABLE organizers ALTER COLUMN id SET DEFAULT nextval('organizers_id_seq');
SELECT setval('organizers_id_seq', (SELECT max(id) FROM organizers));

CREATE SEQUENCE applicantComments_id_seq;
ALTER TABLE applicantComments ALTER COLUMN id SET DEFAULT nextval('applicantComments_id_seq');
SELECT setval('applicantComments_id_seq', (SELECT max(id) FROM applicantComments));

CREATE SEQUENCE nameProposals_id_seq;
ALTER TABLE nameProposals ALTER COLUMN id SET DEFAULT nextval('nameProposals_id_seq');
SELECT setval('nameProposals_id_seq', (SELECT max(id) FROM nameProposals));

CREATE SEQUENCE nameProposalComment_id_seq;
ALTER TABLE nameProposalComment ALTER COLUMN id SET DEFAULT nextval('nameProposalComment_id_seq');
SELECT setval('nameProposalComment_id_seq', (SELECT max(id) FROM nameProposalComment));

CREATE SEQUENCE votes_id_seq;
ALTER TABLE votes ALTER COLUMN id SET DEFAULT nextval('votes_id_seq');
SELECT setval('votes_id_seq', (SELECT max(id) FROM votes));
