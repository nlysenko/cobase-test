/**
 *
 * TaskProgress
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import {
  PortageColor,
  FiordColor,
  AppleColor,
  NepalColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '1',
    order: '-1',
    marginLeft: 14,

    '@media (max-width: 767px)': {
      order: '0',
      marginLeft: 0,
    },
  },

  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 81,
    height: 25,
    borderRadius: 120,
  },

  inprogress: {
    color: PortageColor,
    border: [1, 'solid', PortageColor],
  },

  paused: {
    composes: '$progress',
    color: FiordColor,
    border: [1, 'solid', FiordColor],
  },

  completed: {
    composes: '$progress',
    color: AppleColor,
    border: [1, 'solid', AppleColor],
  },

  name: {
    fontSize: 13,
  },

  time: {
    fontSize: 13,
    color: NepalColor,
    marginLeft: 10,
  },
})

const TaskProgress = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.progress} ${classes.inprogress}`}>
        <span className={classes.name}>In Progress</span>
      </div>

      <span className={classes.time}>15m ago</span>
    </div>
  )
}

export default TaskProgress
