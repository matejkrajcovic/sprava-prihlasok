ALTER TABLE camps ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE camps_id_seq;

ALTER TABLE applicants ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE applicants_id_seq;

ALTER TABLE organizers ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE organizers_id_seq;

ALTER TABLE applicantComments ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE applicantComments_id_seq;

ALTER TABLE nameProposals ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE nameProposals_id_seq;

ALTER TABLE nameProposalComment ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE nameProposalComment_id_seq;

ALTER TABLE votes ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE votes_id_seq;
