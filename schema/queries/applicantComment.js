/* @flow */
import {GraphQLNonNull, GraphQLInt} from 'graphql'
import {applicantCommentType} from '../types/ApplicantComment'
import {getApplicantCommentById, getApplicantCommentByApplicant} from '../actions/applicantComments'

export const getById = {
  type: applicantCommentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: getApplicantCommentById
}

export const getByApplicant = {
  type: applicantCommentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: getApplicantCommentByApplicant
}
