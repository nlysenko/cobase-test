/**
 *
 * SideBarHeader
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Logo from 'shared/atoms/Logo'

import { DustyGrayColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderBottom: [1, 'solid', DustyGrayColor],
  },
})

const SideBarHeader = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Logo />
    </header>
  )
}

export default SideBarHeader
