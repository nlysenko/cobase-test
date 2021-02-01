/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import TopNavigation from 'shared/components/TopNavigation/TopNavigation'
import Panel from 'shared/components/Panel/Panel'

import routes from 'app/routes'

const useStyles = createUseStyles({
  main: {},
})

const Main = () => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <TopNavigation />

      <Panel children={routes} />
    </div>
  )
}

export default Main
