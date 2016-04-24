/* @flow */
import {connect} from 'react-redux'
import CampsList from '../components/CampsList'
import {selectCamp} from '../actions'

const mapStateToProps = (state) => {
  return {
    activeCamp: state.activeCamp,
    camps: state.camps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCampSelect: (id) => {
      dispatch(selectCamp(id))
    }
  }
}

const CampsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CampsList)

export default CampsListContainer
