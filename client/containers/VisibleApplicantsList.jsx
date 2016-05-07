/* @flow */
import {connect} from 'react-redux'
import {pickBy} from 'lodash'
import ApplicantsList from '../components/ApplicantsList'
import {fullFetch} from '../actions'

const getVisibleApplicants = (applicants = {}, activeCamp) => {
  return pickBy(applicants, (a) => (activeCamp === a.campId))
}

const mapStateToProps = (state) => {
  return {
    applicants: getVisibleApplicants(state.applicants, state.activeCamp)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onApplicantSelect: (id) => {
      dispatch(fullFetch(id))
    }
  }
}

const VisibleApplicantsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicantsList)

export default VisibleApplicantsList
