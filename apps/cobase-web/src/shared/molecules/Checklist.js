/**
 *
 * Checklist
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import { toggleSubtask, setLastUpdateTime } from 'app/redux/actions'

import AddBtn from 'shared/buttons/AddBtn'

import playAudioMelody from 'shared/audio/playAudioMelody.js'
import subtaskCheckedAudio from 'assets/mp3/checkbox-checked.mp3'

import {
  BlackSqueezeColor,
  RhinoColor,
  FiordColor,
  NepalColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    borderTop: [1, 'solid', BlackSqueezeColor],
    paddingTop: 17,
    order: '5',
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 7,
  },

  title: {
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 1.29,
    paddingRight: 13,
    color: RhinoColor,
  },

  subtasks_list: {
    marginTop: 22,
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
  },

  subtask: {
    cursor: 'pointer',

    '&:checked+$name': {
      color: NepalColor,
      textDecoration: 'line-through',
    },
  },

  name: {
    marginLeft: 15,
    fontSize: 15,
    color: FiordColor,
    cursor: 'pointer',
  },
})

const Checklist = (props) => {
  const {
    subtasks,
    taskIndex,
    toggleSubtask,
    taskOnPause,
    setLastUpdateTime,
  } = props

  const switchSubtask = (event) => {
    const subTaskId = event.target.id

    toggleSubtask(taskIndex, subTaskId)

    setLastUpdateTime(taskIndex, Date.now())

    playAudioMelody(subtaskCheckedAudio)
  }

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <h3 className={classes.title}>Checklist</h3>

        <AddBtn />
      </div>

      <ul className={classes.subtasks_list}>
        {subtasks.map((subtask, i) => (
          <li className={classes.item} key={i}>
            <input
              className={classes.subtask}
              type="checkbox"
              id={subtask.id}
              onChange={switchSubtask}
              checked={subtask.completed}
              disabled={taskOnPause}
            />

            <label className={classes.name} htmlFor={subtask.id}>
              {subtask.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  toggleSubtask: toggleSubtask,
  setLastUpdateTime: setLastUpdateTime,
}

export default connect(null, mapDispatchToProps)(Checklist)
