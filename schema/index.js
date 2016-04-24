/* @flow */
import {GraphQLSchema, GraphQLObjectType} from 'graphql'

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      applicant: require('./queries/applicant').default,
      camp: require('./queries/camp').getById,
      camps: require('./queries/camp').getByYear,
      applicantComment: require('./queries/applicantComment').getById
    })
  })
})
