/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString, GraphQLList} from 'graphql'
import {organizerType} from '../types/Organizer'
import {getOrganizer} from '../actions/organizers'

export const nameProposalType = new GraphQLObjectType({
  name: 'NameProposal',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    author: {
      type: organizerType,
      resolve: (nameProposal) => getOrganizer(nameProposal, {id: nameProposal.organizerid})
    },
    createdOn: {
      type: GraphQLString,
      resolve: (nameProposal) => nameProposal.createdon
    },
  })
})
