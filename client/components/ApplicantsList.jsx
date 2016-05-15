import React from 'react'
import {values} from 'lodash'
import {PanelGroup} from 'react-bootstrap'
import ApplicantContainer from '../containers/ApplicantContainer'

const ApplicantsList = ({applicants}) => (
  <PanelGroup>
    {values(applicants).map((applicant) => {
      return (
        <ApplicantContainer
          key={applicant.id}
          {...applicant}
        />
      )
    }
    )}
  </PanelGroup>
)

export default ApplicantsList
