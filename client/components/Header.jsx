import React from 'react'
import {Navbar} from 'react-bootstrap'
import CampsListContainer from '../containers/CampsListContainer'

export default class Header extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Správa prihlášok
          </Navbar.Brand>
        </Navbar.Header>
        <CampsListContainer />
      </Navbar>
    )
  }
}
