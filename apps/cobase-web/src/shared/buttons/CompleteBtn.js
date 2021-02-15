/**
 *
 * CompleteBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import { setTaskCompleted } from 'app/redux/actions'

import getNumberCompletedSubtasks from 'shared/js/getNumberCompletedSubtasks'

import playAudioMelody from 'shared/audio/playAudioMelody.js'
import taskCompletedAudio from 'assets/mp3/task-completed.mp3'

import { ReactComponent as CompleteIcon } from 'assets/svg/complete-icon.svg'

import {
  AppleColor,
  EmeraldColor,
  WhiteColor,
  AtlantisColor,
  JavaColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  complete_btn: {
    width: 143,
    height: 42,
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    background: AppleColor,
    border: [1, 'solid', EmeraldColor],
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },

    '&:hover': {
      background: AtlantisColor,
    },

    '&:disabled': {
      background: JavaColor,
      cursor: 'not-allowed',
    },
  },

  title: {
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: 'Heebo-Medium',
    color: WhiteColor,
  },
})

const CompleteBtn = (props) => {
  const { taskIndex, tasks, setTaskCompleted } = props

  const currentSubtasks = tasks[taskIndex].subtasks

  const taskIsCompleted =
    currentSubtasks.length === getNumberCompletedSubtasks(currentSubtasks)

  const completeAllSubtasks = () => {
    setTaskCompleted(taskIndex)

    playAudioMelody(taskCompletedAudio)
  }

  const classes = useStyles()
  return (
    <button
      className={classes.complete_btn}
      onClick={completeAllSubtasks}
      disabled={taskIsCompleted}
    >
      <CompleteIcon />

      <span className={classes.title}>Complete</span>
    </button>
  )
}

const mapStateToProps = function(state) {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = {
  setTaskCompleted: setTaskCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteBtn)
