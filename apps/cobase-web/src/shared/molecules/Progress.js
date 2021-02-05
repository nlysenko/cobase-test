/**
 *
 * Progress
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import {
  NepalColor,
  WhiteColor,
  WaikawaGrayColor,
  PortageColor,
  JavaColor,
  FrenchPassColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    padding: {
      top: 25,
      left: 30,
    },
  },

  title: {
    fontSize: 11,
    fontFamily: 'Heebo-Medium',
    color: NepalColor,
    paddingBottom: 6,
  },

  name: {
    fontSize: 13,
    color: WhiteColor,
    display: 'block',
    marginTop: 8,
  },

  progressbar_wrapper: {
    height: 26,
    display: 'flex',
    alignItems: 'center',
  },

  progressbar_valuemax: {
    display: 'inline-block',
    width: 161,
    height: 6,
    borderRadius: 100,
    backgroundColor: WaikawaGrayColor,
  },

  progressbar_valuemin: {
    composes: '$progressbar_valuemax',
    backgroundColor: FrenchPassColor,
  },

  progress_valuemax: {
    height: '100%',
    width: 130,
    backgroundColor: PortageColor,
    borderRadius: 100,
  },

  progress_valuemin: {
    composes: '$progress_valuemax',
    backgroundColor: JavaColor,
    width: 80,
  },

  indicator: {
    fontSize: 13,
    color: NepalColor,
    paddingLeft: 9,
  },
})

const Progress = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>PROGRESS</h3>

      <span className={classes.name}>Task</span>

      <div className={classes.progressbar_wrapper}>
        <div className={classes.progressbar_valuemax}>
          <div className={classes.progress_valuemax} id="task" />
        </div>

        <span className={classes.indicator}>70</span>
      </div>

      <span className={classes.name}>Overal project</span>

      <div className={classes.progressbar_wrapper}>
        <div className={classes.progressbar_valuemin}>
          <div className={classes.progress_valuemin} id="project" />
        </div>

        <span className={classes.indicator}>23</span>
      </div>
    </div>
  )
}

export default Progress
