/* @noflow */
import {Map, fromJS} from 'immutable'

export const defaultReducer = (state = Map(), action) => {
  switch (action.type) {
    case 'SELECT_CAMP':
      return state.set('activeCamp', action.newCamp)

    case 'REQUEST_SHALLOW_FETCH':
      return state.set('isShallowFetching', true)

    case 'RECEIVE_SHALLOW_FETCH':
      let applicants = {}
      for (let applicant of action.applicants) {
        applicants[applicant.id] = applicant
      }

      return state.withMutations((state) => {
        return state.set('isShallowFetching', false)
                    .set('organizerId', action.organizerId)
                    .set('activeCamp', (action.camps.length > 0) ? action.camps[0].id : null)
                    .set('camps', fromJS(action.camps))
                    .set('applicants', fromJS(applicants))
      })

    case 'REQUEST_FULL_FETCH':
      return state.setIn(['applicants', action.applicantId.toString(), 'isFetching'], true)

    case 'RECEIVE_FULL_FETCH':
      action.applicant.isFetching = false
      action.applicant.fullyFetched = true

      return state.mergeIn(['applicants', action.applicantId.toString()], fromJS(action.applicant))

    case 'CHANGE_APPLICANT_COMMENT':
      return state.setIn(['applicants', action.applicantId.toString(), 'newComment'], action.newComment)

    case 'RECEIVE_ADD_APPLICANT_COMMENT':
      return state.updateIn(['applicants', action.applicantId.toString(), 'comments'], (list) =>
        list.push(fromJS(action.applicantComment)))

    case 'RECEIVE_REMOVE_APPLICANT_COMMENT':
      console.log(action.applicantId)

      return state.updateIn(['applicants', action.applicantId.toString(), 'comments'], (list) => {
        console.log(list)
        console.log(action.commentId)
        return list.filter((comment) => {
          console.log(comment.get('id'))
          return comment.get('id') !== action.commentId
        })
      })
    default:
      return state
  }
}
