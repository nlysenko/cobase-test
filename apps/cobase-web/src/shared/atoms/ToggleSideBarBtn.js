/**
 *
 * ToggleSideBarBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  toggle_btn: {
    display: 'none',
    flexDirection: 'column',
    width: 30,
    height: 24,
    border: 'none',
    outline: 'none',
    background: 'inherit',
    cursor: 'pointer',

    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },

  line: {
    display: 'block',
    width: '100%',
    height: 4,
    backgroundColor: WhiteColor,

    '&:nth-child(2)': {
      margin: [5, 0],
    },
  },
})

const ToggleSideBarBtn = () => {
  const classes = useStyles()

  return (
    <button className={classes.toggle_btn}>
      <i className={classes.line} />

      <i className={classes.line} />

      <i className={classes.line} />
    </button>
  )
}

export default ToggleSideBarBtn
