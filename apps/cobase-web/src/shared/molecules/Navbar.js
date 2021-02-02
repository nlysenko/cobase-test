/**
 *
 * Navbar
 *
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import { WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  navbar_list: {
    display: 'flex',
  },

  item: {
    paddingRight: 30,
  },

  navbar_link: {
    fontSize: 15,

    '&:hover': {
      borderBottom: [1, 'solid', WhiteColor],
    },
  },

  navbar_link_selected: {
    borderBottom: [1, 'solid', WhiteColor],
  },

  point: {
    width: 5,
    height: 5,
    backgroundColor: WhiteColor,
    marginRight: 5,
    borderRadius: 3,
  },
})

const Navbar = () => {
  const classes = useStyles()

  return (
    <nav>
      <ul className={classes.navbar_list}>
        <li className={classes.item}>
          <NavLink
            className={classes.navbar_link}
            activeClassName={classes.navbar_link_selected}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            className={classes.navbar_link}
            activeClassName={classes.navbar_link_selected}
            to="/people"
          >
            People
          </NavLink>
        </li>

        <li className={classes.item}>
          <NavLink
            className={classes.navbar_link}
            activeClassName={classes.navbar_link_selected}
            to="/team"
          >
            Team
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
