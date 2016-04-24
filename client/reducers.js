/* @noflow */
import {combineReducers} from 'redux'

const initialData = {
  organizerId: 5,
  activeCamp: 2,
  camps: [
    {
      id: 5,
      number: 4,
      year: 2015
    },
    {
      id: 2,
      number: 3,
      year: 2014
    }
  ],
  applicants: [
    {
      id: 4,
      campId: 5,
      name: 'Sam Bobbins'
    },
    {
      id: 9,
      campId: 2,
      name: 'John Cena',
      answers: ''
    }
  ]
}

export const defaultReducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state
  }
}
