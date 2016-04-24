import React, {PropTypes} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const ApplicantComments = ({comments}) => {

  if (comments == undefined) {
    return (
      <ListGroup></ListGroup>
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
