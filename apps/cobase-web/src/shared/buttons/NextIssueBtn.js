/**
 *
 * NextIssueBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg'

import { LilyWhiteColor, NepalColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  nextIssueBtn: {
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

  title: {
    fontSize: 13,
    color: NepalColor,
    paddingRight: 15,
  },

  arrowRight: {
    paddingTop: 2,
  },
})

const NextIssueBtn = (props) => {
  const { showNextIssue } = props

  const classes = useStyles()
  return (
    <button className={classes.nextIssueBtn} onClick={showNextIssue}>
      <span className={classes.title}>Next issue</span>

      <i className={classes.arrowRight}>
        <ArrowRight />
      </i>
    </button>
  )
}

export default NextIssueBtn
