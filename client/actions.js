/* @noflow */
import moment from 'moment'
import {Lokka} from 'lokka'
import {Transport} from 'lokka-transport-http'

const client = new Lokka({
  transport: new Transport('http://localhost:3000/graphql')
})

export const selectCamp = (newCamp) => {
  return {
    type: 'SELECT_CAMP',
    newCamp
  }
}

export const requestShallowFetch = () => {
  return {
    type: 'REQUEST_SHALLOW_FETCH'
  }
}

export const receiveShallowFetch = (data) => {
  const {organizer} = data

  let applicants = []
  for (let camp of organizer.camps) {
    applicants = applicants.concat(camp.applicants.map((applicant) => {
      return {
        ...applicant,
        fullyFetched: false,
        isFetching: false
      }
    }))
  }

  return {
    type: 'RECEIVE_SHALLOW_FETCH',
    name: organizer.name,
    organizerId: organizer.id,
    camps: organizer.camps.map((camp) => {
      return {
        id: camp.id,
        number: camp.number,
        year: camp.year
      }
    }),
    applicants: applicants
  }
}

export const shallowFetch = (organizerId) => {
  const query = `{
                   organizer(id: ${organizerId}) {
	                 id,
	                 name,
	                 token,
	                 camps {
	                   id,
	                   number,
	                   year,
	                   applicants {
	                     id,
                         campId,
                         name,
                         accepted
	                   }
	                 }
                   }
                 }`

  return (dispatch) => {
    dispatch(requestShallowFetch())
    return client
      .query(query)
      .then((response) => dispatch(receiveShallowFetch(response)))
  }
}

export const requestFullFetch = (applicantId) => {
  return {
    type: 'REQUEST_FULL_FETCH',
    applicantId
  }
}

export const receiveFullFetch = (data) => {
  let {applicant} = data
  applicant.answers = JSON.parse(applicant.answers)[0]
  applicant.newComment = ''

  for (let comment of applicant.comments) {
    comment.createdOn = moment(comment.createdOn)
  }

  for (let nameProposal of applicant.nameProposals) {
    nameProposal.createdOn = moment(nameProposal.createdOn)
  }

  return {
    type: 'RECEIVE_FULL_FETCH',
    applicantId: applicant.id,
    applicant
  }
}

export const fullFetch = (applicantId) => {
  const query = `{
                   applicant(id: ${applicantId}) {
                     id,
                     campId,
                     name,
                     accepted,
                     sentMail,
                     createdOn,
                     answers,
                     comments {
                       text,
                       createdOn,
                       author {
                         name
                       }
                     },
                     nameProposals {
                       id,
                       name,
                       description,
                       createdOn,
                       author {
                         name
                       }
                     }
                   }
                 }`

  return (dispatch) => {
    dispatch(requestFullFetch(applicantId))
    return client
      .query(query)
      .then((response) => dispatch(receiveFullFetch(response)))
  }
}

export const changeApplicantComment = (applicantId, newComment) => {
  return {
    type: 'CHANGE_APPLICANT_COMMENT',
    applicantId,
    newComment
  }
}

export const requestAddApplicantComment = (applicantId, text) => {
  return {
    type: 'REQUEST_ADD_APPLICANT_COMMENT',
    applicantId,
    text
  }
}

export const receiveAddApplicantComment = (applicantId, data) => {
  let applicantComment = data.addApplicantComment

  applicantComment.createdOn = moment(applicantComment.createdOn)

  return {
    type: 'RECEIVE_ADD_APPLICANT_COMMENT',
    applicantId,
    applicantComment
  }
}

export const addApplicantComment = (applicantId, organizerId, text) => {
  console.log(applicantId, organizerId, text)

  const query = `{
                   addApplicantComment(applicantId: ${applicantId},
                                       authorId: ${organizerId},
                                       text: "${text}") {
                     text,
                     author {
                       name
                     },
                     createdOn
                   }
                 }`

  return (dispatch) => {
    dispatch(requestAddApplicantComment(applicantId, text))
    return client
      .mutate(query)
      .then((response) => {
        dispatch(receiveAddApplicantComment(applicantId, response))
        dispatch(changeApplicantComment(applicantId, ''))
      })
  }
}
