/**
 *
 * AddBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { AppleColor, AtlantisColor, WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  add_btn: {
    width: 16,
    height: 16,
    cursor: 'pointer',
    background: AppleColor,
    border: [1, 'solid', AtlantisColor],
    borderRadius: '50%',

    '&:focus': {
      outline: 'none',
    },
  },

  plus: {
    fontSize: 13,
    color: WhiteColor,
  },
})

const AddBtn = () => {
  const classes = useStyles()

  return (
    <button className={classes.add_btn}>
      <span className={classes.plus}>+</span>
    </button>
  )
}

export default AddBtn
