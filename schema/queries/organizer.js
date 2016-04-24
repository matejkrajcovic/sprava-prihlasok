/* @flow */
import {GraphQLNonNull, GraphQLInt} from 'graphql'
import {organizerType} from '../types/Organizer'
import {getOrganizer} from '../actions/organizers'

export default {
  type: organizerType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: getOrganizer
}
