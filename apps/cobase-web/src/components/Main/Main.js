/**
 *
 * Main
 *
 */

import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import ToolBar from 'components/ToolBar/ToolBar'
import SideBar from 'components/SideBar/SideBar'
import MainPage from 'components/MainPage/MainPage'

import routes from 'app/routes'

const useStyles = createUseStyles({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: '0.5s',
  },

  sidebar_open: {
    paddingLeft: 250,
    transition: '0.5s',
  },
})

const Main = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    function handleResize() {
      setSideBarOpen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const classes = useStyles()

  return (
    <div
      className={`${classes.main} ${sideBarOpen ? classes.sidebar_open : ''}`}
    >
      <ToolBar sideBarIsOpen={sideBarOpen} toggleSideBar={toggleSideBar} />

      <SideBar sideBarIsOpen={sideBarOpen} />

      <MainPage sideBarIsOpen={sideBarOpen} children={routes} />
    </div>
  )
}

export default Main
