/**
 *
 * Employees
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Employees = () => {
  useEffect(() => {
    document.title = 'Employees | CoBase'
  })

  return (
    <div>
      <PageHeader name="Employees page" />
    </div>
  )
}

export default Employees
