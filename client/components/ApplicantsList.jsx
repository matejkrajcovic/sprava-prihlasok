import React from 'react'
import {values} from 'lodash'
import {PanelGroup} from 'react-bootstrap'
import Applicant from './Applicant'

const ApplicantsList = ({applicants, onApplicantSelect}) => (
  <PanelGroup>
    {values(applicants).map((applicant) => {
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

export default ApplicantsList
