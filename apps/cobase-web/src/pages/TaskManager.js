/**
 *
 * TaskManager
 *
 */

import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import TaskProgress from 'shared/molecules/TaskProgress'
import TaskControls from 'shared/molecules/TaskControls'

import PrevIssueButton from 'shared/atoms/PrevIssueButton'
import NextIssueButton from 'shared/atoms/NextIssueButton'

import { BotticelliColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
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
      top: 23,
      left: 34,
      right: 28,
    },
  },
})

const TaskManager = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = 'Task Manager | CoBase'
  })

  return (
    <div className={classes.task_manager}>
      <header className={classes.header}>
        <TaskProgress />

        <PrevIssueButton />

        <NextIssueButton />
      </header>

      <main className={classes.page_content}>
        <TaskControls />
      </main>
    </div>
  )
}

export default TaskManager
