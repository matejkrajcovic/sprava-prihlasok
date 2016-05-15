/* @flow */
import {GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql'
import {applicantCommentType} from '../types/ApplicantComment'
import {addApplicantComment, removeApplicantComment} from '../actions/applicantComments'

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

export const removeComment = {
  type: applicantCommentType,
  args: {
    commentId: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: removeApplicantComment
}
