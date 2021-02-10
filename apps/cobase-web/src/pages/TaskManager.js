/**
 *
 * TaskManager
 *
 */

import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import { toggleTask } from 'app/redux/actions'

import TaskProgress from 'shared/molecules/TaskProgress'
import TaskControls from 'shared/molecules/TaskControls'
import TaskDescription from 'shared/molecules/TaskDescription'
import Employees from 'shared/molecules/Employees'
import Tags from 'shared/molecules/Tags'
import Gallery from 'shared/molecules/Gallery'
import Checklist from 'shared/molecules/Checklist'

import PrevIssueBtn from 'shared/buttons/PrevIssueBtn'
import NextIssueBtn from 'shared/buttons/NextIssueBtn'

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

const TaskManager = (props) => {
  const { task, tasks, toggleTask } = props

  useEffect(() => {
    document.title = 'Task Manager | CoBase'
  })

  const [count, setCount] = useState(0)

  const nextIssue = () => {
    if (tasks.length !== 0 && tasks.length - 1 > count) {
      setCount(count + 1)

      toggleTask(count + 1)

      playAudioMelody(toggleIssueAudio)
    } else {
      playAudioMelody(toggleIssueFalseAudio)
    }
  }

  const prevIssue = () => {
    if (tasks.length !== 0 && count !== 0) {
      setCount(count - 1)

      toggleTask(count - 1)

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

        <Checklist subtasks={task.subtasks} taskId={task.id} />
      </main>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    task: state.task,
    tasks: state.tasks,
  }
}

const mapDispatchToProps = {
  toggleTask: toggleTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)
