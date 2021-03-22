/**
 *
 * Drawings
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Drawings = () => {
  useEffect(() => {
    document.title = 'Drawings | CoBase'
  })

  return (
    <main>
      <TopBlock name="Drawings page" />
    </main>
  )
}

export default Drawings
