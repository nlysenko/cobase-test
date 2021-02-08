/**
 *
 * CompleteBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as CompleteIcon } from 'assets/svg/complete-icon.svg'

import {
  AppleColor,
  EmeraldColor,
  WhiteColor,
  AtlantisColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  complete_btn: {
    width: 143,
    height: 42,
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    background: AppleColor,
    border: [1, 'solid', EmeraldColor],
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },

    '&:hover': {
      background: AtlantisColor,
    },
  },

  title: {
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: 'Heebo-Medium',
    color: WhiteColor,
  },
})

const CompleteBtn = () => {
  const classes = useStyles()

  return (
    <button className={classes.complete_btn}>
      <CompleteIcon />

      <span className={classes.title}>Complete</span>
    </button>
  )
}

export default CompleteBtn
