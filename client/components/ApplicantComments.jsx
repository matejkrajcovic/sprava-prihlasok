import React from 'react'
import {ListGroup, ListGroupItem, Glyphicon, Button} from 'react-bootstrap'
import {formatDate} from '../utils'
import NewApplicantCommentForm from './NewApplicantCommentForm'

const ApplicantComments = ({comments, newComment, organizerId,
                            onChangeApplicantComment,
                            onRemoveApplicantComment,
                            onNewApplicantCommentSend}) => {
  let commentsList = ''

  if (comments) {
    commentsList = comments.map((comment, index) => {
      const myComment = comment.author.id === organizerId
      const authorName = myComment ? 'Me' : comment.author.name

      return (
        <ListGroupItem key={index}>
          <b>{authorName}</b> <i>{formatDate(comment.createdOn)}</i>
          {myComment
           ? (
            <Button
              bsSize='xsmall'
              onClick={onRemoveApplicantComment(comment.id)} >
              <Glyphicon glyph='remove' />
            </Button>
           )
           : ''}
          <br/>
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
