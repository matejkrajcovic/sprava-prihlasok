import React, {PropTypes} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const NameProposals = ({nameProposals}) => {
  if (nameProposals == undefined) {
    return (
      <ListGroup></ListGroup>
    )
  }

  return (
    <ListGroup>
      {nameProposals.map((nameProposal) => {
         return (
           <ListGroupItem header={nameProposal.name} >
             {nameProposal.description}
             <br />
             <i>{nameProposal.createdOn}</i>
           </ListGroupItem>
           )
       })}
    </ListGroup>
  )
}


export default NameProposals
