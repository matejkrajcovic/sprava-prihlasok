/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString} from 'graphql'
import {applicantType} from '../types/Applicant'
import {organizerType} from '../types/Organizer'
import {getApplicant} from '../actions/applicants'
import {getOrganizer} from '../actions/organizers'

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
    author: {
      type: organizerType,
      resolve: (applicantComment) => getOrganizer(applicantComment, {id: applicantComment.organizerid})
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
