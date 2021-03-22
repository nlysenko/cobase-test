/**
 *
 * SideBar
 *
 */

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Top from './components/Top'
import Menu from './components/Menu'
import Progress from './components/Progress'
import Footer from './components/Footer'

import { RhinoColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  sideBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 300,
    width: 250,
    backgroundColor: RhinoColor,
    transition: '0.5s',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media (max-width: 769px)': {
      left: -250,
    },
  },

  sideBarIsOpen: {
    left: 0,
    transition: '0.5s',
  },
})

const SideBar = (props) => {
  const [progressIsOpen, setProgressIsOpen] = useState(false)

  const { sideBarIsOpen, toggleSideBar, taskIndex } = props

  const usePageViews = () => {
    let location = useLocation()

    useEffect(() => {
      setProgressIsOpen(location.pathname === '/task-manager')
    }, [location])
  }

  usePageViews() // when the task manager page is in an open setting visible progress bar

  const classes = useStyles()
  return (
    <aside
      className={`${classes.sideBar} ${
        sideBarIsOpen ? classes.sideBarIsOpen : ''
      }`}
    >
      <Top />

      <Menu toggleSideBar={toggleSideBar} />

      {progressIsOpen ? <Progress taskIndex={taskIndex} /> : false}

      <Footer />
    </aside>
  )
}

export default SideBar
