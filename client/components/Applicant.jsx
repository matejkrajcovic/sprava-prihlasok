import React from 'react'
import {Panel, Grid, Row, Col} from 'react-bootstrap'
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
    <Grid>
      <Row>
        <Col md={6}>
          <Answers answers={applicant.answers} />
          <ApplicantComments comments={applicant.comments} />
        </Col>
        <Col md={6}>
          <NameProposals
            nameProposals={applicant.nameProposals}
          />
        </Col>
      </Row>
    </Grid>
  </Panel>
)

export default Applicant
