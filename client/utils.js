import React from 'react'

export const formatDate = (date) => {
  return <span title={date.format('LL')}>{date.fromNow()}</span>
}
