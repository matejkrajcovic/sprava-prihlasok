import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const ApplicantComments = ({comments}) => {
  if ((comments === undefined) || (comments.length === 0)) {
    return (
      <ListGroup />
    )
  }

  return (
    <ListGroup>
      {comments.map((comment) => {
        return (
          <ListGroupItem>
            {comment.text} <i>{comment.createdOn}</i>
          </ListGroupItem>
          )
      })}
    </ListGroup>
  )
}

export default ApplicantComments
