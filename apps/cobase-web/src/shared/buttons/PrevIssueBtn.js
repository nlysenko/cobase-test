/**
 *
 * PrevIssueBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import {
  BotticelliColor,
  RegentStBlueColor,
  LilyWhiteColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  prev_issue_btn: {
    height: '100%',
    width: 52,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: [1, 'solid', BotticelliColor],
    borderTop: 'none',
    borderBottom: 'none',
    cursor: 'pointer',
    order: '0',

    '@media (max-width: 767px)': {
      order: '-1',
      border: 'none',
      width: 37,

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

  arrow_left: {
    width: 0,
    height: 0,
    borderTop: [5, 'solid', 'transparent'],
    borderBottom: [5, 'solid', 'transparent'],
    borderRight: [5, 'solid', RegentStBlueColor],
  },
})

const PrevIssueBtn = (props) => {
  const { showPrevIssue } = props

  const classes = useStyles()
  return (
    <button className={classes.prev_issue_btn} onClick={showPrevIssue}>
      <span className={classes.arrow_left} />
    </button>
  )
}

export default PrevIssueBtn
