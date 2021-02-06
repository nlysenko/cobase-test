/**
 *
 * TaskControls
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import CompleteButton from 'shared/atoms/CompleteButton'
import PauseTaskButton from 'shared/atoms/PauseTaskButton'

import { ReactComponent as CreateIcon } from 'assets/svg/create.svg'
import { ReactComponent as ShareIcon } from 'assets/svg/share.svg'

import { NepalColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  task_controls: {
    order: '-1',
    display: 'flex',
    alignItems: 'center',
  },

  or: {
    fontSize: 13,
    padding: [0, 10],
    color: NepalColor,
  },

  edits: {
    flexGrow: 1,
    textAlign: 'right',
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

const TaskControls = () => {
  const classes = useStyles()

  return (
    <div className={classes.task_controls}>
      <CompleteButton />

      <span className={classes.or}>or</span>

      <PauseTaskButton />

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
