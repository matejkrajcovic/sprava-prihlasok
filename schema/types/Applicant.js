/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString} from 'graphql'

export const applicantType = new GraphQLObjectType({
  name: 'Applicant',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    accepted: {
      type: GraphQLBoolean,
      description: ''
    },
    sentMail: {
      type: GraphQLBoolean,
      description: ''
    },
    createdOn: {
      type: GraphQLString,
      description: ''
    }
  })
})
