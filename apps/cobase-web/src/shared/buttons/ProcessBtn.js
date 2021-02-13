/**
 *
 * ProcessBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as PauseIcon } from 'assets/svg/kit-kat.svg'

import { FiordColor, NepalColor, RegentStBlueColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  process_btn: {
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

  arrow_right: {
    width: 0,
    height: 0,
    borderTop: [8, 'solid', 'transparent'],
    borderBottom: [8, 'solid', 'transparent'],
    borderLeft: [12, 'solid', RegentStBlueColor],
  },
})

const ProcessBtn = (props) => {
  const { taskPaused, toggleProcess } = props

  const classes = useStyles()
  return (
    <button className={classes.process_btn} onClick={toggleProcess}>
      {taskPaused ? <span className={classes.arrow_right} /> : <PauseIcon />}

      <span className={classes.title}>
        {taskPaused ? 'Continue' : 'Pause task'}
      </span>
    </button>
  )
}

export default ProcessBtn
