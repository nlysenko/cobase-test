/**
 *
 * TaskControls
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import CompleteBtn from 'shared/buttons/CompleteBtn'
import ProcessBtn from 'shared/buttons/ProcessBtn'

import { ReactComponent as CreateIcon } from 'assets/svg/create.svg'
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg'

import { NepalColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  task_controls: {
    order: '0',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 23,

    '@media (max-width: 767px)': {
      order: '6',
      paddingTop: 51,
      justifyContent: 'center',
    },
  },

  or: {
    fontSize: 13,
    padding: [0, 10],
    color: NepalColor,
  },

  edits: {
    flexGrow: 1,
    textAlign: 'right',

    '@media (max-width: 767px)': {
      display: 'none',
    },
  },

  create_icon: {
    display: 'inline-block',
    height: 16,
  },

  share_icon: {
    composes: '$create_icon',
    marginLeft: 26,
  },
})

const TaskControls = (props) => {
  const { taskId, taskPaused, toggleProcess, completeTask } = props

  const classes = useStyles()
  return (
    <div className={classes.task_controls}>
      <CompleteBtn completeTask={completeTask} taskId={taskId} />

      <span className={classes.or}>or</span>

      <ProcessBtn taskPaused={taskPaused} toggleProcess={toggleProcess} />

      <div className={classes.edits}>
        <i className={classes.create_icon}>
          <CreateIcon />
        </i>

        <i className={classes.share_icon}>
          <ShareIcon />
        </i>
      </div>
    </div>
  )
}

export default TaskControls
