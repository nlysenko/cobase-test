/**
 *
 * Task
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import EditBtn from 'shared/buttons/EditBtn'

import { RhinoColor, FiordColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    paddingTop: 25,
    order: '1',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontSize: 34,
    marginRight: 20,
    color: RhinoColor,
    lineHeight: '44px',
  },

  description: {
    paddingTop: 8,
    maxHeight: 55,
    overflow: 'scroll',
    fontSize: 17,
    color: FiordColor,
  },
})

const TaskDescription = (props) => {
  const { name, description } = props

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.title}>{name}</h1>

        <EditBtn />
      </div>

      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default TaskDescription
