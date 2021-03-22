/**
 *
 * Main
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Home from 'pages/Home'
import Overview from 'pages/Overview'
import TaskManager from 'pages/TaskManager'
import Drawings from 'pages/Drawings'
import Calendar from 'pages/Calendar'
import Employees from 'pages/Employees'
import Reports from 'pages/Reports'
import Projects from 'pages/Projects'
import People from 'pages/People'
import Team from 'pages/Team'

import { BgColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: BgColor,
    padding: {
      top: 72,
      bottom: 72,
      left: 289,
    },
    transition: '0.5s',

    '@media (max-width: 769px)': {
      padding: {
        top: 72,
        left: 14,
        right: 14,
        bottom: 88,
      },
    },
  },
})

const Main = (props) => {
  const { taskIndex, nextIssue, prevIssue } = props

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
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
        <Route exact path="/calendar" component={Calendar} />,
        <Route exact path="/employees" component={Employees} />,
        <Route exact path="/reports" component={Reports} />,
        <Route exact path="/reports" component={Reports} />,
        <Route exact path="/projects" component={Projects} />,
        <Route exact path="/people" component={People} />,
        <Route exact path="/team" component={Team} />,
      </Switch>
    </div>
  )
}

export default Main
