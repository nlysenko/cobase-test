/**
 *
 * ProgressBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import { updateProgress } from 'app/redux/actions'

import { ReactComponent as PauseIcon } from 'assets/svg/kit-kat.svg'

import { FiordColor, NepalColor, RegentStBlueColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  progress_btn: {
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

const ProgressBtn = (props) => {
  const { taskIndex, taskOnPause, updateProgress } = props

  const toggleProcess = () => {
    console.log('taskOnPause: ', taskOnPause)
    if (taskOnPause) {
      updateProgress(taskIndex, 'In process')
    } else {
      updateProgress(taskIndex, 'Paused')
    }
  }

  const classes = useStyles()
  return (
    <button className={classes.progress_btn} onClick={toggleProcess}>
      {taskOnPause ? <span className={classes.arrow_right} /> : <PauseIcon />}

      <span className={classes.title}>
        {taskOnPause ? 'Continue' : 'Pause task'}
      </span>
    </button>
  )
}

const mapDispatchToProps = {
  updateProgress: updateProgress,
}

export default connect(null, mapDispatchToProps)(ProgressBtn)
