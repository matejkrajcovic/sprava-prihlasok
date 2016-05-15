/* @flow */
require('babel-core/register')
require('babel-polyfill')

import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import path from 'path'
import {Schema} from '../schema'

const app = express()

app.use(cors({origin: 'http://localhost:8080', credentials: true}))

// static files
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.use('/graphql', graphqlHTTP(req => ({
  schema: Schema,
  graphiql: true,
  rootValue: {
    viewer: req.viewer,
  }
})))

app.listen(3000)

console.log('GraphQL server running on http://localhost:3000/graphql')
