/**
 *
 * SideBarFooter
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { DustyGrayColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  footer: {
    minHeight: 88,
    borderTop: [1, 'solid', DustyGrayColor],
  },
})

const SideBarFooter = () => {
  const classes = useStyles()

  return <footer className={classes.footer} />
}

export default SideBarFooter
