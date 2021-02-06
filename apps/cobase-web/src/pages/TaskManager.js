/**
 *
 * TaskManager
 *
 */

import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'

import TaskProgress from 'shared/molecules/TaskProgress'
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
    </div>
  )
}

export default TaskManager
