/**
 *
 * NextIssueButton
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import {
  RegentStBlueColor,
  LilyWhiteColor,
  NepalColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  next_issue: {
    height: '100%',
    width: 131,
    display: 'flex',
    background: 'none',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    order: '1',
    paddingLeft: 20,

    '@media (max-width: 767px)': {
      width: 112,
      paddingLeft: 0,

      '&:hover': {
        background: 'none',
      },
    },

    '@media (min-width: 768px)': {
      '&:hover': {
        background: LilyWhiteColor,
      },
    },

    '&:focus': {
      outline: 'none',
    },
  },

  name: {
    fontSize: 13,
    color: NepalColor,
    paddingRight: 15,
  },

  arrow_right: {
    width: 0,
    height: 0,
    borderTop: [5, 'solid', 'transparent'],
    borderBottom: [5, 'solid', 'transparent'],
    borderLeft: [5, 'solid', RegentStBlueColor],
  },
})

const NextIssueButton = () => {
  const classes = useStyles()

  return (
    <button className={classes.next_issue}>
      <span className={classes.name}>Next issue</span>

      <span className={classes.arrow_right} />
    </button>
  )
}

export default NextIssueButton
