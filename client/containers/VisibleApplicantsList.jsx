/* @flow */
import {connect} from 'react-redux'
import {pickBy} from 'lodash'
import ApplicantsList from '../components/ApplicantsList'

const getVisibleApplicants = (applicants = {}, activeCamp) => {
  return pickBy(applicants, (a) => (activeCamp === a.campId))
}

const mapStateToProps = (state) => {
  return {
    applicants: getVisibleApplicants(
      state.has('applicants') ? state.get('applicants').toJS() : {},
      state.get('activeCamp')
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const VisibleApplicantsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicantsList)

export default VisibleApplicantsList
