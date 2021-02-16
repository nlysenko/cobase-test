/**
 *
 * TaskManager
 *
 */

import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import TaskProgress from 'shared/molecules/TaskProgress'
import TaskControls from 'shared/molecules/TaskControls'
import TaskDescription from 'shared/molecules/TaskDescription'
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
  task_manager: {
    minHeight: '100%',
  },

  header: {
    height: 53,
    borderBottom: [1, 'solid', BotticelliColor],
    display: 'flex',
    alignItems: 'center',
  },

  page_content: {
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

  const { taskIndex, nextIssue, prevIssue, tasks } = props

  const [task, setTask] = useState(tasks[taskIndex])

  const currentSubtasks = tasks[taskIndex].subtasks
  const taskIsCompleted =
    currentSubtasks.length === getNumberCompletedSubtasks(currentSubtasks)

  useEffect(() => {
    setTask(tasks[taskIndex])
  }, [taskIndex, tasks])

  const classes = useStyles()
  return (
    <div className={classes.task_manager}>
      <header className={classes.header}>
        <TaskProgress progress={task.progress} />

        <PrevIssueBtn showPrevIssue={prevIssue} />

        <NextIssueBtn showNextIssue={nextIssue} />
      </header>

      <main className={classes.page_content}>
        <TaskControls
          taskIndex={taskIndex}
          taskIsCompleted={taskIsCompleted}
          progress={task.progress}
        />

        <TaskDescription name={task.name} description={task.description} />

        <Employees employees={task.employees} />

        <Tags arr={task.tags} />

        <Gallery arr={task.gallery} />

        <Checklist
          subtasks={task.subtasks}
          taskIndex={taskIndex}
          taskIsCompleted={taskIsCompleted}
        />
      </main>
    </div>
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
