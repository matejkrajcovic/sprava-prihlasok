/* @noflow */
import db from '../db'
import {SQL} from 'pg-async'

export const getOrganizer = async (node, args) => {
  const query = (id) => SQL`
    SELECT id, name, token FROM organizers
    WHERE id = ${id};
  `

  return await db.row(query(args.id))
}
