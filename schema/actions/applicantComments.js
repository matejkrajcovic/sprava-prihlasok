/* @noflow */
import db from '../db'
import {SQL} from 'pg-async'

export const getApplicantCommentById = async (node, args) => {
  const query = (id) => SQL`
    SELECT id, applicantId, organizerId, text, createdOn FROM applicantComments
    WHERE id = ${id};
  `

  return await db.row(query(args.id))
}

export const getApplicantCommentByApplicant = async (node, args) => {
  const query = (id) => SQL`
    SELECT id, applicantId, organizerId, text, createdOn FROM applicantComments
    WHERE applicantId = ${id};
  `

  return await db.rows(query(args.id))
}

export const addApplicantComment = async (node, args) => {
  const query = (applicantId, organizerId, text) => SQL`
    INSERT INTO applicantComments (applicantId, organizerId, text, createdOn)
    VALUES (${applicantId}, ${organizerId}, ${text}, CURRENT_DATE)
    RETURNING id, applicantId, organizerId, text, createdOn;
  `

  return await db.row(query(args.applicantId, args.authorId, args.text))
}
