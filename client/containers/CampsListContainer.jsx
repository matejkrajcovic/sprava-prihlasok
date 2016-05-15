/* @flow */
import {connect} from 'react-redux'
import CampsList from '../components/CampsList'
import {selectCamp} from '../actions'

const mapStateToProps = (state) => {
  return {
    activeCamp: state.get('activeCamp'),
    camps: state.has('camps') ? state.get('camps').toJS() : []
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
