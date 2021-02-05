/**
 *
 * People
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const People = () => {
  useEffect(() => {
    document.title = 'People | CoBase'
  })

  return (
    <div>
      <PageHeader name="People page" />
    </div>
  )
}

export default People
