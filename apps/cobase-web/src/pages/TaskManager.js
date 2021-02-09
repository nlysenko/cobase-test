/**
 *
 * TaskManager
 *
 */

import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

import TaskProgress from 'shared/molecules/TaskProgress'
import TaskControls from 'shared/molecules/TaskControls'
import TaskDescription from 'shared/molecules/TaskDescription'
import Employees from 'shared/molecules/Employees'
import Tags from 'shared/molecules/Tags'
import Gallery from 'shared/molecules/Gallery'
import Checklist from 'shared/molecules/Checklist'

import PrevIssueBtn from 'shared/buttons/PrevIssueBtn'
import NextIssueBtn from 'shared/buttons/NextIssueBtn'

import tasks from 'app/tasks.json'

import playAudioMelody from 'shared/audio/playAudioMelody'
import toggleIssueAudio from 'assets/mp3/toggle-issue.mp3'
import toggleIssueFalseAudio from 'assets/mp3/toggle-issue-false.mp3'

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

const TaskManager = () => {
  useEffect(() => {
    document.title = 'Task Manager | CoBase'
  })

  const [task, setTask] = useState(tasks[0])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTask(tasks[count])
  }, [count])

  const nextIssue = () => {
    if (tasks.length - 1 > count) {
      setCount(count + 1)

      playAudioMelody(toggleIssueAudio)
    } else {
      playAudioMelody(toggleIssueFalseAudio)
    }
  }

  const prevIssue = () => {
    if (count !== 0) {
      setCount(count - 1)

      playAudioMelody(toggleIssueAudio)
    } else {
      playAudioMelody(toggleIssueFalseAudio)
    }
  }

  const classes = useStyles()

  return (
    <div className={classes.task_manager}>
      <header className={classes.header}>
        <TaskProgress />

        <PrevIssueBtn getPrevIssue={prevIssue} />

        <NextIssueBtn getNextIssue={nextIssue} />
      </header>

      <main className={classes.page_content}>
        <TaskControls />

        <TaskDescription name={task.name} description={task.description} />

        <Employees employees={task.employees} />

        <Tags arr={task.tags} />

        <Gallery arr={task.gallery} />

        <Checklist subtasks={task.subtasks} />
      </main>
    </div>
  )
}

export default TaskManager
