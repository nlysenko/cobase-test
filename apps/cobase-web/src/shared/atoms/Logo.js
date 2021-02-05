/**
 *
 * Logo
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import CobaseLogo from 'assets/img/cobase-logo.png'

import playAudioMelody from 'shared/audio/playAudioMelody'
import OpenNewPageMelody from 'assets/mp3/open-page.mp3'

const useStyles = createUseStyles({
  logo: {
    display: 'block',
    height: 18,
  },

  image: {
    height: 15,
  },
})

const Logo = () => {
  const classes = useStyles()

  return (
    <Link
      className={classes.logo}
      to="/"
      onClick={() => playAudioMelody(OpenNewPageMelody)}
    >
      <img className={classes.image} src={CobaseLogo} alt="logo" />
    </Link>
  )
}

export default Logo
