/**
 *
 * Projects
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | CoBase'
  })

  return (
    <div>
      <PageHeader name="Projects page" />
    </div>
  )
}

export default Projects
