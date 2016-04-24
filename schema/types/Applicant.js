/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString, GraphQLList} from 'graphql'
import {campType} from '../types/Camp'
import {getCampById} from '../actions/camps'
import {applicantCommentType} from '../types/ApplicantComment'
import {getApplicantCommentByApplicant} from '../actions/applicantComments'
import {nameProposalType} from '../types/NameProposal'
import {getNameProposalsByApplicant} from '../actions/nameProposals'

export const applicantType = new GraphQLObjectType({
  name: 'Applicant',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    campId: {
      type: GraphQLInt,
      description: '',
      resolve: (applicant) => applicant.campid
    },
    camp: {
      type: campType,
      description: '',
      resolve: (applicant) => getCampById(applicant, {id: applicant.campid})
    },
    name: {
      type: GraphQLString
    },
    accepted: {
      type: GraphQLBoolean,
      description: ''
    },
    sentMail: {
      type: GraphQLBoolean,
      description: '',
      resolve: (applicant) => applicant.sentmail
    },
    createdOn: {
      type: GraphQLString,
      description: '',
      resolve: (applicant) => applicant.createdon
    },
    answers: {
      type: GraphQLString,
      description: '',
      resolve: (applicant) => JSON.stringify(applicant.answers)
    },
    comments: {
      type: new GraphQLList(applicantCommentType),
      description: '',
      resolve: (applicant) => getApplicantCommentByApplicant(applicant, {id: applicant.id})
    },
    nameProposals: {
      type: new GraphQLList(nameProposalType),
      resolve: (applicant) => getNameProposalsByApplicant(applicant, {id: applicant.id})
    }
  })
})
