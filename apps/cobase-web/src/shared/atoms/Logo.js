/**
 *
 * Logo
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import CobaseLogo from 'assets/img/cobase-logo.png'

import { DustyGrayColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderBottom: [1, 'solid', DustyGrayColor],
  },

  logo_link: {
    display: 'block',
    height: 18,
  },

  logo: {
    height: 15,
  },
})

const Logo = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Link className={classes.logo_link} to="/">
        <img className={classes.logo} src={CobaseLogo} alt="logo" />
      </Link>
    </div>
  )
}

export default Logo
