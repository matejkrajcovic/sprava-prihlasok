/* @flow */
import {GraphQLSchema, GraphQLObjectType} from 'graphql'

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      applicant: require('./queries/applicant').default,
      camp: require('./queries/camp').getById,
      camps: require('./queries/camp').getByYear,
      applicantComment: require('./queries/applicantComment').getById,
      organizer: require('./queries/organizer').default
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: () => ({
      addApplicantComment: require('./mutations/applicantComment').addComment,
      removeApplicantComment: require('./mutations/applicantComment').removeComment
    }),
  }),
})
