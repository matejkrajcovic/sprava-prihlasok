import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {formatDate} from '../utils'

const NameProposals = ({nameProposals}) => {
  if ((nameProposals === undefined) || (nameProposals.length === 0)) {
    return (
      <ListGroup />
    )
  }

  return (
    <ListGroup>
      {nameProposals.map((nameProposal, index) => {
        return (
          <ListGroupItem key={index} header={nameProposal.name} >
            {nameProposal.description}
            <br />
            <i>{formatDate(nameProposal.createdOn)}</i>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default NameProposals
