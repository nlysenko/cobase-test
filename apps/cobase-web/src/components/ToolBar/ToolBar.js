/**
 *
 * ToolBar
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Navbar from 'shared/molecules/Navbar'

import { LochmaraColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  toolbar: {
    position: 'fixed',
    top: 0,
    zIndex: 100,
    height: 60,
    width: '100%',
    backgroundColor: LochmaraColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: {
      left: 19,
      right: 30,
    },
  },
})

const ToolBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.toolbar}>
      <Navbar />
    </div>
  )
}

export default ToolBar
