/**
 *
 * Overview page
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Overview = () => {
  useEffect(() => {
    document.title = 'Overview | CoBase'
  })

  return (
    <main>
      <TopBlock name="Overview page" />
    </main>
  )
}

export default Overview
