/**
 *
 * MainPage
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Home from 'pages/Home'
import Overview from 'pages/Overview'
import TaskManager from 'pages/TaskManager'
import Drawings from 'pages/Drawings'
import Employees from 'pages/Employees'
import Reports from 'pages/Reports'
import Projects from 'pages/Projects'
import People from 'pages/People'
import Team from 'pages/Team'

import { WhiteColor, BgColor, BaliHaiColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
  },

  sideBarOpenInner: {
    height: 960,
    backgroundColor: BgColor,
    padding: {
      top: 72,
      left: 288,
    },
    transition: '0.5s',
  },

  sideBarClosedInner: {
    minHeight: 1200,
    backgroundColor: BgColor,
    padding: {
      top: 72,
      left: 288,
    },
    transition: '0.5s',

    '@media (max-width: 769px)': {
      width: '100%',
      padding: {
        top: 72,
        left: 14,
        right: 14,
      },
      transition: '0.5s',
    },
  },

  sidebarIsOpenPage: {
    width: 780,
    minHeight: 828,
    paddingBottom: 24,
    backgroundColor: WhiteColor,
    border: [1, 'solid', BaliHaiColor],
    borderRadius: 4,
    transition: '0.5s',
  },

  sidebarIsClosedPage: {
    width: 780,
    minHeight: 828,
    paddingBottom: 24,
    backgroundColor: WhiteColor,
    border: [1, 'solid', BaliHaiColor],
    borderRadius: 4,

    '@media (max-width: 769px)': {
      width: '100%',
      transition: '0.5s',
    },
  },
})

const MainPage = (props) => {
  const { sideBarIsOpen, taskIndex, nextIssue, prevIssue } = props

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div
        className={`${
          sideBarIsOpen ? classes.sideBarOpenInner : classes.sideBarClosedInner
        }`}
      >
        <div
          className={`${
            sideBarIsOpen
              ? classes.sidebarIsOpenPage
              : classes.sidebarIsClosedPage
          }`}
        >
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/overview" component={Overview} />,
            <Route
              exact
              path="/task-manager"
              render={() => (
                <TaskManager
                  taskIndex={taskIndex}
                  nextIssue={nextIssue}
                  prevIssue={prevIssue}
                />
              )}
            />
            ,
            <Route exact path="/drawings" component={Drawings} />,
            <Route exact path="/employees" component={Employees} />,
            <Route exact path="/reports" component={Reports} />,
            <Route exact path="/reports" component={Reports} />,
            <Route exact path="/projects" component={Projects} />,
            <Route exact path="/people" component={People} />,
            <Route exact path="/team" component={Team} />,
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default MainPage
