/* @noflow */
import db from '../db'
import {SQL} from 'pg-async'

export const getApplicant = async (node, args) => {
  const query = (id) => SQL`
    SELECT id, campId, name, answers, accepted, sentMail, createdOn FROM applicants
    WHERE id = ${id};
  `

  return await db.row(query(args.id))
}

export const getApplicantsByCampId = async (node, args) => {
  const query = (id) => SQL`
    SELECT id, campId, name, answers, accepted, sentMail, createdOn FROM applicants
    WHERE campId = ${id};
  `

  const ret = await db.rows(query(node.id))
  console.log(ret)
  return ret
}
