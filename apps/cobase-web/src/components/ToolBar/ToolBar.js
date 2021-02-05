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
    zIndex: 100,
    height: 60,
    backgroundColor: LochmaraColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: {
      left: 19,
      right: 30,
    },
  },

  sidebar__open: {
    width: 'calc(100% - 250px)',
    transition: '0.5s',
  },

  sidebar__closed: {
    width: '100%',
    transition: '0.5s',
  },
})

const ToolBar = (props) => {
  const { sideBarIsOpen } = props

  const classes = useStyles()

  return (
    <div
      className={`${classes.toolbar} ${
        sideBarIsOpen ? classes.sidebar__open : classes.sidebar__closed
      }`}
    >
      <Navbar toggleSideBar={props.toggleSideBar} />

      <SubMenu />
    </div>
  )
}

export default ToolBar
