/**
 *
 * ProgressBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import { updateProgress, setLastUpdateTime } from 'app/redux/actions'

import playAudioMelody from 'shared/audio/playAudioMelody.js'
import continueAudio from 'assets/mp3/continue.mp3'
import pauseAudio from 'assets/mp3/pause.mp3'

import { ReactComponent as PauseIcon } from 'assets/svg/kit-kat.svg'

import {
  FiordColor,
  NepalColor,
  RegentStBlueColor,
  GothicColor,
  RhinoColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  progressBtn: {
    width: 95,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },

    '&:hover $arrowRight': {
      borderLeftColor: GothicColor,
    },

    '&:hover path': {
      fill: GothicColor,
    },

    '&:hover $title': {
      borderBottomColor: GothicColor,
      color: RhinoColor,
    },
  },

  title: {
    fontSize: 15,
    color: FiordColor,
    borderBottom: [1, 'dashed', NepalColor],
    marginLeft: 5,
  },

  arrowRight: {
    width: 0,
    height: 0,
    borderTop: [8, 'solid', 'transparent'],
    borderBottom: [8, 'solid', 'transparent'],
    borderLeft: [12, 'solid', RegentStBlueColor],
  },

  pause: {
    padding: { top: 3, right: 3 },
  },
})

const ProgressBtn = (props) => {
  const { taskIndex, taskOnPause, updateProgress, setLastUpdateTime } = props

  const toggleProcess = () => {
    if (taskOnPause) {
      updateProgress(taskIndex, 'In process')

      setLastUpdateTime(taskIndex, Date.now())

      playAudioMelody(continueAudio)
    } else {
      updateProgress(taskIndex, 'Paused')

      setLastUpdateTime(taskIndex, Date.now())

      playAudioMelody(pauseAudio)
    }
  }

  const classes = useStyles()
  return (
    <button className={classes.progressBtn} onClick={toggleProcess}>
      {taskOnPause ? (
        <span className={classes.arrowRight} />
      ) : (
        <i className={classes.pause}>
          <PauseIcon />
        </i>
      )}

      <span className={classes.title}>
        {taskOnPause ? 'Continue' : 'Pause task'}
      </span>
    </button>
  )
}

const mapDispatchToProps = {
  updateProgress: updateProgress,
  setLastUpdateTime: setLastUpdateTime,
}

export default connect(null, mapDispatchToProps)(ProgressBtn)
