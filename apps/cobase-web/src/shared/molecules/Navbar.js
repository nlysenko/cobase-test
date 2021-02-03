/**
 *
 * Navbar
 *
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import ShowMoreLink from 'shared/atoms/ShowMoreLink'
import ToggleSideBarBtn from 'shared/atoms/ToggleSideBarBtn'

import { WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  navbar_list: {
    display: 'flex',

    '@media (max-width: 767px)': {
      display: 'none',
    },
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
})

const Navbar = (props) => {
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

        <li className={classes.item}>
          <ShowMoreLink />
        </li>
      </ul>

      <ToggleSideBarBtn toggleSideBar={props.toggleSideBar} />
    </nav>
  )
}

export default Navbar
