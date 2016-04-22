/* @noflow */

const applicants = {
  0: {
    id: 0,
    accepted: true,
    sentMail: false,
    createdOn: '2016-04-17 08:46:49'
  },
  1: {
    id: 1,
    accepted: true,
    sentMail: false,
    createdOn: '2030-04-17 08:46:49'
  },
  2: {
    id: 2,
    accepted: true,
    sentMail: false,
    createdOn: '2047-04-17 08:46:49'
  }
}

export const getApplicant = (node, args) => {
  return applicants[args.id]
}
