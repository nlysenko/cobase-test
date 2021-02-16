/**
 *
 * TaskProgress
 *
 */

import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import humanizeDuration from 'humanize-duration'

import {
  PortageColor,
  FiordColor,
  AppleColor,
  NepalColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '1',
    order: '-1',
    marginLeft: 14,

    '@media (max-width: 767px)': {
      order: '0',
      marginLeft: 0,
    },
  },

  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 81,
    height: 25,
    borderRadius: 120,
  },

  inprocess: {
    color: PortageColor,
    border: [1, 'solid', PortageColor],
  },

  paused: {
    color: FiordColor,
    border: [1, 'solid', FiordColor],
  },

  completed: {
    color: AppleColor,
    border: [1, 'solid', AppleColor],
  },

  name: {
    fontSize: 13,
  },

  time: {
    fontSize: 13,
    color: NepalColor,
    marginLeft: 10,
  },
})

const TaskProgress = (props) => {
  const { progress, lastUpdateTime } = props

  const shortEnglishHumanizer = humanizeDuration.humanizer({
    units: ['m'],
    round: true,
    spacer: '',
    language: 'shortEn',
    languages: {
      shortEn: {
        m: () => 'm ago',
      },
    },
  })

  const [currentTime, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    let timer = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  })

  function tick() {
    setCurrentTime(Date.now())
  }

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div
        className={`${classes.progress} ${
          progress === 'In process'
            ? classes.inprocess
            : progress === 'Completed'
            ? classes.completed
            : classes.paused
        }`}
      >
        <span className={classes.name}>{progress}</span>
      </div>

      <span className={classes.time}>
        {shortEnglishHumanizer(currentTime - lastUpdateTime)}
      </span>
    </div>
  )
}

export default TaskProgress
