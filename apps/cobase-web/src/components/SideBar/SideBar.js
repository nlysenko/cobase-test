/**
 *
 * SideBar
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Logo from 'shared/atoms/Logo'

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

      <nav>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>

          <li>
            <Link to="/task-manager">Task manager</Link>
          </li>

          <li>
            <Link to="/drawings">Drawings</Link>
          </li>

          <li>
            <Link to="/employees">Employees</Link>
          </li>

          <li>
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
