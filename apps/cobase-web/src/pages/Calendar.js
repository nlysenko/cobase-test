/**
 *
 * Calendar
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Calendar = () => {
  useEffect(() => {
    document.title = 'Calendar | CoBase'
  })

  return (
    <main>
      <TopBlock name="Calendar page" />
    </main>
  )
}

export default Calendar
