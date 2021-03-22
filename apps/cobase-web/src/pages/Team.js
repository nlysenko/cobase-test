/**
 *
 * Team
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Team = () => {
  useEffect(() => {
    document.title = 'Team | CoBase'
  })

  return (
    <main>
      <TopBlock name="Team page" />
    </main>
  )
}

export default Team
