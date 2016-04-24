import React, {PropTypes} from 'react'
import Applicant from './Applicant'
import {ListGroup} from 'react-bootstrap'

const ApplicantsList = ({applicants}) => (
  <ListGroup>
    {applicants.map(applicant =>
      <Applicant
          key={applicant.id}
          {...applicant}
      />
     )}
  </ListGroup>
)

ApplicantsList.propTypes = {
  applicants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    accepted: PropTypes.bool.isRequired,
    sentMail: PropTypes.bool.isRequired,
    createdOn: PropTypes.string.isRequired,
    answers: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default ApplicantsList
