/**
 *
 * ToolBar
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Navbar from 'shared/molecules/Navbar'
import SubMenu from 'shared/molecules/SubMenu'

import { LochmaraColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  toolbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 60,
    backgroundColor: LochmaraColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: {
      left: 269,
      right: 30,
    },
    transition: '0.5s',

    '@media (max-width: 769px)': {
      paddingLeft: 19,
    },
  },
})

const ToolBar = (props) => {
  const { toggleSideBar } = props

  const classes = useStyles()

  return (
    <header className={classes.toolbar}>
      <Navbar toggleSideBar={toggleSideBar} />

      <SubMenu />
    </header>
  )
}

export default ToolBar
