/**
 *
 * Team
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Team = () => {
  useEffect(() => {
    document.title = 'Team | CoBase'
  })

  return (
    <div>
      <PageHeader name="Team page" />
    </div>
  )
}

export default Team
