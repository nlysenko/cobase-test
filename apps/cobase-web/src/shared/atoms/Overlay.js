/**
 *
 * Overlay
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { BlackColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  overlay: {
    position: 'fixed',
    zIndex: 200,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: BlackColor,
    opacity: 0.3,
  },
})

const Overlay = (props) => {
  const { toggleSideBar } = props

  const classes = useStyles()

  return <div className={classes.overlay} onClick={toggleSideBar} />
}

export default Overlay
