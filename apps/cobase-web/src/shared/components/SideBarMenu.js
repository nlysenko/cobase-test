/**
 *
 * SideBarMenu
 *
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import playAudioMelody from 'shared/audio/playAudioMelody'
import OpenNewPageMelody from 'assets/mp3/open-page.mp3'

import { ReactComponent as OverviewIcon } from 'assets/svg/overview-icon.svg'
import { ReactComponent as TaskManagerIcon } from 'assets/svg/task-manager-icon.svg'
import { ReactComponent as DrawingsIcon } from 'assets/svg/drawings-icon.svg'
import { ReactComponent as EmployeesIcon } from 'assets/svg/employees-icon.svg'
import { ReactComponent as ReportsIcon } from 'assets/svg/reports-icon.svg'

import {
  WhiteColor,
  NepalColor,
  FrenchPassColor,
  AquaColor,
  YellowGreenColor,
  PortageColor,
  SupernovaColor,
  PumpkinColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  menu: {
    padding: {
      top: 31,
      bottom: 25,
    },
  },

  caption: {
    fontFamily: 'Heebo-Medium',
    color: NepalColor,
    fontSize: 11,
    paddingLeft: 30,
  },

  navbar: {
    paddingTop: 10,
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    height: 68,
    paddingLeft: 30,
  },

  active: {
    backgroundColor: FrenchPassColor,

    '& $icon': {
      '&:after': {
        opacity: 1,
      },
    },

    '& $icon path': {
      fill: WhiteColor,
    },
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
  },

  icon: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,

    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 12,
      zIndex: '-1',
      opacity: '0.2',
    },
  },

  overview: {
    '&:after': {
      background: AquaColor,
    },
  },

  tasks: {
    '&:after': {
      background: YellowGreenColor,
    },
  },

  drawings: {
    '&:after': {
      background: PortageColor,
    },
  },

  employees: {
    '&:after': {
      background: SupernovaColor,
    },
  },

  reports: {
    '&:after': {
      background: PumpkinColor,
    },
  },

  title: {
    fontSize: 15,
  },

  subtitle: {
    color: NepalColor,
    fontSize: 13,
    marginTop: -3,
  },
})

const SideBarMenu = (props) => {
  const { tasks } = props

  const newTasks = Object.keys(tasks).length

  const classes = useStyles()
  return (
    <div className={classes.menu}>
      <h3 className={classes.caption}>MENU</h3>

      <nav className={classes.navbar}>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={classes.item}
              activeClassName={classes.active}
              to="/overview"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <i className={`${classes.icon} ${classes.overview}`}>
                <OverviewIcon />
              </i>

              <span className={classes.inner}>
                <span className={classes.title}>Overview</span>

                <span className={classes.subtitle}>6 updates</span>
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={classes.item}
              activeClassName={classes.active}
              to="/task-manager"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <i className={`${classes.icon} ${classes.tasks}`}>
                <TaskManagerIcon />
              </i>

              <span className={classes.inner}>
                <span className={classes.title}>Task manager</span>

                <span className={classes.subtitle}>{`${newTasks} new ${
                  newTasks === 1 ? 'task' : 'tasks'
                }`}</span>
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={classes.item}
              activeClassName={classes.active}
              to="/drawings"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <i className={`${classes.icon} ${classes.drawings}`}>
                <DrawingsIcon />
              </i>

              <span className={classes.inner}>
                <span className={classes.title}>Drawings</span>

                <span className={classes.subtitle}>123 pages</span>
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={classes.item}
              activeClassName={classes.active}
              to="/employees"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <i className={`${classes.icon} ${classes.employees}`}>
                <EmployeesIcon />
              </i>

              <span className={classes.inner}>
                <span className={classes.title}>Employees</span>

                <span className={classes.subtitle}>2 new guys</span>
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={classes.item}
              activeClassName={classes.active}
              to="/reports"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <i className={`${classes.icon} ${classes.reports}`}>
                <ReportsIcon />
              </i>

              <span className={classes.inner}>
                <span className={classes.title}>Reports</span>

                <span className={classes.subtitle}>4 new</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    tasks: state.tasks,
  }
}

export default connect(mapStateToProps)(SideBarMenu)
