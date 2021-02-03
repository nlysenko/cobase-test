/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Main from 'components/Main/Main'

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
