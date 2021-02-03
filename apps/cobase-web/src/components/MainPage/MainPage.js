/**
 *
 * MainPage
 *
 */

import React from 'react'
import { Switch } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import { WhiteColor, BgColor, BaliHaiColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
  },

  sidebar_open_inner: {
    width: 1920,
    height: 1200,
    backgroundColor: BgColor,
    padding: {
      top: 72,
      left: 288,
    },
    transition: '0.5s',
  },

  sidebar_closed_inner: {
    width: 1920,
    height: 1200,
    backgroundColor: BgColor,
    padding: {
      top: 72,
      left: 288,
    },
    transition: '0.5s',

    '@media (max-width: 768px)': {
      width: '100%',
      padding: {
        top: 72,
        left: 15,
        right: 15,
      },
      transition: '0.5s',
    },
  },

  sidebar_open_page: {
    width: 780,
    height: 828,
    backgroundColor: WhiteColor,
    border: [1, 'solid', BaliHaiColor],
    borderRadius: 4,
    transition: '0.5s',
  },

  sidebar_closed_page: {
    width: 780,
    height: 828,
    backgroundColor: WhiteColor,
    border: [1, 'solid', BaliHaiColor],
    borderRadius: 4,

    '@media (max-width: 768px)': {
      width: '100%',
      transition: '0.5s',
    },
  },
})

const MainPage = (props) => {
  const { sideBarIsOpen } = props

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div
        className={`${
          sideBarIsOpen
            ? classes.sidebar_open_inner
            : classes.sidebar_closed_inner
        }`}
      >
        <div
          className={`${
            sideBarIsOpen
              ? classes.sidebar_open_page
              : classes.sidebar_closed_page
          }`}
        >
          <Switch>{props.children}</Switch>
        </div>
      </div>
    </div>
  )
}

export default MainPage
