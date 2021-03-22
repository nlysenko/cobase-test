/**
 *
 * Employees
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Employees = () => {
  useEffect(() => {
    document.title = 'Employees | CoBase'
  })

  return (
    <main>
      <TopBlock name="Employees page" />
    </main>
  )
}

export default Employees
