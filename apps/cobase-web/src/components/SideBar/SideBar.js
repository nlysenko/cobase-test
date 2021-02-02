/**
 *
 * SideBar
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { createUseStyles } from 'react-jss'

import { RhinoColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  sidebar: {
    position: 'fixed',
    top: 0,
    left: -250,
    bottom: 0,
    width: 250,
    backgroundColor: RhinoColor,
  },

  sidebar_open: {
    left: 0,
    transition: '0.5s',

    '@media (max-width: 768px)': {
      left: -250,
      transition: '0.5s',
    },
  },
})

const SideBar = (props) => {
  const classes = useStyles()

  return (
    <div className={`${classes.sidebar} ${classes.sidebar_open}`}>
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
