/**
 *
 * Reports
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Reports = () => {
  useEffect(() => {
    document.title = 'Reports | CoBase'
  })

  return (
    <div>
      <PageHeader name="Reports page" />
    </div>
  )
}

export default Reports
