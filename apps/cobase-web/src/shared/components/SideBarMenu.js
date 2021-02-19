/**
 *
 * SideBarMenu
 *
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import playAudioMelody from 'shared/audio/playAudioMelody'
import OpenNewPageMelody from 'assets/mp3/open-page.mp3'

import { ReactComponent as BlueCompleteIcon } from 'assets/svg/blue-complete.svg'
import { ReactComponent as GreenTaskIcon } from 'assets/svg/green-task.svg'
import { ReactComponent as PurpleTasksIcon } from 'assets/svg/purple-tasks.svg'
import { ReactComponent as YellowAssignIcon } from 'assets/svg/yellow-assign.svg'
import { ReactComponent as OrangeIcon } from 'assets/svg/orange.svg'

import { NepalColor, FrenchPassColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  menu: {
    padding: {
      top: 31,
      bottom: 25,
    },
  },

  title: {
    fontFamily: 'Heebo-Medium',
    color: NepalColor,
    fontSize: 11,
    paddingLeft: 30,
  },

  navbar: {
    paddingTop: 10,
  },

  navLink: {
    display: 'flex',
    alignItems: 'center',
    height: 68,
    paddingLeft: 30,
  },

  navLinkIsSelected: {
    backgroundColor: FrenchPassColor,
  },

  linkInner: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
  },

  name: {
    fontSize: 15,
  },

  indicator: {
    color: NepalColor,
    fontSize: 13,
  },
})

const SideBarMenu = () => {
  const classes = useStyles()

  return (
    <div className={classes.menu}>
      <h3 className={classes.title}>MENU</h3>

      <nav className={classes.navbar}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkIsSelected}
              to="/overview"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <BlueCompleteIcon />

              <span className={classes.linkInner}>
                <span className={classes.name}>Overview</span>

                <span className={classes.indicator}>6 updates</span>
              </span>
            </NavLink>
          </li>

          <li className={classes.item}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkIsSelected}
              to="/task-manager"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <GreenTaskIcon />

              <span className={classes.linkInner}>
                <span className={classes.name}>Task manager</span>

                <span className={classes.indicator}>23 new tasks</span>
              </span>
            </NavLink>
          </li>

          <li className={classes.item}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkIsSelected}
              to="/drawings"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <PurpleTasksIcon />

              <span className={classes.linkInner}>
                <span className={classes.name}>Drawings</span>

                <span className={classes.indicator}>123 pages</span>
              </span>
            </NavLink>
          </li>

          <li className={classes.item}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkIsSelected}
              to="/employees"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <YellowAssignIcon />

              <span className={classes.linkInner}>
                <span className={classes.name}>Employees</span>

                <span className={classes.indicator}>2 new guys</span>
              </span>
            </NavLink>
          </li>

          <li className={classes.item}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkIsSelected}
              to="/reports"
              onClick={() => playAudioMelody(OpenNewPageMelody)}
            >
              <OrangeIcon />

              <span className={classes.linkInner}>
                <span className={classes.name}>Reports</span>

                <span className={classes.indicator}>4 new</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBarMenu
