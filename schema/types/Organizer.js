/* @flow */
import {GraphQLInt, GraphQLObjectType, GraphQLUnionType, GraphQLBoolean, GraphQLFloat, GraphQLInterfaceType, GraphQLString, GraphQLList} from 'graphql'
import {campType} from '../types/Camp'
import {getCampsByOrganizer} from '../actions/camps'
import {applicantCommentType} from '../types/ApplicantComment'

export const organizerType = new GraphQLObjectType({
  name: 'Organizer',
  description: '',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    token: {
      type: GraphQLString,
      description: '',
    },
    camps: {
      type: new GraphQLList(campType),
      description: '',
      resolve: (organizer) => getCampsByOrganizer(organizer, {id: organizer.id})
    }
  })
})
