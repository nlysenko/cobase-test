/**
 *
 * Custom routes
 *
 */

import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'pages/Home'
import Overview from 'pages/Overview'
import TaskManager from 'pages/TaskManager'
import Drawings from 'pages/Drawings'
import Employees from 'pages/Employees'
import Reports from 'pages/Reports'

const routes = [
  <Route exact path="/" component={Home} key="1" />,
  <Route exact path="/overview" component={Overview} key="2" />,
  <Route exact path="/task-manager" component={TaskManager} key="3" />,
  <Route exact path="/drawings" component={Drawings} key="4" />,
  <Route exact path="/employees" component={Employees} key="5" />,
  <Route exact path="/reports" component={Reports} key="6" />,
]

export default routes
