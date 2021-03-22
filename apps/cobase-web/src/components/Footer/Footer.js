/**
 *
 * Footer
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink, useLocation } from 'react-router-dom'

import playAudioMelody from 'shared/audio/playAudioMelody'
import OpenNewPageMelody from 'assets/mp3/open-page.mp3'
import FalseOpenNewPageMelody from 'assets/mp3/toggle-page-false.mp3'

import { ReactComponent as DrawingsIcon } from 'assets/svg/drawings-icon.svg'
import { ReactComponent as EmployeesIcon } from 'assets/svg/employees-icon.svg'
import { ReactComponent as CalendarIcon } from 'assets/svg/calendar-icon.svg'
import { ReactComponent as TaskManagerIcon } from 'assets/svg/task-manager-icon.svg'
import { ReactComponent as EditIcon } from 'assets/svg/edit-icon.svg'

import {
  RhinoColor,
  AzureRadianceColor,
  WhiteColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  footer: {
    display: 'none',

    '@media (max-width: 769px)': {
      display: 'block',
      position: 'fixed',
      zIndex: 100,
      left: 0,
      right: 0,
      bottom: 0,
      height: 57,
      background: RhinoColor,
      padding: {
        left: 30,
        right: 30,
      },
    },
  },

  navigation: {
    height: '100%',
  },

  list: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  navLink: {
    display: 'flex',

    '& $icon path': {
      fill: WhiteColor,
    },
  },

  active: {
    '& $icon path': {
      fill: AzureRadianceColor,
    },
  },

  icon: {
    display: 'flex',
    cursor: 'pointer',

    '&:hover path': {
      fill: AzureRadianceColor,
    },
  },
})

const Footer = () => {
  const { pathname } = useLocation()

  const togglePage = (nextPage) => {
    if (nextPage !== pathname) {
      playAudioMelody(OpenNewPageMelody)
    } else {
      playAudioMelody(FalseOpenNewPageMelody)
    }
  }

  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.active}
              to="/drawings"
              onClick={() => togglePage('/drawings')}
            >
              <i className={classes.icon}>
                <DrawingsIcon />
              </i>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.active}
              to="/employees"
              onClick={() => togglePage('/employees')}
            >
              <i className={classes.icon}>
                <EmployeesIcon />
              </i>
            </NavLink>
          </li>

          <li>
            <i className={classes.icon}>
              <EditIcon />
            </i>
          </li>

          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.active}
              to="/calendar"
              onClick={() => togglePage('/calendar')}
            >
              <i className={classes.icon}>
                <CalendarIcon />
              </i>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.active}
              to="/task-manager"
              onClick={() => togglePage('/task-manager')}
            >
              <i className={classes.icon}>
                <TaskManagerIcon />
              </i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
