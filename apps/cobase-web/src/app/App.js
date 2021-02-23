/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Main from 'components/Main/Main'

import { WhiteColor, BlackColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },

    a: {
      color: WhiteColor,
      textDecoration: 'none',
    },

    body: {
      color: BlackColor,
      fontSize: 16,
      fontFamily: 'Heebo-Regular',
    },

    ul: {
      listStyle: 'none',
    },
  },
})

const App = () => {
  useStyles()

  return (
    <div role="application" id="app">
      <Main />
    </div>
  )
}

export default App
