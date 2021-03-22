/**
 *
 * Home page
 *
 */

import React, { useEffect } from 'react'

import TopBlock from 'shared/atoms/TopBlock'

const Home = () => {
  useEffect(() => {
    document.title = 'Home | CoBase'
  })

  return (
    <main>
      <TopBlock name="Home page" />
    </main>
  )
}

export default Home
