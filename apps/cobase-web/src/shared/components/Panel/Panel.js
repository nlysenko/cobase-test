/**
 *
 * Panel
 *
 */

import React from 'react'
import { Switch } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import { WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  panel: {
    backgroundColor: WhiteColor,
    width: 780,
    height: 1000,
  },
})

const Panel = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.panel}>
      <Switch>{props.children}</Switch>
    </div>
  )
}

export default Panel
