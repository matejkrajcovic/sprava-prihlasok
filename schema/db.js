require('babel-core/register')
require('babel-polyfill')

import PgAsync from 'pg-async'
import fs from 'fs'
import path from 'path'

const dbConfig = fs.readFileSync(path.join(__dirname, '../database.json'), {encoding: 'utf8'})
const jsonConfig = JSON.parse(dbConfig)
const db = new PgAsync(jsonConfig.dev)

export default db
