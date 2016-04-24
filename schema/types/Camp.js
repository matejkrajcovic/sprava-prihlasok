/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString, GraphQLList} from 'graphql'
import {applicantType} from './Applicant'
import {getApplicantsByCampId} from '../actions/applicants'

export const campType = new GraphQLObjectType({
  name: 'Camp',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    number: {
      type: GraphQLInt,
      description: '',
    },
    year: {
      type: GraphQLInt,
      description: '',
    },
    applicants: {
      type: new GraphQLList(applicantType),
      description: '',
      resolve: (camp, args) => getApplicantsByCampId(camp, args)
    }
  })
})
