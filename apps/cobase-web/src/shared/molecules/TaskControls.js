/**
 *
 * TaskControls
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import CompleteButton from 'shared/atoms/CompleteButton'
import PauseTaskButton from 'shared/atoms/PauseTaskButton'

import { NepalColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  task_controls: {
    order: '-1',
    display: 'flex',
    alignItems: 'center',

    // '@media (max-width: 767px)': {
    //   justifyContent: 'center',
    // },
  },

  or: {
    fontSize: 13,
    padding: [0, 10],
    color: NepalColor,
  },
})

const TaskControls = () => {
  const classes = useStyles()

  return (
    <div className={classes.task_controls}>
      <CompleteButton />

      <span className={classes.or}>or</span>

      <PauseTaskButton />
    </div>
  )
}

export default TaskControls
