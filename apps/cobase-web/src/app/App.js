/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Navigation from 'shared/components/Navigation/Navigation'
import Main from 'shared/components/Main/Main'

import { BgColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
    },

    a: {
      color: 'white',
      textDecoration: 'none',
    },

    body: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Heebo-Regular',
      backgroundColor: BgColor,
    },

    ul: {
      listStyle: 'none',
    },
  },

  app: {
    display: 'flex',
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <div role="application" className={classes.app}>
      <Navigation />

      <Main />
    </div>
  )
}

export default App
