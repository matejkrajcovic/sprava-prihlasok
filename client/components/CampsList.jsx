import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'

const CampsList = ({activeCamp, camps = [], onCampSelect}) => (
  <Nav activeKey={activeCamp}>
    {camps.map((camp) => (
      <NavItem
        key={camp.id}
        eventKey={camp.id}
        onSelect={() => onCampSelect(camp.id)} >
        {camp.number + '/' + camp.year}
      </NavItem>
    ))}
  </Nav>
)

export default CampsList
