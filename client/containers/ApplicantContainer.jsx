/* @flow */
import {connect} from 'react-redux'
import Applicant from '../components/Applicant'
import {changeApplicantComment, addApplicantComment} from '../actions'
import {fullFetch} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    organizerId: state.get('organizerId')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onApplicantSelect: (id) => {
      dispatch(fullFetch(id))
    },
    onChangeApplicantComment: (e) => {
      const {id} = ownProps
      dispatch(changeApplicantComment(id, e.target.value))
    },
    onNewApplicantCommentSend: (organizerId) => {
      const {id, newComment} = ownProps
      if (newComment) {
        dispatch(addApplicantComment(id, organizerId, newComment))
      }
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {organizerId} = stateProps
  const {onNewApplicantCommentSend} = dispatchProps

  return {
    ...ownProps,
    ...dispatchProps,
    onNewApplicantCommentSend: () => onNewApplicantCommentSend(organizerId)
  }
}

const ApplicantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Applicant)

export default ApplicantContainer
