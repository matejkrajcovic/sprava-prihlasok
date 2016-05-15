/* @flow */
import {GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql'
import {applicantCommentType} from '../types/ApplicantComment'
import {addApplicantComment} from '../actions/applicantComments'

export const addComment = {
  type: applicantCommentType,
  args: {
    applicantId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: addApplicantComment
}
