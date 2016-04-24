import React, {PropTypes} from 'react'
import {values} from 'lodash'
import {PanelGroup} from 'react-bootstrap'
import Applicant from './Applicant'

const ApplicantsList = ({applicants, onApplicantSelect} ) => (
  <PanelGroup>
    {values(applicants).map((applicant) => {
       console.log(onApplicantSelect)

       return (
         <Applicant
             key={applicant.id}
             onApplicantSelect={onApplicantSelect}
             {...applicant}
         />
       )
     }
     )}
  </PanelGroup>
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
