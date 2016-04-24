/* @flow */
import {connect} from 'react-redux'
import ApplicantsList from '../components/ApplicantsList'

const getVisibleApplicants = (applicants, activeCamp) => {
  return applicants.filter(a => (activeCamp === a.campId))
}

const mapStateToProps = (state) => {
  return {
    applicants: getVisibleApplicants(state.applicants, state.activeCamp)
  }
}

const VisibleApplicantsList = connect(
  mapStateToProps
)(ApplicantsList)

export default VisibleApplicantsList
