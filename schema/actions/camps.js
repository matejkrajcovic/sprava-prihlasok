/* @noflow */
import db from '../db'
import {SQL} from 'pg-async'

export const getCampById = async (node, args) => {
  const query = (id) => SQL`
    SELECT id, number, year FROM camps
    WHERE id = ${id};
  `
  return await db.row(query(args.id))
}

export const getCampsByYear = async (node, args) => {
  const query = (year) => SQL`
    SELECT id, number, year FROM camps
    WHERE year = ${year};
  `
  return await db.rows(query(args.year))
}
