/**
 *
 * Top
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Logo from 'shared/atoms/Logo'

import { DustyGrayColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 60,
    borderBottom: [1, 'solid', DustyGrayColor],
  },
})

const Top = () => {
  const classes = useStyles()

  return (
    <div className={classes.top}>
      <Logo />
    </div>
  )
}

export default Top
