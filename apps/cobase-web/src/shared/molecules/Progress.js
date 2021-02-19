/**
 *
 * Progress
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'

import getNumberCompletedSubtasks from 'shared/js/getNumberCompletedSubtasks'

import {
  NepalColor,
  WhiteColor,
  WaikawaGrayColor,
  AzureRadianceColor,
  JavaColor,
  FrenchPassColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  progressBar: {
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

  progressBarWrapper: {
    height: 26,
    display: 'flex',
    alignItems: 'center',
  },

  taskProgressBar: {
    display: 'inline-block',
    width: 161,
    height: 6,
    borderRadius: 100,
    backgroundColor: WaikawaGrayColor,
  },

  overalProgressBar: {
    composes: '$taskProgressBar',
    backgroundColor: FrenchPassColor,
  },

  taskProgress: {
    height: '100%',
    backgroundColor: AzureRadianceColor,
    borderRadius: 100,
  },

  overalProgress: {
    composes: '$taskProgress',
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
  const { taskIndex, tasks } = props

  const overallSubtasks = Object.values(tasks).reduce((arr, task) => {
    return arr.concat(task.subtasks)
  }, [])

  const currentSubtasks = tasks[taskIndex].subtasks

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
    <div className={classes.progressBar}>
      <h3 className={classes.title}>PROGRESS</h3>

      <span className={classes.name}>Task</span>

      <div className={classes.progressBarWrapper}>
        <div className={classes.taskProgressBar}>
          <div className={classes.taskProgress} style={taskProgressStyle} />
        </div>

        <span className={classes.indicator}>{+taskProgress.toFixed(2)}</span>
      </div>

      <span className={classes.name}>Overal project</span>

      <div className={classes.progressBarWrapper}>
        <div className={classes.overalProgressBar}>
          <div
            className={classes.overalProgress}
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
  }
}

export default connect(mapStateToProps)(Progress)
