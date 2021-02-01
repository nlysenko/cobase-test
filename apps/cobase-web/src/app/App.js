/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

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
})

const App = () => {
  const classes = useStyles()

  return <div className={classes.app} />
}

export default App
