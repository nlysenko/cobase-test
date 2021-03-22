/**
 *
 * TaskManager
 *
 */

import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import Status from 'shared/molecules/Status'
import Controls from 'shared/molecules/Controls'
import Description from 'shared/molecules/Description'
import Employees from 'shared/molecules/Employees'
import Tags from 'shared/molecules/Tags'
import Gallery from 'shared/molecules/Gallery'
import Checklist from 'shared/molecules/Checklist'

import PrevIssueBtn from 'shared/buttons/PrevIssueBtn'
import NextIssueBtn from 'shared/buttons/NextIssueBtn'

import getNumberCompletedSubtasks from 'shared/js/getNumberCompletedSubtasks'

import { updateProgress } from 'app/redux/actions'

import { BotticelliColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  top: {
    height: 53,
    borderBottom: [1, 'solid', BotticelliColor],
    display: 'flex',
    alignItems: 'center',
  },

  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: {
      left: 34,
      right: 28,
    },

    '@media (max-width: 767px)': {
      padding: {
        left: 15,
        right: 15,
      },
    },
  },
})

const TaskManager = (props) => {
  useEffect(() => {
    document.title = 'Task Manager | CoBase'
  })

  const { taskIndex, nextIssue, prevIssue, tasks, updateProgress } = props

  const [task, setTask] = useState(tasks[taskIndex])

  useEffect(() => {
    setTask(tasks[taskIndex])
  }, [taskIndex, tasks])

  const currentSubtasks = tasks[taskIndex].subtasks
  const taskIsCompleted =
    currentSubtasks.length === getNumberCompletedSubtasks(currentSubtasks)

  const taskOnPause = tasks[taskIndex].progress === 'Paused'

  useEffect(() => {
    if (taskIsCompleted) {
      updateProgress(taskIndex, 'Completed')
    } else if (taskOnPause) {
      updateProgress(taskIndex, 'Paused')
    } else {
      updateProgress(taskIndex, 'In process')
    }
  }, [taskIsCompleted, updateProgress, taskIndex, taskOnPause])

  const classes = useStyles()
  return (
    <main>
      <div className={classes.top}>
        <Status progress={task.progress} lastUpdatedTime={task.updated} />

        <PrevIssueBtn showPrevIssue={prevIssue} />

        <NextIssueBtn showNextIssue={nextIssue} />
      </div>

      <div className={classes.pageContent}>
        <Controls
          taskIndex={taskIndex}
          taskIsCompleted={taskIsCompleted}
          progress={task.progress}
          taskOnPause={taskOnPause}
        />

        <Description title={task.name} about={task.description} />

        <Employees employees={task.employees} />

        <Tags arr={task.tags} />

        <Gallery arr={task.gallery} />

        <Checklist
          subtasks={task.subtasks}
          taskIndex={taskIndex}
          taskIsCompleted={taskIsCompleted}
          taskOnPause={taskOnPause}
        />
      </div>
    </main>
  )
}

const mapStateToProps = function(state) {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = {
  updateProgress: updateProgress,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)
