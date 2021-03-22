/**
 *
 * Reports
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Reports = () => {
  useEffect(() => {
    document.title = 'Reports | CoBase'
  })

  return (
    <main>
      <TopBlock name="Reports page" />
    </main>
  )
}

export default Reports
