/**
 *
 * PauseTaskButton
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { FiordColor, NepalColor, RegentStBlueColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  pause_task_btn: {
    width: 92,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },
  },

  title: {
    fontSize: 15,
    color: FiordColor,
    borderBottom: [1, 'dashed', NepalColor],
    marginLeft: 5,
  },

  pause_icon: {
    width: 3,
    height: 15,
    background: RegentStBlueColor,
    marginRight: 2,
  },
})
const PauseTaskButton = () => {
  const classes = useStyles()

  return (
    <button className={classes.pause_task_btn}>
      <i className={classes.pause_icon} />
      <i className={classes.pause_icon} />

      <span className={classes.title}>Pause task</span>
    </button>
  )
}

export default PauseTaskButton
