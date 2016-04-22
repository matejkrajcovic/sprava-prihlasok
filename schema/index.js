/* @flow */
import {GraphQLSchema, GraphQLObjectType} from 'graphql'

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      applicant: require('./queries/applicant').default
    })
  })
})
