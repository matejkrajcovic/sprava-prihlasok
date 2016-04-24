import React, {PropTypes} from 'react'
import {ListGroupItem} from 'react-bootstrap'

const Applicant = (applicant) => (
  <ListGroupItem>
    Name: {applicant.name}
  </ListGroupItem>
)

Applicant.propTypes = {
  applicant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    accepted: PropTypes.bool.isRequired,
    sentMail: PropTypes.bool.isRequired,
    createdOn: PropTypes.string.isRequired,
    answers: PropTypes.string.isRequired,
  }).isRequired
}

export default Applicant
