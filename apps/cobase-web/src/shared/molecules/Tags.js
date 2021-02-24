/**
 *
 * Tags
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Add from 'shared/icons/Add'

import {
  BlackSqueezeColor,
  RhinoColor,
  LilyWhiteColor,
  AquaColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  tags: {
    borderTop: [1, 'solid', BlackSqueezeColor],
    padding: {
      top: 17,
      bottom: 45,
    },
    order: '3',
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 1.29,
    paddingRight: 13,
    color: RhinoColor,
  },

  tagsList: {
    paddingTop: 16,
    display: 'flex',
    flexWrap: 'wrap',
  },

  item: {
    width: 113,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: LilyWhiteColor,
    borderRadius: 100,
    margin: {
      right: 12,
      bottom: 12,
    },
  },

  tagName: {
    color: AquaColor,
    fontSize: 15,
  },
})

const Tags = (props) => {
  const { arr } = props

  const classes = useStyles()
  return (
    <div className={classes.tags}>
      <div className={classes.inner}>
        <h3 className={classes.title}>Tags</h3>

        <Add />
      </div>

      <ul className={classes.tagsList}>
        {arr.map((tag, i) => (
          <li className={classes.item} key={i}>
            <span className={classes.tagName}>{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
