/**
 *
 * Overview page
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Overview = () => {
  useEffect(() => {
    document.title = 'Overview | CoBase'
  })

  return (
    <div>
      <PageHeader name="Overview page" />
    </div>
  )
}

export default Overview
