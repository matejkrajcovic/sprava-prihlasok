/* @flow */
import {GraphQLNonNull, GraphQLInt, GraphQLList} from 'graphql'
import {campType} from '../types/Camp'
import {getCampById, getCampsByYear} from '../actions/camps'

export const getById = {
  type: campType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: getCampById
}

export const getByYear = {
  type: new GraphQLList(campType),
  args: {
    year: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: getCampsByYear
}
