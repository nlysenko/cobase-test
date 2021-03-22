/**
 *
 * Projects
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | CoBase'
  })

  return (
    <main>
      <TopBlock name="Projects page" />
    </main>
  )
}

export default Projects
