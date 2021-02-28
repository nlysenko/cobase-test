/**
 *
 * ToggleSideBarBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { WhiteColor, LilyWhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  toggleBtn: {
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

    '&:hover $line': {
      backgroundColor: LilyWhiteColor,
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

const ToggleSideBarBtn = (props) => {
  const classes = useStyles()

  const { toggleSideBar } = props

  return (
    <button className={classes.toggleBtn} onClick={toggleSideBar}>
      <i className={classes.line} />

      <i className={classes.line} />

      <i className={classes.line} />
    </button>
  )
}

export default ToggleSideBarBtn
