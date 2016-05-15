import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {formatDate} from '../utils'
import NewApplicantCommentForm from './NewApplicantCommentForm'

const ApplicantComments = ({comments, newComment,
                            onChangeApplicantComment,
                            onNewApplicantCommentSend}) => {
  let commentsList = ''

  if (comments) {
    commentsList = comments.map((comment, index) => {
      return (
        <ListGroupItem key={index}>
          <b>{comment.author.name}</b> <i>{formatDate(comment.createdOn)}</i><br/>
          {comment.text}
        </ListGroupItem>
      )
    })
  }

  return (
    <ListGroup>
      <ListGroupItem bsStyle='info' header='Komentáre k odpovediam'/>
      {commentsList}
      <ListGroupItem>
        <NewApplicantCommentForm
          text={newComment}
          onChangeApplicantComment={onChangeApplicantComment}
          onNewApplicantCommentSend={onNewApplicantCommentSend}
        />
      </ListGroupItem>
    </ListGroup>
  )
}

export default ApplicantComments
