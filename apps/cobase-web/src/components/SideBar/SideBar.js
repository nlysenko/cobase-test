/**
 *
 * SideBar
 *
 */

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Header from 'shared/molecules/Header'
import Menu from 'shared/molecules/Menu'
import Progress from 'shared/molecules/Progress'
import Footer from 'shared/molecules/Footer'

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
    overflow: 'scroll',
  },

  sidebar_open: {
    left: 0,
    transition: '0.5s',
  },
})

const SideBar = (props) => {
  const [progressIsOpen, setProgressIsOpen] = useState(false)

  const { sideBarIsOpen } = props

  const usePageViews = () => {
    let location = useLocation()

    useEffect(() => {
      setProgressIsOpen(location.pathname === '/task-manager')
    }, [location])
  }

  usePageViews() // when the task manager page is in an open setting visible progress bar

  const classes = useStyles()
  return (
    <div
      className={`${classes.sidebar} ${
        sideBarIsOpen ? classes.sidebar_open : ''
      }`}
    >
      <Header />

      <Menu />

      {progressIsOpen ? <Progress /> : false}

      <Footer />
    </div>
  )
}

export default SideBar
