/* @flow */
import {GraphQLNonNull, GraphQLInt} from 'graphql'
import {applicantType} from '../types/Applicant'
import {getApplicant} from '../actions/applicants'

export default {
  type: applicantType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: getApplicant
}
