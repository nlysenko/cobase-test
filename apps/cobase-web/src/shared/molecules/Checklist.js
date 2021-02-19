/**
 *
 * Checklist
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import { toggleSubtask, setLastUpdateTime } from 'app/redux/actions'

import Add from 'shared/icons/Add'

import { ReactComponent as Tick } from 'assets/svg/checkbox.svg'

import playAudioMelody from 'shared/audio/playAudioMelody.js'
import subtaskCheckedAudio from 'assets/mp3/checkbox-checked.mp3'

import {
  BlackSqueezeColor,
  RhinoColor,
  AzureRadianceColor,
  LochmaraColor,
  FiordColor,
  PeriwinkleGrayColor,
  NepalColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  checklist: {
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

  subtasksList: {
    marginTop: 22,
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
  },

  subtask: {
    display: 'flex',
    alignItems: 'center',
  },

  customСheckbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    border: [1, 'solid', PeriwinkleGrayColor],
    borderRadius: '4px',
    cursor: 'pointer',
  },

  hidden: {
    display: 'none',

    '&:checked + i': {
      borderColor: LochmaraColor,
      background: AzureRadianceColor,
    },

    '&:disabled + i': {
      borderColor: PeriwinkleGrayColor,
      background: PeriwinkleGrayColor,
      cursor: 'unset',
    },

    '&:checked ~ span': {
      textDecoration: 'line-through',
      color: NepalColor,
    },

    '&:disabled ~ span': {
      color: PeriwinkleGrayColor,
      cursor: 'unset',
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
    <div className={classes.checklist}>
      <div className={classes.inner}>
        <h3 className={classes.title}>Checklist</h3>

        <Add />
      </div>

      <ul className={classes.subtasksList}>
        {subtasks.map((subtask, i) => (
          <li className={classes.item} key={i}>
            <label className={classes.subtask} htmlFor={subtask.id}>
              <input
                className={classes.hidden}
                type="checkbox"
                id={subtask.id}
                onChange={switchSubtask}
                checked={subtask.completed}
                disabled={taskOnPause}
              />

              <i className={classes.customСheckbox}>
                {subtask.completed ? <Tick className={classes.tick} /> : false}
              </i>

              <span className={classes.name}>{subtask.name}</span>
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
