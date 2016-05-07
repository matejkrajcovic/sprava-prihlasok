import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {formatDate} from '../utils'

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
            <b>{comment.author.name}</b> <i>{formatDate(comment.createdOn)}</i><br/>
            {comment.text}
          </ListGroupItem>
          )
      })}
    </ListGroup>
  )
}

export default ApplicantComments
