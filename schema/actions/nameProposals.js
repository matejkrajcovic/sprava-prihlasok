/* @noflow */
import db from '../db'
import {SQL} from 'pg-async'

export const getNameProposalsByApplicant = async (node, args) => {
  const query = (applicantId) => SQL`
    SELECT id, organizerId, applicantId, name, description, createdOn FROM nameProposals
    WHERE applicantId = ${applicantId};
  `

  return await db.rows(query(args.id))
}
