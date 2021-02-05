/**
 *
 * Drawings
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Drawings = () => {
  useEffect(() => {
    document.title = 'Drawings | CoBase'
  })

  return (
    <div>
      <PageHeader name="Drawings page" />
    </div>
  )
}

export default Drawings
