/* @noflow */
import {combineReducers} from 'redux'
import {cloneDeep} from 'lodash'

export const defaultReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CAMP':
      return Object.assign({}, state, {
        activeCamp: action.newCamp
      })
    case 'REQUEST_SHALLOW_FETCH':
      return Object.assign({}, state, {
        isShallowFetching: true
      })
    case 'RECEIVE_SHALLOW_FETCH':
      let applicants = {}
      for (let applicant of action.applicants) {
        applicants[applicant.id] = applicant
      }

      return Object.assign({}, state, {
        isShallowFetching: false,
        organizerId: action.organizerId,
        activeCamp: (action.camps.length > 0) ? action.camps[0].id : null,
        camps: action.camps,
        applicants: applicants
      })
    case 'REQUEST_FULL_FETCH':
      let newApplicants = cloneDeep(state.applicants)
      newApplicants[action.applicantId] = {
        ...state.applicants[action.applicantId],
        isFetching:true
      }

      return Object.assign({}, state, {
        applicants: newApplicants
      })
    case 'RECEIVE_FULL_FETCH':
      newApplicants = cloneDeep(state.applicants)
      newApplicants[action.applicantId] = {
        ...state.applicants[action.applicantId],
        ...action.applicant,
        isFetching: false,
        fullyFetched: true
      }

      return Object.assign({}, state, {
        applicants: newApplicants
      })
    default:
      return state
  }
}
