/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString} from 'graphql'
import {applicantType} from '../types/Applicant'
import {getApplicant} from '../actions/applicants'

export const applicantCommentType = new GraphQLObjectType({
  name: 'ApplicantComment',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    applicant: {
      type: applicantType,
      description: '',
      resolve: (applicantComment) => getApplicant(applicantComment, {id: applicantComment.applicantid})
    },
    applicantId: {
      type: GraphQLInt,
      description: '',
      resolve: (applicantComment) => applicantComment.applicantid
    },
    organizerId: {
      type: GraphQLInt,
      description: '',
      resolve: (applicantComment) => applicantComment.organizerid
    },
    text: {
      type: GraphQLString
    },
    createdOn: {
      type: GraphQLString,
      resolve: (applicantComment) => applicantComment.createdon
    }
  })
})
