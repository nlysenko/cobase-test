/**
 *
 * Home page
 *
 */

import React, { useEffect } from 'react'

import PageHeader from 'shared/atoms/PageHeader'

const Home = () => {
  useEffect(() => {
    document.title = 'Home | CoBase'
  })

  return (
    <div>
      <PageHeader name="Home page" />
    </div>
  )
}

export default Home
