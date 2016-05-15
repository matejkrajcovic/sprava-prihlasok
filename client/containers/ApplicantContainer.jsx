/* @flow */
import {connect} from 'react-redux'
import Applicant from '../components/Applicant'
import {changeApplicantComment, addApplicantComment, removeApplicantComment} from '../actions'
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
    onRemoveApplicantComment: (commentId) => {
      const {id} = ownProps
      return () => {
        dispatch(removeApplicantComment(id, commentId))
      }
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
    ...stateProps,
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
