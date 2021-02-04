/**
 *
 * SideBar
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Logo from 'shared/atoms/Logo'
import SideBarMenu from 'shared/molecules/SideBarMenu'

import { RhinoColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  sidebar: {
    position: 'fixed',
    top: 0,
    left: -250,
    bottom: 0,
    zIndex: 100,
    width: 250,
    backgroundColor: RhinoColor,
    transition: '0.5s',
  },

  sidebar_open: {
    left: 0,
    transition: '0.5s',
  },
})

const SideBar = (props) => {
  const { sideBarIsOpen } = props

  const classes = useStyles()

  return (
    <div
      className={`${classes.sidebar} ${
        sideBarIsOpen ? classes.sidebar_open : ''
      }`}
    >
      <Logo />

      <SideBarMenu />
    </div>
  )
}

export default SideBar
