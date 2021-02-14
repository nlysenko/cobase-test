/**
 *
 * NewEmployeeBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { AppleColor, EmeraldColor, WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  new_employee_btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: AppleColor,
    borderRadius: 8,
    border: [1, 'solid', EmeraldColor],
    width: 28,
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },
  },

  name: {
    fontSize: 13,
    fontStyle: 'normal',
    color: WhiteColor,
  },
})

const NewEmployeeBtn = () => {
  const classes = useStyles()

  return (
    <button className={classes.new_employee_btn}>
      <span className={classes.name}>+1</span>
    </button>
  )
}

export default NewEmployeeBtn
