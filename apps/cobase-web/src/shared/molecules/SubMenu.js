/**
 *
 * SubMenu
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as SearchIcon } from 'assets/svg/search-icon.svg'
import { ReactComponent as GlobeIcon } from 'assets/svg/globe.svg'
import { ReactComponent as SettingsIcon } from 'assets/svg/settings-icon.svg'

import UserAvatar from 'assets/img/user.png'

import { TorchRedColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  submenu: {
    display: 'flex',
    alignItems: 'center',
    height: 28,
  },

  search: {
    cursor: 'pointer',

    '@media (max-width: 767px)': {
      display: 'none',
    },
  },

  globeWrapper: {
    cursor: 'pointer',
    position: 'relative',
    marginLeft: 20,
    height: 18,
  },

  indicator: {
    position: 'absolute',
    top: -7,
    right: -7,
    display: 'block',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: TorchRedColor,
  },

  settings: {
    marginLeft: 20,
    cursor: 'pointer',

    '@media (max-width: 767px)': {
      display: 'none',
    },
  },

  avatar: {
    widht: 28,
    height: 28,
    marginLeft: 20,
    borderRadius: 4,
    cursor: 'pointer',

    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
})

const SubMenu = () => {
  const classes = useStyles()

  return (
    <div className={classes.submenu}>
      <SearchIcon className={classes.search} />

      <div className={classes.globeWrapper}>
        <span className={classes.indicator} />

        <GlobeIcon />
      </div>

      <SettingsIcon className={classes.settings} />

      <img className={classes.avatar} src={UserAvatar} alt="user-avatar" />
    </div>
  )
}

export default SubMenu
