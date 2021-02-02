/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import ToolBar from 'shared/components/ToolBar/ToolBar'
import SideBar from 'shared/components/SideBar/SideBar'
import Panel from 'shared/components/Panel/Panel'

import routes from 'app/routes'

const useStyles = createUseStyles({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  sidebar_open: {
    paddingLeft: 250,
  },
})

const Main = () => {
  const classes = useStyles()

  return (
    <div className={`${classes.main} ${classes.sidebar_open}`}>
      <ToolBar />

      <SideBar />

      <Panel children={routes} />
    </div>
  )
}

export default Main
