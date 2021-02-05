/**
 *
 * Footer
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { DustyGrayColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  footer: {
    height: 60,
    borderTop: [1, 'solid', DustyGrayColor],
    marginTop: 25,
  },
})

const Footer = () => {
  const classes = useStyles()

  return <footer className={classes.footer} />
}

export default Footer
