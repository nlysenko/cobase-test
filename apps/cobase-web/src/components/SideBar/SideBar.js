/**
 *
 * SideBar
 *
 */

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import SideBarHeader from 'shared/components/SideBarHeader'
import SideBarMenu from 'shared/components/SideBarMenu'
import SideBarFooter from 'shared/components/SideBarFooter'

import Progress from 'shared/molecules/Progress'

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

  sideBarIsOpen: {
    left: 0,
    transition: '0.5s',
  },
})

const SideBar = (props) => {
  const [progressIsOpen, setProgressIsOpen] = useState(false)

  const { sideBarIsOpen, taskIndex } = props

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
        sideBarIsOpen ? classes.sideBarIsOpen : ''
      }`}
    >
      <SideBarHeader />

      <SideBarMenu />

      {progressIsOpen ? <Progress taskIndex={taskIndex} /> : false}

      <SideBarFooter />
    </div>
  )
}

export default SideBar
