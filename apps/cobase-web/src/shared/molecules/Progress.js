/**
 *
 * Progress
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'

import {
  NepalColor,
  WhiteColor,
  WaikawaGrayColor,
  PortageColor,
  JavaColor,
  FrenchPassColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    paddingLeft: 30,
  },

  title: {
    fontSize: 11,
    fontFamily: 'Heebo-Medium',
    color: NepalColor,
    paddingBottom: 6,
  },

  name: {
    fontSize: 13,
    color: WhiteColor,
    display: 'block',
    marginTop: 8,
  },

  progressbar_wrapper: {
    height: 26,
    display: 'flex',
    alignItems: 'center',
  },

  task_progressbar: {
    display: 'inline-block',
    width: 161,
    height: 6,
    borderRadius: 100,
    backgroundColor: WaikawaGrayColor,
  },

  overal_progressbar: {
    composes: '$task_progressbar',
    backgroundColor: FrenchPassColor,
  },

  task_progress: {
    height: '100%',
    backgroundColor: PortageColor,
    borderRadius: 100,
  },

  overal_progress: {
    composes: '$task_progress',
    backgroundColor: JavaColor,
    width: 0,
  },

  indicator: {
    fontSize: 13,
    color: NepalColor,
    paddingLeft: 9,
  },
})

const Progress = (props) => {
  const { task, tasks } = props

  const getNumberCompletedSubtasks = (arr) => {
    return arr.reduce((sum, subtask) => {
      return sum + subtask.completed
    }, 0)
  }

  const overallSubtasks = tasks.reduce((arr, task) => {
    return arr.concat(task.subtasks)
  }, [])

  const currentSubtasks = task.subtasks

  const taskProgress =
    (getNumberCompletedSubtasks(currentSubtasks) / currentSubtasks.length) * 100

  const projectProgress =
    (getNumberCompletedSubtasks(overallSubtasks) / overallSubtasks.length) * 100

  const taskProgressStyle = {
    width: taskProgress + '%',
    transition: 'all 0.5s ease-out',
  }

  const projectProgressStyle = {
    width: projectProgress + '%',
    transition: 'all 0.5s ease-out',
  }

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>PROGRESS</h3>

      <span className={classes.name}>Task</span>

      <div className={classes.progressbar_wrapper}>
        <div className={classes.task_progressbar}>
          <div className={classes.task_progress} style={taskProgressStyle} />
        </div>

        <span className={classes.indicator}>{+taskProgress.toFixed(2)}</span>
      </div>

      <span className={classes.name}>Overal project</span>

      <div className={classes.progressbar_wrapper}>
        <div className={classes.overal_progressbar}>
          <div
            className={classes.overal_progress}
            style={projectProgressStyle}
          />
        </div>

        <span className={classes.indicator}>{+projectProgress.toFixed(2)}</span>
      </div>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    tasks: state.tasks,
    task: state.task,
  }
}

export default connect(mapStateToProps)(Progress)
