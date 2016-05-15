import React from 'react'
import {FormGroup, FormControl} from 'react-bootstrap'

const NewApplicantCommentForm = ({text, onChangeApplicantComment,
                                  onNewApplicantCommentSend}) => {
  console.log(onNewApplicantCommentSend)
  return (
    <FormGroup>
      <FormControl
        componentClass='textarea'
        placeholder='Odošli komentár pomocou Ctrl-Enter'
        value={text}
        onChange={onChangeApplicantComment}
        onKeyDown={(e) => {
          e.stopPropagation()
          if (e.ctrlKey && (e.key === 'Enter')) {
            onNewApplicantCommentSend()
          }
        }}
      />
    </FormGroup>
  )
}

export default NewApplicantCommentForm
