/**
 *
 * Footer
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { RhinoColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  footer: {
    height: 57,
    background: RhinoColor,
    marginTop: 31,
    width: 780,
    display: 'none',

    '@media (max-width: 769px)': {
      display: 'block',
    },
  },
})

const Footer = () => {
  const classes = useStyles()

  return <footer className={classes.footer}></footer>
}

export default Footer
