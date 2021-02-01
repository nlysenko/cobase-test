/**
 *
 * Navigation
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { createUseStyles } from 'react-jss'

import { RhinoColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  navigation: {
    width: 250,
    backgroundColor: RhinoColor,
    float: 'left',
  },
})

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.navigation}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

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

export default Navigation
