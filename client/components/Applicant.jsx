import React from 'react'
import {Panel} from 'react-bootstrap'
import Answers from './Answers'
import ApplicantComments from './ApplicantComments'
import NameProposals from './NameProposals'

const Applicant = ({...applicant, onApplicantSelect}) => (
  <Panel collapsible defaultCollapse
    header={applicant.name}
    bsStyle={applicant.accepted ? 'success' : ''}
    onSelect={() => {
      if (!applicant.fullyFetched) {
        onApplicantSelect(applicant.id)
      }
    }} >
    <Answers answers={applicant.answers} />
    <ApplicantComments comments={applicant.comments} />
    <NameProposals nameProposals={applicant.nameProposals} />
  </Panel>
)

export default Applicant
