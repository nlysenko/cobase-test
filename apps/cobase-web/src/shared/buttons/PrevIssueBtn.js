/**
 *
 * PrevIssueBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as ArrowLeft } from 'assets/svg/arrow-left.svg'

import { BotticelliColor, LilyWhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  prevIssueBtn: {
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
})

const PrevIssueBtn = (props) => {
  const { showPrevIssue } = props

  const classes = useStyles()
  return (
    <button className={classes.prevIssueBtn} onClick={showPrevIssue}>
      <i>
        <ArrowLeft />
      </i>
    </button>
  )
}

export default PrevIssueBtn
