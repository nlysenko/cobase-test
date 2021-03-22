/**
 *
 * People
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const People = () => {
  useEffect(() => {
    document.title = 'People | CoBase'
  })

  return (
    <main>
      <TopBlock name="People page" />
    </main>
  )
}

export default People
