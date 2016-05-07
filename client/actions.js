/* @noflow */
import fetch from 'isomorphic-fetch'
import moment from 'moment'

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

export const receiveShallowFetch = (json) => {
  const {organizer} = json.data

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
    return fetch(`http://localhost:3000/graphql?query=${query}`)
.then((response) => response.json())
.then((json) => dispatch(receiveShallowFetch(json)))
  }
}

export const requestFullFetch = (applicantId) => {
  return {
    type: 'REQUEST_FULL_FETCH',
    applicantId
  }
}

export const receiveFullFetch = (json) => {
  let {applicant} = json.data
  applicant.answers = JSON.parse(applicant.answers)[0]

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
    return fetch(`http://localhost:3000/graphql?query=${query}`)
   .then((response) => response.json())
   .then((json) => dispatch(receiveFullFetch(json)))
  }
}

export const requestAddApplicantComment = (applicantId, organizerId, text) => {
  return {
    type: 'REQUEST_ADD_APPLICANT_COMMENT',
    applicantId,
    organizerId,
    text
  }
}

export const receiveAddApplicantComment = (json) => {
  let applicantComment = json.data.addApplicantComment

  applicantComment.createdOn = moment(applicantComment.createdOn)

  return {
    type: 'RECEIVE_ADD_APPLICANT_COMMENT',
    applicantComment
  }
}

export const addApplicantComment = (applicantId, organizerId, text) => {
  const query = `mutation {
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
    dispatch(requestAddApplicantComment(applicantId, organizerId, text))
    return fetch(`http://localhost:3000/graphql?query=${query}`)
   .then((response) => response.json())
   .then((json) => dispatch(receiveAddApplicantComment(json)))
  }
}

export const changeApplicantCommentForm = (applicantId, text) => {
  return {
    type: 'CHANGE_APPLICANT_COMMENT_FORM',
    applicantId,
    text
  }
}
